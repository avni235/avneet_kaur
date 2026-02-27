import blogAiSummitCover from "@/assets/blog-ai-summit-cover.png";
import cosmo from "@/assets/cosmo.png";
import ecomm from "@/assets/ecomm.png";
import img1 from "@/assets/1.png";
import img2 from "@/assets/2.png";
import img3 from "@/assets/3.png";
import img4 from "@/assets/4.png";
import img5 from "@/assets/5.png";
import img6 from "@/assets/6.png";
import img7 from "@/assets/7.png";

export interface AnalysisSection {
  heading: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface BlogLinks {
  github?: string;
  dataset?: string;
  notebook?: string;
}

// simple project definitions used on the homepage
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  tags?: string[];
  image?: string;
}

export const projects: Project[] = [
  // populate with your own work; this placeholder prevents runtime errors
  {
    id: "placeholder",
    title: "Placeholder Project",
    shortDescription: "Replace this with your real project entries.",
    tags: ["TypeScript", "React"],
    image: "/assets/placeholder.jpg",
  },
];

export interface Blog {
  id: string;
  title: string;
  date: string;
  readTime: string;
  toolsAndMethods: string; // moved up, tags removed
  coverImage: string;
  shortDescription: string;
  intro: string;
  datasetOverview: string;
  analysisSections: AnalysisSection[];
  conclusion: string;
  gallery?: GalleryImage[];
  limitations?: string;
  links?: BlogLinks;
}

