export const leftSideBar = () => {
  const leftSide = document.createElement('div');
  leftSide.className = 'leftBar';
  const innerBar = `izquierda`;
  leftSide.innerHTML = innerBar;
  return leftSide;
};
export const rightSideBar = () => {
  const rightSide = document.createElement('div');
  rightSide.className = 'rightBar';
  const innerBar = `derecha `;
  rightSide.innerHTML = innerBar;
  return rightSide;
};