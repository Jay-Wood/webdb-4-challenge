const server = require("./api/server.js");

const PORT = process.env.PORT || 5678;

server.listen(PORT, () => {
    console.log(`Server listening to your every word on port ${PORT}`);
})

