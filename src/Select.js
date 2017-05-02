import React from "react";

const Select = props => {
  const {options, handler} = props;
  const optionElements = options.map(option => (
    <option key={option} value={option}>
      {option}
    </option>
  ));

  return (
    <select onClick={handler} className="form-control">
      {optionElements}
    </select>
  );
};

export default Select;
