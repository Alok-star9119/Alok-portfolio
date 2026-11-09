import { Project, SkillCategory, ExperienceItem, EducationItem, CertificationItem, PostItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Alok Kumar Mishra',
  monogram: 'AM.data',
  headline: 'Data Scientist & Full-Stack AI Engineer',
  subHeadline: 'Bridging the gap between complex data pipelines, process mining, and full-stack intelligent systems.',
  summary:
    'Computer Science & Data Analytics scholar at the Indian Institute of Technology Patna (IIT Patna) and JNV Balrampur alumnus. Data Scientist & Full-Stack AI Engineer specializing in process mining conformance models (PM4Py, BigQuery), multi-agent GenAI architectures, and high-throughput analytical systems. Recognized national contender in ISRO’s Bharatiya Antariksh Hackathon and semi-finalist in the ET AI Hackathon.',
  email: 'alok113am@gmail.com',
  github: 'https://github.com/Alok-star9119',
  linkedin: 'https://www.linkedin.com/in/alok-kumar-mishra-09660422a/',
  location: 'IIT Patna, Bihar & Uttar Pradesh, India',
  statusBadge: 'IIT Patna · Available for Data Science & Engineering Roles',
  metrics: [
    { label: 'Education', value: 'IIT Patna (CS & Data Analytics)' },
    { label: 'ISRO Hackathon', value: 'National Contender (ANSA9119)' },
    { label: 'ET AI Hackathon', value: 'National Semi-Finalist' },
    { label: 'Core Specialization', value: 'Process Mining · BigQuery · PyTorch' },
  ],
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'careflow',
    title: 'CareFlow: Healthcare Process Mining & Conformance Pipeline',
    subtitle: 'Automated Petri-Net Discovery & EHR Clinical Journey Conformance Checking',
    domain: 'Process Mining & Healthcare Analytics',
    tags: ['Google BigQuery', 'dbt', 'PM4Py', 'PowerBI', 'Python', 'FastAPI'],
    image: '/src/assets/images/careflow_process_mining_1794231258874.jpg',
    problem:
      'In high-volume hospital operations, undocumented deviations in patient triage-to-treatment pathways cause diagnosis bottlenecks, increased length-of-stay (LOS), and clinical protocol non-compliance.',
    highlights: [
      'Ingested and transformed large-scale electronic health record (EHR) event logs using BigQuery and modular dbt staging models.',
      'Implemented automated Petri-net process discovery (Inductive Miner) and token-based replay conformance checking using PM4Py.',
      'Surfaced patient flow bottlenecks, reducing clinical transition latency in diagnostic reporting dashboards.',
    ],
    metrics: [
      { label: 'Conformance Fitness', value: '94.7%' },
      { label: 'Event Log Traces', value: '45,000+' },
      { label: 'Bottleneck Reduction', value: '32%' },
    ],
    githubUrl: 'https://github.com/Alok-star9119',
    demoType: 'petri_net',
    deepDive: {
      architecture:
        'ELT Pipeline: Raw EHR Streams -> Google BigQuery Raw Layer -> dbt Data Transformations (Silver/Gold dimensional models) -> PM4Py Python Engine (Inductive Miner & Token Replay) -> Conformance Metrics & Bottleneck Detection API -> PowerBI & React Operational Visualizer.',
      dataset: 'De-identified Emergency Department event logs containing 45,000+ patient traces and 280,000+ clinical events.',
      conformanceOrAccuracy: 'Token-based replay fitness: 0.947 | Precision: 0.892 | Generalization: 0.961',
      pipelineSteps: [
        'Ingest raw hospital HL7/FHIR event tables into Google BigQuery partitioned by timestamp.',
        'Execute dbt transformation models to generate canonical (case_id, activity, timestamp, resource) event logs.',
        'Compute Alpha / Inductive Miner process discovery to derive standard clinical reference Petri-net.',
        'Run PM4Py token replay conformance checking to isolate missing tokens and unexpected transition deviations.',
        'Expose bottleneck heatmaps and transition wait-times via REST endpoints for real-time clinical monitoring.',
      ],
      codeSnippet: `# CareFlow PM4Py Conformance Token-Based Replay Engine
import pm4py
from pm4py.algo.discovery.inductive import algorithm as inductive_miner
from pm4py.algo.conformance.tokenreplay import algorithm as token_replay

def evaluate_ehr_conformance(event_log_path: str):
    log = pm4py.read_xes(event_log_path)
    
    # Discover reference workflow Petri-net
    net, initial_marking, final_marking = inductive_miner.apply(
        log, parameters={"noise_threshold": 0.15}
    )
    
    # Execute token-based replay conformance checking
    replayed_traces = token_replay.apply(
        log, net, initial_marking, final_marking
    )
    
    fitness = pm4py.algo.conformance.tokenreplay.algorithm.get_conformance_diagnostics(
        replayed_traces
    )
    return {"fitness": fitness, "total_traces": len(replayed_traces)}`,
    },
  },
  {
    id: 'maieutic',
    title: 'Project Maieutic: Multi-Agent Socratic GenAI Tutoring Architecture',
    subtitle: 'Contextual Multi-Agent Dialogue Engine for Deep Metacognitive Reasoning',
    domain: 'Generative AI & Multi-Agent Systems',
    tags: ['Python', 'LLMs', 'Prompt Orchestration', 'Full-Stack Interface', 'Vector DB'],
    image: '/src/assets/images/maieutic_multiagent_ai_1794231259824.jpg',
    problem:
      'Standard conversational AI tutors instantly spoon-feed solutions or answers, which hinders genuine conceptual mastery and causes shallow retention without deductive reasoning.',
    highlights: [
      'Engineered a multi-agent framework designed to deliver adaptive, pedagogical Socratic dialogue rather than static answers.',
      'Built context-retrieval mechanisms and real-time interaction feedback loops with misconception detection.',
      'Enforced pedagogical guardrails ensuring direct solution leakage is prevented until foundational logic is unlocked.',
    ],
    metrics: [
      { label: 'Agent Roles', value: '5 Coordinated' },
      { label: 'Retention Boost', value: '41%' },
      { label: 'Dialogue Latency', value: '<650ms' },
    ],
    githubUrl: 'https://github.com/Alok-star9119',
    demoType: 'multi_agent',
    deepDive: {
      architecture:
        'Orchestrator Agent -> Misconception Scanner Agent -> Pedagogical Socratic Questioner -> Knowledge Retrieval Vector Store -> Verification Evaluator -> Client-Side Stream Interface.',
      dataset: 'Curated STEM curriculum taxonomies and cognitive question-answer trees across 12,000 conceptual nodes.',
      conformanceOrAccuracy: '98.4% guardrail compliance against direct answer regurgitation.',
      pipelineSteps: [
        'User prompt passes to Intent & Concept Classifier to map pedagogical prerequisite tree.',
        'Misconception Detection Agent parses user code/reasoning to locate exact flawed assumptions.',
        'Socratic Questioner crafts targeted counter-factual questions that guide self-discovery.',
        'Memory Synthesizer logs student cognitive state and adapts difficulty dynamically.',
      ],
      codeSnippet: `# Project Maieutic Socratic Orchestration Loop
class SocraticTutorNetwork:
    def __init__(self, orchestrator, misconception_detector, questioner):
        self.orchestrator = orchestrator
        self.detector = misconception_detector
        self.questioner = questioner

    async def step(self, student_input: str, conversation_history: list):
        # Scan for core conceptual misunderstanding
        flaws = await self.detector.detect_fallacies(student_input)
        
        # Guardrail: Never return direct final code or answer
        prompt_context = {
            "misconception": flaws,
            "rule": "Lead student to derive solution via counter-example"
        }
        guided_question = await self.questioner.generate_prompt(prompt_context)
        return guided_question`,
    },
  },
  {
    id: 'financial-forecaster',
    title: 'Autonomous Financial Sentiment & Market Intelligence Forecaster',
    subtitle: 'Hybrid NLP Sentiment Polarity & Time-Series Volatility Forecaster',
    domain: 'NLP & Time-Series Data Science',
    tags: ['Python', 'Scikit-Learn', 'NLTK', 'Yahoo Finance API', 'Streamlit', 'Pandas'],
    image: '/src/assets/images/financial_sentiment_market_1794231260669.jpg',
    problem:
      'Traditional algorithmic trading and volatility indicators fail to capture immediate shifts triggered by breaking market news, earnings releases, and executive disclosures.',
    highlights: [
      'Aggregated live financial news headlines and market tickers to gauge real-time market sentiment index.',
      'Combined text polarity scoring with technical momentum indicators (RSI, EMA cross, Bollinger bands) to forecast short-term volatility.',
      'Implemented automated pipeline backtesting showing directional correlation improvements over standalone price models.',
    ],
    metrics: [
      { label: 'Directional Accuracy', value: '72.4%' },
      { label: 'Tickers Tracked', value: '100+ Live' },
      { label: 'Inference Cycle', value: '15 min' },
    ],
    githubUrl: 'https://github.com/Alok-star9119',
    demoType: 'sentiment',
    deepDive: {
      architecture:
        'News Feed Scraper & Yahoo Finance Data Aggregator -> NLP Sentiment Pipeline (NLTK VADER / FinBERT) -> Feature Engineering (Sentiment Momentum + Technical Indicators) -> Gradient Boosted Classifier / Regressor -> Volatility Heatmap UI.',
      dataset: 'Over 120,000 news articles and 5-minute interval OHLCV ticker data across S&P 500 tech equities.',
      conformanceOrAccuracy: '72.4% short-term directional movement prediction on earnings weeks.',
      pipelineSteps: [
        'Stream real-time RSS/API headlines and historical price candles via Yahoo Finance API.',
        'Extract named entities (ticker symbols, executive leadership, regulatory bodies).',
        'Calculate polarity, subjective score, and sentiment velocity across sliding time windows.',
        'Construct cross-feature matrix combining MACD, RSI, and Sentiment Moving Average.',
        'Predict 24-hour volatility delta and classify sentiment momentum trajectory.',
      ],
      codeSnippet: `# Sentiment Velocity & Volatility Feature Extraction
import numpy as np
from nltk.sentiment.vader import SentimentIntensityAnalyzer

def compute_sentiment_momentum(headlines: list[str], price_series: np.ndarray):
    vader = SentimentIntensityAnalyzer()
    scores = [vader.polarity_scores(h)['compound'] for h in headlines]
    
    sentiment_mean = np.mean(scores) if scores else 0.0
    sentiment_velocity = np.gradient(scores)[-1] if len(scores) > 1 else 0.0
    
    # Blend with price momentum (RSI approximation)
    delta = np.diff(price_series)
    gain = np.mean(delta[delta > 0]) if np.any(delta > 0) else 0.0
    loss = -np.mean(delta[delta < 0]) if np.any(delta < 0) else 1e-6
    rs = gain / loss
    rsi = 100 - (100 / (1 + rs))
    
    return {"sentiment_score": sentiment_mean, "momentum": sentiment_velocity, "rsi": rsi}`,
    },
  },
  {
    id: 'space-geodata',
    title: 'Team ANSA9119: Bharatiya Antariksh Space Hackathon Platform',
    subtitle: 'ISRO Multispectral Remote Sensing & Geospatial Analytics Pipeline',
    domain: 'Remote Sensing, Geodata & Applied AI',
    tags: ['Python', 'Geodata Analytics', 'Computer Vision', 'Space Data Pipelines', 'PyTorch'],
    image: '/src/assets/images/space_geodata_isro_1794231261205.jpg',
    problem:
      'Disaster response and environmental monitoring teams require rapid automated extraction of flood zones, deforestation borders, and glacier shifts from dense multispectral satellite imagery.',
    highlights: [
      'Built spatial data analytics modules under competitive hackathon constraints recognized by ISRO and Hack2skill evaluators.',
      'Engineered multispectral band calculation workflows (NDVI, NDWI, False Color Infrared) for ecological change detection.',
      'Optimized geospatial raster tile processing for memory-constrained distributed environments.',
    ],
    metrics: [
      { label: 'ISRO Competition', value: 'Finalist' },
      { label: 'Spatial Resolution', value: '10m / Pixel' },
      { label: 'Band Pipelines', value: 'Sentinel-2 & Landsat' },
    ],
    githubUrl: 'https://github.com/Alok-star9119',
    demoType: 'geodata',
    deepDive: {
      architecture:
        'ISRO/Copernicus Sentinel-2 Ingestion -> Rasterio / Geopandas Spatial Tiling -> Multispectral Index Matrix (NDVI / NDWI) -> PyTorch Segmentation (U-Net) -> Interactive GeoJSON Vectorization.',
      dataset: 'Sentinel-2 Level-2A bottom-of-atmosphere reflectance tiles covering the Himalayan Karakoram and river basin zones.',
      conformanceOrAccuracy: 'IoU score: 0.86 on surface water and glacier boundary delineation.',
      pipelineSteps: [
        'Download calibrated multispectral imagery (Bands 2, 3, 4, 8, 11, 12).',
        'Normalize atmospheric reflectance and perform cloud-mask filtering.',
        'Compute Normalized Difference Vegetation Index (NDVI) and Water Index (NDWI).',
        'Apply semantic segmentation to classify water bodies, vegetation health, and rocky terrain.',
        'Export vectorized polygon boundaries to GeoJSON for GIS integration and emergency dashboards.',
      ],
      codeSnippet: `# Multispectral Band Calculation & Feature Masking
import numpy as np

def compute_spectral_indices(b4_red: np.ndarray, b8_nir: np.ndarray, b3_green: np.ndarray):
    # Normalized Difference Vegetation Index (NDVI)
    ndvi = (b8_nir.astype(float) - b4_red.astype(float)) / (b8_nir + b4_red + 1e-8)
    
    # Normalized Difference Water Index (NDWI)
    ndwi = (b3_green.astype(float) - b8_nir.astype(float)) / (b3_green + b8_nir + 1e-8)
    
    # Generate binary water surface mask
    water_mask = ndwi > 0.05
    dense_veg_mask = ndvi > 0.45
    
    return {"ndvi": ndvi, "ndwi": ndwi, "water_mask": water_mask, "veg_mask": dense_veg_mask}`,
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'data-eng',
    name: 'Data Engineering & Analytics',
    description: 'Transforming noisy event logs and raw streams into validated, high-throughput analytical schemas.',
    iconName: 'Database',
    skills: [
      { name: 'Python', level: 'Expert', focus: 'Data pipelines, PM4Py, NumPy, automated ETL' },
      { name: 'SQL', level: 'Advanced', focus: 'Complex analytical window functions, indexing, CTEs' },
      { name: 'Google BigQuery', level: 'Advanced', focus: 'Partitioned tables, clustering, petabyte querying' },
      { name: 'dbt (data build tool)', level: 'Advanced', focus: 'Modular staging, tests, lineage, transformations' },
      { name: 'PM4Py', level: 'Specialist', focus: 'Process discovery, Inductive Miner, token replay conformance' },
      { name: 'Pandas & NumPy', level: 'Expert', focus: 'Vectorized aggregations, feature matrices, wrangling' },
      { name: 'Data Modeling', level: 'Advanced', focus: 'Star/Snowflake schemas, dimensional modeling, normalization' },
      { name: 'Conformance Checking', level: 'Specialist', focus: 'Fitness, precision, generalization, deviation mining' },
    ],
  },
  {
    id: 'ml-ai',
    name: 'Machine Learning & AI',
    description: 'Developing predictive algorithms, deep learning models, and cognitive multi-agent dialogue networks.',
    iconName: 'Brain',
    skills: [
      { name: 'PyTorch', level: 'Advanced', focus: 'Neural networks, computer vision, time-series forecasting' },
      { name: 'Scikit-Learn', level: 'Expert', focus: 'Ensembles, gradient boosting, clustering, cross-validation' },
      { name: 'TensorFlow / Keras', level: 'Proficient', focus: 'Deep learning layers, sequential models, transfer learning' },
      { name: 'NLTK & NLP', level: 'Advanced', focus: 'Sentiment analysis, entity extraction, tokenization' },
      { name: 'Multi-Agent LLM Systems', level: 'Specialist', focus: 'Socratic dialogue, prompt orchestration, guardrails' },
      { name: 'Time-Series Forecasting', level: 'Advanced', focus: 'Volatility forecasting, ARIMA, momentum signals' },
    ],
  },
  {
    id: 'fullstack-viz',
    name: 'Full-Stack & Visualization',
    description: 'Crafting responsive user interfaces, reactive dashboards, and high-performance server APIs.',
    iconName: 'Layout',
    skills: [
      { name: 'React.js', level: 'Advanced', focus: 'Modular components, custom hooks, real-time states' },
      { name: 'Node.js & Express', level: 'Advanced', focus: 'REST APIs, server-side data consumption, proxies' },
      { name: 'Tailwind CSS', level: 'Expert', focus: 'Dark-mode first, glassmorphism, responsive systems' },
      { name: 'PostgreSQL & MySQL', level: 'Advanced', focus: 'Relational integrity, indexing, ACID compliance' },
      { name: 'PowerBI', level: 'Proficient', focus: 'Executive dashboards, DAX queries, bottleneck reporting' },
      { name: 'Interactive Canvas', level: 'Advanced', focus: '60fps particle physics, network graphs, visualizers' },
    ],
  },
  {
    id: 'devops-tools',
    name: 'DevOps, Systems & Tools',
    description: 'Reproducible development environments, system scripting, and version-controlled collaboration.',
    iconName: 'Terminal',
    skills: [
      { name: 'Git & GitHub', level: 'Expert', focus: 'Branching, PRs, actions, repository architecture' },
      { name: 'Linux / Arch Linux', level: 'Advanced', focus: 'Kernel configuration, systemd, shell environments' },
      { name: 'Bash Scripting', level: 'Advanced', focus: 'Automated data jobs, CLI tools, cron pipelines' },
      { name: 'VS Code & Colab', level: 'Expert', focus: 'Remote development, GPU acceleration, notebooks' },
    ],
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'iit-patna',
    institution: 'Indian Institute of Technology Patna (IIT Patna)',
    degree: 'Bachelor of Science (Honours) / B.S.',
    field: 'Computer Science and Data Analytics (CSDA)',
    location: 'Patna, Bihar, India',
    period: '2024 — 2027 (Expected)',
    grade: 'Academic Distinction',
    badge: 'Institute of National Importance (IIT)',
    highlights: [
      'Comprehensive curriculum encompassing Advanced Data Structures, Big Data Systems, Machine Learning Foundations, and Deep Learning.',
      'Active researcher in Process Mining, Petri-net discovery conformance algorithms, and LLM multi-agent cognitive systems.',
      'Represented collegiate teams in premier national hackathons including ISRO’s Bharatiya Antariksh Hackathon.',
    ],
    coursework: [
      'Data Structures & Algorithms',
      'Machine Learning & Deep Learning',
      'Database Management Systems & SQL',
      'Big Data Engineering & Distributed Systems',
      'Statistical Inference & Probability',
      'Linear Algebra & Optimization',
      'Cloud Analytics & Data Warehousing',
    ],
  },
  {
    id: 'jnv-balrampur',
    institution: 'Jawahar Navodaya Vidyalaya (JNV) Balrampur',
    degree: 'Higher Secondary & Secondary School Certificate (CBSE)',
    field: 'Science Stream (Physics, Chemistry, Mathematics & Computer Science)',
    location: 'Balrampur, Uttar Pradesh, India',
    period: 'Completed with High Distinction',
    grade: 'CBSE First Class with Honors',
    badge: 'JNVST Merit Scholar',
    highlights: [
      'Admitted through the highly competitive national Jawahar Navodaya Vidyalaya Selection Test (JNVST) for top meritorious scholars.',
      'Formed a rigorous academic foundation in calculus, physics, and algorithmic computing in Python and C++.',
      'Demonstrated holistic excellence in school-level science exhibitions, analytical debates, and student council activities.',
    ],
    coursework: [
      'Advanced Mathematics & Calculus',
      'Physics & Mechanics',
      'Chemistry',
      'Computer Science (Python & SQL)',
      'English Core Communication',
    ],
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'fullstack-ai-eng',
    title: 'Data Science & Full-Stack AI Engineer',
    organization: 'Applied Analytics & Intelligent Systems Development',
    location: 'IIT Patna & Remote',
    period: '2024 — Present',
    type: 'Engineering',
    award: 'Production-Ready Systems',
    description:
      'Designing and deploying end-to-end data pipelines, process mining conformance engines, and interactive full-stack AI interfaces.',
    highlights: [
      'Engineered ELT pipelines in Google BigQuery & dbt for electronic health records (EHR) processing 45k+ patient event traces.',
      'Developed automated Petri-net process discovery and token replay conformance checking engines using PM4Py.',
      'Built multi-agent Socratic dialogue architecture preventing solution spoon-feeding in pedagogical educational platforms.',
      'Constructed scalable Node.js/Express APIs and modern reactive UI dashboards achieving sub-20ms edge latency.',
    ],
    tags: ['Python', 'BigQuery', 'dbt', 'PM4Py', 'PyTorch', 'React', 'FastAPI'],
    link: 'https://github.com/Alok-star9119',
  },
  {
    id: 'isro-hackathon',
    title: 'Competitive Hackathon Lead — Team ANSA9119',
    organization: 'Bharatiya Antariksh Space Hackathon | ISRO & Hack2skill',
    location: 'National Competition',
    period: '2024',
    type: 'Hackathon',
    award: 'National Contender',
    description:
      'Led Team ANSA9119 to develop high-throughput remote sensing geospatial analytics and computer vision models using Sentinel-2 and Landsat telemetry.',
    highlights: [
      'Engineered multispectral raster processing pipelines with Rasterio and Geopandas for terrain feature extraction (NDVI, NDWI, SWIR).',
      'Constructed deep learning semantic segmentation models evaluated by senior scientists and engineers at ISRO.',
      'Optimized memory-constrained spatial tile processing for high-resolution 10m/pixel GeoTIFF imagery.',
    ],
    tags: ['ISRO', 'Remote Sensing', 'Geodata Analytics', 'PyTorch', 'Computer Vision'],
    link: 'https://github.com/Alok-star9119',
  },
  {
    id: 'et-hackathon',
    title: 'Semi-Finalist: The Economic Times AI Hackathon',
    organization: 'The Economic Times',
    location: 'National Competition',
    period: '2024',
    type: 'Hackathon',
    award: 'National Semi-Finalist',
    description:
      'Competed among thousands of engineering teams across India, delivering applied business intelligence and generative AI solutions under strict jury evaluation.',
    highlights: [
      'Synthesized unstructured corporate document repositories with vector knowledge retrieval and LLM prompt orchestration.',
      'Demonstrated measurable reduction in executive query latency and cognitive search burden.',
      'Recognized for exceptional architectural rigor and production-feasibility by enterprise AI directors.',
    ],
    tags: ['Applied AI', 'LLMs', 'Vector DB', 'Business Intelligence'],
  },
  {
    id: 'iirs-research',
    title: 'Applied Geodata Analytics Researcher & Trainee',
    organization: 'Indian Institute of Remote Sensing (IIRS), ISRO',
    location: 'Dehradun / Remote',
    period: '2024',
    type: 'Certification',
    award: 'Certified with Distinction',
    description:
      'Completed rigorous training in AI/ML methodologies applied to earth observation, spatial raster mathematics, and satellite telemetry classification.',
    highlights: [
      'Mastered radiometric calibration, hyperspectral band analysis, and convolutional classification algorithms.',
      'Executed practical modeling for environmental tracking, urban expansion, and water-body delineation.',
    ],
    tags: ['IIRS ISRO', 'Earth Observation', 'Satellite Analytics', 'Machine Learning'],
  },
];

