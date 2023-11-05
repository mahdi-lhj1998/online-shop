const buy_bt = document.querySelectorAll(" .ppp");
const basket_number = document.querySelector(".after");
const basket = document.querySelector(".pos");
const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const Product_list = document.querySelectorAll("li");
const sitems = document.querySelectorAll(".sitems");
const product_selected = document.querySelector(".product-selected");
const return_bt = document.querySelector(".return");
const dark_mood = document.querySelector(".dark");
const profile = document.querySelector(".profile");
const roots = document.querySelector("root");
const body = document.querySelector("body");
const iconSearch = document.querySelector(".icon-search");
const nav = document.querySelector("nav");
const h3 = document.querySelectorAll("h3");
const li_p = document.querySelectorAll("li p");
const light_mood = document.querySelector(".light");
// console.log(light_mood);
const mainIcon = document.querySelector(".main-icon");
const mainIcon2 = document.querySelector(".main-icon2");
const inputSearch = document.querySelector(".search-txt");
const searchSec = document.querySelector(".search-sec");
const zarb = document.querySelector(".zarb");
const inputValue = inputSearch.value;
const li = document.querySelectorAll("li");
const tarik = document.querySelector(".tarik");
const rohsan = document.querySelector(".roshan");
const buy_basket = document.querySelector(".buy");
const logo_text = document.querySelectorAll(".logo-text");
const languages = document.querySelector(".zaban");
const language_display = document.querySelector(".language-display");
const en = document.querySelector(".en");
const fa = document.querySelector(".fa");
const jijo = document.querySelector(".jijo");
const color = document.querySelectorAll(".color");
const free = document.querySelectorAll(".free");
const label_new = document.querySelectorAll(".new-after");
let parent_list_info = [];
buy_bt.forEach((item) =>
  item.addEventListener("click", function () {
    basket_number.style.display = "block";
    let parent_list = item.parentElement;
    console.log(parent_list);
    parent_list_info.push(parent_list);
    console.log(parent_list_info);
    basket_number.innerHTML = `${parent_list_info.length}`;
    const li = document.createElement("li");
    product_selected.appendChild(li);
    const img = document.createElement("img");
    img.classList.add("img");
    li.appendChild(img);
    let img_s = parent_list.firstElementChild;
    img.src = img_s.src;
    const p = document.createElement("p");
    let p_s = img_s.nextElementSibling.innerText;
    p.innerText = p_s;
    li.appendChild(p);
    const remove_bt = document.createElement("button");
    remove_bt.classList.add("remove");
    remove_bt.innerHTML = `
    Remove From List <ion-icon class="del" name="trash-outline"></ion-icon>
  `;
    li.appendChild(remove_bt);
    remove_bt.addEventListener("click", function () {
      let newNumber = parent_list_info.pop(parent_list);
      basket_number.innerHTML = `${parent_list_info.length}`;
      remove_bt.parentElement.remove();
    });
  })
);
basket.addEventListener("click", function () {
  section1.style.display = "none";
  section2.style.display = "block";
  if (parent_list_info.length === 0) {
    const empty = document.querySelector(".nothing");
    empty.style.display = "block";
  } else {
    const empty = document.querySelector(".nothing");
    empty.style.display = "none";
  }
});
return_bt.addEventListener("click", function () {
  section1.style.display = "block";
  section2.style.display = "none";
});
dark_mood.addEventListener("click", function () {
  dark_mood.style.display = "none";
  body.style.backgroundColor = "#163a79";
  nav.style.backgroundImage = "none";
  nav.style.backgroundColor = "#0a1f44";
  h3.forEach((item) => {
    item.style.color = "#fff";
  });
  li_p.forEach((item) => (item.style.color = "#fff"));
  light_mood.style.display = "block";
  basket.style.color = "#ffffffad";
});

light_mood.addEventListener("click", function () {
  body.style.backgroundColor = "#fff";
  light_mood.style.display = "none";
  dark_mood.style.display = "block";
  nav.style.backgroundImage =
    "linear-gradient(to right, #0a1f44, black, #0a1f44)";
  h3.forEach((item) => {
    item.style.color = "black";
  });
  color.forEach((item) => {
    item.style.color = "black";
  });
  label_new.forEach((item) => (item.style.olor = "#fff"));
  free.forEach((item) => {
    item.style.color = "black";
  });
  li_p.forEach((item) => (item.style.color = "black"));
});

// -----------------------------------
const searchEngine = (event) => {
  basket_number.style.right = "40rem";
  mainIcon.style.display = "none";
  searchSec.style.display = "flex";
};
const close = () => {
  basket_number.style.right = "25rem";
  mainIcon.style.display = "block";
  searchSec.style.display = "none";
};
const realsearch = (event) => {
  li.forEach((item) => {
    const search_txt = event.target.value.toLowerCase();
    const h3 = item.children[1].innerText.toLowerCase();
    console.log(h3);
    if (h3.includes(search_txt)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
      console.log("hi");
    }
  });
};
zarb.addEventListener("click", close);
mainIcon.addEventListener("click", searchEngine);
inputSearch.addEventListener("keyup", realsearch);
// ----------------sort-------
const filtersClicked = document.querySelector(".filters-clicked");
const zarb2 = document.querySelector(".zarb2");
const sortItem = document.querySelector(".sort-item");
const filterHandeler = () => {
  basket_number.style.right = "36rem";
  filtersClicked.style.display = "none";
  zarb2.style.display = "block";
  iconSearch.style.display = "none";
  dark_mood.style.display = "none";
  profile.style.display = "none";
  sortItem.style.display = "flex";
};
const close2 = () => {
  basket_number.style.right = "25rem";
  zarb2.style.display = "none";
  filtersClicked.style.display = "block";
  iconSearch.style.display = "block";
  dark_mood.style.display = "block";
  profile.style.display = "block";
  sortItem.style.display = "none";
};
filtersClicked.addEventListener("click", filterHandeler);
zarb2.addEventListener("click", close2);
// --------------------------\
const selected = (datea) => {
  console.log(datea);
  sitems.forEach((item) => {
    console.log(item.dataset.filter);
    if (datea === item.dataset.filter) {
      item.classList.add("selected");
    } else {
      item.classList.remove("selected");
    }
  });
};
const sortHandeler = (even) => {
  const datea = even.target.dataset.filter;
  selected(datea);
  console.log(datea);
  li.forEach((item) => {
    const cata = item.dataset.category;
    // console.log(cata);
    if (datea === cata) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
    const close3 = () => {
      item.style.display = "flex";
      basket_number.style.right = "25rem";
    };
    zarb2.addEventListener("click", close3);
  });
};
sitems.forEach((item) => {
  item.addEventListener("click", sortHandeler);
});
