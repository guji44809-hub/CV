import { motion } from "motion/react";
import { CheckCircle2, Zap, Brain, Code2 } from "lucide-react";

const edges = [
  {
    title: "高穩定度的熱忱",
    desc: "從國中就開始做這件事，代表對數位內容有極高的熱愛，不是為了作業才學。",
    icon: Zap,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    title: "極強的學習遷移能力",
    desc: "從 Video Star 玩到 AE，再跨足到程式開發，證明具備極佳的「自學基因」。",
    icon: Brain,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "稀有的跨界人才",
    desc: "懂寫 C# 的工程師很多，懂 AE 特效的設計師也很多，但兩者都會的人極少。",
    icon: Code2,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export default function CompetitiveEdge() {
  return (
    <section id="edge" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-glow">為什麼選擇我？</h2>
          <p className="text-muted-foreground">
            Competitive Edge — 結合視覺感性與工程理性的獨特優勢。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {edges.map((edge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-3xl bg-muted/10 border border-primary/10 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(var(--color-primary),0.1)] overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-12 translate-x-12 blur-2xl group-hover:bg-primary/10 transition-colors" />
              
              <div className={`w-14 h-14 rounded-2xl ${edge.bg} ${edge.color} flex items-center justify-center mb-6 border border-white/5 shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                <edge.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{edge.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {edge.desc}
              </p>
              <div className="mt-6 flex items-center text-xs font-bold text-primary uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Verified Skill
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
