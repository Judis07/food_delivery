import "./checkbox.scss";

const Checkbox = ({ label }) => {
  return (
    <label className="checkbox-container">
      <span className="label-txt">{label}</span>
      <input type="checkbox" />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
