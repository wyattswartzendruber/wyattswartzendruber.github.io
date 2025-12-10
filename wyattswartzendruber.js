//did some research and w the help of ai (ew i know) also recreated a grain filter i saw on a website i thought looked cool//

console.log('Grain script loaded!');

window.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded fired!');
  
  const noise = document.createElement('div');
  noise.className = 'noise';
  document.body.appendChild(noise);
  

  const style = document.createElement('style');
  style.textContent = `
    .noise {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: overlay;
      opacity: 0.5;
    }

    .noise::before,
    .noise::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
      animation: grain 0.8s steps(10) infinite;
    }

    .noise::after {
      animation: grain 0.8s steps(10) infinite reverse;
    }

    @keyframes grain {
      0% { transform: translate(0, 0); }
      100% { transform: translate(-10%, -10%); }
    }
  `;
  document.head.appendChild(style);
  
  console.log('Noise element and styles added!');
});