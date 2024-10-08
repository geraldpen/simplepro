const express =  require("express")
const PORT =  7000
const app = express();


app.get
('/', (req, res) =>{
    res.send("how are you doing")
})

app.get('/how', (req, res) =>{
    res.send("how is everything")
})


app.listen(PORT, () =>{
    console.log( `app is runing on port ${PORT}`)
})