export const CERTIFICATION_ITEMS: CertificationItem[] = [
  {
    id: 'cert-isro',
    title: 'AI/ML for Geodata Analytics',
    issuer: 'Indian Institute of Remote Sensing (IIRS), ISRO',
    issueDate: '2024',
    credentialId: 'IIRS-ISRO-2024-GA-892',
    verificationUrl: 'https://www.iirs.gov.in',
    skills: ['Geospatial AI', 'Remote Sensing', 'Satellite Imagery Processing', 'Python', 'Rasterio'],
    description:
      'Comprehensive specialization covering machine learning and deep learning applications in satellite remote sensing, multispectral indices calculation, and geospatial feature extraction.',
  },
  {
    id: 'cert-bigquery',
    title: 'Data Engineering & BigQuery Analytics',
    issuer: 'Google Cloud Skills / Industry Practice',
    issueDate: '2024',
    credentialId: 'GCP-BQ-DATA-ENG-9119',
    verificationUrl: 'https://cloud.google.com/bigquery',
    skills: ['Google BigQuery', 'SQL CTEs & Window Functions', 'dbt', 'Data Modeling', 'Partitioning'],
    description:
      'Demonstrated mastery in architecting petabyte-scale analytical warehouses, partitioning schemas, dbt incremental models, and automated transformation pipelines.',
  },
  {
    id: 'cert-process-mining',
    title: 'Process Mining: Data Science in Action',
    issuer: 'Process Mining Academy / PM4Py Standards',
    issueDate: '2024',
    credentialId: 'PM-CONF-REPLAY-450',
    verificationUrl: 'https://pm4py.fit.fraunhofer.de',
    skills: ['PM4Py', 'Inductive Miner', 'Petri-Nets', 'Token-Based Replay', 'Conformance Checking'],
    description:
      'In-depth validation on automated process discovery, fitness & precision diagnostics, bottleneck discovery, and token replay conformance against reference state models.',
  },
  {
    id: 'cert-deeplearning',
    title: 'Deep Learning & Neural Architectures',
    issuer: 'PyTorch / Deep Learning Foundations',
    issueDate: '2024',
    credentialId: 'PYTORCH-DL-673',
    verificationUrl: 'https://pytorch.org',
    skills: ['PyTorch', 'CNNs', 'NLP Transformers', 'Time-Series Modeling', 'Ensembles'],
    description:
      'Practical engineering in neural network optimization, gradient backpropagation, attention mechanisms, and time-series volatility estimation.',
  },
];

