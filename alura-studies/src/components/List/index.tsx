import React from "react";
import Item from "../Item";

export default function List (){
    return (
        <aside>
            <h2>Today's frogs</h2>
            <ul>
                <Item/>
            </ul>
        </aside>
    )
}