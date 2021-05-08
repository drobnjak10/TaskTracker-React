import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react'
import AddTask from './components/AddTask';



function App() {
  const [tasks, setTask] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },

    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 6th at 2:30pm',
        reminder: false
    }
]) 

  // delete func

  const deleteTask = (id) => {
    setTask(tasks.filter((task)=>task.id !== id))
  }

  // reminder toggle 

  const toggleReminder = (id) => {
      setTask(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task ))
  }

  // add Task

  const addTask = (task) => {
      const id = Math.floor(Math.random()*1000)+1
      const newTask = {id, ...task}
      setTask([...tasks, newTask]);
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAddTask={addTask} />
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
