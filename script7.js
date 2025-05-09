
    function triggerAnimation() {
      const box = document.getElementById("box");
      box.classList.add("animate");
      localStorage.setItem("hasAnimated", "true");
    }

    window.onload = () => {
      const hasAnimated = localStorage.getItem("hasAnimated");
      if (hasAnimated === "true") {
        document.getElementById("box").classList.add("animate");
      }
    };
  
