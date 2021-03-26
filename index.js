const el = document.querySelector('#heading')

const words = ["Anirudh", "Giran", "Saini"];

let index = 0, subIndex = 0;
let isEnd = false, isDeleting = false;

let currentWord = [];

const typewriter = () => {
    isEnd = false;
    index = index % words.length;

    if (!isDeleting && subIndex <= words[index].length) {
        currentWord.push(words[index][subIndex]);
        subIndex++;
        el.innerHTML = currentWord.join("");
    }

    if (isDeleting && subIndex >= 0) {
        currentWord.pop();
        subIndex--;
        el.innerHTML = currentWord.join("");
    }

    if( subIndex === words[index].length){
        isEnd = true;
        isDeleting = true;
    }    

    if (subIndex === 0 && isDeleting) {
        currentWord = [];
        isDeleting = false;
        index++;
    }

    const spedUp = 50;
    const normalSpeed = 200;
    const time = isEnd ? 1500 : isDeleting ? spedUp : normalSpeed;

    setTimeout(typewriter, time);
}

typewriter();