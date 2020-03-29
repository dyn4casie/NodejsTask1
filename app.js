const http = require("http");
const path = require("path");
const fs = require("fs");
const url = require("url");



const server = http.createServer(function(req, res) {
    var body = "";


    if (req.url == "/") {
        fs.readFile(path.join(__dirname, "form.html"), (err, data) => {
            if (err) throw err;
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            req.on("end", () => {
                fs.appendFileSync("./message.txt", JSON.stringify(body), (err) => {
                    console.log(err);
                });
            });
            req.on("data", function(chunk) {
                body += chunk;
            });
            res.end(data);
        });
    }

});



const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log(`server running on port ${port}`);
});