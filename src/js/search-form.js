document.addEventListener('DOMContentLoaded', function() {
	
	const searchForm = document.getElementById('search-form');/*  форма поиска */
	if(searchForm){
		const openSearchBtn = searchForm.querySelector('.search-form-btn');/* кнопка с лупой */
		const searchFormInput = searchForm.querySelector('.search-form-input');/* input */

		addActiveClass (searchForm,  openSearchBtn, searchFormInput);
	}
	
	/*====скрипт для формы поиска */
	function addActiveClass ( parentBlock, clickedItem, changeItem ){
		clickedItem.addEventListener('click', (e)=>{
			console.log('555');
			if(clickedItem.classList.contains('active')){
				if(changeItem.value ==''){
					clickedItem.classList.remove('active');
					parentBlock.classList.remove('active');
				}
				else{
					clickedItem.classList.add('active');
				    parentBlock.classList.add('active');
				}
			}else{
				clickedItem.classList.add('active');
				 parentBlock.classList.add('active');
			}
		});
	}

});