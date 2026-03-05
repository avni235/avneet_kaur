import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { blogs, devProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="section-container">
      {/* Data Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Featured <span className="gradient-text">Data Projects</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mb-8">
          Data analysis and insights that tell a story.
        </p>

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
      </motion.div>

      {/* Dev Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Featured <span className="gradient-text">Dev Projects</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mb-8">
          Full-stack applications and interactive web experiences.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={{
                id: project.id,
                title: project.title,
                shortDescription: project.shortDescription,
                image: project.image,
                link: project.link,
              }}
              index={i}
              buttonText="Check It Out"
              onClick={() => project.link && window.open(project.link, "_blank")}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
