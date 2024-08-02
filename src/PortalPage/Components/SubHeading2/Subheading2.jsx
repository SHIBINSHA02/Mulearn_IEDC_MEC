import style from "./subheading2.module.css"

function SubHeading2({title , description}) {
    return <div className={style.container}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
    </div>
}

export default SubHeading2;