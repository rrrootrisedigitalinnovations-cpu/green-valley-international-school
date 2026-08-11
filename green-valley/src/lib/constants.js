export const SCHOOL = {
  name: "Green Valley International School",
  short: "Green Valley",
  tagline: "Learning Today. Leading Tomorrow.",
  city: "Coimbatore",
  state: "Tamil Nadu",
  curriculum: "Cambridge International",
  phone: "+91 422 456 7890",
  email: "admissions@greenvalleyinternational.edu.in",
  address: "Survey No. 142, Vellalore–Sulur Ring Road, Coimbatore, Tamil Nadu 641402",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125099.0!2d76.9558!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCoimbatore%2C+Tamil+Nadu!5e0!3m2!1sen!2sin!4v1700000000000",
};

export const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Admissions", to: "/admissions" },
  { label: "Faculty", to: "/faculty" },
  { label: "Campus Life", to: "/campus-life" },
  { label: "Facilities", to: "/facilities" },
  { label: "Gallery", to: "/gallery" },
  { label: "News & Events", to: "/news" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export const STATS = [
  { label: "Students", value: 1000, suffix: "+" },
  { label: "Faculty Members", value: 120, suffix: "+" },
  { label: "Years of Excellence", value: 25, suffix: "+" },
  { label: "Sports Disciplines", value: 15, suffix: "+" },
];

export const WHY_GREEN_VALLEY = [
  {
    title: "International Curriculum",
    description:
      "A fully accredited Cambridge International pathway from Kindergarten to Grade 12, recognised by universities in over 160 countries.",
    icon: "Globe2",
  },
  {
    title: "Experienced Faculty",
    description:
      "120+ educators, many Cambridge-trained and internationally certified, with an average of 12 years in the classroom.",
    icon: "GraduationCap",
  },
  {
    title: "Smart Classrooms",
    description:
      "Interactive displays, adaptive learning software and acoustically engineered rooms designed for focus, not distraction.",
    icon: "MonitorPlay",
  },
  {
    title: "Safe Campus",
    description:
      "24/7 trained security, biometric access, CCTV-monitored transport and an on-campus medical centre staffed during school hours.",
    icon: "ShieldCheck",
  },
  {
    title: "Innovation Labs",
    description:
      "Dedicated robotics, design-thinking and applied-science labs where students build, test and present real prototypes.",
    icon: "FlaskConical",
  },
  {
    title: "Global Exposure",
    description:
      "Student exchange partnerships, Model UN delegations and international competitions across STEM, arts and athletics.",
    icon: "Plane",
  },
];

export const PROGRAMS = [
  {
    stage: "01",
    title: "Kindergarten",
    ages: "Ages 3–5",
    description:
      "A play-anchored early-years programme built around the Cambridge Early Years framework — language, motor skills and curiosity, nurtured through guided discovery.",
    image: "kindergarten",
  },
  {
    stage: "02",
    title: "Primary School",
    ages: "Ages 6–10 · Grades 1–5",
    description:
      "Cambridge Primary builds literacy, numeracy and scientific reasoning while introducing coding, art and a second language.",
    image: "primary",
  },
  {
    stage: "03",
    title: "Middle School",
    ages: "Ages 11–13 · Grades 6–8",
    description:
      "Cambridge Lower Secondary deepens subject mastery and introduces project-based learning, debate and applied technology.",
    image: "middle",
  },
  {
    stage: "04",
    title: "High School",
    ages: "Ages 14–18 · Grades 9–12",
    description:
      "IGCSE and A Level pathways with dedicated university counselling, preparing students for admission to top global institutions.",
    image: "high",
  },
];

export const FACILITIES = [
  { title: "Smart Classrooms", description: "Interactive panels and adaptive learning tools in every room.", icon: "MonitorPlay", image: "smartClassrooms" },
  { title: "Science Laboratories", description: "Independent Physics, Chemistry and Biology labs for hands-on inquiry.", icon: "FlaskConical", image: "scienceLabs" },
  { title: "Computer Labs", description: "Industry-standard workstations for programming and applied computing.", icon: "Cpu", image: "computerLabs" },
  { title: "Library & Learning Commons", description: "18,000+ print titles alongside full digital archive access.", icon: "BookOpen", image: "library" },
  { title: "Sports Arena", description: "A multi-discipline arena for athletics, football, basketball and more.", icon: "Trophy", image: "sportsArena" },
  { title: "Music Studio", description: "Soundproofed practice rooms and a full recording suite.", icon: "Music2", image: "musicStudio" },
  { title: "Dance Studio", description: "Sprung-floor studios for classical and contemporary dance.", icon: "Sparkles", image: "danceStudio" },
  { title: "Auditorium", description: "A 900-seat auditorium for assemblies, theatre and concerts.", icon: "Theater", image: "auditorium" },
  { title: "Robotics Lab", description: "Fabrication tools and competition-grade robotics kits.", icon: "Bot", image: "roboticsLab" },
  { title: "Swimming Pool", description: "A temperature-controlled, semi-Olympic training pool.", icon: "Waves", image: "swimmingPool" },
];

export const STUDENT_LIFE = [
  { title: "Sports", description: "15+ disciplines from athletics to swimming, coached to competition standard.", image: "sports" },
  { title: "Arts", description: "Studio-based visual arts, from sketching to sculpture and design.", image: "arts" },
  { title: "Music", description: "Choir, orchestra and contemporary ensembles across every grade.", image: "music" },
  { title: "STEM", description: "Applied science, engineering challenges and research symposiums.", image: "stem" },
  { title: "Coding", description: "From block-based logic in Primary to full-stack projects in High School.", image: "coding" },
  { title: "Robotics", description: "FIRST-affiliated robotics teams competing nationally and abroad.", image: "robotics" },
  { title: "Cultural Events", description: "Annual day, international food fest and heritage celebrations.", image: "cultural" },
  { title: "Field Trips", description: "Curriculum-linked excursions from local farms to overseas exchanges.", image: "trips" },
];

export const ACHIEVEMENTS = [
  { value: "48", label: "Olympiad Medals", detail: "National & international Math, Science and Informatics Olympiads, past 3 years." },
  { value: "22", label: "Sports Championships", detail: "District, state and national titles across athletics, swimming and team sports." },
  { value: "94%", label: "University Placement", detail: "Class of 2025 admitted to first-choice universities across 12 countries." },
  { value: "16", label: "International Competitions", detail: "Robotics, Model UN and design challenges represented on the world stage." },
];

export const TESTIMONIALS = [
  {
    name: "Ananya Krishnan",
    role: "Parent, Grade 6",
    quote:
      "What stood out was how quickly the teachers understood our daughter as an individual, not just a name on a roster. The Cambridge structure gave us a clear map of where she was headed.",
  },
  {
    name: "Rohan Mehta",
    role: "Alumnus, Class of 2022 — now at NUS Singapore",
    quote:
      "The IGCSE grounding and the university counselling team meant I walked into my first year abroad already comfortable with independent, self-directed study.",
  },
  {
    name: "Divya Suresh",
    role: "Parent, Grade 2",
    quote:
      "The smart classrooms and the pace of feedback we get from teachers make it easy to stay involved without hovering. It genuinely feels like a partnership.",
  },
  {
    name: "Arjun Iyer",
    role: "Grade 11 Student",
    quote:
      "The robotics lab is open most evenings, and that access — more than any single class — is what pushed me to actually build things instead of just reading about them.",
  },
  {
    name: "Meera Nair",
    role: "Parent, Grade 9",
    quote:
      "We looked at four schools before choosing Green Valley. The campus safety systems and the transparency around academic progress made the decision easy.",
  },
  {
    name: "Karthik Balan",
    role: "Alumnus, Class of 2021 — now at IIT Madras",
    quote:
      "The applied-science labs gave me a head start on lab discipline that most of my engineering classmates were learning for the first time in college.",
  },
];

export const FACULTY = [
  { name: "Dr. Lakshmi Narayanan", role: "Principal", department: "Leadership", qualification: "Ph.D. Education, Cambridge University", experience: "26 years", photoIndex: 0 },
  { name: "Vivek Anand", role: "Vice Principal, Academics", department: "Leadership", qualification: "M.Ed., University of Melbourne", experience: "19 years", photoIndex: 1 },
  { name: "Priya Raghavan", role: "Head of Mathematics", department: "Mathematics", qualification: "M.Sc. Mathematics, IIT Madras", experience: "14 years", photoIndex: 2 },
  { name: "James Okoye", role: "Head of Sciences", department: "Science", qualification: "M.Sc. Physics, Imperial College London", experience: "16 years", photoIndex: 3 },
  { name: "Sneha Pillai", role: "Head of English & Humanities", department: "Humanities", qualification: "M.A. English, Delhi University", experience: "11 years", photoIndex: 4 },
  { name: "Arun Kumar", role: "Head of Robotics & Design Technology", department: "STEM", qualification: "B.Tech Mechatronics, Anna University", experience: "9 years", photoIndex: 5 },
  { name: "Fiona Clarke", role: "Head of Early Years", department: "Kindergarten", qualification: "PGCE Early Years, University of Bristol", experience: "13 years", photoIndex: 6 },
  { name: "Deepak Menon", role: "Director of Sports", department: "Athletics", qualification: "M.P.Ed., LNIPE Gwalior", experience: "15 years", photoIndex: 7 },
];

export const NEWS = [
  { title: "Green Valley robotics team places 2nd at Asia-Pacific Robotics Challenge", date: "June 2026", category: "Achievement" },
  { title: "Admissions open for Academic Year 2027–28 across all grades", date: "July 2026", category: "Admissions" },
  { title: "New Innovation Wing to open with expanded fabrication and AI labs", date: "May 2026", category: "Campus" },
  { title: "Class of 2026 secures offers from 31 universities across 9 countries", date: "April 2026", category: "Achievement" },
  { title: "Annual Cultural Day 2026 celebrates 18 countries of student heritage", date: "March 2026", category: "Community" },
  { title: "Green Valley hosts Coimbatore Regional Math Olympiad", date: "February 2026", category: "Academics" },
];

export const EVENTS = [
  { title: "Campus Open House", date: "16 Aug 2026", time: "9:00 AM – 1:00 PM" },
  { title: "Cambridge Curriculum Info Session", date: "29 Aug 2026", time: "4:00 PM – 5:30 PM" },
  { title: "Inter-House Athletics Meet", date: "12 Sep 2026", time: "8:00 AM – 4:00 PM" },
  { title: "Annual Science & Robotics Fair", date: "3 Oct 2026", time: "10:00 AM – 5:00 PM" },
];

export const ADMISSION_STEPS = [
  { step: "01", title: "Submit Enquiry", description: "Share your child's details through our online enquiry form or campus visit desk." },
  { step: "02", title: "Campus Tour", description: "Walk the campus, meet grade-level coordinators and see classrooms in session." },
  { step: "03", title: "Assessment", description: "An age-appropriate assessment in literacy, numeracy and, for older grades, a short interview." },
  { step: "04", title: "Offer & Enrolment", description: "Receive your offer within 5 working days and complete enrolment online." },
];

export const FEES = [
  { grade: "Kindergarten", annual: "₹2,85,000" },
  { grade: "Primary (Grades 1–5)", annual: "₹3,40,000" },
  { grade: "Middle School (Grades 6–8)", annual: "₹3,85,000" },
  { grade: "High School (Grades 9–12)", annual: "₹4,25,000" },
];

export const SCHOLARSHIPS = [
  { title: "Academic Excellence Award", detail: "Up to 50% tuition for students with an outstanding academic record." },
  { title: "Sibling Support", detail: "15% reduction for every additional sibling enrolled." },
  { title: "Sports & Arts Talent Grant", detail: "Up to 30% for state or national-level achievement in sport or the arts." },
  { title: "Staff & Alumni Grant", detail: "20% for children of Green Valley alumni and staff." },
];

export const ADMISSIONS_FAQS = [
  { q: "What is the age cut-off for Kindergarten admission?", a: "Children must turn 3 years old on or before 31 May of the academic year they are enrolling for." },
  { q: "Do you accept mid-year transfers?", a: "Yes, subject to seat availability and an academic assessment aligned to the student's current grade." },
  { q: "Is transport provided?", a: "Yes, GPS-tracked buses cover most residential zones across Coimbatore; routes are shared during enrolment." },
  { q: "Are scholarships need-based or merit-based?", a: "We offer both. Merit-based awards are assessed at admission; need-based support can be discussed with our finance office." },
];

export const CAREERS = [
  { title: "Mathematics Teacher, Grades 9–12", department: "Academics", type: "Full-time" },
  { title: "Early Years Educator", department: "Kindergarten", type: "Full-time" },
  { title: "Robotics & Design Technology Instructor", department: "STEM", type: "Full-time" },
  { title: "School Counsellor", department: "Student Wellbeing", type: "Full-time" },
  { title: "Sports Coach — Swimming", department: "Athletics", type: "Part-time" },
  { title: "Front Office Administrator", department: "Operations", type: "Full-time" },
];

export const BENEFITS = [
  { title: "Professional Development", description: "Fully funded Cambridge PD and annual international conference sponsorship." },
  { title: "Health Coverage", description: "Comprehensive medical insurance for staff and dependants." },
  { title: "Campus Access", description: "On-campus gym, pool and dining, at no cost during working hours." },
  { title: "Tuition Concession", description: "Reduced tuition for staff children enrolled at Green Valley." },
];
