export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
export const escapeStr = (str) => {
    return str
         .replace(/&amp;/g, "&")
         .replace(/&lt;/g, "<")
         .replace(/&gt;/g, ">")
         .replace(/&shy;/g, " ")
         .replace(/&rsquo;/g, "’")
         .replace(/&lrm;/g, " ")
         .replace(/&quot;/g, "\"")
         .replace(/&#039;/g, "\'");
 }

 