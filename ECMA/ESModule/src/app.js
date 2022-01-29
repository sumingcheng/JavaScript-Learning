import calculater from "./calculate";
const {
  add,
  minus,
  mul,
  div
} = calculater;
(() => {
  const oNum1 = document.querySelector('#num1'),
    oNum2 = document.querySelector('#num2'),
    oBtnGroup = document.querySelector('.button-grouo'),
    oResult = document.querySelector('#result');

  const init = () => {
    bindEvent();
  }

  function bindEvent() {
    oBtnGroup.addEventListener('click', handleBtnClick, false);
  }

  function handleBtnClick(e) {
    const tar = e.target,
      tagName = tar.tagName.toLowerCase();
    if (tagName === 'button') {
      const type = tar.innerText;
      oResult.innerText = calculate(type);
    }
  }

  function calculate(type) {
    const num1 = Number(oNum1.value),
      num2 = Number(oNum2.value);
    // if (num1.length === 0 || num2.length === 0) {
    //   return;
    // }

    switch (type) {
      case '+':
        return add(num1, num2);
      case '-':
        return minus(num1, num2);
      case '*':
        return mul(num1, num2);
      case '/':
        return div(num1, num2);
      default:
        break;
    }
  }
  init();
})();