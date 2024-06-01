import TaskForm from "./components/TaskForm";
import dynamic from 'next/dynamic';

// imported components
const TaskList = dynamic(() => import('./components/TaskList'), { ssr: false });


export default function Home() {
  return (

    <div className="container">
      
      <main className="main">
        <div className="taskCards">
          <h1 className="text-xl">My Notes</h1>
          {/* Add your task cards here */}
          <TaskList />
        </div>
        <TaskForm />
      </main>
    </div>
 
  );
}
