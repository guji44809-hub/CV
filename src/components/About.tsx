import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 sticky top-24 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-8 shadow-[0_0_40px_rgba(var(--color-primary),0.15)] group border border-primary/20">
                <img
                  src="https://storage.googleapis.com/static-content-prod/2026-04-12/qvGpbnDCffc_yu-ting-photo.jpg"
                  alt="鄧宇庭"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   <div className="h-1 w-12 bg-primary rounded-full mb-2" />
                   <p className="text-xs font-mono text-primary uppercase tracking-widest">Digital Architect</p>
                </div>
              </div>
              <h2 className="text-4xl font-bold tracking-tight mb-4 text-glow">關於我</h2>
              <p className="text-muted-foreground font-medium mb-6">
                一個關於「節奏」的故事
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="rounded-full px-3 bg-primary/10 text-primary border-primary/20">視覺直覺</Badge>
                  <Badge variant="secondary" className="rounded-full px-3 bg-primary/10 text-primary border-primary/20">工程思維</Badge>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="rounded-full px-3 bg-primary/10 text-primary border-primary/20">心理學洞察</Badge>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary/90">「我的邏輯，起源於一段動漫節奏。」</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                故事的起點不在大學實驗室，而是在國中課後那台裝載著 Video Star 的手機裡。當別人只是在看影片時，我正在拆解每一幀的畫面。那時候的我，著迷於如何透過精準的卡點與光影特效，讓觀眾在短短 15 秒內感到心跳加速。
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                這份對「節奏」的偏執，引導我走向了程式開發。當我第一次接觸 Python 與 C# 時，我發現程式碼就是另一種形式的剪輯——你必須精確地排列每一行指令，系統才能完美運轉。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                進入佛光大學資應系後，我開始將這份視覺直覺與工程思維結合：我用 After Effects (AE) 雕琢介面的質感；我用 Unity 構築互動的靈魂；我用心理學洞察使用者的情緒。
              </p>
            </motion.div>

            <Separator className="bg-primary/10" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "視覺積累", value: "8年+", desc: "從國中開始的剪輯熱情" },
                { label: "剪輯經驗", value: "1000h+", desc: "AE 與 Video Star 實戰" },
                { label: "技術棧", value: "C# / Python", desc: "Unity 與 自動化開發" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <Card className="bg-background/40 border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-sm group">
                    <CardContent className="pt-6">
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1 group-hover:text-primary transition-colors">{stat.label}</p>
                      <p className="text-3xl font-bold mb-1 text-glow">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
