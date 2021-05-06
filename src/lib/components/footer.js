export const footer = () => {
  const footerContainer = document.createElement('footer');
  footerContainer.id = 'footer';
  const innerFooter = `
                      <div class= 'copyright'>Fempage 2021</div>
                      `;
  footerContainer.innerHTML = innerFooter;
  return footerContainer;
};
