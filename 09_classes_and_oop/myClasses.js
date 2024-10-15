// ES6

class User{
    constructor(username ,email , password){
        this.username =username;
        this.email =email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsename(){
        return `${this.username.toUpperCase()}`
    }
} 

const name = new User("yunika" , "yunika@gmsil.com", "123")

console.log(name.encryptPassword()); 
console.log(name.changeUsename()); 

