(() => {
    const button = document.getElementById('language');
    let lang = 'en';

    function setLanguage(next) {
        lang = next;
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-en][data-es]').forEach((el) => {
            el.textContent = el.dataset[lang];
        });

        document.querySelectorAll('[data-en-aria]').forEach((el) => {
            el.setAttribute('aria-label', el.dataset[lang + 'Aria']);
        });

        button.textContent = lang === 'en' ? 'Español' : 'English';
        button.setAttribute(
            'aria-label',
            lang === 'en' ? 'Cambiar idioma a español' : 'Switch language to English'
        );

        document.title =
            lang === 'en'
                ? 'Hoshiku — Projects, systems and ideas'
                : 'Hoshiku — Proyectos, sistemas e ideas';

        try {
            localStorage.setItem('hoshiku-language', lang);
        } catch (e) { }
    }

    button.addEventListener('click', () => {
        setLanguage(lang === 'en' ? 'es' : 'en');
    });

    try {
        if (localStorage.getItem('hoshiku-language') === 'es') {
            setLanguage('es');
        }
    } catch (e) { }
})();