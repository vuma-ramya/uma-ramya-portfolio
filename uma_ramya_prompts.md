# ============================================================
#   UMA RAMYA VIGRAHALA — AI PORTFOLIO GENERATION PROMPT
#   Use this prompt with Claude, ChatGPT, or any LLM to
#   regenerate, update, or customize your portfolio website.
# ============================================================

## MASTER PROMPT — FULL PORTFOLIO REGENERATION

```
You are a world-class frontend engineer and UI/UX designer.
Create a stunning, production-ready single-file HTML portfolio website for:

NAME: Uma Ramya Vigrahala
ROLE: Generative AI Engineer (Senior, 6+ years)
LOCATION: McKinney, Texas, USA

DESIGN DIRECTION:
- Dark, editorial aesthetic with a futuristic / AI-native feel
- Color palette: near-black background (#0a0a0f), electric teal/green accent (#00e5b4), 
  warm gold secondary (#c8a96e), deep purple tertiary (#7c6fcd)
- Typography: Syne (display/headings, Google Fonts), DM Mono (code/labels), 
  Fraunces italic (accent text)
- Custom cursor with mix-blend-mode: exclusion
- Subtle grid background, glowing radial gradients
- Horizontal scrolling ticker of skills
- All animations using CSS transitions and IntersectionObserver (no libraries)
- Fully responsive (mobile breakpoint at 900px)

SECTIONS (in order):
1. Fixed navigation with blur backdrop
2. Hero: name in large type (outlined last name), role, bio, 3 key stats, CTA buttons, photo placeholder
3. Scrolling skills ticker
4. About: bio paragraphs + 4-cell highlight grid (metrics)
5. Skills: 6-column grid (Generative AI & LLM, ML/DL, Programming, Vector DBs, MLOps, Cloud)
6. Experience: vertical timeline with 3 roles
7. Projects: 2-column card grid
8. Education + Research Publication
9. Contact: large display type + link buttons
10. Footer

KEY METRICS TO HIGHLIGHT:
- 100K+ daily AI requests served
- 99.95% platform availability
- 32% retrieval precision improvement
- 40% hallucination reduction
- Sub-300ms inference latency
- 5M+ documents indexed
- 5,000+ enterprise users
- 50K+ transactions/minute pipeline

TECHNICAL SKILLS (grouped):
Generative AI & LLM: LLMs (GPT, BERT, T5, LLaMA), Transformers, RAG, GraphRAG, 
  Agentic Workflows, Prompt Engineering, Instruction Tuning, Model Evaluation & Guardrails
ML & Deep Learning: PyTorch, TensorFlow, Keras, Hugging Face, LoRA/PEFT, LangChain, LangGraph
Programming & Data: Python, SQL, Apache Spark, Kafka, Airflow, BigQuery, Snowflake
Vector Search & DBs: FAISS, Pinecone, Weaviate, ChromaDB, Qdrant, PostgreSQL, MongoDB, Cassandra
MLOps & Observability: Docker, Kubernetes, FastAPI, Flask, MLflow, W&B, DVC, KServe, Prometheus, 
  Grafana, ELK Stack
Cloud & DevOps: AWS, Azure, GCP, Git, GitHub Actions, Jenkins, Terraform, Helm, Argo Workflows

WORK EXPERIENCE:
1. AI/ML Engineer | McKinney, Texas | Sept 2024 – Present
   - Enterprise GenAI platform: 100K+ req/day, 99.95% availability
   - Multi-tenant RAG/GraphRAG: 5M+ docs, 32% precision↑, 40% hallucination↓
   - Sub-300ms inference: ONNX, TensorRT, quantization, GPU Kubernetes
   - Fine-tuned 7B–13B models: 30% manual review reduction
   - Agentic LangChain/LangGraph systems for 5,000+ enterprise users
   - 50K+ txn/min streaming: Spark, Kafka, Flink, Airflow
   - AI governance: PII-safe, 18% consistency improvement

2. Data Scientist | Caterpillar Inc. (Neovia Logistics) | Bangalore, India | Aug 2021 – Jan 2024
   - Tableau/Power BI/Looker dashboards: 18% asset utilization↑
   - Predictive Maintenance on 500K+ IoT signals: 17% downtime↓, 22% precision↑
   - Spark/Kafka/Flink: 1M+ events/hr, latency 4hr → <10min
   - Grafana/Prometheus/ELK: 40% incident response↓

3. Data Scientist | Go Digit Insurance | Bangalore, India | June 2019 – July 2021
   - 200K+ daily claims/fraud events streaming pipeline
   - NLP/OCR: BERT, Hugging Face, Tesseract → 1M+ docs/year
   - Claim categorization: 40% throughput↑
   - Containerized ML: Docker + Kubernetes

PROJECTS:
1. Enterprise RAG Knowledge Copilot — RAG over 3M+ docs, hybrid retrieval, 
   adaptive chunking, evaluation framework (grounding, citation, faithfulness)
2. LLM Fine-Tuning & Alignment Pipeline — LoRA/PEFT 7B params, RLHF-style,
   automated eval harness, GPU-optimized quantization

EDUCATION:
- Masters in Cloud Computing, KL University, Vijayawada (2016–2018)
- Bachelors in Computer Science, Vijaya Inst. of Tech. for Women, Vijayawada (2012–2016)

PUBLICATION:
"Sentiment Analysis of Movie Review Using Machine Learning Techniques"
International Journal of Engineering & Technology, Vol 7(2.7):676, March 2018
DOI: 10.14419/ijet.v7i2.7.10921

OUTPUT: Single self-contained HTML file with embedded CSS and JS.
No external dependencies except Google Fonts.
Include a photo placeholder that can be swapped with: <img src="photo.jpg" class="avatar-img">
```

