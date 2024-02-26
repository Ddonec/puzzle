export function setTheme(themeName: string): void {
    localStorage.setItem('theme', themeName);
    document.body.className = themeName;
}

export function darkLightSwapper(checkbox: HTMLInputElement): void {
    if (checkbox.checked) {
        setTheme('light');
        return;
    }
    setTheme('dark');
}
 