const getData = () => {
    // получение данных с сервера с помощью JSONPlaceholder
    return fetch('https://test-35245-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json();
        });
};

export default getData;