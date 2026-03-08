export type BlogPost = {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    category: "Engineering" | "Company" | "Customers" | "Tutorial";
    author: {
        name: string;
        role: string;
        avatarUrl: string;
    };
    publishedAt: string;
    readTimeMin: number;
    featuredImageUrl: string;
    tags: string[];
    content: string;
};

export const MOCK_BLOG_POSTS: BlogPost[] = [
    // THEME 1: AI AGENTS & ORCHESTRATION
    {
        id: "1",
        slug: "evolution-of-autonomous-agents-in-enterprise",
        title: "The Evolution of Autonomous Agents in Enterprise Workflows",
        excerpt: "From simple scripts to cognitive engines, we explore how autonomous AI agents are moving beyond chat interfaces to execute complex, multi-step operations within enterprise infrastructure.",
        category: "Engineering",
        author: {
            name: "Dr. Elena Rostova",
            role: "VP of Engineering",
            avatarUrl: "https://i.pravatar.cc/150?u=elena"
        },
        publishedAt: "March 1, 2026",
        readTimeMin: 8,
        featuredImageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        tags: ["Autonomous Agents", "Enterprise AI", "Infrastructure"],
        content: `
      <h2>The Shift From Chat to Action</h2>
      <p>In the past few years, enterprise AI has largely been dominated by conversational interfaces. We asked questions, and LLMs gave us answers. While transformative, this was only the first phase. We are now entering the era of <strong>autonomous execution</strong>.</p>
      <p>Agents are no longer just retrieving data; they are making decisions, calling APIs, updating databases, and correcting their own errors. At AIQUIRE, we define true autonomy not by how well an agent chats, but by how reliably it can execute a 50-step workflow without human intervention.</p>
      <h3>Building Cognitive Engines</h3>
      <p>To achieve this, the underlying architecture must change. Traditional linear scripts break when they encounter unexpected UI changes or API timeouts. A cognitive engine uses a tight perception-action loop, dynamically adjusting its strategy based on the real-time state of the environment.</p>
      <blockquote>"Autonomy is the distance between intent and execution. The shorter the distance, the more powerful the system."</blockquote>
      <p>As we continue to develop these systems, the focus will increasingly shift from the models themselves to the orchestration layers that govern them.</p>
    `
    },
    {
        id: "2",
        slug: "build-multi-agent-support-system-claude",
        title: "How to Build a Multi-Agent Support System with Claude 3.5 Sonnet",
        excerpt: "A technical deep-dive into orchestrating specialized support agents—triage, technical, and billing—using AIQUIRE's routing framework and the latest Anthropic models.",
        category: "Tutorial",
        author: {
            name: "David Kim",
            role: "Developer Advocate",
            avatarUrl: "https://i.pravatar.cc/150?u=david"
        },
        publishedAt: "February 22, 2026",
        readTimeMin: 12,
        featuredImageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        tags: ["Claude 3.5", "Customer Support", "Multi-Agent"],
        content: `
      <h2>Why Multiple Agents?</h2>
      <p>When building an AI-driven support system, a monolithic LLM prompt quickly becomes unmanageable. It hallucinates policies, mixes up billing logic with technical troubleshooting, and struggles with context limits.</p>
      <p>The solution is a <strong>multi-agent architecture</strong>, where distinct agents handle specific domains.</p>
      <h3>The Architecture</h3>
      <p>In this tutorial, we will build a system utilizing Anthropic's Claude 3.5 Sonnet to construct three distinct agents:</p>
      <ul>
        <li><strong>Triage Agent:</strong> Classifies intent and routes the conversation.</li>
        <li><strong>Technical Support Agent:</strong> Has access to GitHub issues, internal docs, and log search tools.</li>
        <li><strong>Billing Agent:</strong> Has bounded access to Stripe APIs and CRM data.</li>
      </ul>
      <p>Using AIQUIRE's orchestration layer, we can seamlessly hand off context between these specialized agents, providing the end-user with a unified, instant resolution experience.</p>
    `
    },
    {
        id: "3",
        slug: "orchestration-missing-layer-gen-ai",
        title: "Why Orchestration is the Missing Layer in Generative AI",
        excerpt: "Models are only as good as the systems that guide them. Learn why true AI transformation requires robust orchestration layers rather than just better foundation models.",
        category: "Company",
        author: {
            name: "Paul Klein",
            role: "Founder & CEO",
            avatarUrl: "https://i.pravatar.cc/150?u=paul"
        },
        publishedAt: "February 15, 2026",
        readTimeMin: 6,
        featuredImageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        tags: ["Orchestration", "GenAI", "Strategy"],
        content: `
      <h2>The Foundation Model Trap</h2>
      <p>There is a dangerous misconception in the current AI landscape: that simply upgrading to the latest model (GPT-4o, Claude 3.5, Gemini 1.5) will automatically solve enterprise workflow problems. It won't.</p>
      <p>Foundation models are incredibly capable reasoning engines, but they lack memory, error-recovery mechanisms, and deterministic routing.</p>
      <h3>The Need for Orchestration</h3>
      <p>This is where the orchestration layer comes in. Orchestration is the "glue" that binds intelligence to infrastructure. It handles state management, parallelizes tasks across multiple browsers, and implements strict retry logic when things fail.</p>
      <p>At AIQUIRE, we believe that the next trillion-dollar companies won't be the ones building the models, but the ones providing the connective tissue that makes those models operational in the real world.</p>
    `
    },

    // THEME 2: RAG SYSTEMS & DATA
    {
        id: "4",
        slug: "advanced-rag-techniques-beyond-basic-search",
        title: "Advanced RAG Techniques: Moving Beyond Basic Vector Search",
        excerpt: "Discover how incorporating graph databases, query expansion, and hybrid search can dramatically improve the accuracy and contextual awareness of your RAG applications.",
        category: "Engineering",
        author: {
            name: "Sarah Chen",
            role: "Lead Machine Learning Engineer",
            avatarUrl: "https://i.pravatar.cc/150?u=sarah"
        },
        publishedAt: "February 8, 2026",
        readTimeMin: 10,
        featuredImageUrl: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=1974&auto=format&fit=crop",
        tags: ["RAG", "Vector Search", "Data Engineering"],
        content: `
      <h2>The Limits of Naive RAG</h2>
      <p>Basic Retrieval-Augmented Generation (chunk text -> embed -> vector search) works incredibly well for simple Q&A. But when applied to complex enterprise documents—such as multi-hundred-page technical manuals or interlinked legal contracts—naive RAG falls apart. It retrieves irrelevant chunks and loses global context.</p>
      <h3>Technique 1: Hybrid Search</h3>
      <p>Combining traditional keyword search (BM25) with vector search provides the best of both worlds. Vectors handle semantic meaning, while BM25 ensures exact entities and model numbers aren't missed.</p>
      <h3>Technique 2: Query Transformation</h3>
      <p>Users rarely ask perfect questions. By passing the user's query through a fast LLM to expand it into multiple variations before retrieval, you significantly increase the chance of surfacing relevant context.</p>
      <p>Implementing these techniques requires robust data pipelines, which is exactly why we've built the AIQUIRE data routing module.</p>
    `
    },
    {
        id: "5",
        slug: "reducing-hallucinations-financial-ai",
        title: "Case Study: Reducing Hallucinations in Financial AI by 94%",
        excerpt: "How FinServe Global implemented AIQUIRE's strict-citation RAG architecture to safely deploy AI document analysis across their legal and compliance departments.",
        category: "Customers",
        author: {
            name: "Michael Torres",
            role: "Director of Customer Success",
            avatarUrl: "https://i.pravatar.cc/150?u=michael"
        },
        publishedAt: "January 30, 2026",
        readTimeMin: 7,
        featuredImageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        tags: ["Case Study", "Finance", "Hallucinations"],
        content: `
      <h2>The Challenge: Zero Tolerance for Errors</h2>
      <p>In the financial sector, a hallucination isn't just an inconvenience; it's a massive liability. FinServe Global needed a way to accelerate their analysis of SEC filings and ISDA master agreements, but their initial pilot using standard ChatGPT APIs resulted in unacceptably high error rates.</p>
      <h3>The AIQUIRE Solution</h3>
      <p>We partnered with FinServe to implement a <strong>strict-citation RAG architecture</strong>. The system forces the LLM to ground every single claim in a specific document chunk, and a secondary "verifier" agent double-checks the generated output against the source text.</p>
      <p>The result? Hallucinations dropped by 94%, and compliance reviewers now save an average of 14 hours per week, allowing them to focus on high-leverage strategic analysis.</p>
    `
    },
    {
        id: "6",
        slug: "choosing-embedding-model-enterprise-data",
        title: "Choosing the Right Embedding Model for Enterprise Data",
        excerpt: "Not all embeddings are created equal. A comprehensive comparison of OpenAI text-embedding-3, Cohere, and open-source models for domain-specific enterprise search.",
        category: "Tutorial",
        author: {
            name: "James Wilson",
            role: "Data Infrastructure Engineer",
            avatarUrl: "https://i.pravatar.cc/150?u=james"
        },
        publishedAt: "January 21, 2026",
        readTimeMin: 9,
        featuredImageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
        tags: ["Embeddings", "Models", "Enterprise"],
        content: `
      <h2>Evaluating Embedding Providers</h2>
      <p>The foundation of any RAG system is its embedding model. With the release of new models from OpenAI, Cohere, and the open-source community, choosing the right one is critical to your app's performance.</p>
      <h3>OpenAI vs. Cohere vs. Open-Source</h3>
      <p><strong>OpenAI text-embedding-3-small:</strong> The default choice for many. Extremely fast, cheap, and supports variable dimensionality, meaning you can truncate the vectors to save on database storage without losing much accuracy.</p>
      <p><strong>Cohere English v3:</strong> Highly optimized for enterprise RAG. Includes specific parameters to optimize for document retrieval vs. query matching.</p>
      <p><strong>BGE-M3 (Open Source):</strong> If data privacy mandates that you keep everything on-premise, BGE-M3 is highly capable and supports multi-lingual use cases natively.</p>
      <p>When choosing, we always recommend building a Golden Dataset of 100 queries specific to your industry and running an automated evaluation loop across all three.</p>
    `
    },

    // THEME 3: AUTOMATION & PRODUCTIVITY
    {
        id: "7",
        slug: "high-roi-automation-workflows-saas",
        title: "10 High-ROI Automation Workflows for Mid-Market SaaS",
        excerpt: "Stop wasting engineering cycles on manual ops. We breakdown the highest-impact automation workflows spanning billing, onboarding, and competitive intelligence.",
        category: "Engineering",
        author: {
            name: "Amanda Riley",
            role: "Product Ops Manager",
            avatarUrl: "https://i.pravatar.cc/150?u=amanda"
        },
        publishedAt: "January 14, 2026",
        readTimeMin: 6,
        featuredImageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        tags: ["SaaS", "ROI", "Automation"],
        content: `
      <h2>Stop Paying Engineers to Do Data Entry</h2>
      <p>In mid-market SaaS companies, massive amounts of operational weight frequently fall on engineering and product operations teams. By implementing structured automation, you can reclaim those hours.</p>
      <h3>Workflow 1: CRM to Billing Sync</h3>
      <p>An incredibly common friction point is ensuring that custom-negotiated Enterprise contracts in Salesforce accurately reflect in Stripe. Using AIQUIRE agents, you can automatically parse the PDF contracts, extract the custom terms via LLM, and trigger the Stripe API to create custom billing schedules.</p>
      <h3>Workflow 2: Competitive Monitoring</h3>
      <p>Why manually check competitor pricing pages? Schedule a headless browser agent to scrape target pricing grids weekly, and use an LLM to alert your product marketing team on Slack only when there is a material change in their strategy.</p>
    `
    },
    {
        id: "8",
        slug: "how-technova-scaled-content-operations",
        title: "How TechNova Scaled Their Content Operations with AIQUIRE",
        excerpt: "By implementing headless browser agents to monitor global market trends, TechNova increased their content production by 300% without adding headcount.",
        category: "Customers",
        author: {
            name: "Michael Torres",
            role: "Director of Customer Success",
            avatarUrl: "https://i.pravatar.cc/150?u=michael"
        },
        publishedAt: "January 5, 2026",
        readTimeMin: 5,
        featuredImageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
        tags: ["Content", "Scaling", "Case Study"],
        content: `
      <h2>The Challenge of Content at Scale</h2>
      <p>TechNova provides deep-dive market intelligence reports for the semiconductor industry. To stay competitive, their analysts needed to read through thousands of earnings transcripts and foreign news articles daily.</p>
      <h3>Implementing Edge AI Automation</h3>
      <p>Using AIQUIRE, TechNova deployed a fleet of data gathering agents that autonomously navigated to target sources, bypassed anti-bot protections seamlessly, translated foreign articles, and generated concise daily summaries customized to each analyst's specific beat.</p>
      <p>The result was a 300% increase in published reports and a significant reduction in employee burnout. The analysts went from data gatherers to true market synthesizers.</p>
    `
    },
    {
        id: "9",
        slug: "automating-competitor-pricing-analysis",
        title: "Step-by-Step: Automating Competitor Pricing Analysis",
        excerpt: "Learn how to build a robust Playwright-based scraper agent that safely checks competitor pricing, normalizes the data via LLM, and updates your internal dashboard.",
        category: "Tutorial",
        author: {
            name: "David Kim",
            role: "Developer Advocate",
            avatarUrl: "https://i.pravatar.cc/150?u=david"
        },
        publishedAt: "December 18, 2025",
        readTimeMin: 11,
        featuredImageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
        tags: ["Playwright", "Web Scraping", "Tutorial"],
        content: `
      <h2>From HTML to Intelligence</h2>
      <p>Pricing pages are notoriously difficult to monitor. They are heavily dynamic, rely on complex frontend frameworks, and frequently change their CSS selectors. Traditional scrapers break constantly.</p>
      <h3>The Playwright + LLM Approach</h3>
      <p>In this tutorial, we ditch brittle CSS selectors. Instead, we use Playwright to load the fully rendered page, strip out the noise, and pass the clean Markdown directly into an LLM.</p>
      <p>We ask the LLM to output a strict JSON schema containing the Tier Name, Price, and Included Features. Because the LLM understands semantic structure, it doesn't matter if the competitor completely redesigns their UI; the script continues to function flawlessly.</p>
    `
    },

    // THEME 4: AI STRATEGY & COMPANY UPDATES
    {
        id: "10",
        slug: "navigating-shift-pilots-to-production",
        title: "Navigating the Shift from AI 'Pilots' to Production Revenue",
        excerpt: "2024 was the year of the AI pilot. 2026 is the year of production. Here is our strategic framework for moving AI initiatives out of the sandbox and into your P&L.",
        category: "Company",
        author: {
            name: "Paul Klein",
            role: "Founder & CEO",
            avatarUrl: "https://i.pravatar.cc/150?u=paul"
        },
        publishedAt: "December 10, 2025",
        readTimeMin: 7,
        featuredImageUrl: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop",
        tags: ["Strategy", "Production AI", "Revenue"],
        content: `
      <h2>The Pilot Purgatory</h2>
      <p>We speak with dozens of Fortune 500 executives who all share the same frustration: they've spent millions building impressive internal AI demos that fail the moment they are exposed to real-world edge cases.</p>
      <h3>The Path to Production</h3>
      <p>Escaping "pilot purgatory" requires a mindset shift from prompt engineering to software engineering. You must establish:</p>
      <ul>
        <li><strong>Evaluation Frameworks:</strong> You cannot improve what you cannot measure. Implement LLM-as-a-judge pipelines.</li>
        <li><strong>Guardrails:</strong> Define strict boundary conditions. What happens when the model goes rogue?</li>
        <li><strong>Graceful Degradation:</strong> If the AI is uncertain, it should seamlessly hand off to a human operator.</li>
      </ul>
      <p>At AIQUIRE, we've built our platform from the ground up to solve these exact production challenges.</p>
    `
    },
    {
        id: "11",
        slug: "introducing-aiquire-governance-framework",
        title: "Introducing the AIQUIRE Enterprise Governance Framework",
        excerpt: "We're excited to announce our new suite of tools designed to ensure data privacy, strict access controls, and transparent audibility across all your deployed AI agents.",
        category: "Company",
        author: {
            name: "Marcus Thorne",
            role: "Chief Information Security Officer",
            avatarUrl: "https://i.pravatar.cc/150?u=marcus"
        },
        publishedAt: "November 28, 2025",
        readTimeMin: 5,
        featuredImageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
        tags: ["Security", "Governance", "Compliance"],
        content: `
      <h2>Trust the Engine</h2>
      <p>When you give an AI agent the ability to execute code and interact with your databases, security is no longer an afterthought—it is the foundational requirement.</p>
      <h3>The Governance Suite</h3>
      <p>Today, we're launching the AIQUIRE Governance Framework, directly integrated into our platform:</p>
      <ul>
        <li><strong>Role-Based Access Control (RBAC):</strong> Define exactly which APIs and tools specific agents are permitted to use.</li>
        <li><strong>Data Masking:</strong> Automatically redact PII from prompts before they are sent to the LLM provider.</li>
        <li><strong>Audit Logging:</strong> Every action, every prompt, and every tool call is logged in an immutable, searchable ledger for compliance reviews.</li>
      </ul>
      <p>This ensures that you can scale your automation rapidly without ever compromising your security posture.</p>
    `
    },
    {
        id: "12",
        slug: "building-resilient-ai-teams-2026",
        title: "Building Resilient AI Teams in 2026",
        excerpt: "As the landscape of AI tools rapidly shifts, how do you hire and structure a team that can adapt? Our insights from helping over 50 enterprise clients scale their AI operations.",
        category: "Engineering",
        author: {
            name: "Dr. Elena Rostova",
            role: "VP of Engineering",
            avatarUrl: "https://i.pravatar.cc/150?u=elena"
        },
        publishedAt: "November 15, 2025",
        readTimeMin: 8,
        featuredImageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
        tags: ["Team Building", "Culture", "AI Engineers"],
        content: `
      <h2>The Rise of the AI Engineer</h2>
      <p>The traditional distinction between Data Scientists and Full-Stack Developers is blurring. Enter the "AI Engineer."</p>
      <p>An AI Engineer in 2026 doesn't necessarily train models from scratch. Instead, they excel at applying pre-trained models to business logic. They understand the nuances of prompt routing, the architecture of vector databases, and the art of system orchestration.</p>
      <h3>Structuring for Resilience</h3>
      <p>Resilient teams focus on fundamental principles rather than framework loyalty. The best tool today might be obsolete in three months. By cultivating teams that prioritize robust orchestration and continuous evaluation pipelines, your organization can gracefully swap out underlying models as the technology evolves.</p>
    `
    }
];
