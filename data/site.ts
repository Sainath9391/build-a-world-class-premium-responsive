import {
  Award,
  BadgeCheck,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Lightbulb,
  Rocket,
  School,
  ShieldCheck,
  Sparkles,
  Star,
  Telescope,
  UserRound,
  Video,
  WandSparkles,
} from "lucide-react";

export const navigation = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Schools", href: "/schools" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const heroBadges = ["Classes 6-12", "LIVE", "Story Based Learning"];

export const stats = [
  { label: "Students", value: 10000, suffix: "+" },
  { label: "Schools", value: 100, suffix: "+" },
  { label: "Workshops", value: 500, suffix: "+" },
  { label: "Mentors", value: 50, suffix: "+" },
  { label: "Happy Parents", value: 95, suffix: "%" },
];

export const subjects = [
  {
    title: "AI Basics",
    description: "Students learn how AI thinks, sees patterns, and solves real-world problems.",
    icon: BrainCircuit,
  },
  {
    title: "Prompt Engineering",
    description: "Turn curiosity into results with age-appropriate prompting frameworks and games.",
    icon: WandSparkles,
  },
  {
    title: "Coding with AI",
    description: "Build mini apps, logic experiments, and AI-assisted projects with confidence.",
    icon: Bot,
  },
  {
    title: "Robotics",
    description: "Bridge hardware and intelligence through playful robotics challenges and demos.",
    icon: Rocket,
  },
  {
    title: "Creativity Tools",
    description: "Use generative tools for storytelling, design, video, and imagination-led creation.",
    icon: Sparkles,
  },
  {
    title: "Future Careers",
    description: "Explore emerging roles and learn how students can prepare early with purpose.",
    icon: BriefcaseBusiness,
  },
];

export const journey = [
  {
    title: "Enroll",
    description: "Parents choose the right Hai Buddy learning path and students enter the cohort that matches their class level and interests.",
  },
  {
    title: "Story Mission Starts",
    description: "Every batch begins with a themed AI mission so students feel like they are entering an adventure instead of a traditional class.",
  },
  {
    title: "Attend Live Class",
    description: "Students join mentor-led live sessions where AI concepts are explained through demos, stories, and hands-on guided interaction.",
  },
  {
    title: "Complete Activities",
    description: "Short tasks, prompts, and creative exercises help students practice immediately after class and build confidence step by step.",
  },
  {
    title: "Quiz & Challenge",
    description: "Quick quizzes and challenge rounds reinforce the lesson, reward curiosity, and keep learning competitive in a fun way.",
  },
  {
    title: "Build Project",
    description: "Students apply what they learned to create a mini AI project, from prompt experiments to simple build-and-showcase outcomes.",
  },
  {
    title: "Earn Badge",
    description: "Visible milestone badges celebrate effort, consistency, creativity, and skill development throughout the journey.",
  },
  {
    title: "Get Certificate",
    description: "At the end of the program, students receive a certificate that recognizes their participation, project work, and AI learning progress.",
  },
];

export const programs = [
  {
    title: "15-Day Summer Camp",
    duration: "Fast-track holiday cohort",
    description: "A high-energy holiday experience blending storytelling, AI play, and project demos.",
    price: "INR 4,999",
    features: ["Daily live mission", "Weekend build showcase", "Parent feedback summary"],
    cta: "Join Summer Camp",
  },
  {
    title: "1-Month Skill Builder",
    duration: "Balanced weekly momentum",
    description: "Our most popular starter program for students ready to build an AI foundation.",
    price: "INR 8,999",
    features: ["8 live classes", "Recorded lesson vault", "Mentor office hours", "Project portfolio"],
    cta: "Enroll in Skill Builder",
    featured: true,
  },
  {
    title: "3-Month Future Creator",
    duration: "Deep skill journey",
    description: "A premium guided pathway with capstone project, badges, and presentation confidence.",
    price: "INR 19,999",
    features: ["Advanced tracks", "Personal mentor guidance", "Career exposure sessions", "Certificate showcase"],
    cta: "Become a Future Creator",
  },
];



export const schoolOffers = [
  { title: "AI Workshops", icon: School, description: "Immersive workshops aligned to age groups and school calendars." },
  { title: "Curriculum Partnership", icon: GraduationCap, description: "Co-designed AI curriculum that complements school priorities." },
  { title: "Teacher Training", icon: UserRound, description: "Upskill educators to confidently guide students into AI-enabled learning." },
  { title: "AI Labs", icon: Telescope, description: "Launch branded AI lab experiences with project-led student cohorts." },
  { title: "Competitions", icon: Award, description: "Run hackathons, idea sprints, and challenge days that energize campus culture." },
];

