const root = document.documentElement;
const slider = document.querySelector("#slider");
const view = document.querySelector(".views");
const dollar = document.querySelector(".dollar");
const month = document.querySelector(".month");
const check = document.querySelector("#checkbox");

const views = {
  0: ["NO", "0.00"],
  1: ["10K", "8.00"],
  2: ["50K", "12.00"],
  3: ["100K", "16.00"],
  4: ["500K", "24.00"],
  5: ["1M", "36.00"],
};

slider.addEventListener("input", () => {
  console.log(check.checked);
  if (check.checked === true) {
    view.textContent = `${views[`${slider.value}`][0]}` + " PAGEVIEWS";
    dollar.textContent =
      "$" + `${Number(views[`${slider.value}`][1]) * 0.75}.00`;
    console.log(Number(views[`${slider.value}`][1]) * 0.75);
    console.log(views[`${slider.value}`][1]);
  } else {
    view.textContent = `${views[`${slider.value}`][0]}` + " PAGEVIEWS";
    dollar.textContent = `$${views[`${slider.value}`][1]}`;
  }

  const percentage =
    ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  root.style.setProperty("--Slider-Truck-Size", percentage + "%");
});

check.addEventListener("click", () => {
  if (check.checked === true) {
    view.textContent = `${views[`${slider.value}`][0]}` + " PAGEVIEWS";
    dollar.textContent =
      "$" + `${Number(views[`${slider.value}`][1]) * 0.75}.00`;
    console.log(Number(views[`${slider.value}`][1]) * 0.75);
    console.log(views[`${slider.value}`][1]);
  } else {
    view.textContent = `${views[`${slider.value}`][0]}` + " PAGEVIEWS";
    dollar.textContent = `$${views[`${slider.value}`][1]}`;
  }
});
