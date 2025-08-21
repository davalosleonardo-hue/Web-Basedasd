const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggle-btn");
const dashboardBtn = document.getElementById("dashboard-btn");
const main = document.querySelector(".main");

function toggleSidebar() {
  sidebar.classList.toggle("active");
  main.classList.toggle("shifted");
}

toggleBtn.addEventListener("click", toggleSidebar);
dashboardBtn.addEventListener("click", toggleSidebar);
