const express = require('express');
const app = express();

// Các sản phẩm trong cơ sở dữ liệu
const products = [
    { id: 1, name: 'Áo thun', price: '500000'}, 
    { id: 2, name: 'Quần jeans', price: '600000'},
    { id: 3, name: 'Giày sneaker', price: '900000'}
  ];
// Middleware để phân tích các yêu cầu có nội dung JSON
app.use(express.json());

// products chứa danh sách sản phẩm từ file JSON

app.get('/search', (req, res) => {  
    const query = req.query.query;   
    const results = products.filter(product => {    
      return product.name.includes(query); 
    });  
    res.json(results);
  }); 
const fs = require('fs');

// Đường dẫn đến tệp JSON chứa danh sách sản phẩm
const productsFilePath = 'path/to/products.json';

// Đọc dữ liệu từ tệp JSON

try {
    const productsData = fs.readFileSync('products.json', 'utf8');
    const products = JSON.parse(productsData); 
  } catch (err) {
    console.log(err);
  }
// Khởi động server
app.listen(3000, () => {
  console.log('Server đang lắng nghe tại cổng 3000...');
});
