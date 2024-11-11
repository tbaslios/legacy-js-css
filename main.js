import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the <a href="#">Vite logo</a> to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
  let isBig = false;
  let num = 100;
  console.log(isBig, num);
  num = 8_675_309;
  console.log(isBig, num);
  isBig ||= num > 999;
  console.log(isBig, num);
