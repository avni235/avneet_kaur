import { motion } from "framer-motion";
import { Code2, Database, BarChart3, BrainCircuit, Table2 } from "lucide-react";

const skills = [
  { name: "Python", icon: Code2 },
  { name: "Pandas", icon: Table2 },
  { name: "Data Visualization", icon: BarChart3 },
  { name: "SQL", icon: Database },
  { name: "ML Basics", icon: BrainCircuit },
];

const tools = ["Python", "Jupyter Notebook", "Excel", "Power BI", "GitHub"];

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
          I'm a Computer Science student with a deep passion for data. I love turning raw
          datasets into meaningful insights that drive decisions. From exploratory analysis to
          building dashboards, I'm constantly learning and experimenting with data tools and
          techniques.
        </p>
      </motion.div>

      {/* Skills */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12"
      >
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              variants={item}
              className="glass rounded-xl p-5 flex flex-col items-center gap-3 group hover:glow-box transition-all duration-300"
            >
              <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Tools */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Tools I Use</h3>
        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 rounded-full text-xs font-mono font-medium glass border-primary/20 text-primary"
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
