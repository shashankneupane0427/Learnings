import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [currentTodoId, setCurrentTodoId] = useState(null)
  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem('todos');  
    if (todoString) { 
      let todos = JSON.parse(todoString);
      setTodos(todos)
    }
  }, [])

  const saveToLS = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const toggleFinished = () => {
    setShowFinished(!showFinished)
  }

  const handleAdd = () => {
    let updatedTodos;
    if (isEditing) {
      updatedTodos = todos.map(item => item.id === currentTodoId ? { ...item, todo } : item)
      setIsEditing(false)
      setCurrentTodoId(null)
    } else {
      updatedTodos = [...todos, { id: uuidv4(), todo, isCompleted: false }]
    }
    setTodos(updatedTodos)
    setTodo('')
    saveToLS(updatedTodos);
  }

  const handleEdit = (id) => {
    const t = todos.find(item => item.id === id)
    setTodo(t.todo)
    setIsEditing(true)
    setCurrentTodoId(id)
  }

  const handleDelete = (id) => {
    const newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
    saveToLS(newTodos); 
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    const id = e.target.name
    const index = todos.findIndex(item => item.id === id)
    const newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveToLS(newTodos);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && todo.length > 3) {
      handleAdd();
    }
  }

  return (
    <>
      <Navbar />
      <div className='min-h-[80vh] container mx-auto my-5 rounded-xl bg-yellow-50 p-5 w-full md:w-1/2'>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className="text-lg">{isEditing ? 'Edit Todo' : 'Add a Todo'}</h2>
          <input onChange={handleChange} onKeyDown={handleKeyDown} value={todo} type="text" className='w-full p-2 border border-gray-300 rounded-md' />
          <button onClick={handleAdd} disabled={todo.length <= 3} className='bg-yellow-800 hover:bg-yellow-900 p-3 py-1 text-white rounded-md mx-6 disabled:bg-yellow-700 text-sm font-bold'>
            {isEditing ? 'Update' : 'Add'}
          </button>
        </div>
        <div className="flex items-center mb-4">
          <input onChange={toggleFinished} type="checkbox" checked={showFinished} className="mr-2" />
          <label>Show Finished</label>
        </div>
        <h2 className='text-lg font-bold'>Your todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className="text-center text-lg">No todos yet</div>}
          {todos.map((item) => {
            return (showFinished || !item.isCompleted) && (
              <div key={item.id} className="todo flex my-4 justify-between items-center bg-white p-3 rounded-md shadow-md">
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} className="mr-2" />
                <div className={item.isCompleted ? "line-through flex-1" : "flex-1"}>{item.todo}</div>
                <div className="buttons flex">
                  <button onClick={() => { handleEdit(item.id) }} className='bg-yellow-800 hover:bg-yellow-900 p-2 text-white rounded-md mx-1 text-sm font-bold'>Edit</button>
                  <button onClick={() => { handleDelete(item.id) }} className='bg-yellow-800 hover:bg-yellow-900 p-2 text-white rounded-md mx-1 text-sm font-bold'>Delete</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
