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
  left: React.PropTypes.number.isRequired,
  top: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func.isRequired,
  className: React.PropTypes.string,
  spring: React.PropTypes.shape({
    stiffness: React.PropTypes.number,
    damping: React.PropTypes.number,
    precision: React.PropTypes.number,
  }).isRequired,
};
export default Range;
