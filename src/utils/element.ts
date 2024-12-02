export interface Offset {
  top: number;
  left: number;
}

export const getOffset = (element: HTMLElement): Offset => {
  const rect = element.getBoundingClientRect();
  const scrollTop = window.scrollY ?? document.documentElement.scrollTop;
  const scrollLeft = window.scrollX ?? document.documentElement.scrollLeft;

  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
  };
};

/**
 * @see {@link https://stackoverflow.com/questions/50906224/calculate-distance-between-mouse-and-the-edges-of-a-dom-element}
 */
export const getMouseDistanceFromElement = (
  event: MouseEvent,
  element: HTMLElement,
): number => {
  const mouseX = event.pageX;
  const mouseY = event.pageY;
  const offset = getOffset(element);
  const top = offset.top;
  const bottom = top + element.offsetHeight;
  const left = offset.left;
  const right = offset.left + element.offsetWidth;
  const maxX1 = Math.max(mouseX, left);
  const minX2 = Math.min(mouseX, right);
  const maxY1 = Math.max(mouseY, top);
  const minY2 = Math.min(mouseY, bottom);
  const intersectX = minX2 >= maxX1;
  const intersectY = minY2 >= maxY1;
  const toX = intersectX ? mouseX : right < mouseX ? right : left;
  const toY = intersectY ? mouseY : bottom < mouseY ? bottom : top;
  const distX = toX - mouseX;
  const distY = toY - mouseY;
  const hypot = Math.sqrt(distX ** 2 + distY ** 2);

  return Math.floor(hypot);
};
