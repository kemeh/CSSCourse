var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButton = document.querySelectorAll('.plan button');
var closeButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for(var i = 0; i < selectPlanButton.length; i++){
    selectPlanButton[i].addEventListener('click', function(){
        modal.classList.add('open')
        backdrop.classList.add('open')
    });
}

if(closeButton){
    closeButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', function(){
    mobileNav.classList.remove('open');
    closeModal();
});
toggleButton.addEventListener('click', function(){
    backdrop.classList.add('open');
    mobileNav.classList.add('open');
});

function closeModal(){
    if(modal){
        modal.classList.remove('open');
    }
    
    backdrop.classList.remove('open');
}