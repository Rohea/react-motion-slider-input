import React from 'react';

class Track extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.props.onClick(e.clientX, e.clientY);
  }

  getOuterElement() {
    return this.refs.track;
  }
  getInnerElement() {
    return this.refs.inner;
  }

  render() {
    return (
      <div
        ref='track'
        className='ReactMotionSliderInput-Track'
        onClick={this.onClick}
      >
        <div ref='inner' className='ReactMotionSliderInput-Track-Inner'>
        </div>
        {this.props.children}
      </div>
    );
  }
}
Track.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  orientation: React.PropTypes.string.isRequired,
  handleLength: React.PropTypes.number.isRequired,
};


export default Track;
