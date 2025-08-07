

import { ArrowDown } from "lucide-react";
import { useState } from "react";

export const HeroSection = () => {

  // 0: 關於這個網頁, 1: 這個網頁可以做什麼
  const [activeTab, setActiveTab] = useState(0);
  // 範例文案
  const aboutSite = (
    <div>
      <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto">
        這個網站是我體驗 ReactJS 與 TailwindCSS 的實作練習。<br/>
        未來會一步步的持續擴展。<br/>
        <a href="https://www.youtube.com/watch?v=ifOJ0R5UQOc" className="text-primary font-semibold">感謝 pedroTech 的教學影片</a>，讓我能快速上手這些技術。<br/>
      </p>
    </div>
  );
  const aboutFunction = (
    <div>
      <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto">
        在這個網站中，我會分享一些我在日常生活中的小技巧、寫的小專案等等。<br/>
        目前將繼續深耕 notion、自動化應用、機器學習....<br/>目標是當一隻軟體蟑螂×<br/>
        如果你有興趣，歡迎您往下觀看！
      </p>
    </div>
  );
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
            <span className="text-primary">氣鵝的AI自研室</span>
          </h1>
          {/* 新增切換按鈕 */}
          <div className="flex justify-center gap-4 mb-4">
            <button
              className={`px-4 py-2 rounded-full transition-colors duration-300 font-semibold ${activeTab === 0 ? 'bg-primary text-primary-foreground' : 'bg-secondary/70 text-foreground hover:bg-secondary'}`}
              onClick={() => setActiveTab(0)}
            >
              關於這個網站
            </button>
            <button
              className={`px-4 py-2 rounded-full transition-colors duration-300 font-semibold ${activeTab === 1 ? 'bg-primary text-primary-foreground' : 'bg-secondary/70 text-foreground hover:bg-secondary'}`}
              onClick={() => setActiveTab(1)}
            >
              這個網頁可以做什麼
            </button>
          </div>
          {/* 分頁內容 */}
          <div className="min-h-[120px] transition-all duration-500">
            {activeTab === 0 ? aboutSite : aboutFunction}
          </div>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              查看我的作品
            </a>
          </div>
        </div>
      </div>

      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <img
          src="/mythoto.png"
          alt="盧信諺頭像"
          style={{
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            objectFit: "cover",
            margin: "0 auto",
            display: "block",
          }}
          className="opacity-0 animate-fade-in"
        />
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> 往下滑 </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
