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

const createProjectNameFromPath = (path) => {
  const wordArr = path.substring(6).split('-'); // needed remove the initial /work/ part of the path

  const name = wordArr
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' ');

  return name;
};

const getCurrentPath = () => {
  return window.location.pathname;
};

export {
  scrollToSection,
  createHrefFromProjectName,
  createProjectNameFromPath,
  getCurrentPath,
};
