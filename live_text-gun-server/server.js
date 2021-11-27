const Gun = require("gun");
const app = require('express')()

app.use(Gun.serve);

const server = app.listen(3400);

Gun({  web: server,  file: "db" });
