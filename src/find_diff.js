var getDiff1 = function () {
    var other = 'Thank you to all my wonderful teachers';
    var diff = JsDiff.diffWords(other, document.getElementById('para').value);
    var diffData = diff.map(function (each) {
        if (each.added) {
            each.color = "red"
        } else if (each.removed) {
            each.color = "orange"
        } else {
            each.color = "black"
        }
        return each;
    });

    diffData.forEach(function (eachDiff,index) {
        if (diffData.length > 1 && index < diffData.length - 1 && diffData[index + 1].color == "red" && eachDiff.color == "black") {
            diffData[index + 1].color = "blue";
        }
    });

    var htmlData = diffData.map(function (part, index) {
        if (diffData.length > 1 && index < diffData.length - 1 && diffData[index + 1].color == "red" && diffData[index].color == "orange")
            return;
        else {
            var word = "<span style='color: " + part.color + "'>";
            if (part.color == "orange")
                word += " __ ";
            else
                word += part.value;
            return word += "</span>";
        }
    }).join("");

    document.getElementById("difference").innerHTML = htmlData;
};

// module.exports= getDiff1;