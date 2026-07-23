const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      certifications: "Certifications",
    },
    hero: {
      hello: "Hello, I'm",
      rolePrefix: "Data",
      description:
        "Building scalable data pipelines and production-ready analytics systems. Passionate about transforming raw events into trusted business insight.",
      primaryCta: "View Projects",
      secondaryCta: "My CV",
      typed: ["Engineer", "Warehouse Builder", "Pipeline Developer", "Analytics Enabler"],
    },
    about: {
      title: "About Me",
      subtitle: "Get to know me better",
      p1: "I'm an Information Technology graduate from UIT with a strong interest in data engineering and modern data platforms. I focus on data integration, pipeline development, data modeling, and analytics systems.",
      p2: "I'm motivated to build reliable, scalable, and maintainable data solutions while continuously learning new technologies and contributing to business-driven projects.",
      locationLabel: "Location",
      locationValue: "Binh Hung, Ho Chi Minh City",
      companyLabel: "Company",
      roleLabel: "Role",
      roleValue: "Data Engineer",
      focusLabel: "Focus",
      focusValue: "Real-time & Warehousing",
    },
    skills: {
      title: "Skills & Tech Stack",
      subtitle: "Technologies I work with",
      programming: "Programming Languages",
      dataEngineering: "Data Engineering",
      platform: "Cloud & Data Platform",
      devops: "DevOps & Visualization",
    },
    projects: {
      title: "Projects",
      subtitle: "Things I've built",
      featured: "Featured",
      viewRepo: "View Repository",
      aviation: {
        title: "Aviation Data Warehouse Pipeline",
        description:
          "A cloud-native data warehouse solution that transforms fragmented aviation data into analytics-ready marts with orchestration, Spark processing, data quality controls, and reconciliation.",
      },
      genolab: {
        title: "GenoLab Enterprise Clinical Genomics Data Warehouse",
        description:
          "A governed SQL Server warehouse and serving platform for healthcare and genomics datasets with batch-safe ETL, data quality runtime rules, FastAPI serving, and BI consumption.",
      },
    },
    experience: {
      title: "Experience",
      subtitle: "My professional journey",
      f8a: {
        role: "Data Engineer",
        b1: "Designed real-time ingestion pipelines using AWS Kinesis/Kafka, Spark Structured Streaming/Flink, and Amazon S3.",
        b2: "Built raw, cleaned, hourly, and daily data layers for streaming and historical analytics.",
        b3: "Modeled KPI-ready marts for installs, conversions, revenue, CPI, ROAS, retention, and campaign performance.",
        b4: "Implemented monitoring, reconciliation, schema handling, and freshness checks.",
      },
      fss: {
        role: "Data Engineer Fresher",
        b1: "Participated in analyzing and validating pipelines for cloud-based banking data projects.",
        b2: "Supported data integration, QA, workflow monitoring, and SQL-based troubleshooting.",
        b3: "Contributed to Python processing scripts and external REST API data tasks.",
      },
      mindx: {
        role: "Part-time Coding Instructor",
        b1: "Taught beginner coding through Scratch, Game Maker, Python, and small app/data exercises.",
        b2: "Helped learners debug code, understand logic, and use Git more confidently.",
      },
    },
    education: {
      title: "Education",
      subtitle: "Academic background",
      uit: {
        major: "Bachelor's Degree — Information Technology",
        school: "Vietnam National University Ho Chi Minh City",
        gpa: "GPA: 3.3 / 4",
      },
      nlu: {
        title: "Nong Lam University, Ho Chi Minh City",
        major: "First Bachelor's Degree — Biotechnology",
        desc: "A distinctive interdisciplinary foundation before moving fully into tech and data.",
      },
    },
    certs: {
      title: "Certifications",
      subtitle: "Professional credentials",
      viewCredential: "View Credential",
      etl: "Practical ETL foundations for data workflows and relational processing.",
      sql: "Validates problem-solving and practical SQL querying ability.",
      toeic1: "English reading and listening competency for technical and professional communication.",
      toeic2: "Supports bilingual collaboration and presentation readiness.",
    },
    contact: {
      title: "Let's build reliable data systems together.",
      subtitle:
        "I'm open to data engineering opportunities where scalable pipelines, strong quality controls, and analytics impact really matter.",
      email: "Email Me",
      github: "GitHub Profile",
    },
  },
  vi: {
    nav: {
      home: "Trang chủ",
      about: "Giới thiệu",
      skills: "Kỹ năng",
      projects: "Dự án",
      experience: "Kinh nghiệm",
      education: "Học vấn",
      certifications: "Chứng chỉ",
    },
    hero: {
      hello: "Xin chào, mình là",
      rolePrefix: "Data",
      description:
        "Xây dựng data pipeline có khả năng scale và hệ thống analytics sẵn sàng production. Mình thích biến raw event thành insight đáng tin cậy cho business.",
      primaryCta: "Xem dự án",
      secondaryCta: "CV của tôi",
      typed: ["Engineer", "Warehouse Builder", "Pipeline Developer", "Analytics Enabler"],
    },
    about: {
      title: "Về mình",
      subtitle: "Hiểu rõ hơn về mình",
      p1: "Mình là cử nhân Công nghệ Thông tin từ UIT, có định hướng rõ về Data Engineering và các nền tảng dữ liệu hiện đại. Mình tập trung vào data integration, pipeline development, data modeling và analytics systems.",
      p2: "Mục tiêu của mình là xây dựng các giải pháp dữ liệu đáng tin cậy, có khả năng mở rộng, dễ bảo trì; đồng thời liên tục học công nghệ mới và đóng góp vào những bài toán gắn với nhu cầu kinh doanh thực tế.",
      locationLabel: "Địa điểm",
      locationValue: "Bình Hưng, TP. Hồ Chí Minh",
      companyLabel: "Công ty",
      roleLabel: "Vai trò",
      roleValue: "Data Engineer",
      focusLabel: "Trọng tâm",
      focusValue: "Real-time & Warehousing",
    },
    skills: {
      title: "Kỹ năng & Công nghệ",
      subtitle: "Những công nghệ mình sử dụng",
      programming: "Ngôn ngữ lập trình",
      dataEngineering: "Data Engineering",
      platform: "Cloud & Data Platform",
      devops: "DevOps & Trực quan hóa",
    },
    projects: {
      title: "Dự án",
      subtitle: "Những gì mình đã xây dựng",
      featured: "Nổi bật",
      viewRepo: "Xem Repository",
      aviation: {
        title: "Aviation Data Warehouse Pipeline",
        description:
          "Giải pháp data warehouse theo hướng cloud-native, biến dữ liệu hàng không rời rạc thành các data mart sẵn sàng cho analytics, có orchestration, Spark processing, data quality controls và reconciliation.",
      },
      genolab: {
        title: "GenoLab Enterprise Clinical Genomics Data Warehouse",
        description:
          "Nền tảng warehouse trên SQL Server cho dữ liệu healthcare và genomics, có batch-safe ETL, runtime rule cho data quality, FastAPI serving và lớp tiêu thụ BI.",
      },
    },
    experience: {
      title: "Kinh nghiệm",
      subtitle: "Hành trình nghề nghiệp của mình",
      f8a: {
        role: "Data Engineer",
        b1: "Thiết kế real-time ingestion pipeline với AWS Kinesis/Kafka, Spark Structured Streaming/Flink và Amazon S3.",
        b2: "Xây dựng các lớp raw, cleaned, hourly và daily cho cả streaming lẫn historical analytics.",
        b3: "Model KPI-ready marts cho installs, conversions, revenue, CPI, ROAS, retention và campaign performance.",
        b4: "Triển khai monitoring, reconciliation, schema handling và freshness check.",
      },
      fss: {
        role: "Data Engineer Fresher",
        b1: "Tham gia phân tích và validate pipeline cho các dự án dữ liệu cloud liên quan lĩnh vực ngân hàng.",
        b2: "Hỗ trợ data integration, QA, workflow monitoring và xử lý sự cố bằng SQL.",
        b3: "Đóng góp vào Python processing scripts và xử lý dữ liệu qua REST API bên ngoài.",
      },
      mindx: {
        role: "Giảng viên lập trình bán thời gian",
        b1: "Dạy lập trình cơ bản qua Scratch, Game Maker, Python và các bài tập app/data nhỏ.",
        b2: "Giúp học viên debug code, hiểu logic và dùng Git tự tin hơn.",
      },
    },
    education: {
      title: "Học vấn",
      subtitle: "Nền tảng học thuật",
      uit: {
        major: "Cử nhân — Công nghệ Thông tin",
        school: "Đại học Quốc gia TP. Hồ Chí Minh",
        gpa: "GPA: 3.3 / 4",
      },
      nlu: {
        title: "Đại học Nông Lâm TP. Hồ Chí Minh",
        major: "Bằng đại học đầu tiên — Công nghệ Sinh học",
        desc: "Nền tảng liên ngành tạo nên một câu chuyện chuyển hướng sang tech và data khá khác biệt.",
      },
    },
    certs: {
      title: "Chứng chỉ",
      subtitle: "Năng lực chuyên môn",
      viewCredential: "Xem chứng chỉ",
      etl: "Nền tảng thực hành ETL cho workflow dữ liệu và xử lý quan hệ.",
      sql: "Thể hiện năng lực giải quyết bài toán và truy vấn SQL thực tế.",
      toeic1: "Khả năng đọc hiểu và nghe tiếng Anh trong môi trường kỹ thuật và chuyên nghiệp.",
      toeic2: "Hỗ trợ tốt cho giao tiếp, phối hợp và trình bày song ngữ.",
    },
    contact: {
      title: "Cùng xây những hệ thống dữ liệu đáng tin cậy nhé.",
      subtitle:
        "Mình đang mở cho các cơ hội Data Engineering nơi pipeline có thể scale, data quality được kiểm soát tốt và analytics tạo ra impact thật.",
      email: "Gửi email",
      github: "GitHub cá nhân",
    },
  },
};

