export function injectCursorPosition({ x, y }){
    document.documentElement.style.setProperty('--cursor-x', Math.round(x));
    document.documentElement.style.setProperty('--cursor-y', Math.round(y));
};