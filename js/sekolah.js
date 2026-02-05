AOS.init({
            duration: 1000,
            once: true
        });

        document.onkeydown = function(e) {
            if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 83)) {
                return false;
            }
        };