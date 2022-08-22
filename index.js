const fromText = document.querySelector(".from-text");
const toText = document.querySelector(".to-text");
const selectTag = document.querySelectorAll("select");
const transalateBtn= document.querySelector("button");

selectTag.forEach((tag, id) => {
  for (const country_code in countries) {
    //selected English & Bengali by default
    let selected;
    if (id == 0 && country_code == "en-GB") {
      selected = "selected";
    } else if (id == 1 && country_code == "bn-IN") {
      selected = "selected";
    }
    let option = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`;
    tag.insertAdjacentHTML("beforeend", option);
  }
});

transalateBtn.addEventListener("click", ()=>{
  let text=fromText.value,
  transalateFrom= selectTag[0].value, //getting fromSelect tag value
  transalateTo= selectTag[1].value; //getting toSelect tag value
  let apiUrl=`https://api.mymemory.translated.net/get?q=${text}&langpair=${transalateFrom}|${transalateTo}`;
  fetch(apiUrl).then(res => res.json()).then(data =>{
    toText.value=data.responseData.translatedText;
  })
})