"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function TaskForm() {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)

    const task = {
      title,
      description
    }

    const res = await fetch('/api/tasks', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify(task)
    })

    if(res.status === 201) {
      setIsLoading(false)
      router.refresh()
    }
  }


  return (
    <div className="taskForm">
          <h1>Add Task</h1>
          <form onSubmit={handleSubmit}>
            <label className="block mb-4">
              Title:
              <input 
                required
                onChange={(e) => setTitle(e.target.value)}
                type="text" 
                name="title" 
                className="mt-1 block w-full"/>
            </label>
            <br />
            <label className="block mb-4">
              Description:
              <textarea 
                onChange={(e) => setDescription(e.target.value)}
                name="description" 
                className="mt-1 block w-full"></textarea>
            </label>
            <br />
            <button 
              disabled={isLoading}
              type="submit">
                {isLoading && <span>Adding...</span>}
                {!isLoading && <span>Add Task</span>}
            </button>
          </form>
        </div>
  )
}
