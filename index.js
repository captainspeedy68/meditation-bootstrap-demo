const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");

// toast logic
if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
}


// popover
var popover = new bootstrap.Popover(document.getElementById('meditationTipButton'));

// initialising all tracker components and variables using id's here
const meditationTrackerForm = document.getElementById("meditationTrackerForm");
const progressBar = document.getElementById("progressBar");
const completedProgressText = document.getElementById("completedProgress");

// modal logic
const progressModal = new bootstrap.Modal(
  document.getElementById("progressModal")
);

let totalMinutes = 0;
const goalMinutes = 120;


// on submit listener
meditationTrackerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const duration = parseInt(document.getElementById("duration").value);

  totalMinutes += duration;
  const progressPercentage = (totalMinutes / goalMinutes) * 100;

  // progress bar logic
  progressBar.value = progressPercentage;
  completedProgressText.textContent = Math.min(progressPercentage, 100).toFixed(
    2
  );

  // a completion modal
  if (progressPercentage >= 100) {
    progressModal.show();
  }
});