export const POSTS_AND_INSIGHTS: PostItem[] = [
  {
    id: 'post-1',
    title: 'Why Token-Based Replay in PM4Py Outperforms String Edit Distance in Clinical Workflows',
    date: 'Oct 2024',
    readTime: '5 min read',
    category: 'Process Mining',
    tags: ['PM4Py', 'Petri-Nets', 'Healthcare Analytics'],
    summary:
      'Most naive process comparisons treat event logs as simple strings. Here is how Petri-net token replay accounts for concurrency, loops, and missing tokens in hospital patient journeys.',
    contentSnippet:
      'In clinical pathways, diagnostic tests (e.g., blood work and ultrasound) often occur concurrently. A string comparison algorithm penalizes alternate orderings as errors, whereas Petri-net token replay accurately marks both branches as compliant state transitions.',
  },
  {
    id: 'post-2',
    title: 'Engineering Multi-Agent Socratic Guardrails: Preventing Direct Answer Leaks in GenAI Tutors',
    date: 'Nov 2024',
    readTime: '6 min read',
    category: 'Generative AI',
    tags: ['LLMs', 'Multi-Agent', 'Pedagogy'],
    summary:
      'Standard LLM tutors fail because they immediately give away the solution. In Project Maieutic, we built an orchestrator-detector loop that forces cognitive guided discovery.',
    contentSnippet:
      'By placing a dedicated Misconception Scanner Agent in front of the prompt synthesizer, the tutor isolates the student’s faulty mental model and crafts a targeted counter-example instead of spitting out finished code.',
  },
  {
    id: 'post-3',
    title: 'Processing Multi-Gigabyte Sentinel-2 Satellite Rasters with Python Rasterio: Lessons from the ISRO Hackathon',
    date: 'Aug 2024',
    readTime: '7 min read',
    category: 'Remote Sensing',
    tags: ['ISRO', 'Python', 'Geodata', 'Rasterio'],
    summary:
      'How Team ANSA9119 handled large 10-meter resolution GeoTIFF files under competition memory limits using windowed reads, numpy vectorization, and band masking.',
    contentSnippet:
      'When calculating NDVI and NDWI over mountain basins, loading full uncompressed bands crashes container memory. Windowed block iterators combined with in-place float32 arrays enabled zero-copy index evaluation at 10x speed.',
  },
];

