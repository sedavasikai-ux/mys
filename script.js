const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  // Posun hlavního kurzoru
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";

  // Vytvoření stopy
  const trail = document.createElement("div");
  trail.className = "trail";
  trail.style.left = e.pageX + "px";
  trail.style.top = e.pageY + "px";
  document.body.appendChild(trail);

  // Smazání stopy po skončení animace
  setTimeout(() => {
    trail.remove();
  }, 500);
});

