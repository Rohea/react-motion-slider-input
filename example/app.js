// Import stuff
import React from 'react';
import ReactDOM from 'react-dom';

import SliderInput from '../src/components/SliderInput';

require("../src/scss/SliderInput.scss");
require("../example/styles.scss");


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      complexSlider: {
        handle1: 4,
        handle2: 11,
        handle3: 18,
      },
    };
  }

  onComplexSliderChange(data) {
    this.setState({
      complexSlider: {
        handle1: data.handle1.value,
        handle2: data.handle2.value,
        handle3: data.handle3.value,
      }
    })
  }

  renderRange() {
    // Comples steps and ranges
    let steps = [];
    let handles = [];
    let ranges = [];
    for (let i = 1; i <= 12; i++) {
      steps.push({
        label: ""+i,
        id: "step"+i,
        value: i,
      })
    }
    handles = [
      {
        id: "lower",
        value: 1,
        label: "Lower",
        className: "handle-lower",
      },
      {
        id: "higher",
        value: 10,
        label: "Higher",
        className: "handle-higher",
      }
    ];
    ranges = [
      {
        label: "Range1",
        fromHandle: 0,
        className: 'range-custom',
      }
    ];
    return(
      <div id='range' className='container'>
        <SliderInput
          className='range-example'
          steps={steps}
          handles={handles} 
          ranges={ranges}
          spring={{
            stiffness: 1000,
            damping: 40, // how much spring goes back and forth
            precision: 0.01,
          }}/>
      </div>
    );
  }

  renderComplex() {
    // Comples steps and ranges
    let steps = [];
    let handles = [];
    let ranges = [];

    for (let i = 1; i < 21; i++) {
      let color = 'yellow';
      if (i < 8) color = 'green';
      else if (i > 14) color = 'red';
      steps.push({
        label: ""+i,
        id: "step"+i,
        value: i,
        className: "step-"+color,
      })
    }
    handles = [
      {
        id: "handle1",
        value: this.state.complexSlider.handle1,
        label: "Handle1",
        className: "handle-1",
      },
      {
        id: "handle2",
        value: this.state.complexSlider.handle2,
        label: "Handle2",
        className: "handle-2",
      },
      {
        id: "handle3",
        value: this.state.complexSlider.handle3,
        label: "Handle3",
        className: "handle-3",
      }
    ];
    ranges = [
      {
        id: "range1",
        label: "Range1",
        fromHandle: 0,
        className: 'range-1',
      },
      {
        id: "range2",
        label: "Range2",
        fromHandle: 2,
        className: 'range-2',
      },
    ];
    return(
      <div id='complex' className='container'>
        <label className='preview'>{this.state.complexSlider.handle1} : {this.state.complexSlider.handle2} : {this.state.complexSlider.handle3}</label>
        <SliderInput
          className='complex-example'
          steps={steps}
          handles={handles} 
          ranges={ranges}
          onChange={this.onComplexSliderChange.bind(this)}/>
      </div>
    );
  }

  render() {
    let steps = [];

    // Manual step generation with shorthand single value
    for (let i = 1; i < 11; i++) {
      steps.push({
        label: "S"+i,
        value: i*2,
      })
    }

    return (
      <div>
        <h1>Slider Input for React and React-Motion</h1>

        <div className='container'>
          <SliderInput />
        </div>

        <div id='thin' className='container'>
          <SliderInput min={1} max={100} />
        </div>

        <div className='container'>
          <SliderInput steps={steps} value={8} range={true} />
        </div>

        {this.renderRange()}

        {this.renderComplex()}

        <div className='container' style={{height:'300px', width:'30%'}}>
          <SliderInput orientation='vertical' />
        </div>
      </div>
    );
  }
}
export default App;

// Default slider
ReactDOM.render(<App />, document.getElementById('app'));