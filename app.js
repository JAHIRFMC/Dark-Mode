const checkbox = document.querySelector('#checkbox')
checkbox.addEventListener('change', function (event) {
  if (this.checked) {    
    document.body.classList.remove('is-dark-mode')    
  } else {
    document.body.classList.add('is-dark-mode')
  }

  if(document.body.classList.contains('is-dark-mode')){
	 	localStorage.setItem('is-dark-mode', 'true');
	 } else {
	 	localStorage.setItem('is-dark-mode', 'false');
	 }
});
// Obtenemos el modo actual.
if(localStorage.getItem('is-dark-mode') === 'true'){
    document.body.classList.add('is-dark-mode');    
    
} else {
    document.body.classList.remove('is-dark-mode');
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        checkbox.setAttribute('checked', true)
      }
	
}