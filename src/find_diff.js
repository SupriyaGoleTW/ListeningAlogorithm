var getDiff = function () {
    console.log("hello");
    var other = 'good boy',
        color = '',
        span = null;

    var diff = JsDiff.diffWords(document.getElementById('userText').value, other),
        display = document.getElementById('display');
        fragment = document.createDocumentFragment();


    diff.forEach(function (part) {
        console.log("blalll");
        alert("bla")
        // green for additions, red for deletions
        // grey for common parts

        color = part.added ? 'blue' :
            part.removed ? 'red' : 'black';
        span = document.createElement('span');
        console.log("span ",span);
        span.style.color = color;
        span.appendChild(document
            .createTextNode(part.value));
        fragment.appendChild(span);
    });

    display.appendChild(fragment);
};
