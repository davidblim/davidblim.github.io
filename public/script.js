const davidlim = document.querySelectorAll("#david > h1");

for (let letter of davidlim) {
    letter.style.transition = "all 0.4s cubic-bezier(0,.68,.7,1)";
    letter.addEventListener("mouseover", () => {
        let randomRotate = (Math.random() * 2 - 1)/2;
        letter.style.transform = `scale(1.2) rotate(${randomRotate}turn)`;
        //letter.style.fontFamily = "VT323";
        letter.style.padding = "0 3% 0 3%";

        let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        letter.style.color = randomColor;
    });
    letter.addEventListener("mouseout", () => {
        letter.style.transform = "scale(1) rotate(0turn)";
        letter.style.fontFamily = "Kelsi, DM Sans";
        letter.style.padding = "0";
        letter.style.color = "Black";
    });
};


const bioLinks = document.querySelectorAll("#bio > a");
