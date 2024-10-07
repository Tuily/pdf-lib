import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';
import { generatePdf } from './generatePdf.js';

document.querySelector('#app').innerHTML = `
  <div>
    



    


    <hr/>
    <div class="card">
      <button id="generate-pdf-button" type="button">generate pdf</button>
      <iframe id="pdf" style="width: 100%; height: 100%;"></iframe>
    </div>
    
  </div>
`;

const buttonEl = document.getElementById('generate-pdf-button');
buttonEl.addEventListener('click', generatePdf);
