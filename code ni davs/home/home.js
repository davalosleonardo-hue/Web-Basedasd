// Example: track request function
document.querySelector("#track button").addEventListener("click", function () {
  const reqId = document.querySelector("#track input").value;
  if (reqId.trim() === "") {
    alert("Please enter a Request ID.");
  } else {
    alert("Tracking request ID: " + reqId + " (Feature coming soon!)");
  }
});
