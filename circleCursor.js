             // cursore a cerchio
            const cursor = document.getElementById('cursor');
            let mouseX = 0;
            let mouseY = 0;
            let currentX = 0;
            let currentY = 0;
            const FOLLOW_SPEED = 0.08;
            // FOLLOW elastico
            function animateCursor() {
            
            currentX += (mouseX - currentX) * FOLLOW_SPEED;
            currentY += (mouseY - currentY) * FOLLOW_SPEED;

            cursor.style.left = currentX + 'px';
            cursor.style.top = currentY + 'px';

            requestAnimationFrame(animateCursor);
            }

            animateCursor();

            document.addEventListener('mousemove', e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            });

            document.querySelectorAll('.project-item').forEach(row => {
            row.addEventListener('mouseenter', () => {
                cursor.classList.add('is-active');
            });

            row.addEventListener('mouseleave', () => {
                cursor.classList.remove('is-active');
            });

            row.addEventListener('click', (e) => {
                if (e.target.closest('a')) return;
                const link = row.querySelector('a[href]');
                if (link) {
                    link.click();
                }   
            });
        });