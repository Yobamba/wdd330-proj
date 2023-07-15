import { goals } from "./progressTrack.js";

// Retrieve goals from localStorage if they exist
const storedGoals = localStorage.getItem("goals");
if (storedGoals) {
  let goals = JSON.parse(storedGoals);
}

document
  .getElementById("goalForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user input values
    let goal = document.getElementById("goal").value;
    const goalType = document.getElementById("goalType").value;

    storeGoal(goal, goalType);

    // Show success message
    const successMessage = document.getElementById("successMessage");
    successMessage.textContent =
      "Goal created! You can check your goals at the dashboard or progress tracking pages.";
  });

// Function to store goal details in localStorage
function storeGoal(goal, goalType) {
  localStorage.setItem("goal", goal);
  localStorage.setItem("goalType", goalType);

  // *******************************************************************
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  const progress = 0;
  localStorage.setItem("date", formattedDate);
  localStorage.setItem("progress", progress);
  // *******************************************************************
}

// ______________________________________________________________________

// Function to add a new goal to the goals list
function addGoalToList(name, type, progress, date) {
  goals.push({ name, type, progress, date });
}

// Update the goals list when a goal is created
document
  .getElementById("goalForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user input values
    const goal = document.getElementById("goal").value;
    const goalType = document.getElementById("goalType").value;
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;
    const progress = 0;

    // Store goal in localStorage
    storeGoal(goal, goalType, formattedDate, progress);

    // Add goal to the goals list
    addGoalToList(goal, goalType, progress, formattedDate);

    // Save updated goals list to localStorage
    localStorage.setItem("goals", JSON.stringify(goals));

    // Show success message
    const successMessage = document.getElementById("successMessage");
    successMessage.textContent =
      "Goal created! You can check your goals at the dashboard or progress tracking pages.";
  });
