export type ProjectHighlight = {
  title: string;
  asIs: string;
  toBe: string;
};

export type FeatureGroup = {
  title: string;
  items: string[];
};

export type TalkingPoint = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  status?: string;
  summary: string;
  overview: string;
  roles: string[];
  highlights: ProjectHighlight[];
  features?: FeatureGroup[];
  talkingPoints?: TalkingPoint[];
  retrospective: string;
  stack: string[];
  site?: string;
  stores?: {
    ios?: string;
    android?: string;
  };
  cover: string;
  coverFit?: "cover" | "contain";
  icon?: string;
  gallery: { src: string; alt: string }[];
  featured: boolean;
};

export const profile = {
  name: "김정원",
  nameEn: "Jungwon Kim",
  title: "AI Native Engineer",
  birth: "2000. 03. 13",
  email: "mike03131313@gmail.com",
  github: "https://github.com/KJWGarden",
  githubHandle: "KJWGarden",
  school: "인제대학교",
  location: "김해, 대한민국",
  headline: "AI를 하나의 기능이 아니라 제품의 중심으로 설계합니다.",
  description:
    "사용자의 문제를 해결하기 위해 LLM, RAG, Speech AI를 서비스에 적용하고, AI를 활용한 개발 워크플로우를 구축하여 실제 운영 가능한 제품을 만듭니다. 기획부터 디자인, 개발, 운영, 데이터 분석까지 전 과정을 수행하며 AI가 제품의 핵심 가치가 되도록 설계합니다.",
};

export const navItems = [
  { href: "#about", label: "소개" },
  { href: "#projects", label: "프로젝트" },
  { href: "#awards", label: "수상" },
  { href: "#skills", label: "기술" },
] as const;

export const capabilities = [
  {
    title: "AI를 제품의 중심으로 설계",
    description:
      "LLM 연동에 그치지 않고 RAG, Speech AI, 용어집, 프롬프트, 운영 콘솔까지 한 제품으로 묶습니다. 모델보다 데이터와 워크플로우가 신뢰를 만든다고 생각합니다.",
  },
  {
    title: "현장에서 검증되는 실행력",
    description:
      "국제 컨퍼런스 실시간 통역처럼 네트워크와 변수가 많은 현장에서 서비스를 직접 운영했습니다. 개발과 운영, 이해관계자 소통을 함께 책임집니다.",
  },
  {
    title: "측정하고 개선하는 제품 감각",
    description:
      "GTM과 퍼널 분석으로 이탈 지점을 확인하고, 운영 자동화로 사용자와 운영자 경험을 함께 다듬습니다. 가설을 세우고 데이터로 검증합니다.",
  },
];

