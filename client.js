$(document).ready(readNow);


function readNow() {
    $('.btn').on('click',displaySearch);
}

function displaySearch() {
    console.log('test');
    
    $('.search').toggleClass('active');
}