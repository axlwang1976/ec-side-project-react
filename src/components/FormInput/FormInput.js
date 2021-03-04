import './FormInput.scss';

const FormInput = ({ handleChange, label, value, required, name, type }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        required={required}
        name={name}
        type={type}
        value={value}
      />
      {label ? (
        <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
