var lib = {};
lib.matchContents = function (expectedContent, actualContent) {
    var mismatchedPosition = [];
    var splittedExpectedContent = expectedContent.split(" ");
    var splittedActualContent = actualContent.split(" ");
    splittedExpectedContent.forEach(function (eachWord, index) {
        if(eachWord != splittedActualContent[index]){
            mismatchedPosition.push(index);
        }
    });
    return mismatchedPosition;
};

lib.findMissingWordPosition = function (expectedContent,actualContent) {
    var mismatchedPosition = [];
    var splittedExpectedContent = expectedContent.split(" ");
    var splittedActualContent = actualContent.split(" ");
    var count = 0;
    splittedExpectedContent.forEach(function (eachWord,index) {
        if(eachWord == splittedActualContent[count]){
            count++;
        }else{
            mismatchedPosition.push(index);
        }
    });
    return mismatchedPosition;
};


module.exports = lib;