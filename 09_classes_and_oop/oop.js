// const user ={
//      username: "yunika",
//      loginCount: 8,
//      signedIn: true,

//      getUserDetails: function(){
//       //   console.log("Got user details from database");
//       console.log(this.username);
//       console.log(this);

//      }
// }

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this)/


   // const promiseOne = new Promise()// new is a constructor function  which gives a new instance .Value doesnot overright it .
   // it injects all the argument 
   // now this take all the value 
   //displays all the values by return this. 

         function user(username,logincount ,isloggedin){
            this.username = username;
            this.loginCount = logincount;
            this.isloggedin = isloggedin;

            return this;

         }

         const userOne = new user("yunika",10,true);
         const usertwo = new user("ram",11,false);
         console.log(userOne);
         console.log(usertwo);


         //Protypal behaviour 
         