import React, { render } from 'react';
import App from './App';
import { ELEMENT_ID } from './shared/constants';
import { generateHeartItem } from './shared/utils';

// Generate add to favorites button
Array.prototype.slice
  .call(document.querySelectorAll(`[id^=${ELEMENT_ID.ADD_TO}]`))
  .forEach(function (item) {
    var dataModel = JSON.parse(item.getAttribute('data-model'));
    generateHeartItem(item, dataModel);
  });

// Generate favorites count
const root = document.getElementById(ELEMENT_ID.COUNT);
root && render(<App />, root);
