function InputBase(props) {
    debugger;
    const {attributes, onChange} = props;
    return (
        <input
            type={attributes.type}
            // className="login-username input-text"
            className={attributes.className}
            placeholder={attributes.placeholder}
            name={attributes.name}
            value={attributes.value}
            onChange={onChange}
        />
    )
}

export default InputBase;