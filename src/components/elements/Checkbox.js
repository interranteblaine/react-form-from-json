import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

function Checkbox({ field_id, field_label, field_value }) {
  const { handleChange } = useContext(FormContext);
  return (
    <div className="mb-3 form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id={field_id}
        checked={field_value}
        onChange={(event) => handleChange(field_id, event)}
      />
      <label className="form-check-label" htmlFor={field_id}>
        {field_label}
      </label>
    </div>
  );
}

export default Checkbox;
