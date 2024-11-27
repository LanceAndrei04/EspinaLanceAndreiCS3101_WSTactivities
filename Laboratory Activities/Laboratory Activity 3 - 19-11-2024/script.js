particlesJS("particles-js", {
    particles: {
      number: { value: 50 },
      size: { value: 3 },
      move: { enable: true, speed: 2 },
      line_linked: { enable: true, color: "#ffffff" },
    },
    interactivity: {
      events: { onhover: { enable: true, mode: "repulse" } },
    },
  });
  
const textInput = document.getElementById("textInput");
const wordCountDisplay = document.getElementById("wordcount");
const sentenceCountDisplay = document.getElementById("sentenceCount");

textInput.addEventListener("input", () => {
  const text = textInput.value.trim();

  // Word count
  const words = text.split(/\s+/).filter(word => word.trim().length > 0 && !/^[.!?]+$/.test(word)); 
  const wordCount = words.length;
  wordCountDisplay.textContent = `📝 Words: ${wordCount}`;

  // Sentence count
  const sentences = text.split(/[.!?]\s*/).filter(sentence => sentence.trim().length > 0);
  const sentenceCount = sentences.length;
  sentenceCountDisplay.textContent = `📖 Sentences: ${sentenceCount}`;
});
