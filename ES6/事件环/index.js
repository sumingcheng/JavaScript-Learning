document.body.style.backgroundColor = 'orange';
console.log(1)

setTimeout(() => {
  document.body.style.backgroundColor = 'green';
  console.log(2)
}, 100);

Promise.resolve(3).then(num => {
  document.body.style.backgroundColor = 'purple';
  console.log(num);
})

console.log(4);
