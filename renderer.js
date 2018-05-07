import React from 'react';
import ReactDOM from 'react-dom';
import Main from './src/views/Main';

window.onload = function(){
  ReactDOM.render(<Main />, document.getElementById('app'));
}
