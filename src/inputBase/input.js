import "./index.scss";

function InputBase(props) {
  // debugger;
  const { attributes, onChange,  onKeyDown } = props;
  return (
    <div className="input-container">
      <label>{`${attributes.placeholder}: `}</label>
      <input
        type={attributes.type}
        className={attributes.className}
        placeholder={attributes.placeholder}
        name={attributes.name}
        // value={attributes.value ? attributes.value : attributes.defaultValue}
        onChange={onChange}
        defaultValue={attributes.defaultValue}
        onKeyDown={onKeyDown}
        autoComplete="off"
      />
    </div>
  );
}

export default InputBase;
