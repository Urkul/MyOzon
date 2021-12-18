const cart = () => {
    const cartBtn = document.getElementById('cart');
    const cartModal = document.querySelector('.cart'); // обращение к классу
    const cartCloseBtn = cartModal.querySelector('.cart-close'); // обращение к кнопке закрытия модального окна

    // функция открытия модального окна путем изменения свойства
    const openCart = () => {
        cartModal.style.display = 'flex';
    };

    // функция закрытия модальногго окна
    const closeCart = () => {
        cartModal.style.display = '';
    };

    // вывод модального окна
    // cartBtn.onclick = openCart;
    cartBtn.addEventListener('click', openCart);

    // закрытие модального окна
    // cartCloseBtn.onclick = closeCart;
    cartCloseBtn.addEventListener('click', closeCart);

    // console.dir(cartBtn); // вывод всех свойств обьекта
};

export default cart;