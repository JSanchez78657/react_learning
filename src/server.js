const express = require('express')
const app = express()
const port = 3002
const axios = require('axios').create({baseURL:'https://jsonplaceholder.typicode.com/'})

// const server = http.createServer(function(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     fs.readFile('index.html', function(error, data) {
//         if(error) {
//             res.writeHead(404)
//             res.write('Error: File not found')
//         } else {
//             res.write(data)
//         }
//         res.end()
//     })
// })

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.get("/promise", (req, res) => {
    axios({
        url: "users",
        method: "get",
    })
        .then(response => {
            res.status(200).json(response.data)
        })
        .catch((err) => {
            res.status(500).json({ message: err })
        })
})

app.get("/promise/post", (req, res) => {
    axios.post("posts", {
        title: "Foo",
        body: "bar",
        userID: 1
    })
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch((err) => {
            res.status(500).json({ message: err });
        });
});

app.get("/promise/put", (req, res) => {
    axios.put("posts/1" , {
        title: "Foo",
        body: "bar",
        userID: 1,
        id: 101
    })
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch((err) => {
            res.status(500).json({ message: err });
        });
});

app.get("/promise/delete", (req, res) => {
    axios.put("posts/1", {
        id: 101
    })
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch((err) => {
            res.status(500).json({ message: err });
        });
});

app.listen(port, () => {
    console.log('Started server at port 3002')
})

process.on('uncaughtException', function (err) {
    console.log(err)
})