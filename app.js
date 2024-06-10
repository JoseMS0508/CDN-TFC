import express  from "express";
import router from "./routes/routes.js";
import cors from "cors";
const APP = express();
const PORT = 3000;
APP.use(cors());
APP.use(express.json({ limit: '50mb' }))
APP.use(express.urlencoded({ limit: '50mb', extended: true }));
APP.use(router);
APP.listen(PORT, ()=>{
    console.log('APP INICIADA EN http://localhost:'+PORT);
});