// Import stuff
import React from 'react';

import SliderInput from '../src/components/SliderInput';

const prepareState = () => {
  // Comples steps and ranges
  const steps = [];
  for (let i = 1; i < 21; i++) {
    let color = 'yellow';
    if (i < 8) color = 'green';
    else if (i > 14) color = 'red';
    steps.push({
      label: `${i}`,
      id: `step${i}`,
      value: i,
      className: `step-${color}`,
    });
  }
  const handles = [
    {
      id: 'handle1',
      value: 4,
      label: 'Handle1',
      className: 'handle-1',
    },
    {
      id: 'handle2',
      value: 11,
      label: 'Handle2',
      className: 'handle-2',
    },
    {
      id: 'handle3',
      value: 14,
      label: 'Handle3',
      className: 'handle-3',
    },
    {
      id: 'handle4',
      value: 18,
      label: 'Handle4',
      className: 'handle-4',
    },
  ];
  const ranges = [
    {
      id: 'range1',
      label: 'Range1',
      fromHandle: -1,
      className: 'range-1',
      includeHandles: true,
    },
    {
      id: 'range2',
      label: 'Range2',
      fromHandle: 1,
      className: 'range-2',
      includeHandles: true,
    },
    {
      id: 'range3',
      label: 'Range2',
      fromHandle: 3,
      className: 'range-2',
      includeHandles: false,
    },
  ];
  return { handles, ranges, steps };
};

class Complex extends React.Component {
  constructor(props) {
    super(props);
    this.state = prepareState();
    this.onComplexSliderChange = this.onComplexSliderChange.bind(this);
    this.onResetClick = this.onResetClick.bind(this);
  }

  onComplexSliderChange(handles) {
    console.log(handles);
    const newHandles = this.state.handles.map(handle => Object.assign({}, handle, { value: handles[handle.id].value }));
    this.setState({ handles: newHandles });
  }

  onResetClick() {
    this.setState(prepareState());
  }

  render() {
    return (
      <div id='complex' className='container'>
        <h3>Complex</h3>
        <ul>
          <li>Custom colors for each step.</li>
          <li>Four handles and three ranges. Ranges 1 and 2 include handles.</li>
          <li>Transparent handles with borders</li>
        </ul>
        <label className='preview' htmlFor='preview'>
          {this.state.handles.map(handle => <span key={handle.id}>{handle.id}: <strong>{handle.value}</strong>&nbsp; &nbsp;</span>)}
        </label>
        <SliderInput
          className='complex-example'
          steps={this.state.steps}
          handles={this.state.handles}
          ranges={this.state.ranges}
          onChange={this.onComplexSliderChange}
          disabled={this.props.disabled}
        />
        <button onClick={this.onResetClick}>Reset Handles</button>
      </div>
    );
  }
}
export default Complex;
