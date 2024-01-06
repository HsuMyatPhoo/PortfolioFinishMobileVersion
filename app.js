let getheader = document.getElementById('header');

        function shownav(){
          getheader.classList.toggle('navheader');
        }

        let navbar = document.getElementById('navbar');
        
        function  removenav(){
            if(getheader.classList.contains('navheader')){
                // console.log("this is small size");
                getheader.className = "";
            }else {
                // console.log("This is normal");
            }
        }
    