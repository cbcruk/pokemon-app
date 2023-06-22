export function DetailSection({ title, children }) {
  return (
    <div className="mb-4">
      <h2 className="font-bold text-lg">{title}</h2>
      {children}
    </div>
  )
}
