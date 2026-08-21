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
        className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-gray-800 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
      />
      <button
        type="submit"
        className="rounded-md bg-purple-600 px-4 py-2 font-medium text-white hover:bg-purple-700"
      >
        Ekle
      </button>
    </form>
  )
}

export default TodoForm