const langToggle = document.getElementById("langToggle");
const langLabel = document.getElementById("langLabel");
const themeToggle = document.getElementById("themeToggle");
const typedText = document.getElementById("typedText");
const html = document.documentElement;

let currentLang = localStorage.getItem("portfolio-lang") || "en";
let currentTheme = localStorage.getItem("portfolio-theme") || "dark";
let typingIndex = 0;
let charIndex = 0;
let deleting = false;

function getNestedValue(obj, path) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

function applyTranslations(lang) {
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = getNestedValue(dict, key);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.documentElement.lang = lang === "vi" ? "vi" : "en";
  langLabel.textContent = lang.toUpperCase();
  resetTyping();
}

function setTheme(theme) {
  currentTheme = theme;
  html.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio-theme", theme);
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("portfolio-lang", lang);
  applyTranslations(lang);
}

function typeLoop() {
  const words = translations[currentLang].hero.typed;
  const currentWord = words[typingIndex];

  if (!deleting) {
    charIndex += 1;
    typedText.textContent = currentWord.slice(0, charIndex);
    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(typeLoop, 1200);
      return;
    }
  } else {
    charIndex -= 1;
    typedText.textContent = currentWord.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      typingIndex = (typingIndex + 1) % words.length;
    }
  }

  setTimeout(typeLoop, deleting ? 50 : 85);
}

function resetTyping() {
  typingIndex = 0;
  charIndex = 0;
  deleting = false;
  typedText.textContent = "";
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

const sections = document.querySelectorAll(".section-observed");
const navLinks = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.dataset.nav === id);
        });
      }
    });
  },
  {
    rootMargin: "-35% 0px -45% 0px",
    threshold: 0.1,
  }
);

sections.forEach((section) => sectionObserver.observe(section));

langToggle.addEventListener("click", () => {
  setLang(currentLang === "en" ? "vi" : "en");
});

themeToggle.addEventListener("click", () => {
  setTheme(currentTheme === "dark" ? "light" : "dark");
});

setTheme(currentTheme);
applyTranslations(currentLang);
typeLoop();
