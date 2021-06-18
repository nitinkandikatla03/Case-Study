const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()


//middleware
app.use(cookieParser())
app.use(bodyParser.json())

const connection = 'mongodb+srv://nitinkandikatla:nitin@cluster.qotlb.mongodb.net/Flight-Booking?retryWrites=true&w=majority'
const connector = mongoose.connect(connection,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
mongoose.connection.on('connected', () => {
    console.log("Connected to database")
})
.then( (data) => {
    var port = 8040
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
})


//routes

app.use(routes)
