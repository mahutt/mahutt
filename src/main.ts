import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Thomas Mahut</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      This portfolio is under construction.
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
