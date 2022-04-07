class User {
    constructor(id, userName, pswd) {
      this.userId = id;
      this.userName = userName;
      this.setUserPassword(pswd);
    }
    //get methods
    getUserId() {
      return this.userId;
    }
    getUserName() {
      return this.userName;
    }
    getUserPassword() {
      return this.userPassword;
    }
    //set methods
    setUserId(id) {
      this.userId = id;
    }
    setUserName(userName) {
      this.userName = userName;
    }
    setUserPassword(pswd) {
      if(this.validPassword(pswd)) {
        this.userPassword = pswd;
      } else {
        console.log("Password must contain 1 upper case letter, 1 digit, and a minimum of at least 6 characters"); 
      }
    }
    //valid password method
    validPassword(pswd) {
      if(pswd.length >= 6) {
        let upper = 0;
        let numbers = 0;
        let symbols = 0;
        
        for(let i = 0; i<pswd.length; i++) {
          if(this.isDigit(pswd[i])) {
            numbers++;
          } 
          else if(this.isUpperCase(pswd[i])) {
            upper++;
          }
        }
  
        if(upper >= 1 && numbers >= 1) {
          return true;
        }
      }
      return false;
    }
    //return char -> letter
    isUpperCase(char) {
      return (/[A-Z]/).test(char)
    }
    //return char -> digit
    isDigit(char) {
      return (/[1-9]/).test(char)
    }
    //return if char is letter od digit
    isLetterOrDigit(char) {
      return ((/[a-zA-Z]/).test(char) || (/[1-9]/).test(char))
    }
  }

  
  let user1 = new User(12345, "jesus777", "Takethewheel777");
  console.log(user1);

  let user2 = new User(15555, "john42", "Arrow1dsadas32");
  console.log(user2);
