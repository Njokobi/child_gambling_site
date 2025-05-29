let screens = ['index.html', 'videos.html', 'solutions.html'];

function displayScreen(i) {
    if (screens[i] == window.location.href) {
        //Let us not waste our time!
        return;
    }
    window.location.href = screens[i]
}