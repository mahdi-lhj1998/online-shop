const buy_bt = document.querySelectorAll(" .ppp");
const basket_number = document.querySelector(".after");
const basket = document.querySelector(".pos");
const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const Product_list = document.querySelectorAll("li");
const product_selected = document.querySelector(".product-selected");
const return_bt = document.querySelector(".return");
const dark_mood = document.querySelector(".dark");
const roots = document.querySelector("root");
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const h3 = document.querySelectorAll("h3");
const li_p = document.querySelectorAll("li p");
const light_mood = document.querySelector(".light");
// console.log(light_mood);
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
    حذف از لیست <ion-icon class="del" name="trash-outline"></ion-icon>
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

languages.addEventListener("click", function () {
  languages.style.display = "none";
  language_display.style.display = "flex";
});
