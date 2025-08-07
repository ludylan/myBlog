# 個人化你的 React + Tailwind 個人網頁專案 To-Do List

本文件列出將此專案改造成你專屬個人網頁的所有步驟，建議依序完成。

---

## 1. 基本資訊修改（入門必做）
- [ ] 修改首頁/導覽列/自我介紹中的姓名
    - 打開 `src/components/Navbar.jsx` 或 `HeroSection.jsx`
    - 找到你的名字（如 <span>王小明</span>），改成自己的名字
- [ ] 修改聯絡區塊的 email、電話、社群連結
    - 打開 `src/components/ContactSection.jsx`
    - 找到 email、電話、社群連結，改成自己的資訊
    - 例如：`<a href="mailto:yourmail@gmail.com">yourmail@gmail.com</a>`
- [ ] 修改個人頭像或大頭貼（如有）
    - 找到圖片檔案（通常在 `public/` 或 `src/assets/`）
    - 替換成自己的照片，並修改對應的 img 標籤路徑
- [ ] 修改網站標題與 favicon
    - 打開 `index.html`
    - 修改 `<title>` 內容為你的網站名稱
    - favicon 可用自己設計的小圖示，放在 `public/`，並修改 `<link rel="icon" ...>`

## 2. 內容區塊客製化（讓網頁更像你）
- [ ] 修改 AboutSection 內容，介紹你自己
    - 打開 `src/components/AboutSection.jsx`
    - 編輯自我介紹文字，寫上你的背景、興趣等
- [ ] 修改 SkillsSection，列出你的技能
    - 打開 `src/components/SkillsSection.jsx`
    - 將技能清單改成你會的技能（如 JavaScript、Python、設計等）
- [ ] 修改 ProjectsSection，展示你的專案
    - 打開 `src/components/ProjectsSection.jsx`
    - 修改專案名稱、描述、連結、圖片
- [ ] 修改 ContactSection，填寫正確聯絡方式
    - 同上，確認所有聯絡方式正確
- [ ] 新增/刪除區塊（如興趣、經歷、作品集等）
    - 參考現有區塊，在 `src/components/` 新增檔案，並在 `src/pages/Home.jsx` 引入與排版

## 3. 主題與外觀（讓網頁有你風格）
- [ ] 修改 ThemeToggle 切換按鈕的顏色或圖示
    - 打開 `src/components/ThemeToggle.jsx`
    - 調整 <Sun />、<Moon /> 的 className 顏色
- [ ] 修改預設主題（亮/暗）
    - 在 `ThemeToggle.jsx` 的 useEffect 裡，預設設為 dark 或 light
- [ ] 調整主題色彩（背景、字體、按鈕等）
    - 打開 `src/index.css` 或 `tailwind.config.js`
    - 修改顏色設定，讓網站更有個人特色
- [ ] 修改 Tailwind 設定（如自訂色彩、字型）
    - 在 `tailwind.config.js` 的 theme.extend.colors 加入自訂色彩
    - 可自訂字型（fonts）
- [ ] 增加主題切換動畫效果
    - 在 ThemeToggle 按鈕 className 加入 transition、hover:scale-110 等動畫 class

## 4. 進階自訂（進階挑戰）
- [ ] 新增社群連結（GitHub、LinkedIn、IG 等）
    - 在 `ContactSection.jsx` 或 `Footer.jsx` 加入社群 icon 與連結
- [ ] 新增/修改 footer 內容
    - 打開 `src/components/Footer.jsx`，改成你的版權宣告或座右銘
- [ ] 新增多語系支援（如有需要）
    - 可參考 i18n 套件，或自行設計語言切換邏輯
- [ ] 優化 RWD 手機版顯示
    - 用 Tailwind 的 `sm:`, `md:`, `lg:` 等 class 控制不同裝置顯示
- [ ] 新增/修改背景特效（如 StarBackground）
    - 打開 `src/components/StarBackground.jsx`，可自訂星星數量、顏色、動畫

## 5. 其他（收尾與發佈）
- [ ] 修改 README.md，介紹你自己的網頁
    - 打開 `README.md`，寫上網站特色、技術棧、聯絡方式
- [ ] 更新 package.json 的作者資訊
    - 打開 `package.json`，找到 `author` 欄位，改成你的名字與 email
- [ ] 測試所有功能，確保無誤
    - 執行 `npm run dev`，逐頁檢查內容、連結、主題切換等功能

---

> 完成每一項時，建議打勾並提交一次 git commit，方便追蹤進度。

如需詳細教學或範例，請隨時詢問！
