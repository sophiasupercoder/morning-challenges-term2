/*
Open Door
Return true if name is Simon and hasCoffee is true.
Otherwise return false.
Test your solution:
mocha 03_open_door.js
*/


function openDoor(input) {
    input = {
        'item.name': 'Simon',
        'item.hasCoffee' = True
    }
    for (var o in obj)
        if (!obj[o]) return false;

    return true;

}

function makeItem(name, hasCoffee) {
    item = new Object()
    item.name = name
    item.hasCoffee = hasCoffee
    return item
}


var assert = require('assert');

describe('openDoor', function () {
    let hash = []
    it('should return true if "Simon" and hasCoffee with single object', function () {
        hash = []
        hash.push(makeItem('Simon', true))
        assert.equal(true, openDoor(hash))
    })
    it('should return true if "Simon" and hasCoffee with multiple objects', function () {
        hash = []
        hash.push(makeItem('Simon', true))
        hash.push(makeItem('Scott', true))
        assert.equal(true, openDoor(hash))
    })
    it('should return false if !"Simon" and hasCoffee', function () {
        hash = []
        hash.push(makeItem('Scott', true))
        assert.equal(false, openDoor(hash))
    })
    it('should return false if "Simon" and !hasCoffee', function () {
        hash = []
        hash.push(makeItem('Simon', false))
        assert.equal(false, openDoor(hash))
    })
    it('should return false if empty array passed', function () {
        hash = []
        assert.equal(false, openDoor(hash))
    })
})