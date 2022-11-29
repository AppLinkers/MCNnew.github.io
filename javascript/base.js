async function fetchAsText(url) {
    return await (await fetch(url)).text();
}

async function importNav(targetDiv) {
    document.querySelector('#' + targetDiv).innerHTML = await fetchAsText("../html/nav.html");
}

async function importFooter(targetDiv) {
    document.querySelector('#' + targetDiv).innerHTML = await fetchAsText("../html/footer.html");
}

async function importFloatingBtn(targetDiv) {
    document.querySelector('#' + targetDiv).innerHTML = await fetchAsText("../html/floating_btn.html");
}



importNav('nav');
importFooter('footer');
importFloatingBtn('floatingBtn');
