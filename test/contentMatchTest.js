var assert = require('assert');
var lib = require("../contentMatchingSpike");
var expectedText = "Sri Lanka last allowed a Chinese submarine to dock in the capital of Colombo in October 2014, a move that triggered fierce opposition from India, which worries about growing Chinese activity in a country it has long viewed as part of its area of influence.";
var actualText = "Sri Lanka allowed Chinese submarine dock the capital of Colombo in October 2014, a move that triggered fierce opposition from India, which worries about growing Chinese activity in a country it has long viewed as part of its area of influence.";
// assertEqual(match_content("I am a good boy","I am a bad boy"), {3:{original: "good", curr : "bad"}});

describe('Content Matcher', function () {
    describe('match sentence', function () {
        it('should give one wrong word position', function () {
            assert.deepEqual([3], lib.matchContents("I am a good boy", "I am a god boy"));
        });

        it('should give all wrong word position', function () {
            assert.deepEqual([1, 3, 4], lib.matchContents("I am a good boy", "I m a god by"));
        });
    });
    describe('Missing Words', function () {
        it('should find position of one missing words', function () {
            assert.deepEqual([3], lib.findMissingWordPosition("I am a good boy", "I am a boy"))
        });

        it('should find position of more than one missing words', function () {
            assert.deepEqual([2,3], lib.findMissingWordPosition("I am a good boy", "I am boy"))
        });

        it('should find position of all missing words', function () {
            assert.deepEqual([2,4,7,9], lib.findMissingWordPosition(expectedText, actualText))
        });
    });
});