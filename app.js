const express = require('express')
const app = express()
const https = require("https")



function products(){

return [

 {id:1,name:"mobile",cost:"200"},
 {id:2,name:"tv",cost:"300"},
 {id:3,name:"washingmachine",cost:"100"}


]


}


app.get('/',(req,res)=>{

res.send("Hello from api")

})

app.get('/products',(req,res)=>{


    res.send(products())
})

app.get('/product/:id',(req,res)=>{

  let id  = req.params.id
  let productsData  = products()
  let product = productsData.find(temp => temp.id ==id)   
  res.send(product)

})




app.get('/joke',(req,res)=>{

const api = "https://api.chucknorris.io/jokes/random"
https.get(api,(response)=>{

let result = '';
response.on('data',(chunk)=>{

 result+=chunk

})

response.on('end',()=>{

    res.send(result)
})




})


})


app.listen(3000,()=>{

console.log("app is running in port 3000")

})

module.exports = app