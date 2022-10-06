let p = document.querySelector('p');

document.querySelector('.replace-btn').addEventListener('click', () => {
    p.textContent = p.textContent.replace(/\B'|'\B/g, `"`)
})