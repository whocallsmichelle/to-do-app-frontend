import { useState } from 'react'

// Tek bir todo'yu gösterir; düzenleme moduna geçebilir, tamamlanma ve silme aksiyonlarını tetikler
function TodoItem({ todo, onToggle, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(todo.title)

  const formattedDate = new Date(todo.createdAt).toLocaleString('tr-TR')

  // Düzenlenen başlığı kaydeder ve düzenleme modundan çıkar
  function handleSave() {
    const trimmed = editTitle.trim()
    if (!trimmed) return
    onUpdate(todo.id, trimmed)
    setIsEditing(false)
  }

  // Değişiklikleri atıp orijinal başlığa dönerek düzenleme modundan çıkar
  function handleCancel() {
    setEditTitle(todo.title)
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <li className="flex items-center gap-2 rounded-md border border-purple-300 bg-white px-3 py-2 shadow-sm">
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          autoFocus
          className="flex-1 rounded border border-gray-300 px-2 py-1 outline-none focus:border-purple-500"
        />
        <button
          type="button"
          onClick={handleSave}
          className="rounded bg-green-600 px-2 py-1 text-xs font-medium text-white hover:bg-green-700"
        >
          Kaydet
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="rounded bg-gray-200 px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-300"
        >
          İptal
        </button>
      </li>
    )
  }

  return (
    <li className="flex items-center justify-between gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 shadow-sm">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="h-4 w-4 accent-purple-600"
        />
        <div>
          <p className={todo.completed ? 'text-gray-400 line-through' : 'text-gray-800'}>
            {todo.title}
          </p>
          <p className="text-xs text-gray-400">{formattedDate}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setIsEditing(true)}
          className="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 hover:bg-blue-200"
        >
          Düzenle
        </button>
        <button
          type="button"
          onClick={() => onDelete(todo.id)}
          className="rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-700 hover:bg-red-200"
        >
          Sil
        </button>
      </div>
    </li>
  )
}

export default TodoItem
