
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import userRoute from "./routes/usersRoute.js";
const app = express();


app.use(bodyParser.json());
app.use(cors());

app.use('/',userRoute);


app.get('/', (req, res) =>{
    res.send("Hello MERN CURD coding!");
})

app.all("*", (req, res) =>{
    res.send("That routes dosen't exist!");
})

const port = 5000;
app.listen(port, ()=>{
    console.log(`Server Running on PORT @${port}`);
});

