
import Item from "./Item/index";
import style from'./List.module.scss';

export default function List (){

    const frogs = [{
        task: "testar o App",
        time: "01:20:00"
    }]

    return (
        <aside className={style.listaTarefas}>
            <h2>Today's frogs</h2>
            <ul>
                { 
                    frogs.map((frog, index)=>{
                        return (
                            <Item
                                key={index}
                                task={frog.task}
                                time={frog.time}
                            />
                        );                  
                    })
                }
            </ul>
        </aside>
    )
}