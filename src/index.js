import { forEach } from 'lodash';
import './style.scss';
import image from './unnamed.png';

const arr = [0, 1, 8];
const div = document.getElementById('root');

forEach(arr, (item) => {
  const p = document.createElement('p');
  p.textContent = item;
  div.appendChild(p);
});

const img = new Image();
img.src = image;

const div1 = document.createElement('div');
div1.innerHTML = '<div>div!!!</div>';

div.appendChild(div1);
div.appendChild(img);
