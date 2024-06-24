document.addEventListener("DOMContentLoaded", function () {
	const bodyEl = document.body;
	/* HEADER MENU SLIDER */
	var headerMenuSlider = new Swiper('.header-menu-swiper', {
		slidesPerView: 'auto',
		spaceBetween: 20,
		speed: 600,
		navigation:{
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'

		}
	});
	function addActiveClass(args){
		for(item of args){
			item.classList.add('active');
		}
	}
	function removeActiveClass(args){
		for(item of args){
			console.log(item);
			item.classList.remove('active');
		}
	}
	/*****SEARCH FORM ***/
	const searchForm = document.getElementById('search-form');/*  форма поиска */
	if(searchForm){
		const openSearchBtn = searchForm.querySelector('.search-form-btn');/* кнопка с лупой */
		const searchFormInput = searchForm.querySelector('.search-form-input');/* input */
		/*клик по иконке Лупа */
		openSearchBtn.addEventListener('click', (e)=>{
			console.log(openSearchBtn.classList);
			if(openSearchBtn.classList.contains('active')){
				console.log('есть класс эктив');
				if(searchFormInput.value ==''){
					console.log(1);
					removeActiveClass([searchForm, openSearchBtn])
				}
				else{
					addActiveClass([searchForm, openSearchBtn]);
					console.log(2);
				}
			}else{
				console.log('открываем');
				addActiveClass([searchForm, openSearchBtn])
			}
		});
	}
	
	/*LARGE MENU */
	const burgerIcon = document.getElementById('menu-toggle')/*burger icon */
	const largeMenu = document.getElementById('large-menu')/*large-menu */
	if(burgerIcon){
		burgerIcon.addEventListener('click', (e)=>{
			
			if(burgerIcon.classList.contains('active')){
				removeActiveClass([burgerIcon, largeMenu, bodyEl]);
			}else{
				addActiveClass([burgerIcon, largeMenu, bodyEl]);
			}
		});
	}
});