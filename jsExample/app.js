//sync code example


/*
const otherFunct = () =>{
    console.log('we are in another function');
    console.log('Do something');
}

console.log('start');


otherFunct();

console.log('End');*/



/*
console.log('start');


setTimeout(()=>{
    console.log('We are in Ghana')

}, 5000)

console.log('End');*/


/*console.log('start');


const listItem = ['milk', 'milo', 'sugar']

listItem.forEach(itemList =>{
    console.log(itemList);

})

console.log('End');*/
/*****************************************************************************************************************************/

/*console.log('start');

function loginUser (email,password, callback){

    setTimeout(()=>{
       console.log("Now we have the data");
       /!* return {userEmail: email}*!/
        callback({userEmail: email});
    }, 3000)
}

function getUserVideo(email, callback) {

    setTimeout(()=>{

        /!*return ["video1", "video2", "video3"]*!/
         callback(["video1", "video2", "video3"]);

    }, 2000)

}

function  videoDetails(video, callback) {

    setTimeout(()=>{

        /!*return ["video1", "video2", "video3"]*!/
        callback('title of the video');

    }, 2000)

}

const user = loginUser("felixackuayi@aol.com", 4564675, (user)=>{

    console.log(user);
    //after getting users details which is the const user above

    getUserVideo(user.userEmail, (videos)=>{
        console.log(videos)
        videoDetails(videos[0], (title)=>{ console.log(title)})
    })



})
/!*console.log(user);*!/
console.log('End');*/

/*Summary of the above loginUser---Simulating how to get data back from a server
* -----------------------------------------------------------------------------
* 1. Simulate how to get a data back from a server
* 2. Create a function called loginUser, and pass arguments (email) and password to it
* 3. set a simulated timer using setTimeout method ,which will take sometime and come back
* 4. pass in an arrow function and inside the curly brackets return the  email.
* 5. set timer on how long it will take to bring back the response
* 6. invoke the function and pass it inside a variable and console log it, whiles you return the email
* 7.At this point the info may not come when you console log it.
* 8.To get it you pass a callback function in your function
* 9.Callback function is a function that will run later on or later time
* 10. in your invoke function , invoke the callback function inside it as part of the values you are passing to the function
* . using (user) =>{}
* 11. have access to that user by passing it in your call back function
* 11.Now go inside your main function and wrap your return value in the callback
*
* OR
* 1. We pass the callback function as an argument
* 2. if set Timer runs we invoke the callback function
* 3. This triggers all other functionality which is the invoked function
* OR
* 1.Maybe after getting the user you may want to do something else
* 2.once you get the user you might want to get his/her videos
* 3. You do so by creating another function
*
* */

/*****************************************************************************************************************************/
/*refactoring the code to something nicer */
console.log('start');

function loginUser(email,password){//
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           console.log("Now we have the data");
           resolve({userEmail: email });
       }, 3000)
   });
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["video1", "video2", "video3"]);
        }, 2000)
    });
}

function  videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('title of the video');

        }, 2000)
    });


}

loginUser('felix','atsu').then(user => {getUserVideos(user)})
    .then(videos => {videoDetails('joy')})
    .then(detail  =>{console.log(detail)})



/*console.log(user);*/
console.log('End');