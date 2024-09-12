
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.aparecer');

    function checkVisibility() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    el.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - (window.innerHeight / 2) + (targetElement.offsetHeight / 2);

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});


function abrirMenu() {
    document.querySelector(".sidebar").style.width = "10rem";
    
}

function fecharMenu() {
    document.querySelector(".sidebar").style.width = "0rem";
}





