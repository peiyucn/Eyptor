type ThemeListener = (isDark: boolean) => void;

const listeners = new Set<ThemeListener>();

function isDark(): boolean {
    return document.body.classList.contains("vscode-dark")
        || document.body.classList.contains("vscode-high-contrast");
}

/** 订阅主题切换。立即回调当前值，之后每次切换触发。返回取消函数。 */
export function onThemeChange(fn: ThemeListener): () => void {
    fn(isDark());
    listeners.add(fn);
    return () => listeners.delete(fn);
}

// 单例 Observer 监听 body class 变化
let started = false;
function start(): void {
    if (started) return;
    started = true;
    let prev = isDark();
    new MutationObserver(() => {
        const now = isDark();
        if (now === prev) return;
        prev = now;
        listeners.forEach((fn) => fn(now));
    }).observe(document.body, { attributes: true, attributeFilter: ["class"] });
}
start();
