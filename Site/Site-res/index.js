function openNav() {
    document.querySelector('nav').classList.add("is-open");
}


function closeNav() {
    document.querySelector('nav').classList.remove("is-open");
    document.querySelector('nav').classList.remove("is-open-no-transition");
}

function openTitle(n) {
    if(document.querySelector('.title' + n).classList.contains("is-open")) {
        document.querySelector('.title' + n).classList.remove("is-open");
        }


    else {
        var elements = document.querySelectorAll('.title');
        for(var i = 0; i < elements.length; i++) {
            elements[i].classList.remove("is-open");
            }
        document.querySelector('.title' + n).classList.add("is-open")
        }
        
}

