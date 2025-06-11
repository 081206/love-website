document.addEventListener('DOMContentLoaded', () => {
    const candles = document.querySelectorAll('.candle');
    
    candles.forEach(candle => {
        // Create flame
        const flame = document.createElement('div');
        flame.className = 'flame';
        candle.appendChild(flame);

        // Create glow
        const glow = document.createElement('div');
        glow.className = 'glow';
        candle.appendChild(glow);

        // Animate flame
        function animateFlame() {
            const randomX = (Math.random() - 0.5) * 2;
            const randomY = (Math.random() - 0.5) * 2;
            const randomScale = 0.8 + Math.random() * 0.4;

            flame.style.transform = `translate(${randomX}px, ${randomY}px) scale(${randomScale})`;
            glow.style.transform = `translate(${randomX}px, ${randomY}px) scale(${randomScale * 1.5})`;

            requestAnimationFrame(animateFlame);
        }

        animateFlame();
    });
}); 