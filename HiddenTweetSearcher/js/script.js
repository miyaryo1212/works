function frameRendering() {
    try {
        const removeAllContents = document.getElementById("frame");
        removeAllContents.innerHTML = "";
        const removeiframe = document.getElementById("rufous-sandbox");
        removeiframe.remove();
    } catch (e) { }
    var accountID = document.getElementById("inputBox").value;
    var language = document.getElementById('lang').value;

    var makeLink = "https://twitter.com/" + accountID + "?lang=" + language;

    var theme = "light";
    if (window.matchMedia('(prefers-color-scheme: dark)').matches == true) {
        var theme = "dark";
    }

    var newTimeline = document.createElement("a");
    newTimeline.id = "Timeline";

    var frame = document.getElementById("frame");
    frame.appendChild(newTimeline)

    var loadTimeline = document.getElementById("Timeline");
    loadTimeline.setAttribute("href", makeLink);
    loadTimeline.setAttribute("class", "twitter-timeline")
    loadTimeline.setAttribute("data-theme", theme);
    loadTimeline.setAttribute("data-width", "400");

    var scriptByTwitter = document.createElement("script");
    scriptByTwitter.src = "https://platform.twitter.com/widgets.js";
    scriptByTwitter.id = "scriptByTwitter";
    frame.appendChild(scriptByTwitter);
}