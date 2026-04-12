import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play } from "lucide-react";

const projects = [
  {
    title: "視覺美學的極致追求",
    subtitle: "High-End Motion Design",
    desc: "從國中累積至今的 1,000+ 小時剪輯經驗。在毫秒之間創造視覺衝擊力，並維持專業級的合成質感。",
    tags: ["After Effects", "Motion Tracking", "Particle Systems"],
    value: "帶給團隊一眼看出畫面美醜的 UI/UX 直覺。",
    image: "https://picsum.photos/seed/motion/800/600?blur=2",
    videoId: "0svpZ3RKYDY",
  },
  {
    title: "沉浸式敘事開發",
    subtitle: "Interactive Storytelling",
    desc: "結合動漫敘事感的遊戲作品《雪夜殘響》。將靜態的文字故事，轉化為具備「情緒重量」的互動遊戲。",
    tags: ["Unity", "C#", "AI Generation"],
    value: "具備將創意構思完整落地為技術實踐的開發能力。",
    image: "https://picsum.photos/seed/game/800/600?blur=2",
    videoId: "qvGpbnDCffc",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-glow">精選專案</h2>
          <p className="text-muted-foreground max-w-xl">
            將「愛好」專業化，展現跨越視覺設計與程式開發的綜合實力。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <Card className="group overflow-hidden border border-primary/10 bg-muted/20 hover:bg-muted/30 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(var(--color-primary),0.1)]">
                <div className="relative aspect-video overflow-hidden bg-black">
                  {project.videoId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${project.videoId}?autoplay=0&mute=1&controls=1&rel=0`}
                      title={project.title}
                      className="w-full h-full border-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Play className="w-12 h-12 text-white fill-white" />
                      </div>
                    </>
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/80 backdrop-blur-md text-primary-foreground border-none">
                      {project.subtitle}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="rounded-full font-mono text-[10px] uppercase tracking-wider border-primary/30 text-primary/80">
                      Project {i + 1}
                    </Badge>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[10px] rounded-full px-2 bg-primary/5 text-primary/70 border-primary/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-primary/10">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-1">Impact</p>
                    <p className="text-sm font-medium">{project.value}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
