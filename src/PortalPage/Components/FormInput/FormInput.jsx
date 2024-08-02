import style from "./forminput.module.css"

function Input({
  title,
  description,
  placeholder,
  type = "text",
  errormessage,
  onChange,
}) {
  return (
    <div className={style.container}>
      <p className={style.title}>{title}</p>
      <p className={style.description}>{description}</p>
      <input
        className={style.input}
        type={type}
        placeholder={placeholder}
        name="title"
        onChange={onChange}
      />
      <p
        style={{
          color: "red",
          width: "fit-content",
          fontSize: "14px",
          padding: "4px",
        }}
      >
        {errormessage}
      </p>
    </div>
  );
}

function TextInput({ title, description , placeholder, type = "text", errormessage, onChange }) {
  return (
    <div className={style.container}>
      <p className={style.title}>{title}</p>
      <p className={style.description}>{description}</p>
      <textarea
        className={style.textinput}
        placeholder={placeholder}
        type={type}
        name="title"
        onChange={onChange}
      />
      <p
        style={{
          color: "red",
          width: "fit-content",
          fontSize: "14px",
          padding: "4px",
        }}
      >
        {errormessage}
      </p>
    </div>
  );
}

export {Input , TextInput};