//  페이지의 최상단으로 이동하는 버튼과 최하단으로 이동하는 버튼 구현하기 

// step - 1
//  .js 파일과 html이 잘 연결 됐는지 확인;
window.addEventListener('DOMContentLoaded', () => {
	console.log('All good!');
});  



// step - 2
// 버튼들에 접근하기
const $scrollToTopButton = document.querySelector('.to-top-btn');
const $scrollToBottomButton = document.querySelector('.to-bottom-btn');

// html과 body 요소에 접근하기 
const $html= document.getElementsByTagName('html');
const $body = document.getElementsByTagName('body');



// step - 3
// .addEventListener와 콜백함수를 사용하여 이벤트 설정하기 
$scrollToTopButton.addEventListener(
	'click', (event) => {
		window.scroll({
			top: 0,
			// left: 100,
			behavior: 'smooth'
		});
}); 

$scrollToBottomButton.addEventListener(
	'click', (event) => {
		// window.scroll({
		// 	bottom: 0,
		// 	behavior: 'smooth'
		// });
		document.body.scrollIntoView(false);
		// document.body.scrollIntoView({behavior: 'smooth'});
		// cf. https://webisfree.com/2017-04-06/자바스크립트에서-스크롤을-화면-끝으로(마지막)-이동시키는-방법은
}); 


// cf. 
// https://css-tricks.com/how-to-make-an-unobtrusive-scroll-to-top-button/
// https://stickode.com/detail.html?no=634
// https://enai.tistory.com/33
// https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll
// https://xodgl2.tistory.com/89
// https://webisfree.com/2017-04-06/자바스크립트에서-스크롤을-화면-끝으로(마지막)-이동시키는-방법은