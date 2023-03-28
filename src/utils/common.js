const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const createHrefFromProjectName = (name) => {
  const wordArr = name.toLowerCase().split(' ');
  const href = wordArr.join('-');
  return href;
};

const getCurrentPath = () => {
  return window.location.pathname;
};

export { scrollToSection, createHrefFromProjectName, getCurrentPath };
