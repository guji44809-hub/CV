import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-6 pt-20 tech-grid">
      {/* Background Showreel Simulation */}
      <div className="absolute inset-0 z-0 opacity-30 grayscale blur-[120px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/40 rounded-full animate-pulse" />
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9] text-glow">
            我用 <span className="text-primary italic">1/60 秒</span> 的精準，
            <br />
            定義未來的互動體驗。
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="max-w-2xl mx-auto mb-10"
        >
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            從國中時期的動漫剪輯 (AMV) 到現在的 Unity 遊戲開發；
            我在 After Effects 的關鍵幀中尋找美感，在 Python 的代碼行間建立秩序。
          </p>
          <p className="mt-4 text-lg font-semibold text-primary/80">
            我是鄧宇庭，一名將視覺直覺轉化為數位邏輯的開發者。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button 
            size="lg" 
            onClick={scrollToProjects}
            className="rounded-full px-8 h-14 text-lg font-semibold group bg-primary text-primary-foreground hover:shadow-[0_0_30px_rgba(var(--color-primary),0.4)] transition-all duration-300"
          >
            查看作品集
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" className="rounded-full w-14 h-14 border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all">
              <Mail className="w-6 h-6" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Rail Text */}
      <div className="absolute left-6 bottom-10 hidden xl:block">
        <p className="[writing-mode:vertical-rl] rotate-180 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50 font-mono">
          Precision • Logic • Aesthetic • Motion
        </p>
      </div>
      <div className="absolute right-6 bottom-10 hidden xl:block">
        <p className="[writing-mode:vertical-rl] text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50 font-mono">
          Vibe Coding • Unity • After Effects
        </p>
      </div>
    </section>
  );
}