export const projects: Project[] = [
  {
    slug: "busanccc",
    title: "CCC 커뮤니티",
    subtitle: "부산CCC 공식 커뮤니티 앱 · AI 에이전트 개발 파이프라인",
    period: "2025.11 — 현재",
    status: "운영 중 · v1.5.2",
    summary:
      "커뮤니티·기도·QT·채플 출석·수련회 신청·실시간 통번역까지 사역 전반을 하나로 묶은 iOS/Android 앱. 1인 풀스택으로 운영하며, Claude가 기획·구현하고 Codex만 승인할 수 있는 멀티 에이전트 개발 파이프라인을 직접 설계해 7일간 22개 태스크를 독립 리뷰 182회를 거쳐 처리했습니다.",
    overview:
      "대학 선교단체 부산CCC의 공식 커뮤니티 앱입니다. 게시판과 스토리 같은 소셜 기능부터 기도·QT·영적 일기, GPS 채플 출석, 제자훈련 콘텐츠, 수련회 신청과 선택강의, 캠퍼스 모임 장소 공유(순플), 외국인 참가자용 실시간 통번역까지 사역 흐름을 한 앱에 모았습니다. React Native(Expo) 앱과 Supabase(Postgres·RLS·RPC·pg_cron), Deno Edge Functions를 혼자 설계·운영하며 유저 400+, MAU 200+, DAU 40+ 규모로 키우고 있습니다. 혼자서도 팀 수준의 품질을 내기 위해 개발 과정 자체를 AI 에이전트 파이프라인으로 다시 설계했습니다. Claude 에이전트가 기획·분석·구현을 맡고, 다른 모델인 Codex가 단계마다 독립적으로 승인하며, UI 변경은 Maestro E2E를 통과해야만 리뷰에 올라갑니다. 끝난 작업은 위키와 케이스 스터디로 남아 다음 작업의 컨텍스트가 됩니다.",
    roles: [
      "1인 풀스택 개발 — 기획 · 앱 · DB 스키마 · Edge Function · 배포/운영",
      "AI 에이전트 개발 워크플로우 설계 — 역할별 모델 분리, 위험도 기반 라우팅, 승인 게이트",
      "Maestro E2E 런타임 검증 게이트와 에이전트가 직접 실행하는 부하 테스트 도구 구축",
      "React Native 0.86 · Expo 57(New Architecture, React Compiler) · Reanimated 4 앱 설계",
      "Supabase RLS/RPC/pg_cron 기반 권한·동시성·푸시·출석 파이프라인 구축",
      "EAS Build 채널과 fingerprint 기반 OTA 운영 정책 수립",
    ],
    highlights: [
      {
        title: "AI가 만든 코드를 AI가 승인하지 않는 파이프라인",
        asIs: "혼자 개발하면 코드 리뷰어가 없습니다. AI에게 구현과 검토를 모두 맡기면 같은 모델이 자기 결과를 승인하는 셈이라 검증이 형식에 그치고, 작업이 끝나면 맥락도 대화와 함께 사라졌습니다.",
        toBe: "Claude 에이전트는 기획·분석·구현·수정만 하고, 승인은 독립 Codex 리뷰어만 할 수 있도록 역할을 나눴습니다. 요청은 위험도에 따라 FAST/STANDARD/FULL로 라우팅하고, DB·권한·보안 변경은 기획→분석→구현→최종 리뷰를 모두 거칩니다. 7일간 22개 태스크에서 리뷰 182회 중 45회(약 25%)가 반려됐고, 모두 수정한 뒤에야 승인됐습니다. 결과는 위키 문서 39개와 케이스 스터디 18편으로 남아 다음 작업의 컨텍스트가 됩니다.",
      },
      {
        title: "Maestro E2E 런타임 검증 게이트",
        asIs: "에이전트는 시뮬레이터를 직접 탭할 수 없어서 화면 전환 검증을 사람이 해야 했습니다. 정적 검사만 통과한 UI 변경이 리뷰에 올라가는 일도 있었습니다.",
        toBe: "에이전트가 스스로 돌리는 Maestro 러너를 만들고, UI·내비게이션 변경은 PASS 기록이 있어야만 Codex 리뷰가 시작되게 했습니다. 러너를 믿기 전에 일부러 실패하는 Flow로 먼저 검증해, set -e와 tee가 실패를 가리던 문제를 PIPESTATUS로 고쳤습니다. 증거 누락이나 NOT_APPLICABLE 남용도 리뷰 차단 사유로 명시해 규칙의 빈틈을 닫았습니다.",
      },
      {
        title: "혼잡할 때만 나타나는 출석 대기열",
        asIs: "채플·수련회 출석은 푸시 직후처럼 예고 없이 몰리는데 대기열이 없었습니다. 기존 신청 대기열 공식은 오픈 시각 기준이라, 평소에는 바로 통과시키고 붐빌 때만 줄을 세우는 동작을 표현할 수 없었습니다.",
        toBe: "Postgres에서 GCRA(가상 스케줄링)로 슬롯을 원자적으로 배정해, 한가할 때는 즉시 입장하고 초과 유입이 이어질 때만 대기열이 생기게 했습니다. 서버 강제는 기존 INSERT RLS 정책에 조건 하나(AND EXISTS)만 추가했습니다. dev 환경에서 봇 300개가 몰리는 상황을 만들고 Maestro로 대기 순번 감소와 출석 완료까지 검증했습니다. 로컬 pgbench 200 동시 요청에서 슬롯 간격 위반은 0건이었습니다.",
      },
      {
        title: "선착순 강의 배정과 데드락 없는 강의 변경",
        asIs: "수련회마다 신청 문항이 달랐고, 금식 수련회는 정원이 있는 선택강의를 반드시 골라야 했습니다. 신청과 강의 배정이 따로 처리되면 강의 없이 신청만 된 상태가 생기고, 동시에 강의를 바꾸면 데드락 위험이 있었습니다.",
        toBe: "문항을 데이터로 저장해 관리자가 앱에서 편집하게 하고, 검증은 PL/pgSQL 한 곳에서 합니다. 신청과 강의 배정을 한 트랜잭션으로 묶어 잘못된 상태 자체가 생길 수 없게 했고, 강의 변경은 잠금 순서를 고정했습니다. 로컬 테스트에서 60명이 10석에 몰려도 정확히 10명만 배정됐고, 재시도를 끈 교차 변경 400회에서 데드락은 0건이었습니다.",
      },
      {
        title: "실시간 통번역 연동",
        asIs: "수련회 외국인 참가자는 별도 웹이나 도구로 통번역을 봐야 했고, 커뮤니티 앱과 현장 사역 흐름이 분리되어 있었습니다.",
        toBe: "국제 컨퍼런스에서 검증한 실시간 통번역 서비스를 앱에 연동했습니다. WebSocket으로 전사문·번역문·TTS를 스트리밍하고, sinceSeq 기반 백필과 지수 백오프 재연결로 끊겨도 자막이 이어지게 했습니다.",
      },
      {
        title: "OTA 사고 방지 설계",
        asIs: "네이티브 변경이 섞인 JS 번들을 구버전 빌드에 OTA로 내보내면 런타임이 깨질 수 있습니다. 스토어 심사 없이 핫픽스를 보내는 환경일수록 이 위험이 커집니다.",
        toBe: "runtimeVersion을 fingerprint 정책으로 두어 네이티브에 영향을 주는 변경이 생기면 런타임 버전이 자동으로 올라갑니다. 네이티브 모듈이 필요한 기능(지도, Liquid Glass)은 모듈이 없는 구버전 빌드에서도 앱이 죽지 않도록 TurboModuleRegistry로 존재를 확인한 뒤 지연 로드하고, 없으면 대체 화면을 보여 줍니다.",
      },
      {
        title: "권한과 보안 로직은 DB에",
        asIs: "통번역 비공개 세션 비밀번호를 앱과 관리자 웹에서 각각 해시해 로그인이 실패했고, 프로필·일기·장소 데이터를 앱에서만 가리면 클라이언트를 우회했을 때 접근 제어가 무너집니다.",
        toBe: "해시 검증과 시도 제한은 Postgres 함수(SECURITY DEFINER, bcrypt)로 일원화하고, 그룹 멤버 공개·작성자 수정·관리자 삭제는 RLS로 처리했습니다. PostgREST upsert가 컬럼 권한과 충돌하는 문제는 트리거 가드로 풀고, 일회용 Postgres에서 소유자·타인·관리자 역할별 26개 시나리오로 정책을 검증했습니다.",
      },
    ],
    features: [
      {
        title: "커뮤니티 & 영성 콘텐츠",
        items: [
          "게시글/댓글/좋아요, 익명 게시",
          "기도제목, 매일 QT와 그룹 공유, 오늘의 말씀, 영적 일기, 주간 주보",
          "채플 설교 요약: 관리자 웹에서 OpenAI API로 자동 요약 생성 → 앱에서 타임스탬프 탭 시 해당 지점 재생",
          "홈 리트릿 기도제목 티커: 복제 아이템과 UI 스레드 리셋으로 끊김 없는 세로 슬라이드",
        ],
      },
      {
        title: "수련회 신청 & 티저",
        items: [
          "하이브리드 구조: 티저·일정은 WebView(앱 배포 없이 수정), 번호표·대기열·신청은 네이티브",
          "WebView에는 인증 정보를 넘기지 않고, 최상위 프레임 이동만 허용하는 내비게이션 게이트",
          "수련회별 신청 문항 빌더, 정원이 있는 선택강의 선착순 배정, 폴링 기반 강의별 현황",
          "iOS 26 Liquid Glass(expo-glass-effect) → 구 iOS blur → Android 반투명의 3단 폴백",
        ],
      },
      {
        title: "채플 출석 & 리더보드",
        items: [
          "GPS 출석: Haversine 거리와 장소별 반경 검증, 출석하는 순간에만 위치 사용",
          "혼잡 시에만 나타나는 GCRA 대기열과 RLS 서버 강제(dev 검증 완료)",
          "pg_cron이 Edge Function을 5분마다 호출해 채플 1시간 전 자동 푸시",
          "학기별 MVP 리더보드·보상, 채플 리트릿 출석/리더보드",
        ],
      },
      {
        title: "순플 — 캠퍼스 모임 장소 공유",
        items: [
          "캠퍼스별 장소·별점·리뷰·사진·모임 횟수, 신고와 관리자 처리 화면",
          "Kakao 로컬 검색은 Edge Function 프록시로 호출해 API 키를 서버에만 보관",
          "네이버 지도 내 위치 중심 진입, 새 의존성 없이 만든 3단 바텀시트",
        ],
      },
      {
        title: "프로필 & 게임화",
        items: [
          "reactbits 3D 틸트 카드를 RN으로 포팅: 드래그와 회전 센서, 새 네이티브 모듈 없이 구현",
          "카드 뒷면 성장 현황과 뒤집기, 활동별 XP·레벨·배지, 업적 신청 후 관리자 승인",
          "제자훈련: 트랙 → 코스 → 강의 → 섹션 → 블록 계층, 원문 문법에 맞춘 저피로 읽기 UI",
        ],
      },
      {
        title: "성능 & 운영",
        items: [
          "모든 업로드 경로에 이미지 압축(긴 변 1280px): 호출부 13곳 수정 없이 공통 유틸 한 곳에서 처리",
          "화면 로딩 스피너 34곳을 공통 애니메이션으로 교체",
          "푸시 티켓 저장 → 5분 뒤 receipts 배치 조회로 실패 토큰 정리",
          "강제 업데이트, 알림 딥링크(route:id), EAS Build(dev/preview/production)와 OTA",
        ],
      },
    ],
    talkingPoints: [
      {
        title: "승인권은 다른 모델에게",
        description:
          "Claude 에이전트끼리의 검토는 승인으로 치지 않고, Codex 리뷰가 실패하면 작업을 막아 둡니다. 실제로 리뷰가 잡은 버그가 있습니다. 센서 틸트가 모든 기기에서 죽는 stale closure, PL/pgSQL에서 NULL 비교가 검증을 통과시키던 문제, 인자 없는 --bucket이 전체 버킷 덮어쓰기로 이어지던 스크립트까지 모두 배포 전에 걸렀습니다.",
      },
      {
        title: "검증 도구부터 검증한다",
        description:
          "빨간불이 켜질 수 없는 러너의 초록불은 증거가 아닙니다. Maestro 러너와 부하 테스트 도구도 버그가 있을 수 있는 코드로 보고, 일부러 실패시키거나 다른 증거와 대조했습니다. 스크린샷 이름과 서버 티켓을 비교하다 엉뚱한 종류를 테스트하고도 통과한 Flow를 찾아낸 적도 있습니다.",
      },
    ],
    retrospective:
      "사역 현장을 아는 상태로 기획부터 운영까지 혼자 맡으면서, 권한·배포·알림처럼 깨지면 공동체가 멈추는 부분을 먼저 단단히 해야 한다는 걸 배웠습니다. AI 에이전트를 본격적으로 쓰면서는 AI가 코드를 빨리 쓰는 것보다, 그 코드를 믿을 수 있게 만드는 구조가 더 중요하다는 걸 알게 됐습니다. 역할과 승인권을 나누고, 런타임 증거를 게이트로 두고, 끝난 작업을 위키로 남기자 혼자서도 리뷰와 검증을 갖춘 팀처럼 개발할 수 있었습니다. 코드를 직접 쓰는 데서 나아가, AI가 안전하게 일할 수 있는 개발 환경을 설계하는 쪽으로 역할을 넓히고 있습니다.",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "Claude Code",
      "Codex",
      "Maestro",
      "Reanimated",
      "TanStack Query",
      "Zustand",
      "NativeWind",
      "Deno",
      "EAS",
    ],
    site: "https://busanccc.com",
    stores: {
      ios: "https://apps.apple.com/kr/app/ccc-%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0/id6757016825",
      android: "https://play.google.com/store/apps/details?id=com.kimgarden.busancccapp&hl=ko&pli=1",
    },
    cover: "/images/busanccc-icon.png",
    coverFit: "contain",
    icon: "/images/busanccc-icon.png",
    gallery: [{ src: "/images/busanccc-icon.png", alt: "CCC 커뮤니티 앱 아이콘" }],
    featured: true,
  },
  {
    slug: "live-caption",
    title: "실시간 AI 통역 서비스",
    subtitle: "국제 컨퍼런스 다국어 자막 플랫폼",
    period: "2026.05 — 2026.07",
    summary:
      "한국어·일본어·중국어 발표를 실시간으로 번역해 참가자에게 다국어 자막을 제공하는 AI 통역 서비스. 비용을 90% 낮추고 현장 운영 콘솔까지 직접 구축했습니다.",
    overview:
      "국제 컨퍼런스에서 한국어·일본어·중국어 발표를 실시간으로 번역하여 참가자에게 다국어 자막을 제공하는 AI 기반 실시간 통역 서비스입니다. Deepgram(STT)과 GPT(번역)를 활용한 AI 파이프라인과 웹 기반 운영 대시보드를 구축하여 안정적인 현장 운영을 지원했습니다.",
    roles: [
      "실시간 AI 통역 서비스 전체 설계 및 개발",
      "AI 번역 파이프라인(STT → Translation → Subtitle) 아키텍처 설계",
      "국제 컨퍼런스 현장 서비스 운영 및 장애 대응",
    ],
    highlights: [
      {
        title: "AI 번역 파이프라인 비용 최적화",
        asIs: "기존 모델이 실시간 STT와 번역을 모두 Realtime API 기반으로 처리하여 시간당 약 $6의 API 비용이 발생했습니다. 장시간 진행되는 국제 행사 특성상 운영 비용이 높아 지속적인 서비스 운영에 부담이 됐습니다.",
        toBe: "STT와 번역을 각각 Deepgram과 GPT로 분리한 AI 파이프라인을 설계했습니다. 음성 인식과 번역에 각각 최적화된 모델을 적용하여 번역 품질은 유지하면서 시간당 약 $0.6 수준(약 90% 절감)으로 비용을 최적화했습니다.",
      },
      {
        title: "번역 품질 개선",
        asIs: "일반 AI 번역은 행사에서 자주 등장하는 신학 용어, 인명, 기관명을 일반 의미로 번역하여 오역이 발생했습니다. 또한 동일한 용어가 문맥에 따라 다르게 번역되어 일관성이 부족했습니다.",
        toBe: "사용자 정의 용어집(Dictionary)을 연동하고 Prompt Engineering을 적용했습니다. 행사에서 사용하는 고유 용어를 우선 적용하도록 개선하여 전문 용어의 번역 정확도와 일관성을 높였습니다.",
      },
      {
        title: "실시간 자막 송출",
        asIs: "기존 행사에서는 통역사와 별도의 장비가 필요했고, 여러 언어를 동시에 제공하는 데 제약이 있었습니다.",
        toBe: "Deepgram(STT) → GPT(번역) → WebSocket 기반 자막 송출 파이프라인을 구축하여 한국어, 일본어, 중국어 자막을 실시간으로 제공했습니다. 별도의 프로그램 설치 없이 브라우저만으로 서비스를 이용할 수 있습니다.",
      },
      {
        title: "운영 대시보드 구축",
        asIs: "운영자가 음성 입력, 번역 시작·종료, 언어 변경을 여러 프로그램에서 각각 관리해야 했습니다. 서비스 상태와 참가자 접속 현황도 실시간으로 확인하기 어려워 현장 대응 효율이 낮았습니다.",
        toBe: "번역 시작·종료, 언어 활성화, 실시간 번역 상태, 용어집 관리, 음성 입력 제어, 참가자 접속 현황을 하나의 웹 화면에서 수행할 수 있는 운영 콘솔을 개발하여 운영 효율과 대응 속도를 높였습니다.",
      },
    ],
    retrospective:
      "제한된 네트워크 환경과 예기치 못한 변수가 있는 현장에서도 안정적인 서비스를 제공하기 위해 무엇을 미리 고려해야 하는지 직접 경험했습니다. 개발뿐 아니라 운영진과의 빠른 소통이 안정적인 운영의 전제라는 점도 배웠습니다. 현장 피드백을 바탕으로 CCC 커뮤니티 앱에 서비스를 연동해 두었습니다.",
    stack: ["Next.js", "TypeScript", "Deepgram", "GPT", "WebSocket"],
    cover: "/images/live-caption.png",
    icon: "/images/live-caption-icon.png",
    gallery: [{ src: "/images/live-caption.png", alt: "실시간 AI 통역 운영 콘솔과 현장 장면" }],
    featured: true,
  },
  {
    slug: "ccc-ai",
    title: "AI 순장",
    subtitle: "RAG 기반 신앙·사역 챗봇",
    period: "2026.01 — 현재",
    status: "운영 중",
    summary:
      "성경과 순장 교육자료, 공동체 운영 문서를 Knowledge Base로 두고 근거 기반으로 답하는 RAG 챗봇. 인증·대화 기록·모바일 UX까지 실제 공동체에서 쓰이도록 만들었습니다.",
    overview:
      "사용자가 신앙, 공동체, 캠퍼스 사역과 관련된 질문을 AI와 자연스럽게 대화할 수 있도록 개발한 RAG 기반 AI 챗봇 서비스입니다. 단순 생성형 AI가 아니라 Knowledge Base 기반 RAG 시스템을 구축하여 성경, 순장 교육자료, 공동체 운영 문서 등을 검색한 뒤 근거 기반으로 답변하도록 설계했습니다. 인증 기반 대화 히스토리와 모바일 UX를 구현하여 실제 공동체에서 지속적으로 활용할 수 있는 AI 서비스로 만들었습니다.",
    roles: [
      "AI 챗봇 서비스 설계 및 구현",
      "Dify Chat API 연동 및 서버 프록시 구현",
      "인증 기반 Conversation 관리, Zustand 전역 상태 관리",
      "TanStack Query 기반 데이터 페칭 및 무한 스크롤, 모바일 반응형 UI/UX 개선",
    ],
    highlights: [
      {
        title: "AI 답변 신뢰성 개선 (RAG)",
        asIs: "일반 생성형 AI는 공동체 교육 자료와 운영 문서를 알지 못해 근거 없는 답변(Hallucination)이 발생하거나, 공동체의 방향성과 다른 답변을 제공하는 문제가 있었습니다.",
        toBe: "성경, 순장 교육자료, 운영 문서를 Knowledge Base로 구축하고 RAG 파이프라인을 설계했습니다. 관련 문서를 먼저 검색한 뒤 해당 문맥으로 답변을 생성하도록 구현하고, 문서에 없는 내용은 생성하지 않도록 프롬프트를 다듬어 Hallucination을 줄였습니다.",
      },
      {
        title: "인증 기반 대화 기록 관리",
        asIs: "클라이언트에서 AI API를 직접 호출하는 구조에서는 인증 정보 노출 위험이 있었고, 로그인 여부와 관계없이 대화 기록 접근을 제어하기 어려웠습니다.",
        toBe: "Next.js Route Handler를 활용한 API Proxy 구조를 설계하여 서버에서 인증을 검증한 뒤 AI API를 호출하도록 개선했습니다. 인증된 사용자만 자신의 대화 기록에 접근할 수 있도록 보안과 프라이버시를 강화했습니다.",
      },
      {
        title: "세션 전환 시 데이터 오염",
        asIs: "게스트 모드에서 로그인하거나 다른 계정으로 전환할 경우 기존 Conversation ID가 남아 이전 사용자의 대화가 이어지는 문제가 발생했습니다.",
        toBe: "Zustand Store의 Hydrate 시점에 세션을 검증하고 Conversation ID를 초기화하도록 개선했습니다. 세션마다 독립적인 Conversation을 유지해 대화 데이터의 독립성을 보장했습니다.",
      },
      {
        title: "AI 채팅 UX 개선",
        asIs: "대화 목록이 많아질수록 로딩 속도가 저하되었고, 모바일에서는 가상 키보드 활성화 시 입력창이 가려지거나 레이아웃이 흔들렸습니다.",
        toBe: "TanStack Query 기반 무한 스크롤로 대화 목록을 효율적으로 관리하고, 모바일 Viewport 변화에 대응하는 레이아웃을 적용하여 안정적인 채팅 경험을 제공했습니다.",
      },
    ],
    retrospective:
      "AI 모델 자체보다 데이터 품질과 검색 구조가 서비스의 신뢰성을 결정한다는 점을 깊이 체감했습니다. 단순히 LLM을 연동하는 것만으로는 원하는 답변을 주기 어려웠기 때문에, 자료를 직접 정리하고 Knowledge Base와 RAG를 설계했습니다. 앞으로는 Reranking, Hybrid Search, 장기 메모리 등을 적용해 더 정확한 AI Assistant로 발전시킬 계획입니다.",
    stack: ["Next.js", "TypeScript", "Dify", "TanStack Query", "Zustand", "Tailwind CSS"],
    site: "https://ai.busanccc.com",
    cover: "/images/ccc-ai.png",
    icon: "/images/ccc-ai-mascot.png",
    gallery: [
      { src: "/images/ccc-ai.png", alt: "AI 순장 서비스 소개와 모바일 채팅 화면" },
      { src: "/images/ccc-ai-kb.png", alt: "Knowledge Base로 정리한 교육 자료" },
    ],
    featured: true,
  },
  {
    slug: "auruda",
    title: "어르다",
    subtitle: "상담사 수련 매칭 플랫폼",
    period: "2026.01 — 현재",
    status: "운영 중",
    summary:
      "전국 상담 수련기관 탐색, 슈퍼비전 매칭, 모집 공고, 자격 요건 확인을 한곳에 모은 플랫폼. 랜딩·운영 도구·GTM 퍼널 분석까지 맡아 수상으로 이어졌습니다.",
    overview:
      "전국 상담 수련기관 정보 탐색, 슈퍼비전 매칭, 수련생 모집 공고, 상담사 자격 요건 확인을 제공하는 상담사 수련 매칭 플랫폼입니다. 사용자가 필요한 정보를 빠르게 탐색할 수 있도록 인터랙티브 UI를 구현했고, 운영 효율을 높이기 위한 내부 관리 시스템과 사용자 행동 데이터를 기반으로 서비스를 지속적으로 개선하고 있습니다.",
    roles: [
      "서비스 랜딩 페이지 UI/UX 설계 및 개발",
      "내부 운영 관리 시스템 개발",
      "인터랙티브 애니메이션 및 반응형 UI 구현",
      "Google Tag Manager 도입 주도 — 이벤트 설계와 홈 deferred 로딩",
      "Discord Webhook 기반 자동화 구축",
      "사용자 시나리오 작성 및 퍼널 분석",
    ],
    highlights: [
      {
        title: "첫인상과 진입 동선",
        asIs: "핵심 가치와 기능이 첫 화면에서 전달되지 않아, 상담 수련이 낯선 사용자가 서비스를 직관적으로 이해하기 어려웠습니다.",
        toBe: "스크롤 인터랙션과 3D Orbit 생태계 다이어그램으로 ‘기관 탐색 → 슈퍼비전 매칭 → 모집 공고 → 자격 확인’을 한눈에 보이게 했습니다. CTA를 동선 한가운데 두어 탐색·매칭으로 자연스럽게 보냈습니다.",
      },
      {
        title: "랜딩 성능과 분석의 충돌 해소",
        asIs: "GTM·Clarity를 첫 페인트에 같이 올리면 홈 초기 로드가 무거워지고, 분석을 빼면 퍼널을 볼 수 없습니다.",
        toBe: "홈은 GTM을 deferred로 두어 첫 입력 또는 idle 시점에만 로드합니다. 그 외 공개/보호 페이지는 즉시 로드해, 랜딩 성능과 전환 측정을 동시에 지켰습니다.",
      },
      {
        title: "퍼널을 이벤트 단위로 정의",
        asIs: "이탈 화면과 핵심 기능 사용량을 정량적으로 볼 데이터가 없어 개선 우선순위를 감으로 정해야 했습니다.",
        toBe: "회원가입, 상담기관 탐색, 슈퍼바이저 등록 등 시나리오별 이벤트를 GTM에 정의하고 퍼널을 그렸습니다. 어느 단계에서 빠지는지 보고 랜딩 CTA와 탐색 UI 개선 순서를 정했습니다.",
      },
      {
        title: "운영 효율과 장애 내성",
        asIs: "인터뷰 일정을 PM이 수동으로 공유했고, 백엔드가 비거나 지연되면 랜딩 일부가 깨졌으며 Infinite Slider는 드래그/클릭이 충돌했습니다.",
        toBe: "일정·진척 관리와 Discord Webhook 알림으로 배정·변경을 자동 공유했습니다. Null-safe 렌더와 드래그 임계값으로 장애·모바일 스크롤에서도 화면이 유지되게 했습니다.",
      },
    ],
    talkingPoints: [
      {
        title: "UX는 설명보다 구조",
        description:
          "수련 과정이 복잡한 도메인이라, 카피만 늘리지 않고 생태계 다이어그램과 CTA 동선으로 ‘지금 무엇을 하면 되는지’를 먼저 보여 주었습니다.",
      },
      {
        title: "측정은 첫 페인트 뒤에",
        description:
          "분석 태그를 홈 초기 경로에서 빼 첫 페인트를 지키고, 상호작용 이후에 이벤트를 모아 퍼널을 봤습니다. 성능과 데이터 기반 개선을 같은 레이어에서 설계했습니다.",
      },
    ],
    retrospective:
      "직관적인 UI만으로는 경험이 끝나지 않습니다. 홈에서는 분석을 늦춰 첫인상을 지키고, 그다음 GTM 퍼널로 이탈을 본 뒤에야 어떤 CTA를 고칠지 정할 수 있었습니다. 운영 자동화까지 포함해야 사용자와 운영자 경험이 같이 좋아진다는 점도 배웠습니다.",
    stack: ["Next.js", "TypeScript", "GTM", "Discord Webhook"],
    site: "https://www.auruda.co.kr",
    cover: "/images/auruda.png",
    gallery: [
      { src: "/images/auruda.png", alt: "어르다 랜딩 페이지와 핵심 기능" },
      { src: "/images/auruda-orbit.png", alt: "어르다 생태계 다이어그램" },
      { src: "/images/auruda-search.png", alt: "수련기관 탐색 화면" },
      { src: "/images/auruda-supervisors.png", alt: "슈퍼바이저 매칭 화면" },
      { src: "/images/auruda-flow.png", alt: "인터뷰 운영 자동화 흐름" },
    ],
    featured: true,
  },
];

export const awards = [
  {
    year: "2026",
    title: "G-스타트업리그 우수상",
    org: "경남창업교육네트워크 회장상",
    project: "어르다",
  },
  {
    year: "2026",
    title: "초광역 글로벌 창업노마드 기술혁신 아이디어 경진대회 대상",
    org: "경상남도지사상",
    project: "어르다",
  },
  {
    year: "2026",
    title: "1학기 IU 커스텀 학점제 대상",
    org: "인제대학교 총장상",
    project: "어르다",
  },
];

export const skills = {
  core: {
    label: "잘 다루는 기술",
    description: "실무에서 자주 사용하고, 제품 품질에 직접 기여한 기술입니다.",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "React Native", "Expo", "Zustand", "TanStack Query", "Tailwind CSS", "Supabase"],
  },
  experienced: {
    label: "경험해본 기술",
    description: "프로젝트 성격에 따라 사용하며 확장해 온 기술입니다.",
    items: ["Deepgram", "OpenAI", "Dify", "NativeWind", "EAS", "Deno", "PostgreSQL", "WebSocket", "GTM", "Discord Webhook"],
  },
};

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getOtherProjects() {
  return projects.filter((project) => !project.featured);
}
