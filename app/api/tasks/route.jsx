import { NextResponse } from "next/server";
import{ createTask, getTasks, deleteTask } from "@/prisma/task"

// creating task
export async function POST(req) {
    const { title, description } = await req.json()

    if (!title || !description) {
        return NextResponse.json({ message: 'Missing required fields' }, {status: 400});
    }

    const newTask = await createTask(title, description)

    return NextResponse.json(newTask, {status: 201})
}

// get all task
export async function GET() {
    const tasks = await getTasks();
    return NextResponse.json(tasks, {status: 201})
}

// delete task
export async function DELETE(req) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    if (!id) {
        return NextResponse.json({ message: 'Task Does not exist' }, {status: 400});
    }
    
    await deleteTask(id)
    return NextResponse.json({message: 'Task deleted sucessfully'}, {status: 201})
} 