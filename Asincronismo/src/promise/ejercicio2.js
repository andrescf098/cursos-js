function delay(time, message) {
    return new Promise((resolve, rejecet) => {
        setTimeout(() => {
            resolve(message)
        },time)
        
    })
}

delay(2000, "Hello after 2s").then((message) => console.log(message))