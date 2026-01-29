export function createConnection(parent: HTMLElement, start: HTMLElement, end: HTMLElement) {
  const slideContent = document.getElementById('slide-content')
  const scale = slideContent
    ? parseFloat(getComputedStyle(slideContent).getPropertyValue('--slidev-slide-scale') || '1')
    : 1

  const parentRect = parent.getBoundingClientRect()

  const startRect = start.getBoundingClientRect()
  const startXVisual = startRect.right - parentRect.left
  const startYVisual = startRect.top + startRect.height / 2 - parentRect.top

  const startX = startXVisual / scale
  const startY = startYVisual / scale

  const endRect = end.getBoundingClientRect()
  const endXVisual = endRect.left - parentRect.left
  const endYVisual = endRect.top + endRect.height / 2 - parentRect.top

  const endX = endXVisual / scale
  const endY = endYVisual / scale

  const horizontalOffset = Math.abs(endX - startX) * 0.5
  const controlPoint1X = startX + horizontalOffset
  const controlPoint1Y = startY
  const controlPoint2X = endX - horizontalOffset
  const controlPoint2Y = endY

  const pathData = `M${startX},${startY} C${controlPoint1X},${controlPoint1Y} ${controlPoint2X},${controlPoint2Y} ${endX},${endY}`

  return pathData
}
