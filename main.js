
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