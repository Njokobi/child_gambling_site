let screens = ['index.html', 'videos.html', 'solutions.html'];
let currentPage = sessionStorage.getItem('screen') ? sessionStorage.getItem('screen') : '';

function displayScreen(i) {
    if (screens[i] == currentPage) {
        //Let us not waste our time!
        return;
    }
    sessionStorage.setItem('screen', screens[i]);
    window.location.href = screens[i];
}