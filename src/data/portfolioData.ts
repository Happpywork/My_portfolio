import { PersonalInfo, Education, AwardCertification, TechStackCategory, Project, FAQItem } from '../types';

export const initialPersonalInfo: PersonalInfo = {
  name: "성지훈",
  nameEn: "Jihoon Seong",
  birthDate: "2000년 8월 17일",
  age: 26,
  phone: "010-8455-6871",
  email: "sjh000817@naver.com",
  secondaryEmail: "shj817000@gmail.com",
  address: "서울특별시 성북구 정릉로 388",
  githubUrl: "https://github.com/seongjihoon",
  role: "Full-Stack Software Engineer & CS Major",
  status: "홍익대학교 컴퓨터공학과 재학 중 (학점 4.0/4.5)",
  summary: "문제를 집요하게 파고들어 직관적이고 견고한 소프트웨어로 풀어내는 풀스택 개발자 성지훈입니다. 탄탄한 컴퓨터공학 기본기와 현대적인 웹 기술(React, TypeScript, Node.js, Python)을 결합하여 가치를 창출합니다.",
  aboutStory: [
    "홍익대학교 컴퓨터공학과에서 자료구조, 알고리즘, 운영체제, 네트워크 등 기초 CS 지식을 깊이 있게 다지며 학점 4.0/4.5를 유지해 왔습니다.",
    "프론트엔드의 사용자 중심 직관성과 백엔드의 견고한 데이터 파이프라인 설계를 아우르는 풀스택 개발을 지향합니다.",
    "코드의 성능 병목을 수치로 파악하고, 기술 선택의 타당성을 논리적으로 검증하며, 동료와의 적극적인 소통을 통해 최고의 프로덕트를 만들어 갑니다."
  ]
};

export const initialEducationList: Education[] = [
  {
    id: "hongik-univ",
    school: "홍익대학교 (Hongik University)",
    major: "컴퓨터공학과 (Department of Computer Engineering)",
    degree: "공학학사 과정",
    period: "2020년 3월 ~ 2027년 2월 (졸업예정)",
    status: "재학 중 (학부생)",
    gpa: "4.0",
    maxGpa: "4.5",
    description: "컴퓨터 아키텍처, 시스템 프로그래밍, 데이터베이스 및 알고리즘 심화 전공 지식을 탄탄히 이수하며 상위권 성적을 달성했습니다.",
    courses: [
      "자료구조 (A+)",
      "알고리즘 (A+)",
      "컴퓨터시스템구조 (A+)",
      "운영체제 (A)",
      "데이터베이스 (A+)",
      "컴퓨터네트워크 (A)",
      "소프트웨어공학 (A)"
    ],
    achievements: [
      "전공 평점 4.0 / 4.5 달성",
      "컴퓨터공학과 알고리즘 스터디 그룹 리드",
      "교내 소프트웨어 캡스톤 프로젝트 우수 선정"
    ]
  },
  {
    id: "choongang-high",
    school: "중앙고등학교 (Choong Ang High School)",
    major: "자연계열 (이공계열 과정)",
    degree: "고등학교 졸업",
    period: "2016년 3월 ~ 2019년 2월",
    status: "졸업",
    description: "수학과 과학에 대한 높은 열정을 바탕으로 교내외 과학·프로그래밍 동아리 활동을 적극적으로 수행했습니다.",
    achievements: [
      "교내 수학·정보과학 우수 학생 표창",
      "자연이공계열 동아리 연합 학술제 발표"
    ]
  }
];

export const initialAwardsCertifications: AwardCertification[] = [
  {
    id: "award-1",
    date: "2019.01",
    title: "0000 대상",
    organization: "○○○○협회",
    type: "award",
    badge: "대상 (Grand Prize)",
    description: "창의적인 문제 해결 및 소프트웨어 알고리즘 설계 역량을 인정받아 수여받은 최고상입니다."
  },
  {
    id: "cert-1",
    date: "2019.01",
    title: "0000 자격증",
    organization: "○○○○협회",
    type: "certification",
    badge: "공인 자격증",
    description: "공인된 기관의 평가를 거쳐 취득한 전문 자격증으로, 기본 소프트웨어 지식과 기술을 공인받았습니다."
  },
  {
    id: "award-2",
    date: "2024.06",
    title: "홍익대학교 SW 프로그래밍 경진대회 우수상",
    organization: "홍익대학교 SW중심대학사업단",
    type: "award",
    badge: "우수상 (Excellence)",
    description: "복잡한 알고리즘 그래프 탐색 및 동적계획법 최적화 과제를 빠르고 정확하게 구현하여 입상했습니다."
  },
  {
    id: "cert-2",
    date: "2023.11",
    title: "SQLD (SQL 개발자)",
    organization: "한국데이터산업진흥원",
    type: "certification",
    badge: "국가공인 자격",
    description: "관계형 데이터베이스 모델링 및 정규화, 복합 SQL 쿼리 최적화 역량을 검증받았습니다."
  }
];

