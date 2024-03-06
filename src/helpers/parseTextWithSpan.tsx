function parseTextWithSpan(title?: string | null, emphasis?: string | null) {
  if (!title || !emphasis) return title
  const parts = title.split(new RegExp(`(${emphasis})`, 'gi'))
  const parsedTitle = parts.map((part, index) => {
    if (part.toLowerCase() === emphasis.toLowerCase()) {
      return <span key={index}>{part}</span>
    } else {
      return part
    }
  })

  return parsedTitle
}

export default parseTextWithSpan
