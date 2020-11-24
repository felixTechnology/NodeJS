/*A promise is just an object that basically gives us back either a result of an asynchronous operation
or a failure of an asychornous operation
* */

/*creating of promise - RESOLVE*/
/*
const promise = new Promise((resolve, reject)=>{

    //simulate to get a data back from an API or server ...this how to create a Promise
    setTimeout(()=>{
        console.log('got the user')
        //if the data is back we run resolve
       resolve({user: 'felix'});

    }, 2000)

})

/!*Below is how to consume the Promise*!/

promise.then(user =>{

    console.log(user)
})*/
/**************************************************************************************************************************/

const promise = new Promise((resolve, reject)=>{

    //simulate to get a data back from an API or server ...this how to create a Promise
    setTimeout(()=>{
        console.log('got the user')
        //if the data is back we run resolve
       reject(new Error('user not logged In'))

    }, 2000)

})

/*Below is how to consume the Promise*/

promise.then(user =>{

    console.log(user)
}).catch((err) =>{console.log(err)})