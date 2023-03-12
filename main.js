
//Darkmode
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = $('.switch');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null)
}

//tuy chinh load trang co darkmode khong
if(darkMode === 'enabled'){
    enableDarkMode();
}

darkModeToggle.click(function(){ 
    darkMode = localStorage.getItem('darkMode')
    if(darkMode !== 'enabled'){
        enableDarkMode();
    }
    else{
        disableDarkMode();
    }
});
//btn clik bar

$('#btnBar').click(function () {
    $('.list').toggleClass("list-on");
});

//go to top
window.addEventListener("scroll", function(){
    //go to top
    var showGoToTop = 700;
    if ($(this).scrollTop() >= showGoToTop) 
        $(".go-to-top").fadeIn();       
    else
        $(".go-to-top").fadeOut();               
});

//go to top
$(".go-to-top").click(function(){
    $('html, body').animate({ scrollTop: 0 });
});