import React from "react";
import PropTypes from "prop-types";

function SelectInput(props) {
  let wrapperClass = "form-group";
  if (props.error.length > 0) wrapperClass += " has-error";

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          type="text"
          name={props.name}
          onChange={props.onChange}
          className="form-control"
          value={props.value || ""}
        >
          <option value=""></option>
          {props.options.map((_author, index) => (
            <option key={_author} value={index}>
              {_author}
            </option>
          ))}
        </select>
      </div>
      {props.error.length > 0 && (
        <div className="alert alert-danger">{props.error}</div>
      )}
    </div>
  );
}

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.number,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};
SelectInput.defaultProps = { error: "" };

export default SelectInput;
