import { goals } from "../scripts/progressTrack.js";

(async function () {
  new Chart(document.getElementById("acquisitions"), {
    type: "bar",
    data: {
      labels: goals.map((row) => row.name),
      datasets: [
        {
          label: "Progress Towards Goals (%)",
          data: goals.map((row) => row.progress),
        },
      ],
    },
  });
})();

//   new Chart(document.getElementById("acquisitions"), {
//     type: "bar",
//     data: {
//       labels: data.map((row) => row.year),
//       datasets: [
//         {
//           label: "Acquisitions by year",
//           data: data.map((row) => row.count),
//         },
//       ],
//     },
//   });
// })();

//   new Chart(document.getElementById("acquisitions"), {
//     type: "doughnut",
//     data: {
//       labels: goals.map((goal) => goal.name),
//       datasets: [
//         {
//           label: "Goal Progress",
//           data: goals.map((goal) => goal.progress),
//         },
//       ],
//     },
//   });
// })();
