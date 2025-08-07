import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          關於 <span className="text-primary">我</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              
            </h3>

            <p className="text-muted-foreground">
              此網站基底來自 PedroTech 的<br/>
              “Build And Deploy a Modern Personal Portfolio with ReactJS and TailwindCSS” 教程，<br/>
              在原範本上深度客製與優化，作為我學習與實踐的沙盒。<br/>
              我將持續迭代、優化，直到完全掌握這套技術棧！<br/>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                聯絡我
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                下載履歷
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> 網頁開發</h4>
                  <p className="text-muted-foreground">
                    使用現代框架創建響應式網站和網頁應用程序。
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX 設計</h4>
                  <p className="text-muted-foreground">
                    設計直觀的用戶界面和無縫的用戶體驗。
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">個人知識庫</h4>
                  <p className="text-muted-foreground">
                    親手設計知識庫流程，<br/>
                    涵蓋notion、ai筆記管理師、ai概念引導專家，快速且踏實的獲取知識
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
