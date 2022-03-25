import "./input.scss";

const Input = (props) => {
  const { type, label, placeholder, isRequired } = props;
  return (
    <div className="input-container">
      <label htmlFor={label}>{label}</label>

      <input type={type} required={isRequired} placeholder={placeholder} />
    </div>
  );
};

export default Input;
