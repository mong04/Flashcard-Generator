var ClozeCard = function(text, cloze){
    if (!text.includes(cloze)){
        console.log('Sorry, ' + cloze + " doesn't appear in the text")
    }
    this.cloze = cloze;
    this.partial = text.replace(cloze,'...');
    this.fullText = text;
};

module.exports = ClozeCard;