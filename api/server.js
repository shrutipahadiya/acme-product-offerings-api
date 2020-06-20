const express  = require('express');
const app = express();
const chalk = require('chalk')
const path = require('path')
const {Company,Product,Offering} = require ('../db/models/index')


const PORT = process.env.port || 3000;

// Logging middleware
app.use((req, res, next) => {
    console.log(chalk.cyan(`Request made to: ${req.path}`));
  
    next();
  });


//app.use(express.static(path.join(__dirname,'./index.html')))

app.use(express.json())

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,'../index.html'))
})

const startServer = () => {
  new Promise((res) => {
    app.listen(PORT, () => {
      console.log(`server is running on PORT ${PORT}`);
      res();
    });
  });
};


app.post('/api/products' , async(req,res) => {
    const {name,suggestedPrice} = req.body;
   // console.log(req.body)
   // console.log("Product ",Product.Product);
    const createdProduct = await Product.create({name,suggestedPrice})
    res.send({
        product:createdProduct,
        message: "Product Created!"
       
    })
})


app.get('/api/products', async (req,res) =>{
   const products = await Product.findAll()
   await res.send({products})
})




app.post('/api/companies' , async(req,res) => {
    const {name} = req.body;
   // console.log(req.body)
   // console.log("Product ",Product.Product);
    const createdCompany = await Company.create({name})
    res.send({
        company:createdCompany,
        message: "Company Created!"
       
    })
})


app.get('/api/companies', async (req,res) =>{
   const companies = await Company.findAll()
   await res.send({companies})
})
















startServer();

module.exports = {app,startServer}
