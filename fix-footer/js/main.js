document.addEventListener("DOMContentLoaded", function () {
	const bodyEl = document.body;
	/* HEADER MENU SLIDER */
	var headerMenuSlider = new Swiper('.header-menu-swiper', {
		slidesPerView: 'auto',
		spaceBetween: 20,
		speed:600,
		navigation:{
			nextEl: '.menu-swiper-next',
			prevEl: '.menu-swiper-prev'
		}
	});
	/*NEWS SLIDER */
	var newsSlider = new Swiper('.news-swiper', {
		slidesPerView:1.2,
		spaceBetween: 20,
		loop: true,
		speed: 1000,
		
		 autoplay: {
			delay: 1500,
			pauseOnMouseEnter: true,
			disableOnInteraction: false,
		},
		navigation:{
			nextEl: '.news-button-next',
			prevEl: '.news-button-prev'
		},
		breakpoints: {
			580: {
			slidesPerView: 1.4,
			spaceBetween: 20,
			},
			600:{
			slidesPerView: 2,
			spaceBetween: 20,
			},
			768:{
			slidesPerView: 3,
			spaceBetween: 20,
			},
			992:{
			slidesPerView: 3.5,
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
		speed: 1000,
		 autoplay: {
			delay: 1500,
		},
		navigation:{
			nextEl: '.news-button-next-two',
			prevEl: '.news-button-prev-two'
		},
		breakpoints: {
			580: {
			slidesPerView: 1.4,
			spaceBetween: 20,
			},
			600:{
			slidesPerView: 2,
			spaceBetween: 20,
			},
			768:{
			slidesPerView: 3,
			spaceBetween: 20,
			},
			992:{
			slidesPerView: 3.5,
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
		speed: 1000,
		 autoplay: {
			delay: 1500,
			
		},
		navigation:{
			nextEl: '.cards-swiper-next',
			prevEl: '.cards-swiper-prev'
		},
		breakpoints: {
			580: {
			slidesPerView: 1.4,
			spaceBetween: 20,
			},
			600:{
			slidesPerView: 2,
			spaceBetween: 20,
			},
			768:{
			slidesPerView: 3,
			spaceBetween: 20,
			},
			992:{
			slidesPerView: 3.5,
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
			item.classList.remove('active');
		}
	}
	/*=====SINGLE NEWS PAGE share icons===== */
	const shareBtn = document.getElementById('share-btn');
	const shareList = document.querySelector('.share-list');
	const shareComponent = document.querySelector('.share-component');

	if(shareBtn){
		shareBtn.addEventListener('click', ()=>{
			
			if(shareBtn.classList.contains('active')){
				removeActiveClass([shareBtn, shareList]);
			}
			else{
				addActiveClass([shareBtn, shareList]);
			}
		})
	}
	/*****SEARCH FORM ***/
	const searchForm = document.getElementById('search-form');/*  форма поиска */
	const openSearchBtn = document.querySelector('.search-form-btn');/* кнопка с лупой */
	if(searchForm){
		
		const searchFormInput = searchForm.querySelector('.search-form-input');/* input */
		/*клик по иконке Лупа */
		openSearchBtn.addEventListener('click', (e)=>{
			
			if(openSearchBtn.classList.contains('active')){
				
				if(searchFormInput.value ==''){
					
					removeActiveClass([searchForm, openSearchBtn]);
				}
				else{
					addActiveClass([searchForm, openSearchBtn]);
					
				}
			}else{
				
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
	
	bodyEl.addEventListener('click', function(e){
		
		if(!e.target.closest('.large-menu') && !e.target.closest('.menu-toggle')){
			removeActiveClass([burgerIcon, largeMenu, bodyEl]);
		}
		
		if(!e.target.closest('#search-form') && !e.target.closest('.search-form-btn')){
			removeActiveClass([searchForm, openSearchBtn])
		}
		
		if(!e.target.closest('.share-component')){
			removeActiveClass([shareBtn, shareList]);
		}
	})
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
		 pagination: {
			el: ".gallery-pagination",
			type: "fraction",
		},
		navigation:{
			nextEl: '.gallery-swiper-next',
			prevEl: '.gallery-swiper-prev'
		},
	});
  
	Fancybox.bind('[data-fancybox="gallery"]', {});
});