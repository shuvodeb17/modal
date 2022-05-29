var modalWrapper = document.getElementById('modal-wrapper');
modalWrapper.style.display = 'none';
var modalCloseBtn = document.getElementById('close-btn');
var modalOpenBtn = document.getElementById('open-btn');

modalOpenBtn.addEventListener('click', function(){
    modalWrapper.style.display = 'block'
    modalOpenBtn.style.display = 'none';
});

modalCloseBtn.addEventListener('click', function(){
    modalWrapper.style.display = 'none';
    modalOpenBtn.style.display = 'block';
});