import React from "react";
import Images from "";

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: ""
    };
    this._onClickHandler = this._onClickHandler.bind(this);
  }

  _onClickHandler() {
    this.setState({
      filter: "this needs access to select"
    });
  }

  render() {
    return (
      <div>
        <Images filter={this.state.filter} />
      </div>
    );
  }
}

export default Button;

// const Select = props => {
//   const { options, ...restOfProps } = props;
//   const optionElements = options.map(option => (
//     <option key={option} value={option}>
//       {option}
//     </option>
//   ));
//
//   return (
//     <select className="form-control" {...restOfProps}>
//       {optionElements}
//     </select>
//   );
// };
