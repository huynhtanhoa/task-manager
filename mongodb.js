// 1. import Mongo
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

// 2. create URL
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL).then((client) => {

    const db = client.db(databaseName)

    // update One recrod
    const updatePromises = db.collection('users').updateOne(
        {name: 'Stev12312en Huynh'},
        {$set: {name: 'Steven123 Huynh'}}
    )

    updatePromises.then((result) => {
        console.log('update successful!', result)
    }).catch((error) => {
        console.log('Failed to update', error)
    })

}).catch((err) => {
    console.log('Failed...', err)
})
