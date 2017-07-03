import PropTypes from 'prop-types';
import React from 'react';
import { Motion, spring } from 'react-motion';

class Range extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.element = null;
  }

  onClick(e) {
    this.props.onClick(e.clientX, e.clientY);
    e.stopPropagation();
    e.preventDefault();
  }

  getElement() {
    return this.element;
  }

  render() {
    const className = `ReactMotionSliderInput-Range${this.props.className ? ` ${this.props.className}` : ''}`;
    const top = Math.round(this.props.top);
    const left = Math.round(this.props.left);
    const width = Math.round(this.props.width);
    const height = Math.round(this.props.height);
    return (
      <Motion
        defaultStyle={{ left: 0, top: 0, width: 0, height: 0 }}
        style={{
          left: spring(left, this.props.spring),
          top: spring(top, this.props.spring),
          width: spring(width, this.props.spring),
          height: spring(height, this.props.spring),
        }}
      >
        {value => (
          <span
            ref={(c) => {
              this.element = c;
            }}
            onClick={this.onClick}
            role='button'
            tabIndex={-1}
            style={{
              left: `${value.left}px`,
              top: `${value.top}px`,
              width: `${value.width}px`,
              height: `${value.height}px`,
              position: 'absolute',
              display: 'block',
            }}
            className={className}
          />
        )}
      </Motion>
    );
  }
}
Range.propTypes = {
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  spring: PropTypes.shape({
    stiffness: PropTypes.number,
    damping: PropTypes.number,
    precision: PropTypes.number,
  }).isRequired,
};
export default Range;
