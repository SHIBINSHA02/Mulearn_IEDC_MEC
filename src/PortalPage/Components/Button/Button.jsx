import style from "./button.module.css"

function Button({onClick , children}) {
    return <button className={style.button} onClick={onClick}>{children}</button>
}

export default Button;