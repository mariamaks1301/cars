

let accordions = document.querySelectorAll('.question__accordion');

accordions.forEach(function (accordion) {
    accordion.children[2].addEventListener('click', function(){
        accordion.classList.toggle('question__accordion_active');
    })
});