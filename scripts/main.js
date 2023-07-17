// js for progress_track.html
// Example goals data
const goals = [
  { name: "Goal 1", type: "checklist", progress: 50, date: "2023-07-10" },
  { name: "Goal 2", type: "simple", progress: 0, date: "2023-07-09" },
  { name: "Goal 3", type: "checklist", progress: 25, date: "2023-07-08" },
];

// Populate the In Progress and Completed Goals lists
const inProgressList = document.getElementById("inProgressList");
const completedList = document.getElementById("completedList");

goals.forEach((goal) => {
  const listItem = document.createElement("li");
  listItem.textContent = `${goal.name} (Set: ${goal.date})`;

  if (goal.type === "checklist") {
    const progress = document.createElement("span");
    progress.textContent = `Progress: ${goal.progress}%`;
    listItem.appendChild(progress);
  }

  const completeButton = document.createElement("button");
  completeButton.textContent = "Make Progress";
  completeButton.addEventListener("click", () =>
    markAsCompleted(goal, listItem)
  );
  listItem.appendChild(completeButton);

  if (goal.progress === 100) {
    listItem.classList.add("completed");
    completedList.appendChild(listItem);
  } else {
    inProgressList.appendChild(listItem);
  }
});

function markAsCompleted(goal, listItem) {
  // Update goal progress or move it to completed goals
  if (goal.type === "checklist") {
    const progress = prompt("Enter the progress percentage (0-100):");
    if (progress !== null) {
      goal.progress = parseInt(progress, 10);
      listItem.querySelector(
        "span"
      ).textContent = `Progress: ${goal.progress}%`;
      if (goal.progress === 100) {
        listItem.classList.add("completed");
        completedList.appendChild(listItem);
      }
    }
  } else {
    goal.progress = 100;
    listItem.classList.add("completed");
    completedList.appendChild(listItem);
  }
}
