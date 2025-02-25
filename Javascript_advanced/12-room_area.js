const roomDimensions = {
    width: 50,
    length: 100,
    getArea: function() {
        return this.width * this.length;
    }
}

// use bind method to ensure function is always called w/ a certain 'this' value
const boundGetArea = roomDimensions.getArea.bind(roomDimensions);
