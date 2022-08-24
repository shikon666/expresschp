const express = require('express')

const app = express()

const port = 5000


var users = [
    {name : 'Iskander', age : 100, id : 1},
    {name : 'Feriel', age : 6, id : 2},
    {name :'Mahmoud', age : 28, id : 3}
]

app.use(express.json())

app.get('/readUsers',(req,res)=>{
    res.send(users)
})

app.post('/createUser',(req,res)=>{
    users = [...users,req.body]
    res.send(users)
})

app.delete('/deleteUser/:id',(req,res)=>{
    // console.log(req.params)
    const {id} = req.params
    users = users.filter(user => user.id != id)
    res.send(users)
})

app.put('/updateUser/:id',(req,res)=>{
    const {id} = req.params
    users = users.map(user=> user.id == id ? {...user,...req.body} :user )
    res.send(users)

})











app.listen(port,console.log(`Server is running on the port ${port}`))