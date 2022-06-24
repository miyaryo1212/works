function getDisplayHeight() {
    var windowHeight = document.documentElement.clientHeight;
    windowHeight -= 50
    var frame = document.getElementById("page_frame");
    frame.setAttribute("height", windowHeight);
}

function updateLink() {
    const element = document.getElementById("page_frame");
    element.remove();

    var newLink = document.getElementById("form__input--text");
    var windowHeight = document.documentElement.clientHeight;
    windowHeight -= 50
    var newPage = document.createElement("iframe");
    newPage.id = "page_frame";
    newPage.width = "100%";
    newPage.height = windowHeight;
    newPage.src = newLink.value;
    console.log(newPage);
    var t = document.getElementById("main");
    t.appendChild(newPage);
}