function parseTextWithSpan(
  title?: string | null,
  emphasis?: string | string[] | null
) {
  if (!title || !emphasis) return title

  const emphasisArray = Array.isArray(emphasis) ? emphasis : [emphasis]
  const parts = title.split(new RegExp(`(${emphasisArray.join('|')})`, 'gi'))

  const parsedTitle = parts.map((part, index) => {
    if (
      emphasisArray.some(
        (emphasisItem) => part.toLowerCase() === emphasisItem.toLowerCase()
      )
    ) {
      return <span key={index}>{part}</span>
    } else {
      return part
    }
  })

  return parsedTitle
}

export default parseTextWithSpan