---

## VARIATION PROMPTS

### Light Mode Version
```
Using the same content as above but create a light-mode version:
Background: warm off-white (#f9f7f2), text: near-black (#0a0a0f),
accent: deep teal (#006d5b), secondary: warm amber (#d4821a).
Typography: Playfair Display + IBM Plex Sans.
Style: refined, editorial, luxury magazine feel.
```

### Minimal/Brutalist Version
```
Using the same content, create a brutalist minimal version:
Black and white only (#000000 and #ffffff), with one red accent (#e84855).
Typography: massive Impact or Anton for headlines, monospace body.
Heavy borders, no rounded corners, raw grid layout.
```

### Interactive/Animated Version
```
Using the same content, add:
- Three.js particle background on hero
- GSAP ScrollTrigger animations for section reveals
- Typed.js cycling through roles on hero
- Tilt.js on project cards
Include all CDN links needed.
```

---

## UPDATE PROMPTS

### Add a New Role
```
Add a new work experience entry to the portfolio:
ROLE: [Job Title]
COMPANY: [Company Name]
LOCATION: [City, Country]
DATES: [Start] – [End or Present]
BULLETS:
- [Achievement 1 with metric]
- [Achievement 2 with metric]
- [Achievement 3]
Insert it at the top of the Experience timeline section.
```

### Add a New Project
```
Add a new project card to the Projects section:
TITLE: [Project Name]
DESCRIPTION: [4 bullet points describing the project and impact]
```

### Update Contact Links
```
Update the contact section with the following real links:
Email: [your@email.com]
LinkedIn: https://linkedin.com/in/[your-handle]
GitHub: https://github.com/[your-handle]
Phone (optional): +1-XXX-XXX-XXXX
```

---

## RESUME TEMPLATE UPDATE PROMPT (for Word .docx via Claude)

```
I need you to update my Word resume template. Use the docx npm library.
Here is the current template structure:
[paste create_template.js content here]

Please make the following changes:
- [Change 1]
- [Change 2]
Output the complete updated JavaScript file.
```

---

## LINKEDIN ABOUT SECTION PROMPT

```
Using Uma Ramya Vigrahala's background below, write a compelling LinkedIn About section:
- 3–4 short paragraphs
- Opening hook about building AI that works at real scale
- Middle: key domains (RAG, LLM fine-tuning, agentic systems, MLOps)
- Concrete metrics (100K+ requests/day, 40% hallucination reduction, sub-300ms latency)
- Closing: what she's open to / looking for
- Max 2,000 characters
- No buzzword-only sentences — each must have substance
```

---
# END OF PROMPT FILE
# Uma Ramya Vigrahala © 2025
