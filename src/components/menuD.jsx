function MenuD({ divClassName, inputName, inputValue, element }) {
  return (
    <div className={divClassName}>
      <input type="checkbox" name={inputName} id={inputName} />
      <label htmlFor={inputName}>{inputValue}</label>
       {element}
    </div>
  );
}

export default MenuD;