const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const { MongoClient } = require('mongodb');
// const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;
// const mongoUri = 'mongodb://192.168.2.31:27017'; 

app.use(cors());
app.use(express.json());
const productsDbConnection = mongoose.createConnection('mongodb://192.168.2.31:27017/Products', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// 定义数据结构（您也可以将数据结构从其他位置导入）
const filterSchema = new mongoose.Schema({
    title: { type: String, required: true },
    submenus: [
      {
        title: { type: String, required: true },
        items: { type: [String], required: true }
      }
    ]
  });
  const Filter = productsDbConnection.model('sidenavi', filterSchema, 'sidenavi');

  // 函数：从数据结构生成关键词到filter类型的映射
  function generateKeywordMapping(data) {
    
    const keywordMapping = {};
    const filterType = data.title; // "Entertainment Electronics"
    
    data.submenus.forEach(submenu => {
      submenu.items.forEach(item => {
        keywordMapping[item.toLowerCase()] = filterType;
      });
    });
  
    return keywordMapping;
  }
  async function generateAllKeywordMappings() {
    try {
      const filters = await Filter.find({});
      
      const allMappings = {};
  
      filters.forEach((filter) => {
        // 生成每个过滤器的数据映射
        const mapping = generateKeywordMapping(filter);
        allMappings[filter.title.toLowerCase()] = mapping;
      });
  
      return allMappings;
    } catch (error) {
      console.error('Error generating keyword mappings:', error);
    }
  }
  // 导出映射生成函数
  module.exports = generateAllKeywordMappings;
  