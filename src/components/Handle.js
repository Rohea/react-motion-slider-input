import PropTypes from 'prop-types';
import React from 'react';
import { Motion, spring } from 'react-motion';

class Handle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isDragging: false,
      deltaX: 0,
      deltaY: 0,
    };
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onTouchCancel = this.onTouchCancel.bind(this);
    this.inner = null; // ref
    this.button = null; // ref
  }

  /* global document:false */
  componentDidUpdate(newProps, newState) {
    if (this.state.isDragging && !newState.isDragging) {
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('mouseup', this.onMouseUp);
    } else if (!this.state.isDragging && newState.isDragging) {
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('mouseup', this.onMouseUp);
    }
  }

  onMouseDown(e) {
    // only left mouse button
    if (e.button !== 0) return;
    const rect = this.button.getBoundingClientRect();
    const deltaX = e.clientX - rect.left;
    const deltaY = e.clientY - rect.top;
    this.setState({
      isDragging: true,
      deltaX,
      deltaY,
    });
    e.stopPropagation();
    e.preventDefault();
    this.props.onCatch(this.props.index, e.clientX, e.clientY, deltaX, deltaY);
  }

  onMouseMove(e) {
    if (!this.state.isDragging) return;
    e.stopPropagation();
    e.preventDefault();
    this.props.onMove(this.props.index, e.clientX, e.clientY, this.state.deltaX, this.state.deltaY);
  }

  onMouseUp(e) {
    this.setState({ isDragging: false });
    e.stopPropagation();
    e.preventDefault();
    this.props.onRelease(this.props.index);
  }

  onTouchStart(e) {
    const rect = this.button.getBoundingClientRect();
    const deltaX = e.touches[0].clientX - rect.left;
    const deltaY = e.touches[0].clientY - rect.top;
    this.setState({
      isDragging: true,
      deltaX,
      deltaY,
    });
    e.stopPropagation();
    e.preventDefault();
    this.props.onCatch(this.props.index, e.touches[0].clientX, e.touches[0].clientY, deltaX, deltaY);
  }

  onTouchMove(e) {
    if (!this.state.isDragging) return;
    e.stopPropagation();
    e.preventDefault();
    this.props.onMove(this.props.index, e.touches[0].clientX, e.touches[0].clientY, this.state.deltaX, this.state.deltaY);
  }

  onTouchEnd(e) {
    this.setState({ isDragging: false });
    e.stopPropagation();
    e.preventDefault();
    this.props.onRelease(this.props.index);
  }

  onTouchCancel(e) {
    // console.log('Touch cancelled. What should we do?');
  }

  getElement() {
    return this.button;
  }

  render() {
    const left = Math.round(this.props.left);
    const top = Math.round(this.props.top);
    return (
      <Motion
        ref={(c) => { this.motion = c; }}
        defaultStyle={{ left: 0, top: 0 }}
        style={{ left: spring(left, this.props.spring), top: spring(top, this.props.spring) }}
      >
        {value =>
          <button
            ref={(c) => { this.button = c; }}
            onClick={(e) => {
              // Without this, the click will trigger event on Track
              // and we end up having duplicate event
              e.stopPropagation();
              e.preventDefault();
            }}
            onMouseDown={this.onMouseDown}
            onTouchStart={this.onTouchStart}
            onTouchMove={this.onTouchMove}
            onTouchEnd={this.onTouchEnd}
            className='ReactMotionSliderInput-Handle'
            style={{
              left: `${value.left}px`,
              top: `${value.top}px`,
              position: 'absolute',
              display: 'block',
            }}
          >
            <span
              ref={(c) => { this.inner = c; }}
              className='ReactMotionSliderInput-Handle-Inner'>
              {this.props.value}
            </span>
            <span className='ReactMotionSliderInput-Handle-Label'>
              {this.props.value}
            </span>
          </button>
        }

      </Motion>
    );
  }
}
Handle.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  onCatch: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
  onRelease: PropTypes.func.isRequired,
  // React-motion spring config
  spring: PropTypes.shape({
    stiffness: PropTypes.number,
    damping: PropTypes.number,
    precision: PropTypes.number,
  }).isRequired,
};

export default Handle;
