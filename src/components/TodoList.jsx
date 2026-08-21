import TodoItem from './TodoItem'

// Todo dizisini map'leyerek her biri için bir TodoItem render eder, aksiyonları aşağı iletir
function TodoList({ todos, onToggle, onUpdate, onDelete }) {
  if (todos.length === 0) {
    return <p className="text-center text-gray-400">Henüz görev eklenmedi.</p>
  }

  return (
    <ul className="flex flex-col gap-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TodoList
