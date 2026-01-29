export type ConnectionDirection = 'horizontal' | 'vertical'

export function createConnection(
  parent: HTMLElement,
  start: HTMLElement,
  end: HTMLElement,
  direction: ConnectionDirection = 'horizontal'
) {
  const slideContent = document.getElementById('slide-content')
  const scale = slideContent
    ? parseFloat(getComputedStyle(slideContent).getPropertyValue('--slidev-slide-scale') || '1')
    : 1

  const parentRect = parent.getBoundingClientRect()

  const startRect = start.getBoundingClientRect()
  const endRect = end.getBoundingClientRect()

  let startX: number, startY: number, endX: number, endY: number
  let controlPoint1X: number, controlPoint1Y: number, controlPoint2X: number, controlPoint2Y: number

  if (direction === 'horizontal') {
    // 水平连接：从右边到左边
    const startXVisual = startRect.right - parentRect.left
    const startYVisual = startRect.top + startRect.height / 2 - parentRect.top
    startX = startXVisual / scale
    startY = startYVisual / scale

    const endXVisual = endRect.left - parentRect.left
    const endYVisual = endRect.top + endRect.height / 2 - parentRect.top
    endX = endXVisual / scale
    endY = endYVisual / scale

    const horizontalOffset = Math.abs(endX - startX) * 0.5
    controlPoint1X = startX + horizontalOffset
    controlPoint1Y = startY
    controlPoint2X = endX - horizontalOffset
    controlPoint2Y = endY

    return `M${startX},${startY} C${controlPoint1X},${controlPoint1Y} ${controlPoint2X},${controlPoint2Y} ${endX},${endY}`
  }
    // 垂直连接：从底部到顶部
    const startXVisual = startRect.left + startRect.width / 2 - parentRect.left
    const startYVisual = startRect.bottom - parentRect.top
    startX = startXVisual / scale
    startY = startYVisual / scale

    const endXVisual = endRect.left + endRect.width / 2 - parentRect.left
    const endYVisual = endRect.top - parentRect.top
    endX = endXVisual / scale
    endY = endYVisual / scale

    const verticalOffset = Math.abs(endY - startY) * 0.5
    controlPoint1X = startX
    controlPoint1Y = startY + verticalOffset
    controlPoint2X = endX
    controlPoint2Y = endY - verticalOffset

    return `M${startX},${startY} C${controlPoint1X},${controlPoint1Y} ${controlPoint2X},${controlPoint2Y} ${endX},${endY}`
}