export const team = [
  {
    name: "T. Abhilash",
    role: "Founder & CEO",
    bio: "Leads Hai Buddy's vision to make AI education premium, playful, and accessible for every school student.",
    image: "/team founders.jpeg",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "P. Sainath",
    role: "Co-Founder",
    bio: "Designs story-led learning journeys that help students understand AI through missions, projects, and confidence-building challenges.",
    image: "/sainath.png",
    linkedin: "www.linkedin.com/in/pendalwar-sainath-598169349",
    instagram: "https://www.instagram.com/aiwithsainath?igsh=MTBjeG5zbDJ1M3l3ZA==",
  },
  {
    name: "P. Praneeth",
    role: "Co-Founder",
    bio: "Shapes the mentorship, student success, and family experience layer so every learner feels supported from first class to final project.",
    image: "/praneeth.png",
    linkedin: "#",
    instagram: "#",
  },
];

export const investorPoints = [
  "Growing EdTech Market",
  "AI First Education Opportunity",
  "Scalable School + Student Model",
  "India Expansion Vision",
];

export const blogPosts = [
  { title: "AI News for Students", category: "Student Digest", excerpt: "A kid-friendly weekly lens on the latest breakthroughs and what they mean." },
  { title: "Parent Guide to AI", category: "Family Guide", excerpt: "How parents can understand AI, encourage safe use, and support future skills." },
  { title: "Future Careers", category: "Career Pathways", excerpt: "A practical look at tomorrow's roles and the abilities students should start building now." },
  { title: "Free Prompting Tips", category: "Learning Hacks", excerpt: "Simple prompting formulas students can use to learn better and create faster." },
];

export const faqs = [
  {
    question: "Which classes is Hai Buddy designed for?",
    answer: "Hai Buddy is designed for students from classes 6 to 12 with age-appropriate cohorts and challenge levels.",
  },
  {
    question: "Are the classes live, recorded, or both?",
    answer: "Both. Students get interactive live classes and structured recorded content for revision and self-paced exploration.",
  },
  {
    question: "Do students need prior coding experience?",
    answer: "No prior experience is required. We begin with guided, accessible foundations and gradually unlock higher-complexity tasks.",
  },
  {
    question: "Can schools partner for workshops or curriculum programs?",
    answer: "Yes. We partner with schools on workshops, curriculum integration, teacher training, labs, and competitions.",
  },
];

export const footerLinks = {
  quickLinks: navigation.slice(0, 6),
  programs: programs.map((program) => ({ label: program.title, href: "/programs" })),
  social: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "WhatsApp", href: "#" },
  ],
};

export const trustPillars = [
  { icon: ShieldCheck, title: "Parent-Friendly", text: "Safe, transparent, mentor-guided learning experiences." },
  { icon: Video, title: "Live", text: "Blended instruction for consistency and flexibility." },
  { icon: BadgeCheck, title: "Project Certified", text: "Portfolio-ready outcomes with badges and certificates." },
];

export const pageIntro = {
  title: "Teaching Kids the Future with AI",
  subtitle: "Your Friendly AI Learning Buddy Teaching Kids the Future",
};

export const schoolMetrics = [
  { label: "Campus partnerships in pipeline", value: "-" },
  { label: "Average workshop satisfaction", value: "-" },
  { label: "Programs localized for India", value: "-" },
];

export const investorMetrics = [
  { label: "Student acquisition engine", value: "B2C + B2B2C" },
  { label: "Revenue mix", value: "Programs, schools, workshops" },
  { label: "Retention design", value: "Cohort + content flywheel" },
];

export const comparePlans = [
  ["Live classes", "5 sessions", "8 sessions", "24 sessions"],
  ["Recorded library", "Limited access", "Full access", "Full access"],
  ["Projects", "1 project", "2 projects", "4 projects"],
  ["Mentor support", "Community", "Weekly office hours", "Priority mentor support"],
  ["Certificate", "Completion badge", "Skill certificate", "Capstone certificate"],
];

export const contactCards = [
  { title: "Email", value: "hello@haibuddy.ai" },
  { title: "Phone", value: "+91 98765 43210" },
  { title: "WhatsApp", value: "+91 98765 43210" },
  { title: "HQ", value: "Hyderabad, India" },
];

export const mascotIcons = [Bot, BrainCircuit, Lightbulb, Star, Rocket, Building2];
