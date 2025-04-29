selectTag = document.querySelectorAll("select");
translateButton = document.querySelector("button");
fromText = document.querySelector(".from-text");
toText = document.querySelector(".to-text");
exchangeButton = document.querySelector(".exchange");
icons = document.querySelectorAll(".row i");

selectTag.forEach((tag, id) => {
    for (let language in languages) {
    let selected =
        id == 0
        ? language == "en-GB"
            ? "selected"
            : ""
        : language == "hi-IN"
        ? "selected"
        : "";
    let option = `<option ${selected} value="${language}">${languages[language]}</option>`;
    tag.insertAdjacentHTML("beforeend", option);
    }
});

translateButton.addEventListener("click", () => {
    fromLanguage = selectTag[0].value;
    toLanguage = selectTag[1].value;
    let text = fromText.value;
    console.log(text);
    if(!text) {
        toText.value = "";
        toText.setAttribute("placeholder", "");
        return;
    }
    console.log("Yaha tak aagaya mai");
    toText.setAttribute("placeholder", "Translating...");
    let url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${fromLanguage}|${toLanguage}`;
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.responseData.translatedText);
        toText.value = data.responseData.translatedText;
    });
})

exchangeButton.addEventListener("click", () => {
    let temp = fromText.value;
    fromText.value = toText.value;
    toText.value = temp;

    let tempLang = selectTag[0].value;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempLang;
});

icons.forEach(icon => {
    icon.addEventListener("click", ({target}) => {
        if(target.classList.contains('fa-copy')) {
            if(target.id == "from") {
                copyContent(fromText.value);
            } else {
                copyContent(toText.value);
            }
        } else {
            if(target.id == "from") {
                utterText(fromText.value, selectTag[0].value)
            } else {
                utterText(toText.value, selectTag[1].value)
            }
        }
    });
})

function copyContent(content) {
    navigator.clipboard.writeText(content);
}

function utterText(text, language) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    synth.speak(utterance);
}