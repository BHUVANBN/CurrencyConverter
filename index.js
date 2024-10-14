
const url = 'https://v6.exchangerate-api.com/v6/a8d7b1153bff712bade27ad7/pair'
const dropdown = document.querySelectorAll('select');
const btn = document.querySelector("button");
const fromcurr=document.querySelector(".from select"); 
const tocurr=document.querySelector(".to select");                                                                                                                                                                                                                                                                      
const msg = document.querySelector("#convertedAmount");
console.log(dropdown);

for (let select of dropdown) {
    for (let code in countryList) {
        // console.log(code, countryList[code]);
        let newOption = document.createElement('option');
        newOption.innerText = code;
        newOption.value = code;
        if (select.id === "fromCurrency" && code === "USD") {
            newOption.selected = "selected";
        } else if (select.id === "toCurrency" && code === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener('change', (event) => {
        updateFlag(event.target);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    });
}

const updateFlag = (ele) => {
    console.log(ele);
    const selectedCurrency = ele.value;
    const selectedCountry = countryList[selectedCurrency];
    //console.log(selectedCountry);
    const flagUrl = `https://flagsapi.com/${selectedCountry}/flat/64.png`;
    let img = ele.parentElement.querySelector("img");
    console.log(img);
    img.src = flagUrl;  
};

btn.addEventListener("click", async(event) => {
    event.preventDefault();
    let amt = document.querySelector("input");
    let amount = amt.value;
    if (amount === "" || amount < 1) {
        amount = 1;
        amt.value = "1";
    }
    console.log(amount);
    console.log(fromcurr.value, tocurr.value);
    
    const purl = `${url}/${fromcurr.value}/${tocurr.value}`;
    console.log(purl);
    let response = await fetch(purl)
    let data = await response.json();
    const rate = data.conversion_rate;
    // console.log(response);
    // console.log(data);
    // console.log(rate);
    const final_amount = rate* amount;
    console.log(final_amount);
    msg.innerText =`${amount} ${fromcurr.value} = ${final_amount} ${tocurr.value}`;
});












// // Updated base URL
// const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

// const dropdowns = document.querySelectorAll(".dropdown select");
// //const btn = document.querySelector("form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// for (let select of dropdowns) {
//   for (currCode in countryList) {
//     let newOption = document.createElement("option");
//     newOption.innerText = currCode;
//     newOption.value = currCode;
//     if (select.name === "from" && currCode === "USD") {
//       newOption.selected = "selected";
//     } else if (select.name === "to" && currCode === "INR") {
//       newOption.selected = "selected";
//     }
//     select.append(newOption);
//   }

//   select.addEventListener("change", (evt) => {
//     updateFlag(evt.target);
//   });
// }

// const updateFlag = (element) => {
//   let currCode = element.value;
//   let countryCode = countryList[currCode];
//   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//   let img = element.parentElement.querySelector("img");
//   img.src = newSrc;
// };



// const updateExchangeRate = async () => {
//   let amount = document.querySelector(".amount input");
//   let amtVal = amount.value;
//   if (amtVal === "" || amtVal < 1) {
//     amtVal = 1;
//     amount.value = "1";
//   }
  
//   // Updated URL structure
//   const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
  
//   let response = await fetch(URL);
//   let data = await response.json();
//   let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()]; 
  
//   let finalAmount = amtVal * rate;
//   msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
// };


// btn.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   updateExchangeRate();
// });

// window.addEventListener("load", () => {
//   updateExchangeRate();
// });

