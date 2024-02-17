const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    btn.style.backgroundColor = '#ffac09';
    btn.style.boxShadow = '0 0 40px #ffac09';
    btn.style.transition = '.5s ease';
});

function myfunction(){
    document.getElementById("mydropdown").classList.toggle("show");
}
window.onclick=function(event)
{
    (!event.target.matches('.dropbtn'));{
        var dropdowns=document.getElementsByClassName("dropdown-content")
        var i;
        for(i=0;i<dropdowns.length;i++){
            var openDropdown=dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}