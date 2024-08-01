document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));



    
});

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const firstSection = document.querySelector('.home');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navbar.style.transition = 'none';
                navbar.classList.add('hidden');
            } else {
                navbar.style.transition = 'opacity 0.5s ease-in-out';
                navbar.classList.remove('hidden');
            }
        });
    }, {
        threshold: 0.5 
    });

    observer.observe(firstSection);
});
