const http = require("http");

const server = http.createServer((req, rest) => {
    if (req.url === "/"){
        res.send("<h1>Hello, World</h1>");
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));