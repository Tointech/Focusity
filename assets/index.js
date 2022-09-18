function toggle() {
    var main = document.getElementsByClassName('main');
    main[0].classList.toggle('blur');

    var popup = document.getElementsByClassName('popup');
    popup.classList.toggle('active');
}