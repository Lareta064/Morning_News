document.addEventListener("DOMContentLoaded", function () {
	const bodyEl = document.body;
	/* HEADER MENU SLIDER */
	var headerMenuSlider = new Swiper('.header-menu-swiper', {
		slidesPerView: 'auto',
		spaceBetween: 20,
		navigation:{
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
	});
	/*NEWS SLIDER */
	var newsSlider = new Swiper('.news-swiper', {
		slidesPerView:1.3,
		spaceBetween: 20,
		loop: true,
		speed: 3000,
		
		 autoplay: {
			delay: 0,
			pauseOnMouseEnter: true,
			 disableOnInteraction: false,
		},
		navigation:{
			nextEl: '.news-button-next',
			prevEl: '.news-button-prev'
		},
		breakpoints: {
			580: {
			slidesPerView: 'auto',
			spaceBetween: 20,
			},
			
			1200:{
				slidesPerView: 4,
				spaceBetween: 30,
			}
		}
	});
	
	/*NEWS SLIDER-2 */
	var newsSlider = new Swiper('.news-swiper-two', {
		slidesPerView:1.3,
		spaceBetween: 20,
		loop: true,
		speed: 5000,
		 autoplay: {
			delay: 10,
		},
		navigation:{
			nextEl: '.news-button-next-two',
			prevEl: '.news-button-prev-two'
		},
		breakpoints: {
			580: {
			slidesPerView: 'auto',
			spaceBetween: 20,
			},
			
			1200:{
				slidesPerView: 4,
				spaceBetween: 30,
			}
		}
	});
	/*NEWS CARDS SLIDER  */
	var cardsSlider = new Swiper('.cards-swiper', {
		slidesPerView:1.3,
		spaceBetween: 20,
		loop: true,
		speed: 5000,
		 autoplay: {
			delay: 10,
			
		},
		navigation:{
			nextEl: '.cards-swiper-next',
			prevEl: '.cards-swiper-prev'
		},
		breakpoints: {
			580: {
			slidesPerView: 'auto',
			spaceBetween: 20,
			},
			
			1200:{
				slidesPerView: 4,
				spaceBetween: 30,
			}
		}
	});
	

	/***************************************/
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

	/************* CUSTOM SELECT ************ */
	document.querySelectorAll('.custom-select-wrapper').forEach(wrapper => {
	wrapper.addEventListener('click', function() {
		this.querySelector('.custom-select').classList.toggle('open');
	});
	});

	// Добавление обработчика клика для всех .custom-option
	document.querySelectorAll(".custom-option").forEach(option => {
	option.addEventListener('click', function() {
		let selected = this.parentNode.querySelector('.custom-option.selected');
		if (selected) {
		selected.classList.remove('selected');
		}
		this.classList.add('selected');
		this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
	});
	});

	// Закрытие всех .custom-select, если клик был снаружи
	window.addEventListener('click', function(e) {
		document.querySelectorAll('.custom-select').forEach(select => {
			if (!select.contains(e.target)) {
			select.classList.remove('open');
			}
		});
	});

	/**********TABS BUTTONS********** */
	const sliderTab =  document.querySelector('.tabs-btns');
	if(sliderTab){
		const sliderTabBtns =  sliderTab.querySelectorAll('.tab-btn');
		
		for(let i=0; i < sliderTabBtns.length; i++){
			 sliderTabBtns[i].addEventListener('click', ()=>{
				const sliderTabActiveBtn =  sliderTab.querySelector('.tab-btn.active');
				sliderTabActiveBtn.classList.remove('active');
				sliderTabBtns[i].classList.add('active');
			})
		}
	}
   /********Для страницы одной новости************** */
	var newsGallery = new Swiper('.news-gallery', {
		navigation:{
				nextEl: '.gallery-swiper-next',
				prevEl: '.gallery-swiper-prev'
			},
	});
  
	Fancybox.bind('[data-fancybox="gallery"]', {});
});