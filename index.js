const server = require("./api/server.js");
const dotenv = require("dotenv").config();
const Port = process.env.Port || 9000

server.listen(Port, () => {
    console.log(`Server Running on http://localhost:${Port}`);
})