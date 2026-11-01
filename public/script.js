// Birthday Page for Ishaq - Client-side Interactions
document.addEventListener('DOMContentLoaded', function() {
  // Celebration button click effect
  const celebrateBtn = document.querySelector('.btn-primary');
  
  if (celebrateBtn) {
    celebrateBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Create celebration effect
      createCelebration(e);
      
      // Show message
      showCelebrationMessage();
    });
  }
  
  // Create celebration particles
  function createCelebration(event) {
    const container = document.querySelector('.birthday-card');
    if (!container) return;
    
    const colors = ['#2563eb', '#1d4ed8', '#3b82f6', '#6366f1', '#a5f3fc'];
    
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.left = (event.clientX - container.offsetLeft) + 'px';
      particle.style.top = (event.clientY - container.offsetTop) + 'px';
      particle.style.width = '8px';
      particle.style.height = '8px';
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.borderRadius = '50%';
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '1000';
      
      const size = Math.random() * 4 + 4;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      
      const xDistance = (Math.random() - 0.5) * 200;
      const yDistance = (Math.random() - 0.5) * 200;
      
      particle.style.left = (parseFloat(particle.style.left) + xDistance) + 'px';
      particle.style.top = (parseFloat(particle.style.top) + yDistance) + 'px';
      
      particle.style.transition = 'all 0.6s ease-out';
      
      container.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 600);
    }
  }
  
  // Show celebration message
  function showCelebrationMessage() {
    const existingMsg = document.querySelector('.celebration-message');
    if (existingMsg) existingMsg.remove();
    
    const msg = document.createElement('div');
    msg.className = 'celebration-message';
    msg.innerHTML = '🎉 Happy Birthday! 🎉';
    msg.style.position = 'fixed';
    msg.style.top = '50%';
    msg.style.left = '50%';
    msg.style.transform = 'translate(-50%, -50%)';
    msg.style.backgroundColor = 'var(--accent-primary)';
    msg.style.color = 'white';
    msg.style.padding = '1rem 2rem';
    msg.style.borderRadius = 'var(--radius-md)';
    msg.style.boxShadow = 'var(--shadow-card)';
    msg.style.zIndex = '9999';
    msg.style.fontSize = '1.2rem';
    msg.style.animation = 'fadeIn 0.5s ease-out';
    
    document.body.appendChild(msg);
    
    setTimeout(() => {
      msg.remove();
    }, 3000);
  }
});