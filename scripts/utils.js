function changeFavicon(favicon) {
    // from https://stackoverflow.com/a/260876
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = favicon;
}

function openPage(url, mode) {
    switch (mode) {
        case "new":
            window.open(url);
            break;
        case "replace":
            window.location.assign(url);
            break;
    }
}