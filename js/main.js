$( document ).ready(function() {

 $("#accordion").accordion();

        const toggleSwitch = document.querySelector('#darkmode');
        const currentTheme = localStorage.getItem('theme');
        
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
        
            if (currentTheme === 'dark') {
                toggleSwitch.checked = true;
            }

    // naam functie 
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            $("#logo").attr('src','img/logo@2x.png');
            $("#leer").attr('src','img/blok1-wit.png');
            $("#codeer").attr('src','img/blok2-wit.png');
            $("#speel").attr('src','img/blok3-wit.png');
           
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            $("#logo").attr('src','img/logo-roze-mmt@2x.png');
            $("#leer").attr('src','img/blok1-leer.png');
            $("#codeer").attr('src','img/blok2-codeer.png');
            $("#speel").attr('src','img/blok3-speel.png'); 
        }
       }
       toggleSwitch.addEventListener('change', switchTheme, false); 
    }

   var modal = document.getElementById("myModal");

   // Get the button that opens the modal
   var btn = document.getElementById("myBtn");
   
   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close")[0];

      // Wrap every letter in a span
      var textWrapper = document.querySelector('.ml1 .letters');
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      
      anime.timeline({loop: true})
        .add({
          targets: '.ml1 .letter',
          scale: [0.3,1],
          opacity: [0,1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 600,
          delay: (el, i) => 70 * (i+1)
        }).add({
          targets: '.ml1 .line',
          scaleX: [0,1],
          opacity: [0.5,1],
          easing: "easeOutExpo",
          duration: 700,
          offset: '-=875',
          delay: (el, i, l) => 80 * (l - i)
        }).add({
          targets: '.ml1',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
        var geklikt = true;

        $('videos').each(function () {
            var player = videojs(this);
            var playbtn = $(this).parent().parent().find('.pause');
            var forward = $(this).parent().parent().find('.forward');
            var rewind = $(this).parent().parent().find('.rewind');
    
            forward.click(function(){
              var time = player.currentTime();
              var timeNew = time+10;
              player.currentTime(timeNew);
              });
        
              rewind.click(function(){
                var time = player.currentTime();
                var timeNew = time-10;
                player.currentTime(timeNew);
                });
        
        
            
        });
            playbtn.click(function(){
            if (!geklikt) {
                    player.pause();
                    geklikt = true;
                    $('body').removeClass('geklikt');
            }
            else {
                player.play();
                geklikt = false;
                $('body').addClass('geklikt');
            }

            
        player.on('ended', function() {
            modal.style.display = "block";

            span.onclick = function() {
                modal.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                  modal.style.display = "none";
                }
              }
           
             
        });
    });
});