export const blogs: Blog[] = [
  {
    id: "ai-summit-2026-analysis",
    title: "AI Summit 2026 — A Data-Driven Strategic Analysis",
    date: "2026",
    readTime: "12 min read",
    toolsAndMethods: `This project was built using Python, Pandas, NumPy, Matplotlib, Seaborn, NetworkX, and Scikit-learn. Methods included tag frequency analysis, network centrality, topic modeling (LDA), TF-IDF analysis, heatmaps, and time-based aggregation.`,
    coverImage: blogAiSummitCover,
    shortDescription:
      "Most people experience conferences through highlights and keynote announcements. I decided to look at AI Summit 2026 differently — through data. 443 sessions, 2,562 speaker entries, tag networks, topic modeling, and time-based analysis to uncover the real strategic priorities.",
    intro: `Most people experience conferences through highlights, controversies, and keynote announcements. I decided to look at AI Summit 2026 differently — through data.

Instead of watching sessions, I analyzed 443 sessions, 2,562 speaker entries, session themes, speaker affiliations, agenda structure, time slot distribution, and tag networks. The goal was simple: move beyond event summaries and uncover the real strategic priorities of AI Summit 2026.`,

    datasetOverview: `The dataset consisted of two structured JSON files. The Sessions Dataset contained 443 sessions with fields including session title, description, tags, speakers, date, and time. The Speakers Dataset had 2,562 entries covering speaker names, roles, and affiliations. After cleaning and processing, dates and times were standardized, tags were normalized, speaker names were deduplicated, and affiliations were cleaned.`,


    analysisSections: [
      {
        heading: "1. Thematic Priorities — What Did the Summit Actually Focus On?",
        description:
          "Tag frequency analysis revealed the dominant topics across all 443 sessions. The Top 5 tags were: AI Governance & Policy, Inclusion & Equity, India Focus, AI Safety & Trust, and Responsible & Ethical AI. This immediately shows something important — the summit was not primarily technical. Instead of focusing on models, architectures, or engineering, it centered on regulation, ethics, national strategy, and responsible deployment.",
        imageSrc: "/assets/ai-summit/thematic-priorities.jpg",
        imageAlt: "Top tag frequency chart showing AI Governance as the dominant theme",
      },
      {
        heading: "2. Summit Focus Index — Macro Category Breakdown",
        description:
          "Tags were grouped into macro categories to understand the overall balance of the event. Governance-related sessions appeared in 63% of all sessions. In comparison: Inclusion → 41%, Education → 19%, Development → 14%, Multilingual → 5%. This is one of the strongest conclusions from the dataset — AI Summit 2026 was primarily a policy and governance event, not a technical AI conference.",
        imageSrc: "/assets/ai-summit/focus-index.jpg",
        imageAlt: "Bar chart showing governance dominance at 63% of all sessions",
      },
      {
        heading: "3. Tag Network — Governance as the Structural Center",
        description:
          "To understand relationships between themes, a tag co-occurrence network was built and degree + betweenness centrality were calculated. The most central themes were: AI Governance & Policy, India Focus, AI Safety & Trust, Responsible & Ethical AI, and Inclusion & Equity. Strong tag pairings included Governance + Safety (98 sessions), Governance + Inclusion (95 sessions), Governance + India Focus (91 sessions), and Governance + Responsible AI (88 sessions). Governance wasn't just frequent — it was structurally connected to almost every other theme, serving as the core organizing principle of the summit.",
        imageSrc: "/assets/ai-summit/tag-network.jpg",
        imageAlt: "Network graph showing tag co-occurrences with governance at the center",
      },
      {
        heading: "4. Sessions Per Day — Strategic Agenda Structure",
        description:
          "The time analysis revealed deliberate structure behind what appears chaotic in most conferences. Tuesday had the highest session activity and acted as the core summit day. Friday was second highest, closing with major discussions. Wednesday was lower-density, and Thursday hosted very specialized sessions. This distribution shows intentional agenda planning rather than randomness.",
        imageSrc: "/assets/ai-summit/sessions-per-day.jpg",
        imageAlt: "Bar chart of session distribution across days of the week",
      },
      {
        heading: "5. Sessions Per Hour — Morning Priority Peaks",
        description:
          "Peak session hours were 9 AM, 10 AM, and 11 AM. Activity dropped at 12 PM (lunch break), then recovered from 1 PM through 4 PM. This indicates morning sessions were used for high-priority themes — a typical conference optimization pattern that confirms deliberate scheduling decisions.",
        imageSrc: "/assets/ai-summit/sessions-per-hour.jpg",
        imageAlt: "Hourly session distribution chart showing morning peaks",
      },
      {
        heading: "6. Governance Heatmap — Continuous Priority Across All Time Slots",
        description:
          "The heatmap revealed something unexpected: governance sessions appeared consistently across morning, midday, and afternoon slots. Other themes appeared only in certain time windows. This suggests governance was treated as a continuous, top-level priority rather than a specialized niche topic — it permeated the entire event structure.",
        imageSrc: "/assets/ai-summit/governance-heatmap.jpg",
        imageAlt: "Heatmap showing governance session density across all time slots",
      },
      {
        heading: "7. Panel-Driven Format — 84.8% of Sessions Were Panels",
        description:
          "One of the strongest structural findings: the average number of speakers per session was 5.03, and 84.8% of sessions were panel-format. This means the summit was deliberately designed around discussions and multi-stakeholder dialogue rather than lectures or technical demos. This format favors policy debate and institutional participation over engineering deep-dives.",
        imageSrc: "/assets/ai-summit/panel-format.jpg",
        imageAlt: "Pie chart showing 84.8% panel sessions vs other formats",
      },
      {
        heading: "8. NLP Bigrams — Language Patterns in Session Descriptions",
        description:
          "TF-IDF and bigram analysis on session descriptions surfaced the most common language: artificial intelligence, responsible ai, global south, digital public infrastructure, ai adoption, and ai governance. The summit messaging emphasized adoption, policy, infrastructure, and global development — not algorithms, training, or performance benchmarks. This confirms the policy-centric nature of the event at the language level.",
        imageSrc: "/assets/ai-summit/nlp-bigrams.jpg",
        imageAlt: "Word cloud or bar chart of top NLP bigrams from session descriptions",
      },
      {
        heading: "9. Topic Modeling (LDA) — Five Major Thematic Clusters",
        description:
          "LDA topic modeling identified five clusters across all session descriptions. Topic 1 (Governance & Infrastructure): AI, Governance, India, Infrastructure, Innovation. Topic 2 (Emerging Technologies): Synthetic, Blockchain, Provenance. Topic 3 (Entrepreneurship): Entrepreneurship, Deployment, Innovation. Topic 4 (Healthcare AI): Diagnostics, Medical, Imaging. Topic 5 (Future Strategy): 2047, Protocol, Mobility. This confirms one dominant governance theme with several smaller technical and sectoral clusters around it.",
        imageSrc: "/assets/ai-summit/lda-topics.jpg",
        imageAlt: "LDA topic modeling visualization showing 5 clusters",
      },
      {
        heading: "10. Institutional Concentration — Who Shaped the Summit?",
        description:
          "Speaker affiliation analysis revealed the institutional forces behind the event. Top contributors included Nvidia, BRICS Chamber of Commerce, IIT Delhi, Gates Foundation, Google, Microsoft, IBM, and TCS. The summit was shaped by a mix of Big Tech, government institutions, international organizations, and academia — not startups. This reflects a broader trend: AI discourse is increasingly being led by institutional actors.",
        imageSrc: "/assets/ai-summit/institutional-affiliations.jpg",
        imageAlt: "Bar chart of top speaker affiliations by session count",
      },
    ],

    conclusion: `This analysis reveals three major strategic conclusions. First, AI Summit 2026 was policy-centric — governance dominated tag frequency, tag networks, time slots, and NLP results, signaling that AI discussions are shifting from technology development toward regulation and deployment. Second, institutional AI is leading the narrative — governments, large companies, universities, and global organizations shaped the event, suggesting AI is moving from startup experimentation toward institutional adoption. Third, the agenda was carefully structured — patterns in time slots, session density, and theme distribution show the summit was intentionally designed, not random. AI Summit 2026 reflects a clear shift in AI discourse: from building models to governing systems.`,

    limitations: `This analysis is based on session metadata, not full transcripts. Some affiliations were missing, and tagging assumptions affect results. Future work could include speaker network analysis, organization influence mapping, sentiment analysis on session descriptions, and cross-summit comparison over multiple years.`,

    gallery: [
  {
    src: img1,
    alt: "Top 15 tags",
    caption: "Top 15 tags in session descriptions",
  },
  {
    src: img3,
    alt: "Summit Focus Index",
    caption: "Summit Focus Index over time",
  },
  {
    src: img4,
    alt: "Sessions per day",
    caption: "Sessions per day over time",
  },
  {
    src: img5,
    alt: "sessions per hour",
    caption: "Sessions per hour over time",
  },
  {
    src: img6,
    alt: "Macro theme vs Tome slot heatmap",
    caption: "Macro theme vs Time slot heatmap",
  },
  {
    src: img7,
    alt: "Top Affiliations",
    caption: "Top speaker affiliations by session count",
  },
  {
    src: img2,
    alt: "Centrality",
    caption: "Centrality measures for top tags in the co-occurrence network",
  },
],

    links: {
      github: "",
      dataset: "",
      notebook: "",
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "ecommerce-analytics-dashboard",
    title: "E-Commerce Analytics Dashboard — Sales & Customer Intelligence",
    date: "2026",
    readTime: "9 min read",
    toolsAndMethods: `Power BI was used for dashboard development, interactive filtering, KPI monitoring, and drill-down analysis across cities, product categories, time periods, and customers. Excel handled data preprocessing, cleaning, formatting, and structuring. Custom DAX measures were created to calculate Total Revenue, Average Order Value (AOV), Total Orders, Cancellation Rate, Lost Revenue from Cancellations, and Average Items per Transaction.`,
    coverImage: ecomm,
    shortDescription:
      "Modern e-commerce businesses generate massive volumes of transaction data every day. This project builds a comprehensive Power BI analytics dashboard to track ₹1.25B in revenue, 15K+ orders, customer behavior, regional trends, and product performance.",
    intro: `Modern e-commerce businesses generate massive volumes of transaction and customer data every day. However, raw data alone does not support decision-making. Businesses need dashboards that transform data into clear and actionable insights.

This project focuses on building a comprehensive E-Commerce Analytics Dashboard to track sales performance, customer behavior, revenue distribution, regional trends, and product performance. The goal was to create a dashboard that helps businesses monitor performance and make data-driven decisions in real time.`,

    datasetOverview: `The dataset contains structured records of e-commerce transactions. Sales data fields included Product Name, Category, Revenue, Orders, Cancellation Rate, and Order Date. Customer data fields included Customer ID, City, Phone Brand, Operating System, Transaction Value, and Items per Transaction. The dataset represents a realistic e-commerce environment with thousands of transactions.`,


    analysisSections: [
      {
        heading: "1. Sales Performance KPIs — Business Health at a Glance",
        description:
          "The dashboard tracks key business metrics: Revenue → ₹1.25 Billion, Total Orders → 15.69K, Average Order Value → ₹112.85K, Cancellation Rate → 29.72%, Lost Revenue → ₹525M. The high cancellation rate is immediately striking — it represents a massive revenue loss opportunity. Reducing cancellations by even a few percentage points could recover hundreds of millions in lost revenue.",
        imageSrc: "/assets/ecommerce/kpi-overview.jpg",
        imageAlt: "KPI cards showing revenue, orders, AOV, and cancellation rate",
      },
      {
        heading: "2. Product Performance — Premium Products Drive Revenue",
        description:
          "Top revenue products included MacBook Air, OnePlus 9, Sony Headphones, HP Pavilion, and Samsung Galaxy devices. A small number of premium products generated a large portion of total revenue, indicating strong demand concentration in high-value items. This has direct implications for inventory prioritization and promotional strategy.",
        imageSrc: "/assets/ecommerce/product-performance.jpg",
        imageAlt: "Top revenue products ranked by total sales",
      },
      {
        heading: "3. Category Revenue Analysis — Electronics Dominate",
        description:
          "Revenue distribution by category showed Laptops and Mobile Devices at the top, followed by Headphones. Lower revenue categories included Cables, Accessories, and Speakers. High-value electronics dominated revenue generation, suggesting that premium products drive profitability while entry-level accessories generate smaller margins.",
        imageSrc: "/assets/ecommerce/category-revenue.jpg",
        imageAlt: "Category-level revenue breakdown chart",
      },
      {
        heading: "4. Regional Sales Distribution — State-Level Performance",
        description:
          "Geographic analysis revealed strong regional patterns. Top states were Maharashtra, Gujarat, and Rajasthan. Lower revenue regions included Telangana and Delhi. Sales performance varied significantly across states, suggesting clear opportunities for region-specific marketing, targeted promotions, and optimized logistics networks.",
        imageSrc: "/assets/ecommerce/regional-sales.jpg",
        imageAlt: "State-wise revenue map of India",
      },
      {
        heading: "5. Customer Insights — 462 Customers, 16K Transactions",
        description:
          "Key customer metrics: Total Customers → 462, Total Transactions → 16K, Average Transaction Value → ₹79.36K, Avg Items per Transaction → 3, Total Items Sold → 47K+. The ratio of 16K transactions from 462 customers indicates strong repeat purchase behavior — the average customer transacted many times, pointing to a loyal but relatively small customer base.",
        imageSrc: "/assets/ecommerce/customer-insights.jpg",
        imageAlt: "Customer metrics overview dashboard",
      },
      {
        heading: "6. City-Level Customer Distribution",
        description:
          "Customer distribution analysis revealed city-level concentration patterns. Top cities included Jaipur, Kolkata, and Pune. Lower activity was seen in Hyderabad and Delhi. This geographic clustering helps businesses optimize delivery networks, focus advertising budgets in high-density markets, and develop region-specific customer acquisition strategies.",
        imageSrc: "/assets/ecommerce/city-distribution.jpg",
        imageAlt: "Customer count by city bar chart",
      },
      {
        heading: "7. Device & OS Analysis — Android at 85%",
        description:
          "Customer device preferences showed Android at 85% and iOS at 15%. Top phone brands were Xiaomi, Realme, OnePlus, Vivo, and Samsung — all mid-range Android devices. This signals a price-sensitive, value-oriented customer base. For product strategy, it suggests prioritizing mid-range electronics. For digital marketing, it means optimizing for Android platforms and app experiences.",
        imageSrc: "/assets/ecommerce/device-analysis.jpg",
        imageAlt: "OS distribution pie chart and phone brand breakdown",
      },
      {
        heading: "8. Monthly Revenue Trends — Predictable Seasonal Patterns",
        description:
          "Monthly analysis revealed that revenue fluctuated across months in predictable patterns. These seasonal cycles provide a foundation for proactive business planning — scheduling promotions before demand peaks, pre-positioning inventory to avoid stockouts, and forecasting cash flow more accurately. Time-based patterns are among the most actionable insights for operational teams.",
        imageSrc: "/assets/ecommerce/monthly-trends.jpg",
        imageAlt: "Monthly revenue trend line chart",
      },
    ],

    conclusion: `This dashboard demonstrates how a structured analytics solution can transform raw e-commerce data into a decision-support system. Key findings include the significant impact of the 29.72% cancellation rate (₹525M in lost revenue), strong concentration of revenue in premium electronics, regional demand variation across Indian states, and a predominantly Android mid-range device user base. Future extensions could include predictive sales forecasting, Customer Lifetime Value modeling, churn prediction, automated data refresh, and real-time reporting through API integrations.`,

    limitations: `Analysis relies on transaction-level data only. Customer acquisition costs, marketing spend, and supply chain data are not included. Future versions should integrate these data sources for a more complete picture of unit economics.`,

    gallery: [],

    links: {
      github: "",
      dataset: "",
      notebook: "",
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "cosmoinsights-cosmetics-analysis",
    title: "CosmoInsights — A Data-Driven Analysis of E-Commerce Cosmetics Sales",
    date: "2026",
    readTime: "8 min read",
    toolsAndMethods: `Power BI was used for interactive dashboards, drill-down analysis, KPI tracking, and business reporting. Excel handled data cleaning, aggregation, formatting, and pivot analysis. Python with Pandas, Matplotlib, and Seaborn was used for exploratory analysis and pattern identification. More than 10 custom DAX measures were created including Total Revenue, Average Order Value, Monthly Sales Growth, Repeat Customer Rate, Revenue Segmentation, and Customer Frequency Metrics.`,
    coverImage: cosmo,
    shortDescription:
      "E-commerce has transformed the cosmetics industry. CosmoInsights is a data-driven analysis of 50,000+ transactions to uncover which products drive revenue, where demand is highest, and which customers are most valuable.",
    intro: `E-commerce has transformed the cosmetics industry. Customers now discover, compare, and purchase beauty products entirely online. But with thousands of transactions happening daily, brands often struggle to understand which products drive the most revenue, where demand is highest, and how customers behave over time.

To answer these questions, I built CosmoInsights — a data-driven analysis of e-commerce cosmetics sales. Instead of looking at raw sales numbers, this project focuses on extracting actionable insights that can improve marketing strategy, inventory planning, and customer experience.`,

    datasetOverview: `The dataset contained 50,000+ customer transactions from an online cosmetics platform. Each record included Product Category, Customer ID, Date of Purchase, Region, Revenue, and Order Count. After preprocessing, the dataset was optimized for analysis and visualization.`,


    analysisSections: [
      {
        heading: "1. Product Performance — Which Products Generate the Most Revenue?",
        description:
          "The analysis identified top-selling product categories, high-revenue products, and underperforming categories. A small number of product categories contributed a significant portion of total revenue — a concentrated demand pattern typical in e-commerce. This insight directly informs inventory prioritization and marketing budget allocation.",
        imageSrc: "/assets/cosmo/product-performance.jpg",
        imageAlt: "Bar chart of top revenue-generating product categories",
      },
      {
        heading: "2. Regional Sales Insights — Geographic Demand Patterns",
        description:
          "The dashboard revealed high-performing regions, low-demand areas, and regional revenue distribution. Different regions showed distinct product preferences and purchasing patterns. This suggests that regional inventory strategies — stocking products based on local demand — can significantly improve operational efficiency and reduce stockouts.",
        imageSrc: "/assets/cosmo/regional-sales.jpg",
        imageAlt: "Regional sales map showing demand distribution",
      },
      {
        heading: "3. Sales Trends Over Time — Seasonal Cycles",
        description:
          "Monthly sales analysis revealed seasonal patterns in the data. Sales patterns followed predictable seasonal cycles with identifiable growth periods and low-activity periods. This insight can help businesses plan promotions, adjust inventory ahead of demand spikes, and optimize marketing campaigns to match customer behavior.",
        imageSrc: "/assets/cosmo/sales-trends.jpg",
        imageAlt: "Monthly revenue trend line chart",
      },
      {
        heading: "4. Customer Behavior Analysis — Who Drives Revenue?",
        description:
          "The analysis tracked repeat customers, purchase frequency, and revenue per customer. A relatively small group of repeat customers generated a large portion of total revenue — confirming the importance of customer retention strategies over purely acquisition-focused marketing. Loyal customers are the backbone of sustainable e-commerce revenue.",
        imageSrc: "/assets/cosmo/customer-behavior.jpg",
        imageAlt: "Customer segmentation chart showing revenue share by loyalty tier",
      },
      {
        heading: "5. Average Order Value (AOV) — Revenue Efficiency",
        description:
          "Average Order Value was calculated as Total Revenue ÷ Number of Orders. This metric helped evaluate customer spending patterns, revenue efficiency, and marketing effectiveness. Increasing AOV is one of the most efficient levers for improving revenue without increasing customer acquisition costs — making it a key strategic metric for any e-commerce business.",
        imageSrc: "/assets/cosmo/aov.jpg",
        imageAlt: "AOV trend chart over time",
      },
      {
        heading: "6. Customer Loyalty Segmentation — High-Value Buyers",
        description:
          "Customer segmentation revealed three tiers: high-frequency buyers, medium-frequency buyers, and one-time buyers. Loyal customers showed consistent purchase behavior across time periods and represent the most valuable segment. Identifying these customers enables targeted retention campaigns, loyalty programs, and personalized marketing that maximizes lifetime value.",
        imageSrc: "/assets/cosmo/loyalty-segmentation.jpg",
        imageAlt: "Customer loyalty pie chart segmented by purchase frequency",
      },
    ],

    conclusion: `CosmoInsights demonstrates how structured analysis can move raw transaction data to actionable business intelligence. Key insights include concentrated product demand patterns, region-specific purchasing preferences, predictable seasonal sales cycles, and the outsized revenue contribution of loyal repeat customers. For inventory, these findings suggest regional stocking strategies. For marketing, they point to retention-focused campaigns targeting high-frequency buyers. Future extensions could include predictive time-series forecasting, Customer Lifetime Value modeling, churn prediction, and AI-powered recommendation engines.`,

    limitations: `Analysis is limited to the available transaction fields. External factors like pricing changes, promotions, and competitor activity are not captured in the dataset. Future work should incorporate marketing spend data and customer feedback to enrich the behavioral analysis.`,

    gallery: [],

    links: {
      github: "",
      dataset: "",
      notebook: "",
    },
  },

];