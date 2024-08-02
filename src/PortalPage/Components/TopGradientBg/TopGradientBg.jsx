
import style from "./topgradient.module.css";

function TopGradient({zIndex}) {
    return (
      <div className={style.container} style={{zIndex}}>
        <div className={style.circle} style={{ background: "#FFC93F" }}></div>
        <div className={style.circle} style={{ background: "#FF3FB2" }}></div>
        <div className={style.circle} style={{ background: "#0057FF" }}></div>
        <div className={style.circle} style={{ background: "#00FFD1" }}></div>
      </div>
    );;
}

export default TopGradient;