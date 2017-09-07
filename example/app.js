// Import stuff
import React from 'react';
import ReactDOM from 'react-dom';

import SliderInput from '../src/components/SliderInput';
import Complex from './Complex';

require('../src/scss/SliderInput.scss');
require('../example/styles.scss');

const onChange = (val) => {
  console.log('onChange called');
  console.log(val);
};
const onMove = (val) => {
  console.log('onMove called');
  console.log(val);
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      complexSlider: {
        handle1: 4,
        handle2: 11,
        handle3: 14,
        handle4: 18,
      },
      zeroincluded: 3,
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

  renderStyledRange() {
    // Comples steps and ranges
    const steps = [];
    let handles = [];
    let ranges = [];
    for (let i = 0; i <= 12; i++) {
      steps.push({
        label: `${i}`,
        id: `step${i}`,
        value: i,
      });
    }
    handles = [
      {
        id: 'lower',
        value: 3,
        label: 'Lower',
        className: 'handle-lower',
      },
      {
        id: 'higher',
        value: 10,
        label: 'Higher',
        className: 'handle-higher',
      },
    ];
    ranges = [
      {
        label: 'Range1',
        fromHandle: 0,
        className: 'range-custom',
        includeHandles: true,
      },
    ];
    return (
      <div id='range' className='container'>
        <h3>Range</h3>
        <ul>
          <li>Two handles with a range in between</li>
          <li>Custom round layout for steps and handles</li>
          <li>Bouncy spring config for animation</li>
        </ul>
        <SliderInput
          className='range-example'
          steps={steps}
          handles={handles}
          ranges={ranges}
          onChange={onChange}
          onMove={onMove}
          spring={{
            stiffness: 600,
            damping: 20, // how much spring goes back and forth
            precision: 0.01,
          }}
        />
      </div>
    );
  }

  renderRange() {
    const steps = [];
    for (let i = -2; i <= 10; i++) {
      steps.push({
        label: `${i}`,
        id: `step${i}`,
        value: i,
      });
    }
    const handles = [
      {
        value: 4,
      },
      {
        value: 7,
      },
    ];
    const ranges = [
      {
        fromHandle: 0,
      },
    ];
    return <SliderInput className='range-example' steps={steps} handles={handles} ranges={ranges} />;
  }

  render() {
    const steps = [];

    // Manual step generation with shorthand single value
    for (let i = -3; i < 10; i++) {
      steps.push({
        label: `S${i}`,
        value: i,
      });
    }

    return (
      <div>
        <h1>Slider Input for React and React-Motion</h1>
        <p>
          <input type='checkbox' checked={this.state.disabled} onClick={() => this.setState(prevState => ({ disabled: !prevState.disabled }))} />
          Disabled
        </p>

        <div id='default' className='container'>
          <SliderInput value={3} onChange={onChange} onMove={onMove} disabled={this.state.disabled} />
        </div>

        <div id='longrange' className='container'>
          <SliderInput min={1} max={100} step={0.1} value={69.9} range onChange={onChange} onMove={onMove} disabled={this.state.disabled} />
        </div>

        <div id='zeroincluded' className='container'>
          <SliderInput
            steps={steps}
            value={this.state.zeroincluded}
            range
            onChange={(value) => {
              this.setState({ zeroincluded: value });
              onChange(value);
            }}
            onMove={onMove}
            disabled={this.state.disabled}
          />
        </div>
        <div className='container'>
          {this.renderRange()}
        </div>
        <div className='container'>
          <SliderInput steps={steps} value={6} range='above' onChange={onChange} onMove={onMove} disabled={this.state.disabled} />
        </div>

        {this.renderStyledRange()}

        <Complex disabled={this.state.disabled} />

        <div className='container vertical'>
          <SliderInput orientation='vertical' value={3} />
        </div>
        <div className='container vertical'>
          <SliderInput orientation='vertical' steps />
        </div>
      </div>
    );
  }
}
export default App;

/* global document:false */
// Default slider
ReactDOM.render(<App />, document.getElementById('app'));
