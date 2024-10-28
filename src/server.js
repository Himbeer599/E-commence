// server.js
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const User = require('./models/User'); // 导入用户模型

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB连接
mongoose.connect('mongodb://localhost:27017/user-auth', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));
// 定义用户模式
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });
  
  // const User = mongoose.model('User', userSchema);


// 注册接口
app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // 哈希密码
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save(); // 存储用户信息到数据库
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(400).json({ error: 'User registration failed.' });
  }
});

// 登录接口
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username }); // 查找用户
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const isPasswordValid = await bcrypt.compare(password, user.password); // 验证密码
    if (!isPasswordValid) return res.status(400).json({ error: 'Invalid credentials' });

    // 创建 JWT 令牌
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret');
    res.status(200).json({ token, user: { username: user.username, email: user.email } });
  } catch (error) {
    res.status(500).json({ error: 'Searver error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
