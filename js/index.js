const bannerTextStrings = ['Placeholder1', 'Placeholder2', 'Placeholder3', 'Placeholder4', ];

animatedBanner = document.getElementById('banner-text').firstChild;

const animateBanner = () => {
    setInterval(() => {
        cycleTexts(Math.floor(Math.random()*3));
    }, 6000)
    const cycleTexts = (text) => {
        animatedBanner.innerHTML = bannerTextStrings[text];
        animatedBanner.style.visibility = "inherit";
        animatedBanner.classList.add('animated', 'slideInLeft');
        setTimeout(() => {
            animatedBanner.classList.remove('animated', 'slideInLeft');
            animatedBanner.classList.add('animated', 'slideOutRight');
            setTimeout(() => {
                animatedBanner.classList.remove('animated', 'slideOutRight');
                animatedBanner.style.visibility = "hidden";
            }, 500);
        }, 5000);
    }
    cycleTexts(Math.floor(Math.random()*3));
}