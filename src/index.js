import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import printMe from './print.js';

function component() {
  console.log(Data);
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
   var btn = document.createElement('button');
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   btn.innerHTML = '点击这里，查看 console！';
   btn.onclick = printMe;
   element.appendChild(btn);
   element.classList.add('hello');

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

let element = component(); // 存储 element，以在 print.js 修改时重新渲染
document.body.appendChild(element); //

  if (module.hot) {
    module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     document.body.removeChild(element);
     element = component(); // Re-render the "component" to update the click handler
     element = component(); // 重新渲染 "component"，以便更新 click 事件处理函数
     document.body.appendChild(element);
    })
  }