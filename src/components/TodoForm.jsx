import { useState } from 'react'

// Kullanıcıdan başlık alıp onAdd callback'i ile yeni todo oluşturulmasını tetikler
function TodoForm({ onAdd }) {
  const [title, setTitle] = useState('')

  // Form gönderildiğinde boş olmayan başlığı yukarı iletir ve inputu temizler
  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Yeni görev ekle..."
        className="flex-1 min-w-0 rounded-lg border border-tokyo-border bg-tokyo-surface px-4 py-2.5 text-tokyo-text outline-none transition-colors placeholder:text-tokyo-muted focus:border-tokyo-purple focus:ring-1 focus:ring-tokyo-purple"
      />
      <button
        type="submit"
        className="shrink-0 rounded-lg bg-tokyo-purple px-4 py-2.5 font-medium text-tokyo-bg transition-colors hover:bg-tokyo-blue active:scale-95"
      >
        Ekle
      </button>
    </form>
  )
}

export default TodoForm
