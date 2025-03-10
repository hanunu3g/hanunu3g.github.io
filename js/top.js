const scrollPrevent = e => {
    e.preventDefault();
}

document.addEventListener('wheel', scrollPrevent, { passive: false });
document.addEventListener('touchmove', scrollPrevent, { passive: false });

window.setTimeout(() => {
    document.removeEventListener('wheel', scrollPrevent, { passive: false });
    document.removeEventListener('touchmove', scrollPrevent, { passive: false });
}, 5000);
