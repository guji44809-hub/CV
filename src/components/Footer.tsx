import { motion } from "motion/react";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer id="contact" className="py-24 bg-background border-t border-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      <div className="container mx-auto max-w-5xl px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-glow">
            準備好一起創造<br />下一個 <span className="text-primary italic">Vibe</span> 了嗎？
          </h2>
          <Button 
            size="lg" 
            className="rounded-full px-10 h-16 text-xl font-bold group bg-primary text-primary-foreground hover:shadow-[0_0_30px_rgba(var(--color-primary),0.5)] transition-all duration-300"
            onClick={() => window.location.href = 'mailto:teresateng1059@gmail.com'}
          >
            聯絡我
            <ArrowUpRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </motion.div>

        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="flex justify-center gap-6">
            <a 
              href="mailto:teresateng1059@gmail.com" 
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              title="Email Me"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="tel:0958842772" 
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              title="Call Me"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">
              <span className="text-primary/60 mr-2">Email:</span> teresateng1059@gmail.com
            </p>
            <p className="text-sm font-medium text-muted-foreground">
              <span className="text-primary/60 mr-2">Phone:</span> 0958-842-772
            </p>
          </div>
        </div>

        <p className="text-xs font-mono text-muted-foreground uppercase tracking-[0.3em] opacity-50">
          © 2026 Yu-Ting Teng • Built with Vibe Coding & Logic
        </p>
      </div>
    </footer>
  );
}
