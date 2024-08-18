var lastScrollTop = 0;
       navbar = document.getElementById("navbar");
       window.addEventListener("scroll", function() {
         var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
         if(scrollTop > lastScrollTop)
           navbar.style.top = "-90px";
         else
           navbar.style.top = "0";
         lastScrollTop = scrollTop;
       })