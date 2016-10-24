var express = require('express');
var multer = require('multer');
var upload = multer();

var app = express();
var port = process.env.PORT || 8080;

app.post('/get-file-size', upload.any(), (req, res, next) => {
    res.json({size: req.files[0].size});
});

app.get('/', (req, res) => {
    res.end(`\
<html>
    <head></head>
    <body>
        <p>Submit a file to view its filesize.</p>
        <form action="/get-file-size" method="post" enctype="multipart/form-data">
            <input type="file" name="file">
            <input type="submit">
        </form>
    </body>
</html>`);
});

app.listen(port, () => {
    console.log("Listening on port " + port);
})