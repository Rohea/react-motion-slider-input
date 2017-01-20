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
  onClick: React.PropTypes.func.isRequired,
  orientation: React.PropTypes.string.isRequired,
  handleLength: React.PropTypes.number.isRequired,
  children: React.PropTypes.node,
};


export default Track;
