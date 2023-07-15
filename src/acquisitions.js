import { goals } from "../scripts/progressTrack.js";

(async function () {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(document.getElementById("acquisitions"), {
    type: "doughnut",
    data: {
      labels: goals.map((goal) => goal.name),
      datasets: [
        {
          label: "Goal Progress",
          data: goals.map((goal) => goal.progress),
        },
      ],
    },
  });
})();
