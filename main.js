

let scroll = () => {
    let node = document.getElementById('main');
    let height = document.getElementsByTagName('nav').offsetHeight;
    node.scrollIntoView(true);
 
    let scrolledY = window.scrollY;
 
    if (scrolledY){
     window.scroll(0,scrolledY-height)
    }
     
 }