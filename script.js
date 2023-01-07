    // let btn = document.getElementById('button');
    // let input = document.getElementById('input');
    // let output = document.getElementById('answer')

    // btn.addEventListener('click', longest);
    // let red = input.value

    // function longest(){
    //     let regex = /([^A-Z a-z])+/g;
    //     let text = input.value.replace(regex,'').split(' ');
    //     let longestText = '';
    //     let longestCount = 0;

    //     for(let i = 0; i < text.length; i++){
    //         if(text[i].length > longestCount){
    //             longestCount = text[i].length;
    //             longestText = text[i];
    //         }
    //     }
    //     return output.innerText += longestText;

    // }

    

    const lg_string = prompt('Input your desired statement');

    const findLongestString = (string) => {
        const string_words = string.split(" ");
        let longest = string_words[0];
        let x = string_words[0].length;

        string_words.forEach(word => {
            if (word.length > x) {
                x = word.length;
                longest = word;
                
            }
        });
        return longest;
    }

    alert(findLongestString(lg_string));























    // function forLongestWord(){
    //     if(input.value !== ''){
    //         const words = input.value.split(' ');
    //         let longest = 0;
    //         for (let i = 0; i < words.length; i++){
    //             if (words[i].length > longest){
    //                 longest = words[i];
    //             }
    //         }
    //         return output.innerText = longest;
    //     }else alert('this place cannot be empty');
    // }






// const simple = function(){
//     let sentence = prompt('Input your desired statement');  
//     const words = sentence.split(' ');
//     console.log(words);
//     let longest = 0;
//     for (let i = 0; 1 < words.length; i++){
//         if (words[i].length > longest){
//            longest = words[i];
//         }
//     }
//     return longest;
  
// };
// simple();

// let sentence = prompt('Input your desired statement');
// console.log(sentence);
// if (sentence !== ""){
//     const words = sentence.split(' ');
//     let longest = 0;
//     for (let i = 0; i < words.length; i++){
//         if(words[i].length > longest){
//             longest = words[i];
//         }
//     }
//     alert(longest);

// }
// // else alert('input a sentence');