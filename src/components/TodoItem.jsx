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
      <li className="flex items-center gap-2 rounded-lg border border-tokyo-purple bg-tokyo-surface px-3 py-2.5 transition-colors">
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          autoFocus
          className="min-w-0 flex-1 rounded-md border border-tokyo-border bg-tokyo-bg px-3 py-1.5 text-tokyo-text outline-none focus:border-tokyo-purple"
        />
        <button
          type="button"
          onClick={handleSave}
          title="Kaydet"
          aria-label="Kaydet"
          className="shrink-0 rounded-md p-2.5 text-lg leading-none text-tokyo-green transition-colors hover:bg-tokyo-green/10"
        >
          ✓
        </button>
        <button
          type="button"
          onClick={handleCancel}
          title="İptal"
          aria-label="İptal"
          className="shrink-0 rounded-md p-2.5 text-lg leading-none text-tokyo-muted transition-colors hover:bg-tokyo-border"
        >
          ✕
        </button>
      </li>
    )
  }

  return (
    <li className="group flex items-center justify-between gap-2 rounded-lg border border-tokyo-border bg-tokyo-surface px-3 py-2.5 transition-colors hover:border-tokyo-purple/50">
      <div className="flex min-w-0 items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="h-5 w-5 shrink-0 cursor-pointer appearance-none rounded border-2 border-tokyo-border bg-tokyo-bg transition-colors checked:border-tokyo-purple checked:bg-tokyo-purple"
        />
        <div className="min-w-0">
          <p
            className={`truncate ${
              todo.completed ? 'text-tokyo-muted line-through' : 'text-tokyo-text'
            }`}
          >
            {todo.title}
          </p>
          <p className="text-xs text-tokyo-muted">{formattedDate}</p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-1 opacity-80 transition-opacity group-hover:opacity-100">
        <button
          type="button"
          onClick={() => setIsEditing(true)}
          title="Düzenle"
          aria-label="Düzenle"
          className="rounded-md p-2.5 text-lg leading-none text-tokyo-blue transition-colors hover:bg-tokyo-blue/10"
        >
          ✎
        </button>
        <button
          type="button"
          onClick={() => onDelete(todo.id)}
          title="Sil"
          aria-label="Sil"
          className="rounded-md p-2.5 text-lg leading-none text-tokyo-red transition-colors hover:bg-tokyo-red/10"
        >
          ✕
        </button>
      </div>
    </li>
  )
}

export default TodoItem
