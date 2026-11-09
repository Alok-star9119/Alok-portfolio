# Alok Kumar Mishra — Data Scientist & Full-Stack AI Engineer

A responsive personal portfolio showcasing Alok Kumar Mishra's work across data science, process mining, machine learning, generative AI, and full-stack engineering. The application combines project case studies, interactive technical demonstrations, education and experience timelines, certifications, technical posts, and contact options in a polished portfolio experience.

## Overview

The portfolio is built as a single-page React application with a Vite development and build workflow. It features a dark/light theme, responsive navigation, interactive project details and simulators, and a resume modal.

### Highlights

- **Personal introduction:** Professional profile, specialization, and career focus.
- **Technical skills:** Grouped skill categories covering data engineering, analytics, machine learning, AI, and full-stack development.
- **Featured projects:** Detailed case studies for:
  - **CareFlow** — healthcare process mining and conformance checking with BigQuery, dbt, and PM4Py.
  - **Project Maieutic** — a multi-agent Socratic GenAI tutoring architecture.
  - **Financial Sentiment & Market Intelligence Forecaster** — NLP sentiment analysis and time-series forecasting.
  - **Team ANSA9119** — multispectral remote-sensing and geospatial analytics for the Bharatiya Antariksh Space Hackathon.
- **Interactive demonstrations:** In-browser project simulators, including a Petri-net token-replay walkthrough and multi-agent interaction scenarios.
- **Education and experience:** Dedicated sections for academic background and professional experience.
- **Certifications and technical posts:** Sections for credentials and technical writing.
- **Resume view:** An on-page resume modal.
- **Contact options:** Email, LinkedIn, GitHub, and a contact form that prepares a message in the visitor's default email application.
- **Responsive interface:** Mobile navigation and layouts for different screen sizes.
- **Theme preference:** Dark and light modes, with the selected theme stored in browser local storage.

## Tech Stack

| Area | Technologies |
|---|---|
| UI library | React 19 |
| Language | TypeScript |
| Build tool and dev server | Vite 8 |
| Styling | Tailwind CSS 4, custom CSS |
| Icons | Lucide React |
| Animation | Motion |
| Package management | npm |

The portfolio content is maintained in TypeScript data modules, while the interface is divided into reusable React components.

## Project Structure

```text
.
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── .env.example
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── types.ts
│   ├── data/
│   │   └── portfolioData.ts
│   ├── assets/
│   │   └── images/
│   └── components/
│       ├── NetworkCanvas.tsx
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── EducationSection.tsx
│       ├── TechnicalArsenal.tsx
│       ├── FeaturedProjects.tsx
│       ├── ProjectModal.tsx
│       ├── ProjectSimulators.tsx
│       ├── ExperienceTimeline.tsx
│       ├── CertificationsSection.tsx
│       ├── TechnicalPosts.tsx
│       ├── ContactSection.tsx
│       ├── ResumeModal.tsx
│       └── Footer.tsx
└── README.md
```

## Getting Started

### Prerequisites

- Node.js compatible with Vite 8 (Node.js **20.19+** or **22.12+** recommended).
- npm (included with Node.js).

Check your installed versions:

```bash
node --version
npm --version
```

### 1. Clone the repository

```bash
git clone https://github.com/Alok-star9119/<repository-name>.git
cd <repository-name>
```

Replace `<repository-name>` with the actual GitHub repository name.

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite. The configured development server uses port **3000** by default.

### 4. Create a production build

```bash
npm run build
```

Vite generates the optimized production site in the `dist/` directory.

### 5. Preview the production build locally

```bash
npm run preview
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server on port 3000. |
| `npm run build` | Creates the production build in `dist/`. |
| `npm run preview` | Serves the production build locally for preview. |
| `npm run lint` | Runs TypeScript checking with `tsc --noEmit`. |
| `npm run clean` | Removes the `dist/` directory and `server.js`, if present. |

## Customization

Most portfolio content is centralized in:

```text
src/data/portfolioData.ts
```

Update the relevant data objects and arrays to change:

- Name, professional headline, summary, email, location, and social profile URLs.
- Featured projects, descriptions, technology tags, metrics, architecture notes, and code examples.
- Technical skill categories and proficiency details.
- Education, experience, certifications, and technical posts.

Project images are stored in:

```text
src/assets/images/
```

When replacing an image, update the corresponding image path in `portfolioData.ts`. Keep the referenced file inside the project's assets so Vite can resolve it during the build.

For layout, behavior, and styling changes, edit the relevant component under `src/components/` and the global stylesheet at `src/index.css`.

### Contact form behavior

The contact form validates the required fields in the browser, constructs an email subject and message, and opens a `mailto:` link in the visitor's default email application. It does **not** submit to a server or store messages in a database. Make sure the email address in `PERSONAL_INFO` is correct.

### Environment variables

An `.env.example` file is included as a template for the original AI Studio environment. The current portfolio source does not directly read `GEMINI_API_KEY` or `APP_URL`, so these variables are not required to install, run, or build this version of the application. If you add functionality that uses them, create a local `.env` file and keep real secrets out of version control.

## Deployment

This is a Vite frontend application. Build it with:

```bash
npm run build
```

Deploy the contents of the generated `dist/` directory to a static hosting provider such as GitHub Pages, Netlify, or Vercel.

For client-side hosting, configure the provider to serve `index.html` as the fallback for routes if routing is added in the future. The current application is a single-page portfolio and does not define a separate backend service.

## Browser Support

Use a modern browser with support for ES modules, CSS features used by Tailwind CSS, and local storage. An internet connection is needed to load the Google Fonts referenced in `index.html`.

## Author

**Alok Kumar Mishra**  
Data Scientist & Full-Stack AI Engineer

- **GitHub:** [Alok-star9119](https://github.com/Alok-star9119)
- **LinkedIn:** [Alok Kumar Mishra](https://www.linkedin.com/in/alok-kumar-mishra-09660422a/)
- **Email:** [alok113am@gmail.com](mailto:alok113am@gmail.com)

---

If you find this portfolio or its projects interesting, feel free to connect through the links above.
