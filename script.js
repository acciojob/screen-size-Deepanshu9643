function Size() {
    const width = window.innerWidth;  
    const height = window.innerHeight; 

    const sizeInfo = document.querySelector('#sizeInfo').querySelector('h1'); //  we just change h1 and textcontent will be shown
    sizeInfo.textContent = `Width: ${width} and Height: ${height}`;  //when page load we see h1 and whem resize page we see sizeinfo
}

window.addEventListener('resize', Size);

Size();
