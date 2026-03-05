import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
  index: number;
  onClick: () => void;
  buttonText?: string;
}

export default function ProjectCard({ project, index, onClick, buttonText = "Read More" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="perspective-1000 group"
    >
      <div
        onClick={onClick}
        className="glass rounded-xl overflow-hidden cursor-pointer transition-all duration-500 group-hover:glow-box group-hover:-translate-y-2 gradient-border h-full flex flex-col"
      >
        {/* Image placeholder */}
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
        ) : (
          <div className="h-40 bg-gradient-to-br from-primary/10 via-secondary/10 to-muted flex items-center justify-center">
            <div className="text-4xl opacity-40">📊</div>
          </div>
        )}

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
            {project.shortDescription}
          </p>

          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-1 rounded-md bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {buttonText} <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
