const app = require('./app')
const request = require('supertest')
const { Test } = require('supertest')


beforeAll(()=>{

console.log("Before very test")


})

afterAll(()=>{

console.log("after Each test")

})
describe('Testing the  Product functionality',()=>{


test('testing the prouducts method', async ()=>{

 await request(app).get('/products').expect(200).then((response)=>{


    expect(response.body.length).toBe(3)
 })
 

})


test('testing for the product by id', async ()=>{

await request(app).get('/product/2').expect(200).then((response)=>{


 expect(response.body.name).toBe("tv")
})


})



})


describe('Testing the joke api',()=>{

test("checking for random joke",async()=>{

let data1 = await request(app).get('/joke')
let data2 = await request(app).get('/joke')
let data1j = JSON.parse(data1.text)
let data2j = JSON.parse(data2.text)

expect(data1j === data2j).toBeFalsy()


})


})