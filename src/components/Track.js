import React from 'react';

class Track extends React.Component {

  onClick(e) {
    this.props.onClick(e.pageX, e.pageY);
  }

  render() {
    return (
      <div
        ref='track-div'
        className='ReactMotionSliderInput-Track'
        onClick={this.onClick.bind(this)}
        style={{
          position: 'absolute',
        }}
      >
        <div className='ReactMotionSliderInput-Track-Inner'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
Track.propTypes = {
  onClick: React.PropTypes.func.isRequired,
};


export default Track;
