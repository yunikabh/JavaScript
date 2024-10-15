const promiseOne = new Promise(function(resolve,reject){
  //DO ASYNC TASK
  //DB CALLS ,CRYPTOGRAPHY,NETWORK
        setTimeout(function(){
            console.log("async task is completeed")
            resolve();
        },2000 )
})

    promiseOne.then(function(){
        console.log("promise is consumed ")
    })

    new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("async task 2");
            resolve();
        },2000)
    }).then(function(){
        console.log("async 2 resolved");
    })


    const promiseThree = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({username: "Yunika" ,email :"yunika@example.com"})
        },2000)       
    })

    promiseThree.then(function(user){
        console.log(user);

    })


        const promiseFour = new Promise(function(resolve,reject){
            setTimeout(function(){
                let error=false;
                if(!error){
                    resolve({username:"yunika", password:"123"})
                }
                else{
                    reject("Something went wrong");
                }
            },2000)
        })

        promiseFour.then(function(user){
            console.log(user)
            return user.username
        }).then((username) => {
            console.log(username);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            console.log("the promise is either resolved or rejected");
        })
        //perfect method 


        const promiseFive = new Promise(function(resolve,reject){
            setTimeout(function(){
                let error=true;
                if(!error){
                    resolve({username:"javascript" , password: "123"})
                }
                else{
                    reject("Error:js went wrong");
                }
            },2000)


        })

        async function consumePromiseFive(){
          try {
            const response = await promiseFive
        console.log(response);  
        } catch (error) {
            console.log(error);
          }
        }
        consumePromiseFive()

        // async function getAllUsers(){
        // try {
        //     const response = await  fetch('https://jsonplaceholder.typicode.com/users') //api url
        //     const data = await response.json()
        //     console.log(data);
        // } catch (error) {
        //     console.log("E:",error)
        // }
        // }
        // getAllUsers();

        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error)
        })
        
