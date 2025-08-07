import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // 前端
  { name: "HTML", level: 80, category: "前端" },
  { name: "CSS", level: 75, category: "前端" },
  { name: "JavaScript", level: 70, category: "前端" },
  { name: "ReactJS", level: 65, category: "前端" },
  { name: "Tailwind CSS", level: 60, category: "前端" },

  // 後端
  { name: "Node.js", level: 50, category: "後端" },
  { name: "Express", level: 40, category: "後端" },
  { name: "Python", level: 60, category: "後端" },
  { name: "Flask", level: 30, category: "後端" },

  // 資料庫
  { name: "MySQL", level: 50, category: "資料庫" },
  { name: "MongoDB", level: 40, category: "資料庫" },
  { name: "Firebase", level: 30, category: "資料庫" },

  // 工具組
  { name: "Git", level: 60, category: "工具組" },
  { name: "Notion", level: 70, category: "工具組" },
  { name: "VS Code", level: 65, category: "工具組" },
  { name: "Figma", level: 40, category: "工具組" },
  { name: "Postman", level: 35, category: "工具組" },
];

const categories = ["全部", "前端", "後端", "資料庫", "工具組"];

export const SkillsSection = () => {
	const [activeCategory, setActiveCategory] = useState("全部");

	const filteredSkills = activeCategory === "全部"
		? skills
		: skills.filter((skill) => skill.category === activeCategory);
	return (
		<section id="skills" className="py-24 px-4 relative bg-secondary/30">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
					我的 <span className="text-primary">技能</span>
				</h2>

				<div className="flex flex-wrap justify-center gap-4 mb-12">
	{categories.map((category, key) => (
		<button
			key={key}
			onClick={() => setActiveCategory(category)}
			className={cn(
				"px-5 py-2 rounded-full transition-colors duration-300 capitalize",
				activeCategory === category
					? "bg-primary text-primary-foreground"
					: "bg-secondary/70 text-foreground hover:bg-secondary"
			)}
		>
			{category}
		</button>
	))}
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredSkills.map((skill, key) => (
						<div
							key={key}
							className="bg-card p-6 rounded-lg shadow-xs card-hover"
						>
							<div className="text-left mb-4">
								<h3 className="font-semibold text-lg"> {skill.name}</h3>
							</div>
							<div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
								<div
									className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
									style={{ width: skill.level + "%" }}
								/>
							</div>

							<div className="text-right mt-1">
								<span className="text-sm text-muted-foreground">
									{skill.level}% 
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
