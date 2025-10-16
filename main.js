document.getElementById('current-year').textContent = new Date().getFullYear();

// JavaScript لفتح وإغلاق الأسئلة الشائعة (Accordion)
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('active'); // تبديل فئة Active
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

// إغلاق قائمة الهامبرغر عند تغيير حجم الشاشة من موبايل إلى ديسكتوب
window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
        if (mainNavWrapper.classList.contains('active')) {
            mainNavWrapper.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        }
    }
});

// JavaScript بسيط للتمرير الناعم (Smooth Scroll) - تم تعديل هذا الجزء
// يستهدف الآن كل من روابط القائمة وأزرار الـ btn و btn-secondary التي تبدأ بـ #
document.querySelectorAll('a[href^="#"].btn, a[href^="#"].btn-secondary, nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // إغلاق قائمة الهامبرغر إذا كانت مفتوحة
        if (mainNavWrapper.classList.contains('active')) {
            mainNavWrapper.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        }

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // استخدام scrollIntoView للتمرير الناعم
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // يبدأ التمرير من أعلى العنصر المستهدف
            });

            // لتعديل الـ URL بدون القفز المفاجئ (اختياري)
            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                window.location.hash = targetId;
            }
        }
    });
});