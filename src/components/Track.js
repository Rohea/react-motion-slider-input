import React from 'react';

class Track extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    console.log("track clicked");
    this.props.onClick(e.pageX, e.pageY);
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
          {this.props.children}
        </div>
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
