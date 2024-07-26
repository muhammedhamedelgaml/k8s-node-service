import express from "express";
import os from 'os';


const app = express();
const port = 3000;
const host = os.hostname();

app.get("/" ,(req ,res)=> {
    const message = `hello world iam pod ${host} `;
    res.send(message);
})

app.listen(port, () => {  
console.log(`webserver is listenting at port ${port}`)
 console.log(host)
})    


