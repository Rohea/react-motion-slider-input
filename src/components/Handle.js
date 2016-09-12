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
    this.onClick = this.onClick.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onTouchCancel = this.onTouchCancel.bind(this);
  }

  componentDidUpdate(newProps, newState) {
    if (this.state.isDragging && !newState.isDragging) {
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('mouseup', this.onMouseUp);
    } else if (!this.state.isDragging && newState.isDragging) {
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('mouseup', this.onMouseUp);
    }
  }

  onClick(e) {
    // Without this, the click will trigger event on Track
    // and we end up having duplicate event
    e.stopPropagation();
    e.preventDefault();
  }

  onMouseDown(e) {
    // only left mouse button
    if (e.button !== 0) return;

    const rect = this.refs['motion'].refs['button'].getBoundingClientRect();
    const deltaX = e.pageX - rect.left;
    const deltaY = e.pageY - rect.top;
    this.setState({
      isDragging: true,
      deltaX: deltaX,
      deltaY: deltaY,
    });
    e.stopPropagation();
    e.preventDefault();
    this.props.onCatch(this.props.index, e.pageX, e.pageY, deltaX, deltaY);
  }

  onMouseMove(e) {
    if (! this.state.isDragging) return;
    e.stopPropagation();
    e.preventDefault();
    this.props.onMove(this.props.index, e.pageX, e.pageY, this.state.deltaX, this.state.deltaY);
  }

  onMouseUp(e) {
     this.setState({ isDragging: false });
     e.stopPropagation();
     e.preventDefault();
     this.props.onRelease(this.props.index);
  }

  onTouchStart(e) {
    console.log("touch detected");
    console.log(e);
    console.log(e.touches[0].clientX);

    const rect = this.refs['motion'].refs['button'].getBoundingClientRect();
    const deltaX = e.touches[0].clientX - rect.left;
    const deltaY = e.touches[0].clientY - rect.top;
    this.setState({
      isDragging: true,
      deltaX: deltaX,
      deltaY: deltaY,
    });
    e.stopPropagation();
    e.preventDefault();
    this.props.onCatch(this.props.index, e.touches[0].clientX, e.touches[0].clientY, deltaX, deltaY);
  }

  onTouchMove(e) {
    if (! this.state.isDragging) return;
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
    console.log("Touch cancelled. What should we do?")
  }

  render() {

    return (
      <Motion ref='motion' defaultStyle={{left: 0, top: 0}} style={{left: spring(this.props.left, this.props.spring), top: spring(this.props.top, this.props.spring)}}>

        {value =>
          <button
            ref='button'
            onClick={this.onClick}
            onMouseDown={this.onMouseDown}
            onTouchStart={this.onTouchStart}
            onTouchMove={this.onTouchMove}
            className='ReactMotionSliderInput-Handle'
            style={{
              left: value.left+'px',
              top: value.top+'px',
              position: 'absolute',
              display: 'block',
            }}>
            <span className='ReactMotionSliderInput-Handle-Inner'>
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
  index: React.PropTypes.number.isRequired,
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  top: React.PropTypes.number.isRequired,
  left: React.PropTypes.number.isRequired,
  onCatch: React.PropTypes.func.isRequired,
  onMove: React.PropTypes.func.isRequired,
  onRelease: React.PropTypes.func.isRequired,
  // React-motion spring config
  spring: React.PropTypes.shape({
    stiffness: React.PropTypes.number,
    damping: React.PropTypes.number,
    precision: React.PropTypes.number,
  }).isRequired,
  label: React.PropTypes.string,
}

export default Handle;
