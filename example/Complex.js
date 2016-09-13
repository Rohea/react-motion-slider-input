// Import stuff
import React from 'react';
import ReactDOM from 'react-dom';

import SliderInput from '../src/components/SliderInput';

class Complex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      complexSlider: {
        handle1: 4,
        handle2: 11,
        handle3: 14,
        handle4: 18,
      },
    };
  }

  onComplexSliderChange(data) {
    this.setState({
      complexSlider: {
        handle1: data.handle1.value,
        handle2: data.handle2.value,
        handle3: data.handle3.value,
        handle4: data.handle4.value,
      },
    });
  }
  render() {
    // Comples steps and ranges
    const steps = [];
    let handles = [];
    let ranges = [];

    for (let i = 1; i < 21; i++) {
      let color = 'yellow';
      if (i < 8) color = 'green';
      else if (i > 14) color = 'red';
      steps.push({
        label: '' + i,
        id: `step${i}`,
        value: i,
        className: `step-${color}`,
      });
    }
    handles = [
      {
        id: 'handle1',
        value: this.state.complexSlider.handle1,
        label: 'Handle1',
        className: 'handle-1',
      },
      {
        id: 'handle2',
        value: this.state.complexSlider.handle2,
        label: 'Handle2',
        className: 'handle-2',
      },
      {
        id: 'handle3',
        value: this.state.complexSlider.handle3,
        label: 'Handle3',
        className: 'handle-3',
      },
      {
        id: 'handle4',
        value: this.state.complexSlider.handle4,
        label: 'Handle4',
        className: 'handle-4',
      },
    ];
    ranges = [
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
    return (
      <div id='complex' className='container'>
        <h3>Complex</h3>
        <ul>
          <li>Custom colors for each step.</li>
          <li>Four handles and three ranges. Ranges 1 and 2 include handles.</li>
          <li>Transparent handles with borders</li>
        </ul>
        <label className='preview'>
          {this.state.complexSlider.handle1}&nbsp;:&nbsp;
          {this.state.complexSlider.handle2}&nbsp;:&nbsp;
          {this.state.complexSlider.handle3}&nbsp;:&nbsp;
          {this.state.complexSlider.handle4}
        </label>
        <SliderInput
          className='complex-example'
          steps={steps}
          handles={handles}
          ranges={ranges}
          onChange={this.onComplexSliderChange.bind(this)}
        />
      </div>
    );
  }
}
export default Complex;
