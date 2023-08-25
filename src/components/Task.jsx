import React, { useState } from 'react'
import { MdOutlineDone } from "react-icons/md"
import { RxCross2 } from "react-icons/rx";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";

const Task = ({ darkTheme, task, onEditTask, onDeleteTask, onToggleCompleted }) => {
    const [title, setTitle] = useState(task.title);
    const [editing, setEditing] = useState(false);

    const handleSubmit = () => {
        if(title.trim()){
            onEditTask(task.id, title.trim())
            setEditing(false)
        }
    }

    const handleEdit = () => {
        setEditing(true);
    }

    const handelCancel = () => {
        setEditing(false)
        setTitle(task.title)
    }

    const handelDelete = (e) => {
        e.preventDefault()
        onDeleteTask(task.id)
    }

    const handleToggleCompleted = () => {
        onToggleCompleted(task.id)
    }

    const handleChange  = (e) => {
        setTitle(e.target.value)
    }

    return (
        <li className={`mb-1 border-b space-y-2 ${darkTheme ? "border-white" : "border-black"}`}>
            {editing ? (
                <form
                    onSubmit={handleSubmit}
                    className=' flex items-center justify-between p-1 px-3 w-full'
                >
                    <div className=" flex items-center space-x-3 w-full">
                        <input
                            type="text"
                            value={title}
                            className=' w-full bg-transparent py-3 text-lg focus:outline-none'
                            onChange={handleChange} 
                        />
                    </div>

                    <div className=" flex space-x-3">
                        <button type="submit">
                            <MdOutlineDone
                                size={20}
                                className={`${darkTheme ? "text-white" : "text-black "} hover:text-green-500`}
                            />
                        </button>

                        <button type="button" onClick={handelCancel}>
                            <RxCross2
                                size={20}
                                className={`${darkTheme ? "text-white" : "text-black "} hover:text-red-500`}
                            />
                        </button>
                    </div>
                </form>
            ) : (
                <div className="flex items-center justify-between p-4 px-3">
                    <div className="flex items-center space-x-3">
                        <input 
                            type="checkbox"
                            checked={task.completed}
                            onClick={handleToggleCompleted}
                            className='round rounded-none'
                        />

                        <span className={`${task.completed ? "line-through text-gray-400 text-lg" : "text-lg"}`}>
                            {task.title}
                        </span>

                    </div>

                    <div className="flex items-center space-x-3">
                        {!task.completed && ( // Added a conditional check here
                            <button onClick={handleEdit}>
                                <CiEdit
                                    size={22}
                                    className={`${darkTheme ? "text-white" : "text-black "} hover:text-sky-500`}
                                />
                            </button>
                        )}

                        <button onClick={handelDelete}>
                            <AiOutlineDelete
                                size={20}                                
                                className={`${darkTheme ? "text-white" : "text-black "} hover:text-red-500`}
                            />
                        </button>                       
                    </div>
                </div>
            )}
        </li>
    )
}

export default Task;


// dark => Text white
// normal => text black

// dark & task completed => white
// normal & !task completed => 