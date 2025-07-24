// Vérif anti-bot (garde le code existant)
document.addEventListener("DOMContentLoaded", () => {
  let check = prompt("Combien font 3 + 2 ?");
  if (parseInt(check) !== 5) {
    alert("Vérification échouée. Accès refusé.");
    document.body.innerHTML = "<h1>Accès bloqué 🚫</h1>";
    return;
  }

  // Animation de zoom sur la photo
  const photo = document.getElementById("photo-profil");
  let timer = null;

  photo.addEventListener("mouseenter", () => {
    timer = setTimeout(() => {
      photo.classList.add("zoom");
    }, 3000); // 3 secondes
  });

  photo.addEventListener("mouseleave", () => {
    clearTimeout(timer);
    photo.classList.remove("zoom");
  });
});
