document.addEventListener('keydown', event => {
    event.preventDefault();
    document.getElementById('instruction').innerHTML = '';
    document.getElementById('keycode').innerHTML = event.keyCode | event.which;
    document.getElementById('code').innerHTML = event.code;
    document.getElementById('key').innerHTML = event.key;
    document.getElementById('location').innerHTML = event.location;
    document.getElementById('more-info').style.display = 'flex';
});