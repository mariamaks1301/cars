let callBtn = document.querySelector('.btn_call');
let overlay = document.querySelector('.overlay');
let close = document.querySelector('.popup__close');
let btnTest = document.querySelector('.btn_test');
let call = document.querySelector('.popup__call');
let test = document.querySelector('.popup__test');
let rentBtn = document.querySelector('.btn_rent');
let rent = document.querySelector('.popup__rent');





close.addEventListener('click', function(){
    overlay.style.display = 'none';
});

overlay.addEventListener('click', function(e){
    
    if(e.target.className.includes('overlay')){
        overlay.style.display = 'none';
    }
});

callBtn.addEventListener('click', function(){
    overlay.style.display = 'block';
    call.style.display = 'flex';
    test.style.display = 'none';
    rent.style.display = 'none';

   
});

btnTest.addEventListener('click', function(){
    call.style.display = 'none';
    rent.style.display = 'none';
    overlay.style.display = 'block';
    test.style.display = 'flex';
});

rentBtn.addEventListener('click', function(){
    overlay.style.display = 'block';
    call.style.display = 'none';
    test.style.display = 'none';
    rent.style.display = 'flex';
})

