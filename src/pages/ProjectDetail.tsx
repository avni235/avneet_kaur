import { useParams, useNavigate } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Github, Database, BookOpen } from "lucide-react";
import { blogs, type Blog, type AnalysisSection } from "../data/projects";

// ── Animation helpers ──────────────────────────────────────────────────────────

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
});

// ── Sub-components ─────────────────────────────────────────────────────────────

interface SectionHeadingProps {
  children: React.ReactNode;
}

function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-xl font-bold mb-3 text-foreground flex items-center gap-3">
      <span className="w-1 h-6 rounded-full bg-gradient-to-b from-primary to-secondary inline-block shrink-0" />
      {children}
    </h2>
  );
}

interface ProseProps {
  children: React.ReactNode;
}

function Prose({ children }: ProseProps) {
  return (
    <p className="text-muted-foreground leading-relaxed pl-4 border-l border-border/50 whitespace-pre-line">
      {children}
    </p>
  );
}

interface AnalysisSectionCardProps {
  section: AnalysisSection;
  index: number;
}

function AnalysisSectionCard({ section, index }: AnalysisSectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.06 }}
    >
      {/* Heading */}
      <h2 className="text-xl font-bold mb-4 text-foreground flex items-start gap-3">
        <span className="mt-1 shrink-0 w-1 h-6 rounded-full bg-gradient-to-b from-primary to-secondary inline-block" />
        <span>{section.heading}</span>
      </h2>

      {/* Image */}
      {section.imageSrc && (
        <div className="rounded-xl overflow-hidden mb-4 glow-box border border-border/40">
          <img
            src={section.imageSrc}
            alt={section.imageAlt}
            className="w-full object-cover"
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              const parent = e.currentTarget.parentElement;
              if (parent) parent.style.display = "none";
            }}
          />
        </div>
      )}

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed pl-4 border-l border-border/50">
        {section.description}
      </p>
    </motion.div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const blog: Blog | undefined = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog not found</h1>
          <button
            onClick={() => navigate("/")}
            className="text-primary hover:underline"
          >
            Go back home
          </button>
        </div>
      </div>
    );
  }

  const hasLinks: boolean = Boolean(
    blog.links?.github || blog.links?.dataset || blog.links?.notebook
  );

  return (
    <div className="min-h-screen bg-background">

      {/* ── Sticky header ─────────────────────────────────────────────────────── */}
      <div className="glass-strong border-b border-border/50 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Back
          </button>
          <span className="text-muted-foreground/40 text-sm">|</span>
          <span className="text-xs font-mono text-muted-foreground truncate max-w-xs">
            {blog.title}
          </span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-16">

        {/* ── Hero ──────────────────────────────────────────────────────────────── */}
        <motion.div {...fadeUp(0)} className="mb-10">
  
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            {blog.title}
          </h1>

          {/* Meta row */}
          <div className="flex items-center gap-5 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {blog.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {blog.readTime}
            </span>
          </div>

          {/* Tools & Methods (moved) */}
          <motion.div {...fadeUp(0.08)} className="glass rounded-xl p-6 mb-6">
            <h3 className="text-sm font-mono text-primary mb-3 uppercase tracking-wider">
              Tools &amp; Methods
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {blog.toolsAndMethods}
            </p>
          </motion.div>

          {/* Short description */}
          <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-4">
            {blog.shortDescription}
          </p>
        </motion.div>

        {/* ── Cover Image ───────────────────────────────────────────────────────── */}
        {blog.coverImage && (
          <motion.div {...fadeUp(0.06)} className="mb-12 rounded-xl overflow-hidden glow-box">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full rounded-xl object-cover"
            />
          </motion.div>
        )}

        {/* ── Introduction ──────────────────────────────────────────────────────── */}
        <motion.div {...fadeUp(0.1)} className="mb-12">
          <SectionHeading>Introduction</SectionHeading>
          <Prose>{blog.intro}</Prose>
        </motion.div>

        {/* ── Dataset Overview ──────────────────────────────────────────────────── */}
        <motion.div {...fadeUp(0.13)} className="mb-10">
          <SectionHeading>Dataset Overview</SectionHeading>
          <Prose>{blog.datasetOverview}</Prose>
        </motion.div>


        {/* ── Analysis Sections (image + description pairs) ─────────────────────── */}
        <div className="mb-12 space-y-16">
          {blog.analysisSections.map((section: AnalysisSection, i: number) => (
            <AnalysisSectionCard key={section.heading} section={section} index={i} />
          ))}
        </div>

        {/* ── Conclusion ────────────────────────────────────────────────────────── */}
        <motion.div {...fadeUp(0.25)} className="mb-10">
          <SectionHeading>Conclusion</SectionHeading>
          <Prose>{blog.conclusion}</Prose>
        </motion.div>

        {/* ── Limitations & Future Work ─────────────────────────────────────────── */}
        {blog.limitations && (
          <motion.div {...fadeUp(0.28)} className="mb-12">
            <SectionHeading>Limitations &amp; Future Work</SectionHeading>
            <Prose>{blog.limitations}</Prose>
          </motion.div>
        )}

        {/* ── Gallery / Visuals ────────────────────────────────────────────────── */}
        {blog.gallery && blog.gallery.length > 0 && (
          <motion.div {...fadeUp(0.32)} className="mb-12">
            <SectionHeading>Analysis Visuals</SectionHeading>
            <div className="grid md:grid-cols-2 gap-4">
              {blog.gallery.map((image, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-xl overflow-hidden glow-box border border-border/40"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      const parent = e.currentTarget.parentElement;
                      if (parent) parent.style.display = "none";
                    }}
                  />
                  {image.caption && (
                    <p className="p-3 bg-muted/50 text-xs text-muted-foreground">
                      {image.caption}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── Project Links ─────────────────────────────────────────────────────── */}
        {hasLinks && (
          <motion.div {...fadeUp(0.3)} className="glass rounded-xl p-6 mb-12">
            <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">
              Project Links
            </h3>
            <div className="flex flex-wrap gap-3">
              {blog.links?.github && (
                <a
                  href={blog.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors"
                >
                  <Github size={14} />
                  GitHub
                </a>
              )}
              {blog.links?.dataset && (
                <a
                  href={blog.links.dataset}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors"
                >
                  <Database size={14} />
                  Dataset
                </a>
              )}
              {blog.links?.notebook && (
                <a
                  href={blog.links.notebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors"
                >
                  <BookOpen size={14} />
                  Notebook
                </a>
              )}
            </div>
          </motion.div>
        )}

        {/* ── Back button ───────────────────────────────────────────────────────── */}
        <div className="pt-8 border-t border-border/50">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <ArrowLeft size={14} />
            Back to all blogs
          </button>
        </div>

      </article>
    </div>
  );
}