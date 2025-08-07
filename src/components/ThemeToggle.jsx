// 從 lucide-react 套件引入月亮與太陽圖示元件
import { Moon, Sun } from "lucide-react";
// React 的 Hook：useEffect 用於副作用，useState 用於狀態管理
import { useEffect, useState } from "react";
// cn 是自訂的工具函式，用於合併 className
import { cn } from "@/lib/utils";

// ThemeToggle 是主題切換按鈕元件
export const ThemeToggle = () => {
  // isDarkMode 狀態：true 表示暗色模式，false 表示亮色模式
  const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect：元件掛載時執行一次，檢查 localStorage 的主題設定
  useEffect(() => {
    // 取得 localStorage 中儲存的主題
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      // 若主題為 dark，設為暗色模式並加上 dark class
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      // 否則預設為亮色模式，並儲存到 localStorage
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []); // 空陣列代表只在元件初次渲染時執行

  // 切換主題的函式：點擊按鈕時執行
  const toggleTheme = () => {
    if (isDarkMode) {
      // 若目前是暗色模式，移除 dark class，設為亮色模式
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      // 若目前是亮色模式，加入 dark class，設為暗色模式
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  // 回傳按鈕元件
  return (
    <button
      // 點擊時執行 toggleTheme 切換主題
      onClick={toggleTheme}
      // 使用 cn 工具合併多個 className
      className={cn(
        // 固定在右上角，手機尺寸隱藏，圓形按鈕，顏色漸變
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        // 按鈕聚焦時的樣式（有 typo，應為 focus:outline-none）
        "focus:outlin-hidden"
      )}
    >
      {/* 根據 isDarkMode 狀態顯示不同圖示 */}
      {isDarkMode ? (
        // 暗色模式顯示太陽圖示
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        // 亮色模式顯示月亮圖示
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
}; // 元件結束
