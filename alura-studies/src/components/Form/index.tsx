import React from "react";
import Button from "../Button";

class Form extends React.Component{
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="task">
                        Add a new frog
                    </label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        placeholder="What do you want to do?"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="time">
                        Time
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="time"
                        id="time"
                        min="00:00:00"
                        max="05:00:00"
                        required
                    />
                </div>
                <Button/>
            </form>
        )
    }
}

export default Form;