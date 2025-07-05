import app from "./app.js";

app.listen(process.env.PORT, ()=>{
    console.log(`SERVER HAS Running AT PORT ${process.env.PORT}`);
})
