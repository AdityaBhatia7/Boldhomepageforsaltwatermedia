// Clear dark mode on app load
export function clearDarkMode() {
  if (typeof window !== 'undefined') {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');
  }
}
