import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:avneet.dhingra235@gmail.com", text: "avneet.dhingra235@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/avneet-kaur2/", text: "linkedin.com/in/avneet-kaur2" },
  { icon: Github, label: "GitHub", href: "https://github.com/avni235", text: "github.com/avni235" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/avneet_exe", text: "instagram.com/avneet_exe" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-muted-foreground mb-10">
          I'd love to connect — whether it's about data, projects, or opportunities.
        </p>

        <div className="flex flex-col gap-4">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl px-6 py-4 flex items-center gap-4 hover:glow-box transition-all duration-300 group"
              >
                <Icon className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">{link.label}</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {link.text}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </motion.div>

      <div className="text-center mt-20 text-xs text-muted-foreground/50">
        © {new Date().getFullYear()} Avneet. Built with passion and data.
      </div>
    </section>
  );
}
