// let document.getElementById("title") = document.getElementById("document.getElementById("title")")

document.addEventListener('click', () => {

    if(document.getElementById("title").innerText=="The"){
        document.getElementById("title").innerText="USB"
    }
    else if (document.getElementById("title").innerText=="USB"){
        document.getElementById("title").innerText="Curse"
    }
    else if(document.getElementById("title").innerText=="Curse"){
        document.getElementById("mainContainer").style.display = 'none'
        document.getElementById("main").style.display = 'flex'
    }
});