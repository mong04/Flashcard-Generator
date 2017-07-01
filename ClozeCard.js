class ClozeCard {
    constructor(text, cloze) {
        if (!text.includes(cloze)) {
            console.log('Sorry, ' + cloze + " doesn't appear in the text");
        }
        else {
            this.cloze = cloze;
            this.partial = text.replace(cloze, '...');
            this.fullText = text;
        }
    }
    error() {
        if (!text.includes(cloze)) {
            console.log('Sorry, ' + cloze + " doesn't appear in the text");
        }
    }
    readPartial() {
        console.log(this.partial);
    }
    readFull() {
        console.log("Answer: " + this.fullText);
    }
}




module.exports = ClozeCard;