import { motion } from "framer-motion";

const skillCategories = {
  Languages: ["Python", "SQL", "C++", "TypeScript", "JavaScript"],
  "Data Analysis": ["Pandas", "NumPy", "Data Cleaning", "Exploratory Data Analysis"],
  Visualization: ["Power BI", "Matplotlib", "Seaborn", "Tableau (optional)"],
  Tools: ["Jupyter Notebook", "Excel", "Git", "PostgreSQL", "MongoDB", "Postman"],
  Development: ["React", "Node.js", "REST APIs", "Django", "GraphQL", "Tailwind", "Next.js", "Drizzle ORM"],
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          I'm a Computer Science student at Guru Tegh Bahadur Institute of Technology with a strong interest in data analytics and data-driven problem solving. I work with Python, SQL, and visualization tools to analyze datasets, identify trends, and communicate insights clearly. My background in full-stack development allows me to also build interactive dashboards and data tools that turn insights into usable products. I'm particularly interested in data storytelling, analytics, and strategic decision-making through data.
        </p>
      </motion.div>

      {/* Skills by Category */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        {Object.entries(skillCategories).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold mb-4 text-muted-foreground">{category}</h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {items.map((skill) => (
                <motion.div
                  key={skill}
                  variants={item}
                  className="glass rounded-xl p-5 flex flex-col items-center gap-3 group hover:glow-box transition-all duration-300"
                >
                  <span className="text-sm font-medium text-foreground">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
