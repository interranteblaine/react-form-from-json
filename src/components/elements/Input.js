import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

function Input({
  field_id,
  field_label,
  field_placeholder,
  field_value,
  field_description,
}) {
  const { handleChange } = useContext(FormContext);
  return (
    <div className="mb-3">
      <label htmlFor={field_id} className="form-label">
        {field_label}
      </label>
      <input
        type="text"
        className="form-control"
        id={field_id}
        placeholder={field_placeholder ? field_placeholder : ""}
        value={field_value}
        aria-describedby={field_description ? field_id + "help" : ""}
        onChange={(event) => handleChange(field_id, event)}
      />
      {field_description && (
        <div id={field_id + "help"} className="form-text">
          {field_description}
        </div>
      )}
    </div>
  );
}

export default Input;
