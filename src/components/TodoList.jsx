import TodoItem from './TodoItem'

// Todo dizisini map'leyerek her biri için bir TodoItem render eder, aksiyonları aşağı iletir
function TodoList({ todos, onToggle, onUpdate, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed border-tokyo-border py-12 text-center">
        <span className="text-3xl">📭</span>
        <p className="text-tokyo-muted">
          Henüz görev eklenmedi. Yukarıdan yeni bir görev ekleyerek başla.
        </p>
      </div>
    )
  }

  return (
    <ul className="flex flex-col gap-3">
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
