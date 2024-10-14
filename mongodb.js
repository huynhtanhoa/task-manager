// 1. import Mongo
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

// 2. create URL
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL).then((client) => {

    const db = client.db(databaseName)

    const ops = db.collection('users').insertOne({
        name: 'Steven11 Huynh',
        age: 30
    })

}).catch((err) => {
    console.log('Failed...', err)
})
