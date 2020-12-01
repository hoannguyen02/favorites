import React from 'react';
import { EVENT_KEYS } from '../../constants';
import HeartIcon from '../HeartIcon';
import './index.scss';

export class AddToFavorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
    };
  }

  handleOnClick = () => {
    const { active } = this.state;
    this.setState({ active: !active });
    const updateCount = new CustomEvent(EVENT_KEYS.UPDATE_COUNT, {
      detail: {
        status: !active, // Need to update when integrate API
      },
    });
    window.dispatchEvent(updateCount);
  };

  render() {
    const { model } = this.props;
    const { active } = this.state;
    return (
      <button
        className={`add-to-heart ${active ? 'active' : ''}`}
        onClick={this.handleOnClick}
      >
        <span className="title">Favorite</span>
        <HeartIcon />
      </button>
    );
  }
}
