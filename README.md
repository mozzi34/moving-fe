<div align=center>
	<span id="top">
	<h1>Moving 프론트엔드 레포지토리</h1><br>

![image](https://github.com/user-attachments/assets/7ac80cb6-b3a1-47c2-a70f-dc3f5b8da42d)




<b>[Moving 바로가기](https://moving-fe-re.vercel.app/)</b> <br>

<br> 
</div>

<details>
<summary>목차</summary>
  
1. [서비스 소개](#app)
2. [프론트엔드 팀 소개](#team)
3. [기술 및 개발 환경](#dev)
4. [개발 일정](#schedule)
5. [역할 분담](#roles)
6. [컨벤션](#convention)
7. [프로젝트 구조](#tree)
8. [협업 문화](#culture)
9. [버그 문제](#bug)
</details>
<br>


## <span id="app">📝 1. 서비스 소개</span>

<b>'무빙(Moving)'</b>은 이사를 준비하는 **소비자**와 전문 **이사 기사님**을 빠르고 간편하게 연결해주는 **이사 매칭 플랫폼**입니다.  
이사 시장의 **불투명한 가격 책정**과 **신뢰할 수 없는 서비스** 문제를 해결하기 위해, 소비자가 **채팅형 인터페이스**로 손쉽게 이사 정보를 입력하면 여러 기사님들이 견적을 제공하고, 소비자는 **제공된 견적과 리뷰를 비교해 자신에게 꼭 맞는 기사님을 선택**할 수 있습니다.  
무빙은 **소비자**와 **기사님** 모두가 믿고 이용할 수 있는 **편리하고 신뢰도 높은 이사 서비스**를 제공합니다.

### 구현한 기능

### 🏡 **소비자 기능**

- **견적 요청**  
  - 소비자는 **채팅 형태**의 인터페이스를 통해 간편하게 이사 정보를 입력하고 견적을 요청할 수 있습니다.  
  - 입력 항목: **이사 종류**, **이사 날짜**, **출발지 및 도착지 주소**  
  - **카카오 우편번호 서비스**를 활용해 정확한 주소 입력 가능  
  - **프로그래스 바**로 입력 진행 상황을 시각적으로 확인 가능  
  - 각 입력 항목에 있는 **수정하기 버튼**을 통해 입력 내용 수정 가능  
  - 요청한 견적은 **대기 중인 견적 페이지**에서 확인 및 **취소** 가능  

- **기사님 찾기 및 비교**  
  - 일반 견적 요청 후 소비자에게 요청을 보낸 기사님이 구분되어 **라벨**로 강조 표시됨  

- **SNS 공유**  
  - 기사님 정보를 SNS에 공유 가능  
    - 예시: `"이사를 준비하시나요? ⭐️ OOO 기사님을 추천합니다! 무빙에서 확인해 보세요! <기사님 상세 페이지 URL>"`  

- **지정 견적 요청**  
  - 일반 견적 요청 후 특정 기사님에게 **지정 견적 요청** 가능  
  - **지정 요청**은 일반 요청과 구분되어 **라벨**로 강조 표시됨  

- **받은 견적 관리**  
  - **대기 중인 견적 리스트**에서 진행 중인 견적 요청 확인 및 **취소** 가능  
  - 한 번의 요청에 대해 최대 **5명의 기사님**에게 견적 수신 가능 (지정 요청 시 추가 **3명**)  
  - **견적 상세 페이지**에서 기사님의 정보 및 견적가 확인 가능  
  - **완료된 이사**에 대한 견적서를 조회하고, 기사님을 **찜하기** 가능  

- **실시간 알림 제공**  
  - **새로운 견적 도착**, **견적 확정**, **이사 일정**에 대한 알림 제공  


### 🚚 **기사님 기능**
- **실시간 알림 제공**  
  - **새로운 견적 요청 수신**, **견적 확정**, **이사 일정** 알림 제공
 
<br>

### 시연 영상
[![MOVING 시연 영상](https://img.youtube.com/vi/영상ID/0.jpg)](https://github.com/user-attachments/assets/44cb82a9-84d9-47ae-a8e4-a27945bdd328)

<br><br>

## <span id="team"> 🧑🏻‍💻👩🏻‍💻 2. 프론트엔드 팀 소개</span>

### 팀원

| 김대건                                                                          | 김민서                                                                           | 김효인                                                                           | 박명준                                                                            | 이율리                                                                            |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/u/163653145?v=4" width="200px"/> | <img src="https://avatars.githubusercontent.com/u/101076926?v=4" width="200px"/> | <img src="https://avatars.githubusercontent.com/u/160555885?v=4" width="200px"/> | <img src="https://avatars.githubusercontent.com/u/103097363?v=4" width="200px"/> | <img src="https://avatars.githubusercontent.com/u/57631151?v=4" width="200px"/> |
| [TradeOffEgoist](https://github.com/TradeOffEgoist)                             | [claudia99503](https://github.com/claudia99503)                                   | [mozzi34](https://github.com/mozzi34)                                           | [mjpark-k](https://github.com/mjpark-k)                                           | [yoorli](https://github.com/yoorli)                                              |


<br>


## <span id="dev">🛠️ 3. 기술 및 개발 환경</span>

### Frontend

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

### Backend
- <a href="https://github.com/moving-team/moving-be"><b>Moving 백엔드 레포지토리</b></a><br>

### Design

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

### 협업방식

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">

### 배포

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

<br><br>

## <span id="schedule">📅 4. 개발 일정 [**2024-11-25 ~ 2025-01-13**]</span>

### 1. 기획 완료

- [x] 요구사항 분석 및 수집
- [x] 기술 스택 검토 및 선정
- [x] Git 브랜치 전략 수립
- [x] PR 규칙 등 팀 컨벤션 확립 [**2024-11-25 ~ 2024-11-28**]

### 2. 컴포넌트 개발

- [x] 각 단위별 담당자 지정 [**2024-11-29**]
- [x] 컴포넌트 개발 [**2024-11-29 ~ 2024-12-06**]

### 3. 페이지 개발

- [x] 페이지 레이아웃 및 구조 설계 [**2024-12-06**]
- [x] 페이지 개발 [**2024-12-06 ~ 2024-12-13**]
- [x] 페이지 스타일링 및 반응형 디자인 적용 [**2024-12-13 ~ 2024-12-20**]

### 4. 백엔드 API 연동

- [x] API 테스트 [**2024-12-21 ~ 2024-12-27**]
- [x] 페이지에 API 연동 [**2024-12-28 ~ 2025-01-09**]

### 5. 릴리스 준비

- [x] 최종 점검 및 테스트 [**2025-01-10 ~ 2025-01-13**]
- [x] **최종 발표** [**2025-01-14**]


<br>

## <span id="roles">📝 5. 역할 분담</span>


### **김효인**

🎶 **공통 컴포넌트**
- 🔗 **[알림 컴포넌트](https://github.com/mozzi34/moving-fe/blob/main/src/components/nav/components/NotificationModal.tsx)**  
  : 소비자와 기사님이 **새로운 견적**, **견적 확정**, **이사 당일 알림**을 실시간으로 받을 수 있는 컴포넌트.
  ![image](https://github.com/user-attachments/assets/e57319b1-2466-4774-ac44-28e8960195ab)

- 🔗 **[SNS 공유 컴포넌트](https://github.com/mozzi34/moving-fe/blob/main/src/components/snsShare/SnsShare.tsx)**  
  : 기사님 정보와 견적서를 **링크 복사**, **카카오톡**을 통해 손쉽게 공유할 수 있는 컴포넌트.

- 🔗 **[칩(Chip) 컴포넌트](https://github.com/mozzi34/moving-fe/blob/main/src/components/chip/Chip.tsx)**  
  : **소형 이사**, **가정 이사**, **사무실 이사**, **지정 견적 요청**, **확정 견적** 등 서비스 상태와 유형을 직관적으로 보여주는 컴포넌트.

- 🔗 **[Navbar Modal 통합](https://github.com/mozzi34/moving-fe/blob/main/src/lib/function/useNavModal.tsx)**  
  : 소비자와 기사님의 **메뉴, 프로필, 알림 모달**을 **단일 커스텀 훅으로 통합 관리**하며, 바깥 영역 클릭 시 자동으로 닫히는 로직도 포함.

</br></br>
✨ **[소비자 견적 요청 페이지](https://github.com/mozzi34/moving-fe/blob/main/src/page/user/costCall/index.tsx)**  
- **소비자**는 **채팅 형태**의 인터페이스를 통해 간편하게 **이사 정보를 입력**하고 **기사님에게 견적 요청**을 보낼 수 있습니다.



<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/2279d18c-eef8-43fa-81ef-eb60f96f27fa" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="https://github.com/user-attachments/assets/a9c03264-6118-462b-9ada-b1acc7194939" alt="모바일 버전 이미지"></td>
  </tr>
</table>

- #### **이사 정보 입력**  
	- **이사 종류**, **이사 날짜**, **출발지 및 도착지 주소** 입력  
	- **카카오 우편번호 서비스**를 활용해 **정확한 주소** 입력 가능  
	- **프로그래스 바**로 입력 진행 상황을 **시각적으로 확인** 가능  
	- 각 입력 항목 아래의 **수정하기 버튼**을 통해 입력 내용 **수정 가능**  

- ####  **견적 요청 기준**  
	- **이사일이 지난 후**에만 **새로운 견적 요청** 가능  
	- **한 번에 하나의 이사 정보**만 활성화하여 견적 요청 가능  
	- 기존 요청이 **확정**되기 전까지는 **새로운 요청 불가**  
	- 한 번의 요청에 대해 **최대 5명의 기사님**이 견적을 보낼 수 있음

<br>

✨ **[소비자 받았던 견적 목록 페이지](https://github.com/mozzi34/moving-fe/blob/main/src/page/user/receivedCost/index.tsx)**  
- **소비자**는 이전에 받았던 **견적 요청 목록**을 확인할 수 있습니다.  

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/6ad5416c-885b-47e1-abcf-1e605cbc0f0a" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="https://github.com/user-attachments/assets/e792ebdb-ecc0-4682-ae76-bb75bcd4725f" alt="모바일 버전 이미지"></td>
  </tr>
</table>

- 각 **견적 카드**에는 해당 요청에 응답한 **여러 기사님 중 첫 번째 기사님**의 견적서가 **대표 견적**으로 표시됩니다.  
- **확정 견적 뱃지**와 **지정 견적 요청 뱃지**와 **견적 금액**이 표시됩니다.  
  - **확정 견적**: **"확정" 뱃지** 표시  
  - **지정 견적 요청**: **"지정 요청" 뱃지** 표시  
- **"견적 목록 보기" 버튼**을 클릭하면 **받았던 견적 상세 페이지**로 이동하여 **해당 견적에 대한 여러 기사님들의 견적서 목록**을 확인할 수 있습니다.

<br>

✨ **[소비자 받았던 견적 상세 페이지](https://github.com/mozzi34/moving-fe/blob/main/src/page/user/receivedCostDetail/index.tsx)**  
- **소비자**가 보낸 **견적 요청 정보**가 표시됩니다.  

<table>
  <tr>
    <th style="width: 650px; height: 100px;">데스크탑 & 태블릿 버전</th>
    <th style="width: 350px; height: 100px;">모바일 버전</th>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/b722943e-d823-43d5-b0e7-1471d9c13a83" alt="데스크탑 & 태블릿 버전 이미지"></td>
    <td><img src="https://github.com/user-attachments/assets/54d0b831-7a7c-4995-90d1-3d89dc8b1003" alt="모바일 버전 이미지"></td>
  </tr>
</table>

- **소비자**는 특정 **견적 요청**에 대해 응답한 **모든 기사님들의 견적서 목록**을 확인할 수 있습니다.  
- 각 기사님의 **프로필 카드**에는 상태에 따라 **확정 견적 뱃지**와 **지정 견적 요청 뱃지**와 **견적 금액**이 표시됩니다.  
- **기사님 프로필 카드**를 클릭하면 해당 견적의 **견적 상세 페이지**로 이동하여 자세한 내용을 확인할 수 있습니다.  

<br>


## <span id="convention">🖌️ 6. 컨벤션</span>

### Git 컨벤션

| Emoji | Code                          | 기능     | Description              |
| ----- | ----------------------------- | -------- | ------------------------ |
| ✨    | `:sparkles:`                  | Feat     | 새 기능                  |
| ♻️    | `:recycle:`                   | Refactor | 코드 리팩토링            |
| 📦    | `:wrench:`                    | Chore    | 리소스 수정/삭제         |
| 🐛    | `:bug:`                       | Fix      | 버그 수정                |
| 📝    | `:memo:`                      | Docs     | 문서 추가/수정           |
| 🎨    | `:art:`                       | Style    | UI/스타일 파일 추가/수정 |
| 🎉    | `:tada:`                      | Init     | 프로젝트 시작 / Init     |
| ✅    | `:white_check_mark:`          | Test     | 테스트 추가/수정         |
| ⏪    | `:rewind:`                    | Rewind   | 변경 사항 되돌리기       |
| 🔀    | `:twisted_rightwards_arrows:` | Merge    | 브랜치 합병              |
| 🗃     | `:card_file_box:`             | DB       | 데이터베이스 관련 수정   |
| 💡    | `:bulb:`                      | Comment  | 주석 추가/수정           |
| 🚀    | `:rocket:`                    | Deploy   | 배포                     |

<br>

### Code 컨벤션

- **변수/함수**
  - Camel 표기법 사용 (상수는 대문자)
- **컴포넌트/파일명**
  - Pascal 표기법 사용
- **이미지 파일**
  - Snake 표기법 사용 - `(형태)(의미)(순서)_(상태)` / 예: `btn_login_001_off.png`
- **ClassName** - Kebab 표기법 사용

<br>

## <span id="tree">🌱 7. 프로젝트 구조</span<

- **public/**: 정적 자산 디렉터리.
  - **assets/**
    - **icons/**: 아이콘 SVG.
    - **images/**: 일반 이미지 SVG.
  - **favicon/**: 파비콘 이미지.

- **src/**: 애플리케이션 핵심 소스.
  - **components/**: 재사용 가능한 UI 컴포넌트.
    - **btn/**, **card/**, **modal/**, 등
  - **context/**: 인증 등 전역 상태 관리.
  - **layout/**: 사용자 유형별 레이아웃 (Driver, User, 비로그인).
  - **lib/**:
    - **api/**: API 요청 모듈.
    - **function/**: 유틸리티 함수.
    - **useQueries/**: React Query 커스텀 훅.
  - **page/**
    - **driver/**: 기사님 전용 페이지.
    - **user/**: 소비자 전용 페이지.
    - **root/**: 공용 페이지 (랜딩, 검색 등).
  - **style/**: 전역 CSS.
  - **types/**: 타입 정의 파일.

- **index.tsx**: 앱 진입 파일.
- **root.tsx**: 전체 라우팅 및 초기 설정.
- **.eslintrc**, **.prettierrc**: 코드 품질 설정.
- **package.json**, **tsconfig.json**


```
🌿src
 ┣ 🖼️ assets
 ┃ ┣ 📂icons             # 아이콘 SVG
 ┃ ┗ 📂images            # 일반 이미지
 ┣ 🎶 components
 ┃ ┣ 📂btn               # 버튼 컴포넌트
 ┃ ┣ 📂card              # 카드 컴포넌트 (DriverCard, UserCard 등)
 ┃ ┣ 📂input             # 입력 컴포넌트
 ┃ ┣ 📂modal             # 모달 컴포넌트
 ┃ ┣ 📂nav               # 네비게이션 + 알림
 ┃ ┣ 📂page              # 페이지별 공통 컴포넌트 (auth, login, register 등)
 ┃ ┣ 📂review            # 리뷰 컴포넌트
 ┃ ┣ 📂search            # 검색 바
 ┃ ┗ 📂toast             # 토스트 알림
 ┣ 📂context
 ┃ ┗ authContext.tsx     # 인증 상태 관리
 ┣ 📂layout
 ┃ ┣ DriverLayout.tsx
 ┃ ┣ UserLayout.tsx
 ┃ ┗ RendingLayout.tsx
 ┣ 📂lib
 ┃ ┣ 📂api               # API 요청 함수들 (auth.ts, driver.ts 등)
 ┃ ┣ 📂function          # 유틸 함수 (validation 등)
 ┃ ┗ 📂useQueries        # React Query 커스텀 훅
 ┣ 📂page
 ┃ ┣ 🚚 driver           # 기사 전용 페이지
 ┃ ┣ 🏡 user             # 소비자 전용 페이지
 ┃ ┗ 🌱 root             # 공용 페이지 (index, 검색 등)
 ┣ 📂style
 ┃ ┗ globals.css         # 전역 스타일
 ┣ 📂types
 ┃ ┣ apiTypes.ts
 ┃ ┗ cardTypes.ts
 ┣ index.tsx             # 앱 진입점
┗ root.tsx               # 앱 루트 설정

```

<br>

## <span id="culture">💪🏻 8. 협업 문화</span>

- 일시: 평일 오전 9시 ~ 오후 7시, 주말
- 내용: PR 내용 발표 및 코드 리뷰, 진행 상황 점검, 추가 이후 계획 논의

<br>


## <span id="bug">9. 버그 문제</span>

<br> <br>

#### <p align="left"><a href="#top">TOP👆🏻</a></p>
