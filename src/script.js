
document.addEventListener('DOMContentLoaded', function() {

    // Icons and img
    const sunIcon = document.getElementById("sun");
    const moonIcon = document.getElementById("moon");

    const switchButton = document.getElementById("switchButton");

    const blackLogo = document.getElementById("logo-black");
    const whiteLogo = document.getElementById("logo-white");
    
    // Theme vars
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Icon toggling
    const iconToggle = () => {
        // moonIcon.classList.toggle("hidden");
        // sunIcon.classList.toggle("hidden");
        moonIcon.classList.toggle("display-none");
        sunIcon.classList.toggle("display-none");
        blackLogo.classList.toggle("display-none");
        whiteLogo.classList.toggle("display-none");
    }

    // Initial Theme check
    const themeCheck = () => {
        if(userTheme == "dark" || (!userTheme && systemTheme)){
            document.documentElement.classList.add("dark");
            // moonIcon.classList.add("hidden");
            moonIcon.classList.add("display-none");
            blackLogo.classList.toggle("display-none");
            return;
        }
        sunIcon.classList.add("display-none");
        whiteLogo.classList.toggle("display-none");
    }

    // Manual theme switch
    const themeSwitch = () => {
        if(document.documentElement.classList.contains("dark")){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            iconToggle();
            return;
        }
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        iconToggle();
    }

    switchButton.addEventListener("click", () => {
        themeSwitch();
    });

    // Invoke theme check on initial load
    themeCheck();

    function cleanUrl(url) {
        let urlObj = new URL(url);
        return urlObj.origin + urlObj.pathname;
    }
    
    document.getElementById('button-12ft').addEventListener('click', function() {
        let currentUrl = document.getElementById('inputtext').value;
        let cleanedUrl = cleanUrl(currentUrl);
        let finalUrl = 'https://12ft.io/' + cleanedUrl;
        window.open(finalUrl, '_blank');
    });
    
    document.getElementById('button-internetarchive').addEventListener('click', function() {
        let currentUrl = document.getElementById('inputtext').value;
        let cleanedUrl = cleanUrl(currentUrl);
        let finalUrl = 'https://web.archive.org/' + cleanedUrl;
        window.open(finalUrl, '_blank');
    });
    
    document.getElementById('button-archiveis').addEventListener('click', function() {
        let currentUrl = document.getElementById('inputtext').value;
        let cleanedUrl = cleanUrl(currentUrl);
        let finalUrl = 'https://archive.is/newest/' + cleanedUrl;
        window.open(finalUrl, '_blank');
    });
    
    document.getElementById('button-gcache').addEventListener('click', function() {
        let currentUrl = document.getElementById('inputtext').value;
        let cleanedUrl = cleanUrl(currentUrl);
        let finalUrl = 'https://webcache.googleusercontent.com/search?q=cache:' + cleanedUrl;
        window.open(finalUrl, '_blank');
    });
    
    document.getElementById('button-removepaywall').addEventListener('click', function() {
        let currentUrl = document.getElementById('inputtext').value;
        let cleanedUrl = cleanUrl(currentUrl);
        let finalUrl = 'https://removepaywall.com/' + cleanedUrl;
        window.open(finalUrl, '_blank');
    });

});