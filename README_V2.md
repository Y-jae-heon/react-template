# 프론트엔드 프로젝트 아키텍처 & 컨벤션 가이드 (README)

이 문서는 본 프로젝트의 **프론트엔드 구조와 컨벤션 적용 방식**을 설명합니다.
팀의 아키텍처 가이드라인(Atomic Design + DDD)을 바탕으로, 이 프로젝트가 어떻게 구현되었는지를 명확히 전달합니다.

> ✅ 누구든지 이 README 로 구조를 파악하고 일관된 규칙으로 개발할 수 있도록 작성되었습니다.

---

## 🚀 프로젝트 개요

| 항목        | 내용                              |
| ----------- | --------------------------------- |
| 프레임워크  | React 19                          |
| 스타일      | Tailwind CSS + shadcn/ui          |
| 상태관리    | Zustand + React Query             |
| API 통신    | RESTful API 기반, Axios 래퍼 사용 |
| 타입 시스템 | TypeScript                        |
| 테스트      | Vitest (단위) / StoryBook v9      |
| 배포 환경   | AWS S3 / Cloud Front              |

---

## 설치 및 실행

```shell
# 의존성 설치
yarn install // or yarn

# 로컬 실행
yarn dev

# 프로덕션 실행
yarn dev:prod

# 개발 빌드
yarn build:dev

# 프로덕션 빌드
yarn build:prod

# 스토리북 실행
yarn storybook

# 스토리북 빌드
yarn build:storybook
```

## 📁 폴더 구조 요약

```bash
/src
  /apis
  /assets
  /components            # 전역 UI (Atomic Design 기준)
    /atoms
    /molecules
    /organisms
    /templates
    /ui                 # UI Kit 래핑 (shadcn, Radix 등)
  /pages
  /store                 # 글로벌 상태 저장소 (Zustand)
  /lib                   # 공통 유틸, 포맷터, 날짜 등
  /types                 # 전역 타입
  /constants             # 전역 상수
  /styles                # 전역 Tailwind, Theme 정의
```

---

## 🎨 Atomic Design 계층 기준

| 레벨        | 설명                               | 위치                                                            |
| ----------- | ---------------------------------- | --------------------------------------------------------------- |
| Atom        | 가장 작은 UI 요소 (Button, Input)  | `/components/atoms`                                             |
| Molecule    | Atom들의 조합 (LabeledInput 등)    | `/components/molecules`                                         |
| Organism    | 기능적 UI 단위 (Header, LoginForm) | `/components/organisms` 또는 `features/**/components/organisms` |
| Template    | 레이아웃 스켈레톤 (PageWrapper 등) | `/components/templates`                                         |
| Page/Screen | 실제 페이지 또는 화면              | `/pages`, `/screens`                                            |

---

## 도메인 분리 기준 (DDD 기반)

- ✅ 비즈니스 로직, API 종속성, 의미 있는 기능 단위 UI는 `/features/{domain}` 내부에 배치
- ✅ 외부에서 재사용 가능한 컴포넌트는 `/components` (전역)으로 추출
- ✅ `api/`, `services/`, `hooks/`는 명확하게 역할 구분하여 관심사 분리 유지

---

## 네이밍 컨벤션 요약

| 구분            | 예시                                    |
| --------------- | --------------------------------------- |
| 폴더 (도메인)   | `features/user` / `features/payment`    |
| 훅 파일         | `useUserForm.ts` / `useTimer.ts`        |
| API 함수        | `getUserAPI`, `postLoginAPI`            |
| 컴포넌트        | `UserCard`, `LoginForm` (PascalCase)    |
| 타입/인터페이스 | `UserDto`, `LoginParams`, `ButtonProps` |
| enum / 상수     | `USER_ROLE`, `ERROR_MESSAGE`            |

> 📌 전체 네이밍 규칙은 팀 컨벤션 문서에 상세 명시됨

---

## 환경 변수

#### 환경 변수는 프로젝트의 Root의 위치하여 사용합니다.

- .env.development
- .env.local
- .env.production

---

## 참고 문서 ( 링크 준비중 )

- [팀 아키텍처 가이드](./docs/architecture-guide.md)
- [컴포넌트 설계 기준표](./docs/component-standard.md)
- [도메인 분리 기준 체크리스트](./docs/domain-split-checklist.md)
- [PR & 코드리뷰 규칙](./docs/pr-review.md)

---

## 참조

> 이 README는 프로젝트 구조를 빠르게 이해하고, 팀의 컨벤션에 따라 개발하기 위한 출발점입니다.
>
> **구조가 변경될 경우 반드시 README도 함께 갱신**해주세요
