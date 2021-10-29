'use strict';

window.addEventListener('load', function () {
    async function sendRequest () {
        const url = 'http://jsonplaceholder.typicode.com/users';
        const response = await fetch(url);
    
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Ошибка: ${response.status}`);
        }
    };
    
    function randInt(max, min) {
        return ((min | 0) + Math.random() * (max + 1)) | 0;
    }

    function remRandom(arr, newLength) {
        var a = arr.slice();
        while (a.length > newLength) a.splice(randInt(a.length - 1), 1);
        return a;
    }
    
    sendRequest().then(users => {
        const app = document.querySelector('.app');
        const ul = document.createElement('ul');
        const newUsers = remRandom(users, 8);
        
        ul.innerHTML = newUsers.map((user) => {
            return  `
                <li>
                    <div>Имя: ${user.name} ${user.username}</div>
                </li>
            `;
        });

        console.log(newUsers);
        app.append(ul);
    });
});
