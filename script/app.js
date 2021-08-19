function CopyFunction(item) {
    var id = item.previousElementSibling.id

    const copyId = document.getElementById(`${id}`);
    const newCont = copyId.innerText;

    const shadowCont = document.createElement('textarea');
    shadowCont.value = newCont;
    shadowCont.setAttribute('readonly', '');
    document.body.appendChild(shadowCont);
    shadowCont.select();
    document.execCommand('copy');
    document.body.removeChild(shadowCont);
    
    //Create Span
    var newSpan = document.createElement("span");
    newSpan.classList = "successCopy";
    newSpan.innerText = '¡Copied!';

    document.body.appendChild(newSpan);

    //Style

    copyId.classList.add("bgCopyId");
    setTimeout(() => {
        copyId.classList.remove("bgCopyId");

        //Remove Span
        document.body.removeChild(document.body.lastChild); 

    }, 1000);
}
