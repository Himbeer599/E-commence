const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt'); 
// const { MongoClient } = require('mongodb');
// const bodyParser = require('body-parser');
// const generateAllKeywordMappings = require ('./keywordmapping')


const app = express();
const PORT = process.env.PORT || 5000;
// const mongoUri = 'mongodb://192.168.2.31:27017'; 

app.use(cors());
app.use(express.json());

// const client = new MongoClient(mongoUri);
// let db1, db2;

const usersDbConnection = mongoose.createConnection('mongodb://192.168.2.31:27017/users_register_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const sellerDbConnection = mongoose.createConnection('mongodb://192.168.2.31:27017/seller', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const productsDbConnection = mongoose.createConnection('mongodb://192.168.2.31:27017/Products', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = usersDbConnection.model('users', UserSchema, 'users');

const menuSchema = new mongoose.Schema({
    section: String,
    features: [String]
});
const  menus = sellerDbConnection.model('menus',menuSchema, 'menus');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: {type: String, required: true},
    price: { type: Number, required: true },
    brand: {type: String, required: true},
    cleaningType: {type: String, required: true},
    energyEfficiency: { type: String, required: true },
    countryOfManufacture: { type: String, required: true },
    productType: { type: String, required: true },
    color: { type: String, required: true },
    feature: { type: String, required: true },
});

const ProductOtherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    brand:{type: String, required: true},
    size:{type: String, required: true},
});

const SideNavi = productsDbConnection.model('sidenavi', ProductOtherSchema, 'sidenavi'); // 使用 Products 数据库的连接
const Bestseller = productsDbConnection.model('Bestseller', ProductOtherSchema, 'Bestseller'); // 使用 Products 数据库的连接
const ProductsList = productsDbConnection.model('productslist', ProductSchema, 'productslist');
// const Login = productsDbConnection.model('users_register_database', UserSchema, 'users_register_database');

// 添加name
const updateProductNames = async () => {
    try {
      const products = await ProductsList.find({});
      products.forEach(async (product) => {
        let name = `${product.category} ${product.brand} ${product.productType}${product.cleaningType}${product.feature}`;
        if (product.color) {
          name += ` ${product.color}`;
        }
        // 更新产品的 name 字段
        await ProductsList.updateOne(
          { _id: product._id },
          { $set: { name: name } }
        );
        console.log('Updated product:', product._id);
      });
    } catch (error) {
      console.error('Error updating products:', error);
    }
  };
  // 假设使用 setInterval，每天更新一次
  setInterval(updateProductNames, 60 * 60* 1000*24);

async function findUserInDatabase(username, email) {
    try {
        // const usersCollection = db.collection('users'); 
        console.log('findUserInDatabase:', username, email);
        const user = await User.findOne({
            $or: [{ username: username }, { email: email }]
        });
        // const user = await User.find();
        console.log('user:', user);
        return user;
    } catch (error) {
        console.error('Error finding user in database:', error);
        throw new Error('Database query failed');
    }
}

async function createUserInDatabase(username, email, password) {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = { username, email, hashedPassword };
        // const usersCollection = db.collection('users');
        await User.insertOne(newUser);
        return newUser;
    } catch (error) {
        console.error('Error inserting user into database:', error);
        throw new Error('Database insert failed');
    }
}

app.post('/api/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Username, email, and password are required.' });
    }
    try {
        const existingUser = await findUserInDatabase(username, email);
        if (existingUser) {
            return res.status(409).json({ message: 'Username or email already exists.' });
        }

        const newUser = await createUserInDatabase(username, email, password);
        res.status(201).json({ message: 'User registered successfully!', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user.', error });
    }
});

app.post('/api/login', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Username email and password are required.' });
    }

    try {
        const user = await findUserInDatabase(username, email);
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials1.' });
        }

        console.log("password", password);
        console.log("user.password", user.password);
        const isMatch = await bcrypt.compare(password, user.password);
        console.log("ismatch", isMatch);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        res.status(200).json({ message: 'Login successful!', user: { username: user.username, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in.', error });
    }
});

