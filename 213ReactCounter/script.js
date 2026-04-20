function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Counter extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "changeValue",




    ({ curValue, newValue }) => {
      this.setState({ curValue: newValue !== 100 ? newValue : 99 });
    });_defineProperty(this, "handleValueChange",

    (newValue, isField) => {
      const {
        props: { id, onChange },
        state: {
          curValue } } =

      this;

      newValue = parseInt(newValue, 10);

      if (!newValue) {
        if (isField) {
          newValue = '';
        } else {
          newValue = 1;
        }
      }
      if (newValue < 0) {
        newValue = 1;
      }
      if (!isField) {
        this.inputRef.current.style.transform = newValue > curValue ? 'translateY(-100%)' : 'translateY(100%)';
        this.inputRef.current.style.opacity = 0;

        setTimeout(() => {
          this.inputRef.current.style.transitionDuration = '0s';
          this.inputRef.current.style.transform = newValue > curValue ? 'translateY(100%)' : 'translateY(-100%)';
          this.inputRef.current.style.opacity = 0;
          this.changeValue({ curValue, newValue });

          setTimeout(() => {
            this.inputRef.current.style.transitionDuration = '0.3s';
            this.inputRef.current.style.transform = 'translateY(0)';
            this.inputRef.current.style.opacity = 1;
          }, 20);
        }, 250);
      } else {
        this.changeValue({ curValue, newValue });
      }
    });this.inputRef = React.createRef();this.state = { curValue: 1 };}

  render() {
    const {
      state: {
        curValue } } =

    this;

    return /*#__PURE__*/(
      React.createElement("div", { className: 'counter' }, /*#__PURE__*/
      React.createElement("button",
      {
        className: 'button',
        onClick: () => {this.handleValueChange(curValue - 1);},
        title: '-1' }, "\u2212"), /*#__PURE__*/




      React.createElement("div", { className: 'input-wrapper' }, /*#__PURE__*/
      React.createElement("input",
      {
        className: 'input',
        maxlength: 2,
        onChange: e => {
          e.preventDefault();
          this.handleValueChange(e.target.value, true);
        },
        ref: this.inputRef,
        type: 'text',
        value: curValue })), /*#__PURE__*/



      React.createElement("button",
      {
        className: 'button',
        onClick: () => {this.handleValueChange(curValue + 1);},
        title: '+1' }, "+")));






  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Counter, null), document.getElementById('app'));