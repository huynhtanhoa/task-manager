const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })
// const me = new User({
//     name: 'Steven',
//     age: 'Huynh'
// })
//
// // return method
// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        default: 'Default value'
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        },
        trim: true
    },
    completed: {
        type: Boolean,
        validate(value) {
            if(value < 0){
                throw new Error('Age must be a positive number')
            }
        }
    }
})

const task = new Task({
    description: 'Nothing to lose',
    email: 'huynhtanhoa201@com',
    completed: true
})

task.save().then((task)=>{
    console.log('Success ', task)
}).catch((error) => {
    console.log('Fail ', error)
})