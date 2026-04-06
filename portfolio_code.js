/**
 * ================================================================
 *  UMA RAMYA VIGRAHALA — PORTFOLIO CODE FILES
 *  File: portfolio_code.js
 *  Description: Node.js script to generate the Word resume template
 *  Run: node portfolio_code.js
 *  Requires: npm install docx
 * ================================================================
 */

const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, LevelFormat, BorderStyle, WidthType, ShadingType,
} = require('docx');
const fs = require('fs');

// ── COLOR PALETTE ──────────────────────────────────────────────
const COLORS = {
  dark:    "0A0A1A",   // Near-black for headers
  accent:  "1A6B8A",   // Teal blue for section headers & links
  mid:     "4A5568",   // Mid-gray for body text
  light:   "F0F4F8",   // Light bg for metric cells
  green:   "00897B",   // Neon green for emphasis
};

// ── HELPER FUNCTIONS ───────────────────────────────────────────

/** Section divider with colored underline */
function sectionHeader(text) {
  return new Paragraph({
    spacing: { before: 360, after: 120 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: COLORS.accent, space: 4 } },
    children: [
      new TextRun({
        text: text.toUpperCase(),
        bold: true, size: 22,
        font: "Calibri", color: COLORS.accent,
        characterSpacing: 60
      })
    ]
  });
}

/** Bullet list item */
function bullet(text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 60 },
    children: [new TextRun({ text, size: 20, font: "Calibri", color: COLORS.mid })]
  });
}

/** Job entry header row */
function jobHeader(role, company) {
  return new Paragraph({
    spacing: { before: 200, after: 40 },
    children: [
      new TextRun({ text: role, bold: true, size: 24, font: "Calibri", color: COLORS.dark }),
      new TextRun({ text: `   |   ${company}`, size: 20, font: "Calibri", color: COLORS.mid }),
    ]
  });
}

/** Date range in italic accent color */
function jobDate(dates) {
  return new Paragraph({
    spacing: { after: 100 },
    children: [new TextRun({ text: dates, size: 18, font: "Calibri", color: COLORS.accent, italics: true })]
  });
}

/** Empty spacer paragraph */
function spacer(size = 120) {
  return new Paragraph({ spacing: { after: size }, children: [] });
}

// ── METRICS TABLE ─────────────────────────────────────────────

function metricsTable() {
  const metrics = [
    { num: "6+",    label: "Years Experience" },
    { num: "100K+", label: "Daily AI Requests" },
    { num: "40%",   label: "Hallucination Reduction" },
    { num: "5M+",   label: "Documents Indexed" }
  ];
  return new Table({
    width: { size: 10080, type: WidthType.DXA },
    columnWidths: [2520, 2520, 2520, 2520],
    rows: [
      new TableRow({
        children: metrics.map(m => new TableCell({
          width: { size: 2520, type: WidthType.DXA },
          shading: { fill: COLORS.light, type: ShadingType.CLEAR },
          borders: {
            top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }
          },
          margins: { top: 100, bottom: 100, left: 140, right: 140 },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [new TextRun({ text: m.num, bold: true, size: 32, color: COLORS.accent, font: "Calibri" })]
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [new TextRun({ text: m.label, size: 16, color: COLORS.mid, font: "Calibri" })]
            })
          ]
        }))
      })
    ]
  });
}

// ── DOCUMENT ASSEMBLY ─────────────────────────────────────────

