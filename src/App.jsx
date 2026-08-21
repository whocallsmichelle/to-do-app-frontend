import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const STORAGE_KEY = 'todos'

// Uygulamanın ana bileşeni, todo state'ini tutar ve alt bileşenlere props ile aktarır
function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  })

  // todos her değiştiğinde güncel listeyi localStorage'a yazar
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  // Yeni todo'yu modele uygun oluşturup listenin başına ekler
  function addTodo(title) {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    }
    setTodos((prev) => [newTodo, ...prev])
  }

  // Verilen id'ye sahip todo'nun tamamlanma durumunu tersine çevirir
  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  // Verilen id'ye sahip todo'nun başlığını yeni değerle günceller
  function updateTodo(id, newTitle) {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, title: newTitle } : todo)),
    )
  }

  // Verilen id'ye sahip todo'yu listeden kaldırır
  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <div className="min-h-screen bg-tokyo-bg px-4 py-10 sm:py-16">
      <div className="mx-auto flex w-full max-w-md flex-col gap-6">
        <h1 className="text-center text-3xl font-bold tracking-tight text-tokyo-purple sm:text-4xl">
          TODO Uygulaması
        </h1>
        <TodoForm onAdd={addTodo} />
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onUpdate={updateTodo}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  )
}

export default App
