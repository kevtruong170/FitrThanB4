import React from 'react'


const Tasks = ({tasks}) => {

    return (
        <div>
            {tasks.map((tasks) => (
            <h3 key={tasks.exercise}> {tasks.exercise}</h3>

        ))}
        </div>
        )
}

export default Tasks