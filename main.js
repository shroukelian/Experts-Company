document.getElementById('current-year').textContent = new Date().getFullYear();
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('active'); 
        const answer = button.nextElementSibling;
        if (faqItem.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = 0;
        }
    });
});

// Hamburger Menu Toggle
const hamburgerBtn = document.querySelector('.hamburger-menu');
const mainNavWrapper = document.querySelector('.main-nav-wrapper');

hamburgerBtn.addEventListener('click', () => {
    mainNavWrapper.classList.toggle('active');
    hamburgerBtn.classList.toggle('active');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
        if (mainNavWrapper.classList.contains('active')) {
            mainNavWrapper.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        }
    }
});

document.querySelectorAll('a[href^="#"].btn, a[href^="#"].btn-secondary, nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        if (mainNavWrapper.classList.contains('active')) {
            mainNavWrapper.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        }

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' 
            });

            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                window.location.hash = targetId;
            }
        }
    });
});