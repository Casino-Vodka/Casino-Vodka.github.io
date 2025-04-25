document.addEventListener('DOMContentLoaded', function() {
    const elfsightScript = document.createElement('script');
    elfsightScript.src = 'https://static.elfsight.com/platform/platform.js';
    elfsightScript.async = true;
    elfsightScript.defer = true;
    elfsightScript.onerror = function() {
        console.error('Ошибка загрузки Elfsight Widget');
    };
    
    document.body.appendChild(elfsightScript);
});

document.addEventListener('DOMContentLoaded', function() {
    const elfsightLinks = document.querySelectorAll('a[href*="elfsight.com/google-reviews-widget/"]');
    elfsightLinks.forEach(link => link.remove());
});