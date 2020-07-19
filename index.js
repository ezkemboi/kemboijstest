const Server = require('kemboijs')

const app = new Server()

const users = [
    {
        name: "kipmurkor",
        password: "password"
    },
    {
        name: "kemboi",
        password: "password"
    },
    {
        name: "evans",
        password: "password"
    }
]

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if(!username || !password) {
        return res.send({
            message: 'Provide username and password'
        }, 400)
    }

    const user = users.find(user => user.name === username);

    if(!user) {
        return res.send({
            message: "User does not exist"
        }, 400)
    }

    if(user.password !== password) {
        return res.send({
            message: "Password does not match"
        }, 400)
    }
    
    return res.send({
        message: "logged in successfully"
    }, 200)
})

app.listen(8000, () => {
    console.log(`I am listening to http://localhost:8000`)
})
