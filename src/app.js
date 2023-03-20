import  express  from "express";
import useCarts from "./routes/carts.router.js"
import useProducts from "./routes/products.router.js"





const app = express ()

app.use (express.json ())
app.use (express.urlencoded({extended:true}))



app.use ('/api/carts',useCarts)
app.use ('/api/products', useProducts)





app.listen (8000,()=>{
    console.log('Servidor arriba');
})