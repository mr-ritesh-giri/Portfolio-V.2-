# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- UseEffect code for App.jsx -->

const handleKeyPress = (e) => {
if (e.key === "F12") {
e.preventDefault();
}
};

const handleRightClick = (e) => {
e.preventDefault();
};

window.addEventListener("keydown", handleKeyPress);

window.addEventListener("contextmenu", handleRightClick);

return () => {
window.removeEventListener("keydown", handleKeyPress);
window.removeEventListener("contextmenu", handleRightClick);
};
