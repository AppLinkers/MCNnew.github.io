// window.addEventListener('scroll', ()=> {
//     document.querySelector('nav').classList.toggle
//     ('window-scroll', window.scrollY > 0)
// })



async function fetchAsText(url){
    return await (await fetch(url)).text();
}

async function importNav(targetDiv) {
    document.querySelector('#' + targetDiv).innerHTML = await fetchAsText("../html/nav.html");
}

async function importFooter(targetDiv) {
    document.querySelector('#' + targetDiv).innerHTML = await fetchAsText("../html/footer.html");
}

importNav('nav');
importFooter('footer');
