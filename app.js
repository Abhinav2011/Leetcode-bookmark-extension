function isValidLeetCodeUrl(url) {
    const regex = /^https:\/\/leetcode\.com\/discuss\/.*/;
    return regex.test(url);
}

document.getElementById("save-article").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        url = tabs[0].url;
        if (!isValidLeetCodeUrl(url)) {
            return;
        }
        const redirectURL = `http://localhost:5173/homepage/add?url=${url}`
        chrome.tabs.create({ url: redirectURL });
    });
});

document.getElementById("sign-in").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const redirectURL = 'http://localhost:5173/';
        chrome.tabs.create({ url: redirectURL });
    });
});

