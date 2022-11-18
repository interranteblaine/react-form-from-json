import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

function Select({ field_id, field_label, field_options }) {
  const { handleChange } = useContext(FormContext);
  return (
    <>
      <label htmlFor={field_id} className="form-label">
        {field_label}
      </label>
      <select
        className="mb-3 form-select"
        aria-label={field_label}
        onChange={(event) => handleChange(field_id, event)}
      >
        <option>Open this select menu</option>
        {field_options.length > 0 &&
          field_options.map((option, i) => (
            <option key={i} value={option.option_label}>
              {option.option_label}
            </option>
          ))}
      </select>
    </>
  );
}

export default Select;
