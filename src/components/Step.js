import React from 'react';

class Step extends React.Component {
  render() {
    const styles = {
      left: this.props.left+'px',
      top: this.props.top+'px',
      display: (this.props.isVisible) ? 'block' : 'none',
      position: 'absolute',
    }

    const className = 'ReactMotionSliderInput-Step' +
      ((this.props.inRange !== null) ? " ReactMotionSliderInput-in-range ReactMotionSliderInput-in-range-"+this.props.inRange : "") +
      ((this.props.className) ? " "+this.props.className : "");
    return (
      <span ref='span' className={className} style={styles}>
        <span className='ReactMotionSliderInput-Step-Inner'>
        </span>
        <span className='ReactMotionSliderInput-Step-Label'>{this.props.label}</span>
      </span>
    );
  }
}
Step.propTypes = {
  index: React.PropTypes.number.isRequired,
  left: React.PropTypes.number.isRequired,
  top: React.PropTypes.number.isRequired,
  label: React.PropTypes.string,
  isVisible: React.PropTypes.bool,
  inRange: React.PropTypes.number,
  className: React.PropTypes.string,
};
export default Step;
