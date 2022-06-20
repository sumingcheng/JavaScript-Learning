; (() => {
  const myTarget = new Target({
    username: "sumingcheng",
    password: '123123',
    age: '18',
    gender: "male"
  });

  const init = () => {
    myTarget.username;
    myTarget.age = '35';
  }

  init();
})();