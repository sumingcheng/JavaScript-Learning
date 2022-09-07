// function* generator() {
//   yield '来小亮';
//   yield '给大家整个活'
//   yield '后空翻'
//   yield '杀马特团长你给我等着'
// }

const iterator = generator(
    ['来小亮',
      '给大家整个活',
      '后空翻',
      '杀马特团长你给我等着']
);

let res;

res = iterator.next();
console.log(res);

res = iterator.next();
console.log(res);

res = iterator.next();
console.log(res);

res = iterator.next();
console.log(res);

res = iterator.next();
console.log(res);

