const express = require("express");
const app = express();
// const config = require("./config.json")

// const { dockStart} = require('@nlpjs/basic')

const module1Route = require("./chatBot-1/Module1/module1.router")
app.use(express.json({
    limit: '110mb',
    extended: true,
}));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use('/', module1Route);


app.listen(3000, () => {
    console.log(
        `App is running at port ${3000}`
    );
})
