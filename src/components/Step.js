import PropTypes from 'prop-types';
import React from 'react';

class Step extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.element = null;
  }

  onClick(e) {
    this.props.onClick(this.props.index);
    e.stopPropagation();
    e.preventDefault();
  }

  getElement() {
    return this.element;
  }

  render() {
    const styles = {
      left: `${this.props.left}px`,
      top: `${this.props.top}px`,
      // display: (this.props.isVisible) ? 'block' : 'none',
      position: 'absolute',
    };

    const className = 'ReactMotionSliderInput-Step' +
      ((this.props.inRange !== null) ? ' ReactMotionSliderInput-in-range ReactMotionSliderInput-in-range-' + this.props.inRange : '') +
      ((this.props.className) ? ' ' + this.props.className : '');
    return (
      <a ref={(c) => { this.element = c; }} tabIndex={-1} className={className} style={styles} onClick={this.onClick}>
        <span className='ReactMotionSliderInput-Step-Inner' />
        <span className='ReactMotionSliderInput-Step-Label'>{this.props.label}</span>
      </a>
    );
  }
}
Step.propTypes = {
  index: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string,
  inRange: PropTypes.number,
  className: PropTypes.string,
};
export default Step;
