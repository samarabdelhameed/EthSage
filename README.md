# EthSage: MCP Agent for Smart Impact Scoring of Ethereum Open Source Projects

## 📌 Overview

**EthSage** is an intelligent evaluation framework that leverages the **Model Context Protocol (MCP)** with **Claude API**, powered by **Bun + Astro**, to assess the impact of open-source Ethereum repositories.

This system is designed to produce **15,000 weighted scores** quantifying the contributions of key repositories to solving Ethereum’s major pain points:

- 🧠 Scalability
- ⛽ Gas Efficiency
- 🔐 Security
- 🌐 UX & Ecosystem Adoption

EthSage directly addresses the challenge of fair funding and resource allocation in Ethereum’s open-source ecosystem.

---

## 🚨 Problem Statement

Thousands of Ethereum-related repositories exist, but there's no structured, unbiased system to:

- Score the **real-world impact** of each repo.
- Determine which projects most significantly contribute to Ethereum’s health.
- Allocate funding **fairly and transparently** based on contribution.

> 🔎 **Current issue:** Judging is subjective and slow, relying heavily on manual review.

---

## ✅ Our Solution

EthSage introduces:

- 🔁 **Automated repo evaluation pipeline** using GitHub + Claude (via MCP)
- 🧠 **AI-driven scoring engine** analyzing README content, metadata, and dependencies
- 📊 **Interactive dashboard** to explore top impactful projects
- 🧱 **Modular architecture** deployable by the community

---

## 🔧 Tech Stack

| Layer      | Tech Stack                               |
| ---------- | ---------------------------------------- |
| Frontend   | Astro + TailwindCSS + Chart.js           |
| Backend    | Bun (Node-compatible) + Claude API       |
| Database   | Xata (Cloud-native, search-ready)        |
| AI Layer   | MCP Server + Claude LLM + Custom Prompts |
| Data Layer | GitHub GraphQL API + Dependency Graph    |

---

## 🧩 Architecture Diagram

```plaintext
       +-----------------------+
       |   Astro Frontend UI  |
       +-----------------------+
                  |
                  v
        +----------------------+
        |   MCP Agent (Bun)    |
        +----------------------+
                  |
          +-------+-------+
          |               |
          v               v
  Claude API      GitHub GraphQL API
    (Scoring)          (Repo Metadata)
          |               |
          +-------+-------+
                  v
             +--------+
             |  Xata  |  <--- Storage for repos, scores, and weights
             +--------+
```

---

## 🧪 Evaluation Dimensions

Each project is scored along 4 axes (0.0 to 1.0):

- **Scalability**: Layer 2 support, modularity, throughput gains.
- **Gas Efficiency**: Optimizations, lower calldata/storage use.
- **Security**: Audits, safe patterns, exploit prevention.
- **UX & Ecosystem**: Developer friendliness, accessibility, community traction.

---

## 🔄 Workflow

### Day 1: Setup

- Astro UI scaffold
- Bun + MCP agent routes setup
- Claude API key config
- Xata DB initialized

### Day 2: GitHub Integration

- Fetch: stars, forks, tags, README
- Store metadata in `repositories` table

### Day 3: Evaluator Engine

- Prompt Claude with metadata
- Save scores per dimension

### Day 4: Weight Generation

- Build `source → target` graph from dependencies
- Compute `15,000` weighted links
- Store in `weights` table

### Day 5: Frontend + Submission

- Dashboard, table, filter, search
- Visualize top scores
- Export to CSV + GitHub + Cryptopond submission

---

## 🧠 Claude Prompt Example

```text
You are an Ethereum core researcher.
Given this GitHub repo’s metadata, rate its impact on:
- Scalability
- Gas efficiency
- Security
- UX & adoption
Return 4 numbers (0–1) and justify briefly.
```

---

## 🧾 File Structure

```
EthSage/
├── frontend/           # Astro project
│   └── src/pages/      # Dashboard UI
├── server/             # Bun MCP agent
│   ├── routes/         # /ask-agent, /evaluate
│   ├── agents/         # Claude-based logic
│   └── utils/          # GitHub + Xata helpers
├── docs/               # Project architecture & workflow
├── README.md           # Project overview & instructions
```

---

## 🏁 Submission Checklist

- [x] weights.csv (15,000 links)
- [x] Public GitHub repository
- [x] Hosted frontend on Vercel
- [x] Claude + MCP backend with logs
- [x] Final submission on Cryptopond

---

## 🏆 Why It Can Win

- Targets **Ethereum’s most pressing challenge**: fair ecosystem funding.
- Uses **real-world data** + **real AI judgment** (Claude via MCP).
- Presents an **interactive, scalable tool** with audit trails.
- Fully documented, reproducible, and deployable.

---

> Built for builders. Backed by data. Designed to scale Ethereum fairly. 🔥
