// 직각 탐정 — Google Apps Script 웹앱
// 1) 이 파일(Code.gs)과 index.html을 같은 프로젝트에 넣으세요.
// 2) 배포 > 새 배포 > 유형: 웹 앱 > 실행: 나 > 액세스: 모든 사용자(또는 학교 도메인 사용자)
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('직각 탐정')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
