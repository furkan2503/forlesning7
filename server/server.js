import express from "express";
import * as path from "path";

const app = express();

app.use(express.static("../client/dist/"));

//custom middleware
app.use((req, res, next) => {
    if (req.method === 'GET' && !req.path.startsWith("/api")) {
        return res.sendFile(path.resolve("../client/dist/index.html"))
    } else {
        next();
    }
})

const server = app.listen(process.env.PORT || 3000,() => {
    console.log(`Started on http://localhost:${server.address().port}`);
})