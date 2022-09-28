window.onscroll = function(){
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 660){
        document.querySelector('.go-top_container')
        .classList.add('show');
    }else{
        document.querySelector('.go-top_container')
        .classList.remove('show');
    }
}

document.querySelector('.go-top_container')
.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});