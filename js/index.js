const bannerTextStrings = ['Performance', 'Commited', 'Powerful', 'Experienced', ];

animatedBanner = document.getElementById('banner-text').firstChild;

const animateBanner = () => {
    currentText = 0;
    setInterval(() => {
        if (currentText >= bannerTextStrings.length - 1) {
            currentText = 1;
        } else {
            currentText++;
        }
        cycleTexts(currentText);
    }, 4000)
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
        }, 3000);
    }
    cycleTexts(Math.floor(Math.random()*3));
}