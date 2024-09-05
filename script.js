// Particle animation
const createParticle = () => {
    const particlesContainer = document.querySelector('.floating-particles');
    const particle = document.createElement('div');
    particle.classList.add('particle');
  
    const size = Math.random() * 25 + 10 + 'px';
    particle.style.width = size;
    particle.style.height = size;
  
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = Math.random() * 3 + 6 + 's';
  
    particlesContainer.appendChild(particle);
  
    setTimeout(() => {
      particle.remove();
    }, 8000);
  };
  
  setInterval(createParticle, 400);
  
  // Button interaction
  document.getElementById('forgiveButton').addEventListener('click', function () {
    const message = document.querySelector('.message');
    message.textContent = "Thank You!";
    message.style.color = "#80cbc4";
    document.querySelector('.apology').textContent = "I am so grateful for your forgiveness. I love you babe.";
    this.style.display = 'none';
  });  