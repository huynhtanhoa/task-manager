// 1. import Mongo
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

// 2. create URL
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL).then((client) => {

    const db = client.db(databaseName)

    db.collection('users').findOne({name: 'Steven11 Huynh'}).then((user) =>{
        console.log('successful')
        console.log(user)
    }).catch(() => {
        console.log('Unable to access the service')
    })

}).catch((err) => {
    console.log('Failed...', err)
})