const doc = new Document({
  numbering: {
    config: [{
      reference: "bullets",
      levels: [{
        level: 0,
        format: LevelFormat.BULLET,
        text: "▸",
        alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 480, hanging: 240 } } }
      }]
    }]
  },
  styles: {
    default: { document: { run: { font: "Calibri", size: 20, color: COLORS.dark } } }
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 900, right: 1080, bottom: 900, left: 1080 }
      }
    },
    children: [

      // ── HEADER ──────────────────────────────────────────────
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({ text: "UMA RAMYA VIGRAHALA", bold: true, size: 52, font: "Calibri", color: COLORS.dark, characterSpacing: 40 })]
      }),
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "Generative AI Engineer", size: 28, font: "Calibri", color: COLORS.accent, italics: true })]
      }),
      new Paragraph({
        spacing: { after: 240 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: COLORS.accent, space: 4 } },
        children: [
          new TextRun({ text: "McKinney, Texas, USA", size: 18, font: "Calibri", color: COLORS.mid }),
          new TextRun({ text: "   •   your.email@gmail.com   •   linkedin.com/in/uma-ramya-vigrahala   •   github.com/uma-ramya", size: 18, font: "Calibri", color: COLORS.mid }),
        ]
      }),

      // ── CAREER OBJECTIVE ────────────────────────────────────
      sectionHeader("Career Objective"),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({
          text: "Senior AI/ML Engineer with 6+ years of experience building production-scale AI systems across insurance and logistics domains. Specialized in Retrieval-Augmented Generation (RAG), LLM fine-tuning, agentic workflows, and GPU-optimized model serving. Proven track record of delivering enterprise AI platforms serving 100K+ daily requests with measurable impact on cost, automation, and latency.",
          size: 20, font: "Calibri", color: COLORS.mid
        })]
      }),

      // ── KEY METRICS ─────────────────────────────────────────
      metricsTable(),
      spacer(200),

      // ── TECHNICAL SKILLS ────────────────────────────────────
      sectionHeader("Technical Skills"),
      ...[
        ["Generative AI & LLM Systems", "LLMs (GPT, BERT, T5, LLaMA), Transformers, RAG/GraphRAG, Agentic Workflows, Prompt Engineering, Instruction Tuning, Model Evaluation & Guardrails"],
        ["ML & Deep Learning",           "PyTorch, TensorFlow, Keras, Hugging Face, LoRA/PEFT, LangChain, LangGraph"],
        ["Programming & Data",           "Python, SQL, Apache Spark, Kafka, Airflow, BigQuery, Snowflake"],
        ["Vector Search & Databases",    "FAISS, Pinecone, Weaviate, ChromaDB, Qdrant, PostgreSQL, MongoDB, Cassandra"],
        ["MLOps & Observability",        "Docker, Kubernetes, FastAPI, Flask, MLflow, Weights & Biases, DVC, KServe, Prometheus, Grafana, ELK Stack"],
        ["Cloud & DevOps",               "AWS, Azure, GCP, Git, GitHub Actions, Jenkins, Terraform, Helm, Argo Workflows"],
      ].map(([cat, skills]) => new Paragraph({
        spacing: { after: 80 },
        children: [
          new TextRun({ text: cat + ":  ", bold: true, size: 20, font: "Calibri", color: COLORS.dark }),
          new TextRun({ text: skills, size: 20, font: "Calibri", color: COLORS.mid })
        ]
      })),
      spacer(160),

      // ── WORK EXPERIENCE ─────────────────────────────────────
      sectionHeader("Work Experience"),

      // Role 1
      jobHeader("AI/ML Engineer", "McKinney, Texas, USA"),
      jobDate("Sept 2024 – Present"),
      bullet("Architected enterprise-grade Generative AI platform serving 100K+ requests/day with 99.95% availability in regulated insurance environments."),
      bullet("Designed multi-tenant RAG and GraphRAG over 5M+ insurance/legal documents; improved retrieval precision by 32% and reduced LLM hallucinations by 40%."),
      bullet("Reduced end-to-end inference latency to sub-300ms using ONNX Runtime, TensorRT, quantization, and GPU-backed Kubernetes autoscaling."),
      bullet("Fine-tuned 7B–13B parameter transformer models for policy summarization, risk scoring, decision support — reducing manual review by 30%."),
      bullet("Engineered agentic, tool-augmented LLM systems with LangChain and LangGraph for 5,000+ enterprise users, enabling explainable and auditable AI decisions."),
      bullet("Built streaming/ETL platforms processing 50K+ transactions/minute using Spark, Kafka, Flink, Airflow for real-time fraud detection and model retraining."),
      bullet("Implemented AI governance framework with PII-safe retrieval and prompt optimization, improving model consistency by 18%."),

      // Role 2
      jobHeader("Data Scientist", "Caterpillar Inc. (Neovia Logistics) — Bangalore, India"),
      jobDate("Aug 2021 – Jan 2024"),
      bullet("Built Tableau, Power BI, and Looker dashboards powered by advanced SQL/Python, improving asset utilization by 18%."),
      bullet("Engineered Predictive Maintenance and Anomaly Detection models on 500K+ IoT telemetry signals; reduced downtime by 17% and improved failure detection precision by 22%."),
      bullet("Built real-time data pipelines with Spark, Kafka, Flink handling 1M+ events/hour; cut data latency from 4+ hours to under 10 minutes."),
      bullet("Developed production ML pipelines on AWS SageMaker with Docker/Kubernetes orchestration."),
      bullet("Implemented Model Monitoring via Grafana, Prometheus, ELK Stack; reduced incident response time by 40%."),

      // Role 3
      jobHeader("Data Scientist", "Go Digit Insurance — Bangalore, India"),
      jobDate("June 2019 – July 2021"),
      bullet("Built real-time streaming pipelines for 200K+ daily insurance claims and fraud events; enabled near-real-time risk intervention."),
      bullet("Designed NLP/OCR pipelines (BERT, Hugging Face, Tesseract, OpenCV) processing 1M+ policy and KYC documents annually."),
      bullet("Implemented NLP-driven claim categorization; increased processing throughput by 40% and reduced handling time."),
      bullet("Deployed containerized ML services with Docker and Kubernetes; reduced deployment cycles and improved reliability."),
      spacer(120),

      // ── SELECTED PROJECTS ────────────────────────────────────
      sectionHeader("Selected Projects"),

      new Paragraph({
        spacing: { before: 160, after: 60 },
        children: [new TextRun({ text: "Enterprise RAG Knowledge Copilot (Multi-Source Grounded AI)", bold: true, size: 22, font: "Calibri", color: COLORS.dark })]
      }),
      bullet("Scalable RAG over 3M+ enterprise documents with vector search, metadata filtering, and re-ranking for grounded, citation-backed responses."),
      bullet("Hybrid retrieval combining dense embeddings and keyword search, improving answer precision and reducing hallucinations."),
      bullet("Adaptive chunking, dynamic context window allocation, and semantic re-scoring for long-document reasoning."),
      bullet("Evaluation framework: grounding score, citation overlap, semantic faithfulness + integrated feedback loop for continuous optimization."),

      new Paragraph({
        spacing: { before: 160, after: 60 },
        children: [new TextRun({ text: "LLM Fine-Tuning & Alignment Optimization Pipeline", bold: true, size: 22, font: "Calibri", color: COLORS.dark })]
      }),
      bullet("Fine-tuned 7B parameter transformer models using LoRA/PEFT on domain-specific datasets for higher task-specific accuracy."),
      bullet("Applied instruction tuning and preference optimization (RLHF-style) to improve response helpfulness and reduce unsafe outputs."),
      bullet("Automated evaluation harness: hallucination rate, instruction adherence, output consistency."),
      bullet("Reduced inference cost via quantization and optimized GPU batching strategies."),
      spacer(120),

      // ── EDUCATION ────────────────────────────────────────────
      sectionHeader("Education"),
      new Paragraph({
        spacing: { before: 160, after: 40 },
        children: [new TextRun({ text: "Masters in Cloud Computing", bold: true, size: 22, font: "Calibri", color: COLORS.dark })]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "KL University, Vijayawada, India  •  June 2016 – August 2018", size: 18, font: "Calibri", color: COLORS.mid, italics: true })]
      }),
      new Paragraph({
        spacing: { before: 100, after: 40 },
        children: [new TextRun({ text: "Bachelors in Computer Science", bold: true, size: 22, font: "Calibri", color: COLORS.dark })]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({ text: "Vijaya Institute of Technology for Women, Vijayawada, India  •  June 2012 – July 2016", size: 18, font: "Calibri", color: COLORS.mid, italics: true })]
      }),

      // ── PUBLICATION ──────────────────────────────────────────
      sectionHeader("Research Publication"),
      new Paragraph({
        spacing: { before: 160, after: 60 },
        children: [new TextRun({ text: "Sentiment Analysis of Movie Review Using Machine Learning Techniques", bold: true, size: 20, font: "Calibri", color: COLORS.dark })]
      }),
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({ text: "International Journal of Engineering & Technology  •  Vol 7(2.7):676  •  March 2018", size: 18, font: "Calibri", color: COLORS.mid, italics: true })]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({ text: "DOI: 10.14419/ijet.v7i2.7.10921", size: 18, font: "Calibri", color: COLORS.accent })]
      }),

    ]
  }]
});

// ── WRITE FILE ────────────────────────────────────────────────
Packer.toBuffer(doc).then(buffer => {
  const outPath = 'uma_ramya_resume_template.docx';
  fs.writeFileSync(outPath, buffer);
  console.log(`✓ Created: ${outPath}`);
});
