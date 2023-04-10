class User {
  say() {
    function test() {
      console.log(this)
    }
    
    test()
  }
}

const user = new User()
user.say()

/*
* class默认开启严格模式，所以this指向undefined
* */
