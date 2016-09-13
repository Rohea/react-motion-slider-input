import React from 'react';
import { Motion, spring } from 'react-motion';

class Range extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    console.log("range clicked");
    console.log(e.pageX);
    this.props.onClick(e.pageX, e.pageY);
  }

  render() {
    const className = 'ReactMotionSliderInput-Range' + ((this.props.className) ? ' ' + this.props.className : '');
    return (
      <Motion
        ref='motion'
        defaultStyle={{ left: 0, top: 0, width: 0, height: 0 }}
        style={{
          left: spring(this.props.left, this.props.spring),
          top: spring(this.props.top, this.props.spring),
          width: spring(this.props.width, this.props.spring),
          height: spring(this.props.height, this.props.spring),
        }}
      >
        {value =>
          <span
            ref='span'
            onClick={this.onClick}
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
        }
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
