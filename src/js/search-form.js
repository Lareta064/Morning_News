document.addEventListener('DOMContentLoaded', function() {
	
	const searchForm = document.getElementById('search-form');/*  форма поиска */
	if(searchForm){
		const openSearchBtn = searchForm.querySelector('.search-form-btn');/* кнопка с лупой */
		addActiveClass (openSearchBtn, searchForm );
	}
	
	/*====скрипт для формы поиска */
	function addActiveClass ( clickedItem, changeItem ){
		clickedItem.addEventListener('click', (e)=>{
			
			if(clickedItem.classList.contains('active')){
				
				clickedItem.classList.remove('active');
				 changeItem.classList.remove('active');
			}else{
				clickedItem.classList.add('active');
				 changeItem.classList.add('active');
			}
		});
	}
	/*====скрипт для добавления / удаления класса в группе элементов */
	// function toggleActiveClass ( block ){
	// 	const clickedItems = block.querySelectorAll('.click-item');
	// 	const clickedItemActive = block.querySelector('.click-item.active');
	// 	for(let item of clickedItems){
	// 		item.addEventListener('click', ()=>{
	// 			if(clickedItemActive){
	// 				clickedItemActive.classList.remove('active');
	// 				item.classList.add('active');
	// 			}
	// 		});
	// 	}
	// }
	

});