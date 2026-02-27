import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { blogs } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          My <span className="gradient-text">Blog Posts</span>
        </h2>
        <p className="text-muted-foreground max-w-xl">
          Each article dives into data, insights, and storytelling.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, i) => (
          <ProjectCard
            key={blog.id}
            project={{
              id: blog.id,
              title: blog.title,
              shortDescription: blog.shortDescription,
              image: blog.coverImage,
            }}
            index={i}
            onClick={() => navigate(`/blog/${blog.id}`)}
          />
        ))}
      </div>
    </section>
  );
}
