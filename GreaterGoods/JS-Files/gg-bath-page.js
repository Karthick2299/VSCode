const anchorTag = document.querySelector('.anchorTag');
const sideNav = document.querySelector('.side-navigation');
const Nav = document.querySelector('.navigation-section');
const sideView = document.querySelector('#sideNav-View');

function viewSideNav(){
    if(Nav.classList.contains('.sideNavigation')){
        
        sideNav.classList.add('.sideNav-View');
        console.log("its working")
    }
    else{
        sideNav.classList.add('.sideNav-View');
        console.log("its not working");
    }
}