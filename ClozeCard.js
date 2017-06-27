var ClozeCard = function(text, cloze){
    this.cloze = cloze;
    this.partial = partial;
    this.fullText = text;
    this.error = function(){
        if (text.indexOf(cloze) < 0){
            console.log('Sorry')
        }
    }
}