# React-Motion-Slider-Input

A React library/plugin for creating highly customizable input sliders. Uses React-Motion for nice animations.

### Install

Make sure React and React-Motion are installed

- `npm install --save react`
- `npm install --save react-motion`

Install this library

- `npm install --save react-motion-slider-input`

Link css to your project from `lib/SliderInput.css` and create your own styles. Please notice this css is here only for reference.
It is highly recommended to create your own styles that match the design of the website or application you are building.

### Dependencies

- React.js (peer dependency)
- React-Motion (peer dependency)
- Immutable.js

### Usage

```
import { SliderInput } from 'react-motion-slider-input';

... other code ...

render() {
  return (
    <SliderInput />
  );
}
```

### Properties

| Name          | Type                    | Default                                          | Description                                                                                                                                                                                                             |
|---------------|-------------------------|--------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| orientation   | string                  | horizontal                                       | toggle between horizontal and vertical orientation                                                                                                                                                                      |
| step          | number                  | 1                                                | step size                                                                                                                                                                                                               |
| min           | number                  | 1                                                | minimum value                                                                                                                                                                                                           |
| max           | number                  | 10                                               | maximum value                                                                                                                                                                                                           |
| value         | number                  | 1                                                | shorthand for setting up one handle with an initial value                                                                                                                                                               |
| range         | bool or string          | false                                            | shorthand for setting up a range, set `true` or `below` to generate range between min value and handle, set `above` to generate a range between handle and max value                                                    |
| steps         | bool or arrayOf(object) | null                                             | set as `true` to generate steps of size `step` between values `min` and `max`, provide an array of objects of shape `{ label: string, id: string, value: number or string, className: string}` to generate custom steps |
| handles       | arrayOf(object)         | null                                             | provide an array of objects of shape `{value: number or string, id: string, label: string, className: string}`                                                                                                          |
| ranges        | arrayOf(object)         | null                                             | provide an array of objects of shape `{id: string, label: string, fromHandle: number, className: string, includeHandles: bool}`                                                                                         |
| onChange      | func                    | undefined                                        | callback when value changes                                                                                                                                                                                             |
| onMove        | func                    | undefined                                        | callback when handle is being moved                                                                                                                                                                                     |
| className     | string                  | null                                             | define a root class for the slider element for custom css styling                                                                                                                                                       |
| spring        | object                  | { stiffness: 1000, damping: 40, precision: 0.01} | override react-motion spring config                                                                                                                                                                                     |
| detailedValue | bool                    | false                                            | return a detailed data object in `onChange` for simple single-value sliders to enable consistent behaviour with complex sliders that return a detailed value automatically                                              |

### Examples

See example folder.

### FAQ

Q: A slider plugin, U serious?

A: We figured world desperately needs yet another slider plugin. I mean, there are barely 5 for React already. That's way too few. Seriously though, this slider tries to provide some functionality that we felt is missing from the others.

Q: It's ugly. Why?

A: The idea is to include as little forced styles as possible to make it possible for you to create your own styles.

Q: Why no tests?

A: No good reason, we should definitely have some before developing this thing any further.
