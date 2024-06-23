document.addEventListener("DOMContentLoaded", function () {
	
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
})
