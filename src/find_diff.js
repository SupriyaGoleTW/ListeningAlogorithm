var getDiff1 = function () {
    var other = 'Thank you to all my wonderful teachers, who inspired me to believe in myself and be brave.I am proud, well in fact, I am very proud to be the first Pashtun, the first Pakistani, and the youngest person to receive this award. Along with that, along with that, I am pretty certain that I am also the first recipient of the Nobel Peace Prize who still fights with her younger brothers. I want there to be peace everywhere, but my brothers and I are still working on that.';
    var diff = JsDiff.diffWords(other, document.getElementById('para').value);
    var diffData = diff.map(function(each){
        if(each.added){
            each.color = "red"
        }else if(each.removed){
            each.color = "orange"
        }else{
            each.color = "black"
        }
        return each;

    });
    
    var htmlData = diffData.map(function (part,index) {
        if(diffData.length > 1 && index < diffData.length - 1 && diffData[index + 1].color == "red" && diffData[index].color == "orange")
            return;
        else {
            var word = "<span style='color: " + part.color + "'>";
            if (part.color == "orange")
                word += " __";
            else
                word += part.value;
            return word += "</span>";
        }
    }).join("");

    document.getElementById("difference").innerHTML = htmlData;
};
