// 해더 - 햄버거 사이드바 메뉴 구현

const $sideBarButton = document.querySelector('.header-nav-menu');
const $sideNavBar = document.querySelector('.header-nav-menu-list-outer-wrapper');
// const $toggle = document.querySelector('.toggle');

// just for checking :)
// console.log($sideBarButton);
// console.log($toggle);

$sideBarButton.addEventListener('click', event => {
	// just for checking :)
	// console.log('Hello');
  $sideNavBar.classList.toggle('active');

  // $sideBarButton.classList = header
});




// 해더 - 쇼핑백 장바구니 메뉴 구현
const $sideBarShoppingBag = document.querySelector('.header-nav-shopping');
const $sideBarShoppingBagWrapper = document.querySelector('.header-nav-shopping-list-outer-wrapper');


$sideBarShoppingBag.addEventListener('click', event => {

	$sideBarShoppingBagWrapper.classList.toggle('flex');

});




