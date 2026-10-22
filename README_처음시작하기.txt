캐드신 반응형 홈페이지 - 시작 안내
====================================

1. 폴더 구성
- index.html       : 메인 페이지
- instructor.html  : 강사 소개
- channels.html    : 운영 채널 및 온라인 강의
- books.html       : 저서
- portfolio.html   : GLB 3D 모델, 영상, 프로젝트 갤러리
- contact.html     : 강의·협업 문의
- styles.css       : 전체 디자인 및 반응형 레이아웃
- script.js        : 모바일 메뉴와 포트폴리오 상세 팝업
- assets/          : 로고 및 이미지 파일

2. 내 컴퓨터에서 미리보기
1) ZIP 압축을 풉니다.
2) Visual Studio Code에서 [파일] > [폴더 열기]를 눌러 cadshin_site 폴더를 엽니다.
3) VS Code 확장(Extensions)에서 Live Server를 검색해 설치합니다.
4) index.html 파일을 마우스 오른쪽 버튼으로 클릭하고 [Open with Live Server]를 선택합니다.
5) 브라우저에서 홈페이지를 확인합니다.

Live Server 설치가 안 될 경우
- 우선 index.html 파일을 파일 탐색기에서 더블클릭해 열 수 있습니다.
- 다만 포트폴리오의 GLB 3D 모델은 로컬 파일 보안 정책 때문에 Live Server를 사용하는 편이 좋습니다.
- VS Code가 매우 오래된 버전이면 최신 버전으로 업데이트한 뒤 확장 설치를 다시 시도하세요.

3. 실제 사진·이미지 교체
- 로고: assets/logo.svg
- 강사 프로필: assets/instructor.jpg 파일을 추가하세요. 파일이 없으면 임시 프로필 이미지가 표시됩니다.
- 브랜드 이미지: assets/brand-placeholder.svg를 실제 브랜드 이미지로 교체하거나 HTML의 이미지 경로를 수정하세요.
- 수상 이미지: instructor.html 안의 assets/award-placeholder.svg 경로를 실제 수상 사진 경로로 수정하세요.
- 책 표지: books.html의 각 .cover 영역은 현재 디자인 시안입니다. 실제 책 표지를 넣을 때 해당 .cover 요소를 <img src="assets/book-title.jpg" alt="책 제목"> 형태로 교체하고 CSS에서 aspect-ratio:1/1; object-fit:cover를 적용하면 됩니다.
- 포트폴리오 이미지: assets/project-gearbox.svg 등 예시 이미지를 실제 이미지로 교체할 수 있습니다. HTML 내 data-title, data-software, data-description을 수정하면 클릭 시 상세 설명이 변경됩니다.

중요: 이미지 파일 이름을 바꾸면 HTML에 적힌 경로도 함께 바꿔야 합니다.

4. 3D 모델 넣기
1) GLB 파일을 assets 폴더 안에 넣습니다.
2) 파일명을 정확히 model.glb로 지정합니다.
3) portfolio.html을 Live Server로 열어 확인합니다.
4) 마우스 드래그로 회전하고 휠로 확대·축소할 수 있습니다.

3D 뷰어는 인터넷에서 라이브러리를 불러오므로 인터넷 연결이 필요합니다.

5. 무료 정적 호스팅 배포
추천: GitHub Pages 또는 Netlify의 정적 사이트 배포 기능
- 이 폴더 안의 HTML/CSS/JS/assets 파일을 모두 함께 업로드해야 합니다.
- index.html이 최상위 폴더에 있어야 합니다.
- 모델과 이미지 파일은 상대 경로로 불러오므로 폴더 구조를 유지하세요.
- 무료 호스팅에서도 이메일 문의는 mailto 링크로 동작합니다. 서버나 별도 폼 서비스가 없으므로 홈페이지 안에서 문의 내용을 저장하는 기능은 포함되어 있지 않습니다.

6. 색상 및 디자인
- Pantone 2020 올해의 컬러 Classic Blue(19-4052)를 참고한 #0f4c81을 기본 색상으로 사용했습니다.
- 색상을 바꾸려면 styles.css 상단 :root의 --blue 값을 변경하면 됩니다.

7. 확인할 사항
- 현재 책 표지, 브랜드 이미지, 수상 이미지 및 포트폴리오 이미지는 레이아웃 확인용 임시 시안입니다.
- 제공된 실제 로고, 강사 사진, 책 표지, 수상 사진, 프로젝트 이미지로 교체한 후 공개하세요.
- 홈페이지에 적힌 외부 링크와 유튜브 영상은 게시 전에 실제 연결 여부를 확인하세요.
