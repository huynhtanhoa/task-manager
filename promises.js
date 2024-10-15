const doWorkPromises = new Promises((resolve, reject) => {
    setTimeout(() => {
        resolve([7,1,4])
        // reject("This is an error")
    }, 2000)
})

doWorkPromises.then((result) => {
    console.log('Success', result)
}).catch((error) => {
    console.log('Error', error)
})