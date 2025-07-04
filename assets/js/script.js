document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".form-section");
    let current = 0;
  
    function showSection(index) {
      sections.forEach((section, i) => {
        section.style.display = i === index ? "block" : "none";
      });
    }
  
    document.querySelectorAll(".btn-next").forEach((button) => {
      button.addEventListener("click", () => {
        const currentSection = sections[current];
        const inputs = currentSection.querySelectorAll("input, select, textarea");
        let valid = true;
  
        inputs.forEach(input => {
          if (input.hasAttribute("required") && !input.value.trim()) {
            input.classList.add("border-red-500");
            valid = false;
          } else {
            input.classList.remove("border-red-500");
          }
        });
  
        if (valid && current < sections.length - 1) {
          current++;
          showSection(current);
        }
      });
    });
  
    showSection(current);
  });
  