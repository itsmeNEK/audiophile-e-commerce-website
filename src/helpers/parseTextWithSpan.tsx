function parseTextWithSpan(title: string) {
  const parts = title.split(/\'([^']+)\'/g)
  const parsedTitle = parts.map((part, index) => {
    if (index % 2 === 0) {
      return part
    } else {
      return <span key={index}>{part}</span>
    }
  })

  return parsedTitle
}

export default parseTextWithSpan
