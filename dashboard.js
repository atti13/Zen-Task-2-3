let data1 = {
  labels: ["Social Circle", "Malibu", "Snohomish", "New York", "Everett", "Seattle" , "London"],
  datasets: [
    {
      backgroundColor: "#e35454",
      data: [15900, 13300, 6500, 5900, 2450, 2200, 1000 ],
    },
  ],
};

let data2 = {
  labels: [
    "alarm system",
    "Backflow Testing",
    "Dyganosis",
    "Fire Extinguisher",
    "pump",
  ],
  datasets: [
    {
      backgroundColor: "#e35454",
      data: [29000, 15600, 6300, 5950, 1000],
    },
  ],
};

let option1 = {
  indexAxis: "y",
  legend: { display: false },
  scales: {
    xAxes: [{ ticks: { stepSize: 2000, beginAtZero: true } }],
    yAxes: [{ ticks: { beginAtZero: true } }],
  },
};

let option2 = {
  indexAxis: "y",
  legend: { display: false },
  scales: {
    xAxes: [{ ticks: { stepSize: 2000, beginAtZero: true } }],
    yAxes: [{ ticks: { beginAtZero: true } }],
  },
};

let ctx1 = document
  .getElementById("graph1")
  .querySelector("canvas")
  .getContext("2d");
new Chart(ctx1, {
  type: "horizontalBar",
  data: data1,
  options: option1,
});

let ctx2 = document
  .getElementById("graph2")
  .querySelector("canvas")
  .getContext("2d");
new Chart(ctx2, {
  type: "horizontalBar",
  data: data2,
  options: option2,
});
