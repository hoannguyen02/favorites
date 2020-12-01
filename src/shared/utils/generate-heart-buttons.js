import React, { render } from 'react';
import { AddToFavorites } from '../components';

export { generateHeartItem };
function generateHeartItem(item, model) {
  render(<AddToFavorites model={model} />, item);
}