export const techStackData: TechStackCategory[] = [
  {
    category: "Languages",
    skills: [
      {
        name: "JavaScript",
        level: "Advanced",
        description: "ES6+ 문법, 비동기 프로그래밍(Promise, Async/Await), 이벤트 루프에 대한 높은 이해",
        iconName: "Code2",
        tags: ["ESNext", "Async", "DOM API"]
      },
      {
        name: "TypeScript",
        level: "Advanced",
        description: "제네릭, 유니온/교차 타입, 유틸리티 타입을 활용한 정적 타입 안전성 및 대규모 코드 유지보수",
        iconName: "FileCode",
        tags: ["Generics", "Type Safety", "Strict Mode"]
      },
      {
        name: "Python",
        level: "Proficient",
        description: "FastAPI 백엔드 개발, 데이터 수집/전처리, PyTorch/OpenCV를 활용한 AI 모델 서빙",
        iconName: "Terminal",
        tags: ["FastAPI", "Data Analysis", "Automation"]
      },
      {
        name: "C / C++",
        level: "Proficient",
        description: "포인터, 메모리 할당/해제 관리, 자료구조(STL), POSIX 시스템 프로그래밍 최적화",
        iconName: "Cpu",
        tags: ["Memory Management", "STL", "OS Concepts"]
      }
    ]
  },
  {
    category: "Frontend",
    skills: [
      {
        name: "React",
        level: "Advanced",
        description: "함수형 컴포넌트, 커스텀 훅, 상태 관리(Context, Zustand), 렌더링 라이프사이클 최적화",
        iconName: "Layers",
        tags: ["React 18/19", "Custom Hooks", "Virtual DOM"]
      },
      {
        name: "Next.js",
        level: "Proficient",
        description: "SSR / SSG / ISR 렌더링 전략 활용, App Router, SEO 최적화 및 API 라우트 연동",
        iconName: "Globe",
        tags: ["App Router", "SSR", "SEO"]
      },
      {
        name: "HTML5 & CSS3",
        level: "Advanced",
        description: "시맨틱 웹 표준 준수, 크로스 브라우징, Flexbox & Grid 레이아웃, 반응형 웹 디자인",
        iconName: "Layout",
        tags: ["Semantic HTML", "CSS Grid", "Responsive"]
      },
      {
        name: "Tailwind CSS",
        level: "Advanced",
        description: "유틸리티 퍼스트 스타일링, 디자인 시스템 컴포넌트화, 다크모드 및 미려한 인터랙션 구현",
        iconName: "Palette",
        tags: ["Utility First", "Dark Mode", "Animations"]
      }
    ]
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        level: "Advanced",
        description: "이벤트 기반 비동기 I/O 런타임, 스트림 처리, npm 패키지 모듈화 및 서버 아키텍처",
        iconName: "Server",
        tags: ["Event Loop", "Streams", "REST API"]
      },
      {
        name: "Express",
        level: "Advanced",
        description: "RESTful API 설계, 미들웨어 파이프라인 구성, JWT 인증/인가, 에러 핸들링",
        iconName: "ShieldCheck",
        tags: ["Middleware", "JWT Auth", "Routing"]
      },
      {
        name: "Python Backend",
        level: "Proficient",
        description: "비동기 ASGI 서버(FastAPI, Uvicorn)를 통한 고성능 마이크로서비스 및 머신러닝 모델 연동",
        iconName: "Zap",
        tags: ["FastAPI", "Async I/O", "Microservices"]
      }
    ]
  },
  {
    category: "Database & Tools",
    skills: [
      {
        name: "Git & GitHub",
        level: "Advanced",
        description: "Git-Flow 브랜치 전략, Pull Request 코드 리뷰, GitHub Actions를 통한 CI/CD 자동화",
        iconName: "GitBranch",
        tags: ["Git Flow", "PR Review", "CI/CD"]
      },
      {
        name: "PostgreSQL",
        level: "Proficient",
        description: "관계형 스키마 설계, 인덱싱 최적화, 트랜잭션 격리 수준 및 복합 쿼리 작성",
        iconName: "Database",
        tags: ["ACID", "Index Tuning", "Complex Joins"]
      },
      {
        name: "MySQL",
        level: "Proficient",
        description: "정규화/반정규화 모델링, 외래키 제약조건, 실행 계획(EXPLAIN) 분석 및 쿼리 튜닝",
        iconName: "HardDrive",
        tags: ["Normalization", "Query Tuning", "ERD"]
      }
    ]
  }
];

