export function getVatIncluded(total: number): number {
  return total * 0.2
}

export function getGrandTotal(total: number, shipping: number): number {
  const vat = getVatIncluded(total)
  return total + vat + shipping
}
