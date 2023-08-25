import React, { useState } from 'react'

const AddTask = ({ darkTheme, onAddTask }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if(title.trim()){
            onAddTask(title.trim())
            setTitle("")
        }
    }

    
    return (
        <form onSubmit={handleSubmit}>
            <div className={`w-full flex space-x-2 items-center rounded-lg px-4 bg-white ${
                darkTheme ? "bg-gray-700" : "bg-white"
            }`}>
                
                <input
                    className={` bg-transparent outline-none border-none w-full h-fit p-1 py-4 text-lg placeholder-grey-400 ${ darkTheme ? "text-white" : "text-black"}`}
                    type='text'
                    placeholder='Enter your task...'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <button type='submit' className={` px-4 uppercase ${ darkTheme ? "text-white" : "text-black"}`} >
                    Add
                </button>
            </div>
        </form>
    )
}

export default AddTask
