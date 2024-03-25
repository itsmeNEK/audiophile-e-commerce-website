function parseTextWithEm(
  title?: string | null,
  emphasis?: string | string[] | null
) {
  if (!title || !emphasis) return title

  const emphasisArray = Array.isArray(emphasis) ? emphasis : [emphasis]
  const parts = title.split(new RegExp(`(${emphasisArray.join('|')})`, 'gi'))

  const parsedTitle = parts.map((part, index) => {
    const partLowerCase = part.toLowerCase()
    const isMatched = emphasisArray.some(
      (emphasisItem) => partLowerCase === emphasisItem.toLowerCase()
    )

    if (isMatched) {
      return <em key={index}>{part}</em>
    } else {
      return part
    }
  })

  return parsedTitle
}

export default parseTextWithEm
