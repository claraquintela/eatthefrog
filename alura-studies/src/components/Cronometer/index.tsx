import Button from "../Button";
import Timer from "./Timer";
import style from "./Cronometer.module.scss";

export default function Cronometer () {

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Pick a task to do</p>
            <div className={style.relogioWrapper}>
                <Timer/>
            </div>
            <Button>
                Start
            </Button>

        </div>
    )
}