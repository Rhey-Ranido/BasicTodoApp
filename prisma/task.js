import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


//  create task
export const createTask = async (title, description) => {
    const task = await prisma.task.create({
        data: {
            title,
            description
        }
    });

    return task;
}

// delete task
export const deleteTask = async (id) => {
    await prisma.task.delete({
        where: {id: id}
    })
}

// get all task
export const getTasks =async () => {
    const tasks = await prisma.task.findMany()
    
    return tasks
}