import React from "react";

const Button = ({handler}) => {
  return <button onClick={handler}>Filter</button>;
};

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
