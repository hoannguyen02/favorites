import React from 'react';
import { EVENT_KEYS } from './shared/constants';
import './App.scss';
import HeartIconCount from './shared/components/HeartIconCount';

export class App extends React.Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    window.addEventListener(EVENT_KEYS.UPDATE_COUNT, this.updateCount);
  }

  updateCount = ({ detail }) => {
    const { status } = detail;
    const { count } = this.state;
    this.setState({ count: status ? count + 1 : count - 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <span className="favorites-count-main" style={{ textAlign: 'center' }}>
        <span className="favorites-count">
          <HeartIconCount />
          {count > 0 && <b>{count}</b>}
        </span>
        <span className="favorites-title">Favorites</span>
      </span>
    );
  }
}

export default App;