app.get('/api/products/sidenavi', async (req, res) => {
    try {
        const sidenaviProducts = await SideNavi.find();
        res.status(200).json(sidenaviProducts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching sidenavi products.', error });
    }
});

app.get('/api/products/bestseller', async (req, res) => {
    try {
        const bestsellerProducts = await Bestseller.find();
        res.status(200).json(bestsellerProducts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bestseller products.', error });
    }
});

//下面三个filter先全部写死，随后再实现根据searchterm在filtereddata里面把类型全部拿出来，生成为filter
// const filter1 = {
//     category: 'Entertainment Electronics',
//     priceRange: [100, 1000],
//     brand: ['Sony', 'Samsung', 'LG']
//   };
  
//   const filter2 = {
//     category: 'Kitchen Electronics',
//     priceRange: [50, 500],
//     brand: ['Ninja', 'KitchenAid', 'Cuisinart']
//   };
  
//   const filter3 = {
//     category: 'Cleaning and Home Care Electronics',
//     priceRange: [20, 200],
//     brand: ['Dyson', 'Bissell', 'Shark']
//   };

const filter1 = [
    {filtername: 'priceRange', type:'range', min: 0, max: 10000, default:0},
    {filtername: 'brand', type:'checkbox', options:['Sony', 'Samsung', 'LG']},
];
  
const filter2 = [
    {filtername: 'priceRange', type:'range', min: 0, max: 2000, default:0},
    {filtername: 'brand', type:'checkbox', options:['Ninja', 'KitchenAid', 'Cuisinart']},
];
const filter3 = [
    {filtername: 'priceRange', type:'range', min: 0, max: 1000, default:0},
    {filtername: 'brand', type:'checkbox', options:['Dyson', 'Bissell', 'Shark']},
];

app.get('/api/products', async (req, res) => {
    try {
        const { search } = req.query;
        const query = search ? {
            $or: [
                { brand: { $regex: search, $options: 'i' } },
                { productType: { $regex: search, $options: 'i' } },
                { name: { $regex: search, $options: 'i' } }
            ]
        } : {};

        const products = await ProductsList.find(query);
        res.status(200).json(products);
    } catch (error) {
        console.error('Error searching products:', error);
        res.status(500).json({ message: 'Error searching products', error });
    }
});

app.get('/api/products/filter', async (req, res) => {
        console.log('Received request for filter');
        const searchTerm = req.query.search ? req.query.search.toLowerCase() : '';
        console.log('search in filter:',searchTerm);
        let filter = null;
        try{
            // let filter = null;
            if (searchTerm.includes('entertainment electronics')) {
                filter = filter1; // Entertainment Electronics
            } else if (searchTerm.includes('kitchen electronics')) {
                filter = filter2; // Kitchen Electronics
            } else if (searchTerm.includes('cleaning and home care electronics')) {
                filter = filter3; // Cleaning and Home Care Electronics
            }
            console.log('filter response in back:',filter)
            const filters = [
                { category: filter.category },
                { priceRange: filter.priceRange },
                { brand: filter.brand }
              ];
            console.log('filter response after conversion:',filters)

            if (filter) {
                res.status(200).json(filter);
            }
        }catch (error) {
            console.log("999999")
            res.status(500).json({ message: 'Error fetching filters.', error });
        }
});

//下面映射函数思路有问题，应该是：根据前面的searchTerm，去数据库中寻找，根据拿到的filtereddata数据结构，将里面的brand,color等全部转化为filterType，传给前端
// app.get('/api/filter', async (req, res) => {
//     console.log('Received request for filter');
//     const searchTerm = req.query.search ? req.query.search.toLowerCase() : '';
//     console.log('search in filter:',searchTerm);
//     try{
//     const keywordToFilterMapping = await generateAllKeywordMappings(searchTerm);
//     console.log('yingshe:',keywordToFilterMapping);
//     const filterType = keywordToFilterMapping[searchTerm];
    
//     if (filterType) {
//       res.json({ filterType, message: `Found filter type for ${searchTerm}` });
//     } else {
//       res.status(404).json({ message: `No filter type found for ${searchTerm}` });
//     }
//     }catch (error) {
//         console.error('Error fetching filter type:', error);
//         res.status(500).json({ message: 'Error fetching filter type', error });
//       }
//     });

app.get('/api/seller/menus', async (req, res) => {
    try {
        const menusSellers = await menus.find();
        console.log(menusSellers)
        res.status(200).json(menusSellers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching menus sellers.', error });
    }
});

// 为每个数据库连接添加监听器
[usersDbConnection, sellerDbConnection, productsDbConnection].forEach((connection, index) => {
  const dbNames = ['users_register_database', 'seller', 'Products'];
  
  connection.on('connected', () => {
    console.log(`Successfully connected to ${dbNames[index]} database`);
  });

  connection.on('error', (err) => {
    console.error(`Error connecting to ${dbNames[index]} database:`, err);
  });

  connection.on('disconnected', () => {
    console.log(`Disconnected from ${dbNames[index]} database`);
  });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// 获取分页产品列表
app.get('/api/products/productslist', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;
        const skip = (page - 1) * pageSize;

        // 获取总数量
        const total = await ProductsList.countDocuments();
        
        // 获取分页数据
        const products = await ProductsList.find()
            .skip(skip)
            .limit(pageSize);

        res.status(200).json({
            products,
            pagination: {
                total,
                page,
                pageSize,
                totalPages: Math.ceil(total / pageSize)
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products list', error });
    }
});

// 获取产品类型的 API 端点
app.get('/api/products/types', async (req, res) => {
    try {
        const types = await ProductsList.distinct('productType');
        res.status(200).json(types);
    } catch (error) {
        res.status(500).json({ 
            message: '获取产品类型失败', 
            error: error.message 
        });
    }
});

// 获取产品价格范围
app.get('/api/products/price-range', async (req, res) => {
    try {
        const priceStats = await ProductsList.aggregate([
            {
                $group: {
                    _id: null,
                    minPrice: { $min: "$price" },
                    maxPrice: { $max: "$price" }
                }
            }
        ]);

        if (priceStats.length > 0) {
            res.status(200).json({
                min: Math.floor(priceStats[0].minPrice), // 向下取整
                max: Math.ceil(priceStats[0].maxPrice)   // 向上取整
            });
        } else {
            res.status(200).json({ min: 0, max: 0 });
        }
    } catch (error) {
        console.error('Error fetching price range:', error);
        res.status(500).json({ message: 'Error fetching price range', error });
    }
});


