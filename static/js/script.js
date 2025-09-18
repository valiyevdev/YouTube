function toggleSidebar() {
      const sidebar = document.querySelector('.sidebar');
      const overlay = document.querySelector('.overlay');
      const extraSections = document.querySelectorAll('.extra-section');
      const ytLogo = document.querySelector('.yt-logo');
      
      if (window.innerWidth < 768) {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
      } else {
        sidebar.classList.toggle('collapsed');
        extraSections.forEach(sec => sec.classList.toggle('extra-hidden'));
        ytLogo.classList.toggle('extra-hidden');
      }
    }