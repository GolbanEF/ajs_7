export default class Validator {
    constructor(username) {
      this.username = username;
    }
  
    validateUsername() {
      const rePositive = /^[a-z][\w-]*[a-z]$/i;
      const reNegative = /\d{3,}/;
      const message = !rePositive.test(this.username.trim()) ? 'username not valid' :
        reNegative.test(this.username.trim()) ? 'username not valid' : 'ok';
  
      return message;
    }
  }