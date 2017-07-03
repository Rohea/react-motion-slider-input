import PropTypes from 'prop-types';
import React from 'react';

class Track extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.element = null;
  }

  onClick(e) {
    this.props.onClick(e.clientX, e.clientY);
  }

  getElement() {
    return this.element;
  }

  render() {
    return (
      <div
        className='ReactMotionSliderInput-Track'
        onClick={this.onClick}
      >
        <div
          ref={(c) => { this.element = c; }}
          className='ReactMotionSliderInput-Track-Inner'
        />
        {this.props.children}
      </div>
    );
  }
}
Track.propTypes = {
  onClick: PropTypes.func.isRequired,
  orientation: PropTypes.string.isRequired,
  handleLength: PropTypes.number.isRequired,
  children: PropTypes.node,
};


export default Track;
