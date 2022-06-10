function search() {
    var AccountID = document.getElementById("inputBox").value;
    let TwitterTimeline = document.getElementById("twitter-timeline");
    //aタグを取得

    var Language = document.getElementById('lang').value;
    // 言語を取得

    var MakeLink = "https://twitter.com/" + AccountID + "?lang=" + Language;
    //入力でリンクを作成

    TwitterTimeline.setAttribute("href", MakeLink);
    console.log("Link: " + MakeLink);
    //作成したリンクでhref属性の値を更新

    if (window.matchMedia('(prefers-color-scheme: dark)').matches == true) {
        var Theme = "dark";
        TwitterTimeline.setAttribute("data-theme", Theme);
    } // ダークモードを適用


    var script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.body.appendChild(script);
    //Twitter社提供のJavaScriptコードの読み込み
    //コードを読み込む前にhref属性を書き換えなければならない
}