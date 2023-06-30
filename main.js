let tabs = document.querySelectorAll(".tab button");
let tabcontents = document.querySelectorAll(".tabcontent ");

console.log(tabcontents);

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabcontents.forEach((tabcontent) => {
      tabcontent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabcontents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});
