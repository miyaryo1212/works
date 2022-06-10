function convert() {
    var inputtext = document.getElementById('inputtext').value;
    console.log(inputtext);
    // とりあえず<textarea>から値を取得
    var splitbyline = inputtext.split(/\n/);
    console.log(splitbyline);
    // 改行毎に分割
    var p = [];
    for (var o of splitbyline) {
        p.push(o.length);
        console.log(p);
    }
    // 一番多い文字数に合わせて空の配列を作成
    var q = Math.max.apply(null, p);
    console.log(q);
    var outputlist = new Array(q);

    console.log(outputlist);
    for (var n of splitbyline) {
        var splitbycharacter = n.split('');
        console.log(splitbycharacter);
        // 文字ごとに分割
        var repeatnum = 0;
        for (var m of splitbycharacter) {
            console.log(m);
            var l = String(outputlist[repeatnum]);
            l = l.replace("undefined", "");
            l = String(m) + String(l);
            outputlist[repeatnum] = l;
            // outputlist.unshift([m]);
            repeatnum += 1;
        }
        console.log(outputlist);
    };
    var j;
    for (var k = 0; k < outputlist.length; k++) {
        j = j + String(outputlist[k]) + "\n";
        j = j.replace("undefined", "");

        console.log(j);
    }
    console.log(j);
    document.getElementById('outputtext').textContent = j;
}