export const LIVE_DEMO_URL = 'file:///c%3A/Users/sung%20jihoon/Desktop/%EB%8D%B0%EC%9D%B4%ED%84%B0/%EC%8B%A4%EC%8A%B52/index.html';

export const initialProjects: Project[] = [
  {
    id: "practice2-project",
    title: "실습2 웹 프로젝트 (Live Demo)",
    subtitle: "인터랙티브 웹 표준 구현 및 반응형 UI 레이아웃 실습 데모",
    period: "2024.10 ~ 2024.11",
    category: "Frontend",
    description: "컴퓨터공학과 웹 프로그래밍 실습 과제로 제작된 인터랙티브 웹 프로젝트입니다. 시맨틱 HTML5 구조와 CSS3 스타일링, 자바스크립트 기반 동적 컴포넌트를 직접 설계하여 완성도 높은 사용자 경험을 제공합니다.",
    keyFeatures: [
      "웹 표준 및 웹 접근성을 고려한 시맨틱 HTML5 구조 설계",
      "CSS3 Flexbox 및 Grid 기반 반응형 레이아웃 및 트랜지션 애니메이션 구현",
      "자바스크립트 DOM 조작을 통한 인터랙티브 UI 인터페이스 구축",
      "새 탭에서 로컬 독립 실행이 가능한 단일 페이지 웹 애플리케이션"
    ],
    roleAndAchievements: [
      "실습2 프론트엔드 마크업 구조 및 인터랙션 로직 전담 개발",
      "크로스 브라우징 및 다양한 뷰포트 해상도 최적화 완료",
      "독립 실행형 로컬 웹 환경(index.html) 배포 및 테스트 완료"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveDemoUrl: LIVE_DEMO_URL,
    metrics: [
      { label: "실행 환경", value: "HTML5/JS" },
      { label: "반응형 완성도", value: "100%" },
      { label: "데모 상태", value: "Live Ready" }
    ],
    architectureNote: "Semantic HTML5 Architecture -> CSS3 Custom Styling -> JavaScript Interactive DOM Controller",
    isFeatured: true
  },
  {
    id: "devpulse",
    title: "DevPulse - 실시간 협업 코드 에디터 & 샌드박스",
    subtitle: "다중 사용자가 웹상에서 실시간으로 코드를 동시 편집하고 격리된 환경에서 즉시 실행하는 협업 플랫폼",
    period: "2024.03 ~ 2024.08",
    category: "Fullstack",
    description: "원격 환경에서 동료들과 알고리즘을 함께 풀고 코드를 리뷰할 수 있도록 기획된 웹 기반 IDE 플랫폼입니다. 분산 환경에서의 동시 편집 충돌을 해결하고, 안전한 샌드박스 컨테이너 환경에서 코드를 컴파일 및 실행합니다.",
    keyFeatures: [
      "Monaco Editor 기반 다중 사용자 실시간 동시 편집 및 커서 위치/하이라이트 동기화",
      "CRDT(Conflict-free Replicated Data Types) 알고리즘을 적용한 오프라인 복구 및 타이핑 충돌 방지",
      "Node.js 및 Docker 컨테이너 풀을 활용한 C++, Python, JavaScript 안전 코드 실행 및 스트리밍 결과 수신",
      "WebSocket 양방향 통신 기반 실시간 채팅, 디버깅 로그 콘솔 및 터미널 뷰",
      "PostgreSQL을 활용한 프로젝트 버전 스냅샷 및 파일 트리 영속화"
    ],
    roleAndAchievements: [
      "프론트엔드 React/TypeScript 아키텍처 및 CRDT 동기화 엔진 전담 설계 및 구현",
      "동시 편집 패킷 최적화를 통해 평균 타이핑 반영 레이턴시를 42ms로 최소화",
      "Docker 기반 격리 샌드박스를 구축하여 악성 시스템 호출(Syscall)을 원천 차단하고 메모리 누수 방지",
      "베타 테스터 80여 명 대상 진행 결과 동시 협업 세션 안정성 99.8% 달성"
    ],
    techStack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "WebSocket", "Docker", "Tailwind CSS"],
    githubUrl: "https://github.com/seongjihoon/devpulse-ide",
    liveDemoUrl: "https://devpulse-demo.web.app",
    metrics: [
      { label: "동기화 지연시간", value: "< 45ms" },
      { label: "지원 언어", value: "C++, Py, JS" },
      { label: "동시 접속 테스트", value: "50+ Users" }
    ],
    architectureNote: "Client (React + Monaco Editor + CRDT Worker) <-> WebSocket Gateway <-> Docker Execution Sandbox & PostgreSQL Cluster",
    isFeatured: true
  },
  {
    id: "campuslink",
    title: "CampusLink - 홍익대학교 컴공과 학업 & 랩실 매칭 플랫폼",
    subtitle: "컴퓨터공학과 학생들의 전공 스터디 결성, 전공 Q&A 및 학부 연구생(랩실) 연계 통합 포털",
    period: "2023.09 ~ 2024.01",
    category: "Fullstack",
    description: "컴퓨터공학과 학생들이 전공 과목을 수강하며 겪는 스터디 구인의 어려움과 학부 연구실(Lab) 정보 부족 문제를 해결하기 위해 제작한 전공 맞춤형 커뮤니티 플랫폼입니다.",
    keyFeatures: [
      "과목별(자료구조, OS, 알고리즘 등) 스터디 모집 및 승인/지원자 관리 대시보드",
      "KaTeX 수식 렌더링 및 코드 하이라이팅을 지원하는 전공 Q&A 기술 포럼",
      "홍익대학교 컴공과 12개 연구실(AI, 네트워크, 시스템 등) 프로필 및 학부 연구생 공고 열람",
      "JWT 기반 학교 웹메일(@hongik.ac.kr) 인증 시스템으로 신뢰도 높은 학생 커뮤니티 조성"
    ],
    roleAndAchievements: [
      "Next.js App Router 기반 SSR/SSG 하이브리드 구성으로 First Contentful Paint 1.1초 달성",
      "MySQL 인덱스 최적화 및 복합 키 설계를 통해 게시글 검색 쿼리 응답 시간 65% 개선",
      "홍익대학교 컴퓨터공학과 학생 350명 이상이 가입하여 30여 개 스터디 매칭 성과 달성",
      "반응형 모바일 퍼스트 레이턴시 설계로 스마트폰 환경에서도 원활한 이용 지원"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "MySQL", "Express"],
    githubUrl: "https://github.com/seongjihoon/campuslink",
    liveDemoUrl: "https://campuslink-hongik.web.app",
    metrics: [
      { label: "실 사용자 수", value: "350+ 명" },
      { label: "결성된 스터디", value: "32개 그룹" },
      { label: "로딩 속도 개선", value: "FCP 1.1s" }
    ],
    architectureNote: "Next.js SSR Frontend <-> Express API Server <-> MySQL Database with Connection Pooling",
    isFeatured: true
  },
  {
    id: "deepvision",
    title: "DeepVision Analyzer - 실시간 비전 데이터 분석 대시보드",
    subtitle: "YOLOv8 기반 객체 인식 파이프라인과 비동기 스트림을 웹 대시보드로 실시간 시각화",
    period: "2023.03 ~ 2023.07",
    category: "System & AI",
    description: "CCTV 및 영상 스트림에서 객체(보행자, 차량 등)를 감지하고 밀집도 및 통행량을 실시간으로 집계하여 시각화하는 인공지능 영상 분석 웹 솔루션입니다.",
    keyFeatures: [
      "YOLOv8 모델 경량화(ONNX 변환)를 통한 고속 객체 인식 및 트래킹(Tracking)",
      "FastAPI 기반 비동기 스트리밍 엔드포인트 및 WebSocket 실시간 프레임 전송",
      "React 기반 대시보드에서 시간대별 객체 카운트 및 이상 감지 차트 동적 렌더링",
      "PostgreSQL 시계열 데이터를 분석하여 피크 시간대 혼잡도 자동 리포트 생성"
    ],
    roleAndAchievements: [
      "Python 비동기 처리(asyncio) 및 배치 추론 파이프라인 구축으로 35 FPS 실시간 처리 유지",
      "React 캔버스 오버레이 렌더링 최적화(RequestAnimationFrame)로 브라우저 CPU 점유율 25% 절감",
      "인식 결과 데이터베이스 저장 배치 처리로 쓰기 I/O 병목 40% 완화"
    ],
    techStack: ["Python", "FastAPI", "OpenCV", "PyTorch", "React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/seongjihoon/deepvision-analyzer",
    liveDemoUrl: "https://deepvision-demo.web.app",
    metrics: [
      { label: "실시간 추론", value: "35 FPS" },
      { label: "인식 정확도(mAP)", value: "88.4%" },
      { label: "CPU 부하 감소", value: "-25%" }
    ],
    architectureNote: "Video Stream -> Python/OpenCV YOLOv8 Worker -> FastAPI WebSocket -> React Dashboard (Recharts + Canvas)",
    isFeatured: true
  },
  {
    id: "minikernel",
    title: "C++ Memory Allocator & Kernel Virtual Simulator",
    subtitle: "C/C++ 기반 커스텀 동적 메모리 할당자(malloc/free) 및 가상 메모리 페이징 시뮬레이터",
    period: "2022.09 ~ 2022.12",
    category: "System & AI",
    description: "컴퓨터 시스템 구조 및 운영체제 수업 프로젝트의 일환으로, 표준 라이브러리의 메모리 할당 로직을 직접 구현하고 가상 메모리 단편화 문제를 해결하는 시뮬레이터 소프트웨어입니다.",
    keyFeatures: [
      "Best-Fit, First-Fit 및 Buddy Memory Allocation 알고리즘 자체 구현",
      "LRU(Least Recently Used) 및 Clock 알고리즘 기반 가상 메모리 페이지 교체 시뮬레이션",
      "멀티스레드 동시성 환경에서의 메모리 락 경합(Spinlock vs Mutex) 벤치마킹",
      "웹 환경에서 메모리 블록 할당과 해제 과정을 인터랙티브하게 확인할 수 있는 비주얼라이저 구현"
    ],
    roleAndAchievements: [
      "C++17 표준 및 RAII 패턴을 엄격히 준수하여 메모리 누수 0건 달성 (Valgrind 정밀 검증)",
      "단편화 감소를 위한 Coalescing(인접 빈 블록 병합) 기법 적용으로 메모리 활용률 28% 향상",
      "수업 내 80여 개 프로젝트 중 성능 벤치마크 상위 5% 최우수 평가"
    ],
    techStack: ["C", "C++", "POSIX Threads", "Makefile", "Valgrind", "React"],
    githubUrl: "https://github.com/seongjihoon/cpp-memory-allocator",
    liveDemoUrl: "https://allocator-sim.web.app",
    metrics: [
      { label: "메모리 누수", value: "0 bytes" },
      { label: "활용률 개선", value: "+28%" },
      { label: "성능 랭킹", value: "Top 5%" }
    ],
    architectureNote: "Custom Buddy Memory Allocator Engine (C++) -> Performance Benchmark Harness -> Interactive Visualization",
    isFeatured: false
  }
];

export const faqItems: FAQItem[] = [
  {
    question: "주요 강점과 추구하는 개발자상은 무엇인가요?",
    answer: "컴퓨터공학과에서 다진 탄탄한 CS 이론(자료구조, 알고리즘, 컴퓨터구조, OS)을 기반으로 빠른 기술 습득력과 깊이 있는 문제 해결 능력을 갖추고 있습니다. 단순히 '돌아가는 코드'에 만족하지 않고, 성능과 확장성, 유지보수성을 고려한 클린 코드를 작성하는 것을 원칙으로 삼고 있습니다."
  },
  {
    question: "팀 협업 시 커뮤니케이션 스타일은 어떠한가요?",
    answer: "상대방의 의견을 경청하고 기술적 결정에 대한 근거를 명확히 설명하는 논리적인 커뮤니케이션을 선호합니다. Git 브랜치 전략, PR 코드 리뷰, 이슈 트래킹을 적극적으로 활용하며, 문제 발생 시 원인을 투명하게 공유하고 함께 해결책을 모색합니다."
  },
  {
    question: "인턴십 또는 채용 기회에 관심이 있으신가요?",
    answer: "네! 풀스택 엔지니어링, 프론트엔드/백엔드 소프트웨어 개발 인턴 및 주니어 포지션에 적극적으로 열려 있습니다. 연락처(010-8455-6871)나 이메일(sjh000817@naver.com)로 편하게 연락 주시면 빠른 시일 내에 성실히 답변드리겠습니다."
  },
  {
    question: "현재 어떤 기술 분야를 중점적으로 학습하고 계신가요?",
    answer: "대규모 트래픽 처리를 위한 분산 백엔드 아키텍처 및 데이터베이스 인덱스 튜닝, 그리고 React 19와 Next.js 최신 렌더링 패턴 및 웹 어셈블리(Wasm)를 통한 고성능 브라우저 컴퓨팅에 깊은 관심을 두고 꾸준히 학습하고 있습니다."
  }
];
