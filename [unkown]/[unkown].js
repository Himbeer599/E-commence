const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;
// const mongoUri = 'mongodb://localhost:27017'; 

app.use(cors());
app.use(express.json());

// const client = new MongoClient(mongoUri);
// let db1, db2;

const usersDbConnection = mongoose.createConnection('mongodb://localhost:27017/users', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const productsDbConnection = mongoose.createConnection('mongodb://localhost:27017/Products', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = usersDbConnection.model('User', UserSchema);

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
});

const SideNavi = productsDbConnection.model('sidenavi', ProductSchema, 'sidenavi'); // 使用 Products 数据库的连接
const Bestseller = productsDbConnection.model('Bestseller', ProductSchema, 'Bestseller'); // 使用 Products 数据库的连接

async function findUserInDatabase(username, email) {
    try {
        const usersCollection = db.collection('users'); // 替换为你在 MongoDB 中的用户集合名称
        const user = await usersCollection.findOne({
            $or: [{ username: username }, { email: email }]
        });
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
        const usersCollection = db.collection('users');
        await usersCollection.insertOne(newUser);
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
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    try {
        const user = await findUserInDatabase(username);
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        const isMatch = await bcrypt.compare(password, user.hashedPassword);
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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


