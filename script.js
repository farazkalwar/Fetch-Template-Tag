const template = document.querySelector('#item-temp')
const tableBody = document.querySelector('#table-body')

fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(albums => {
        albums.forEach(album => {
            const item = template.content.cloneNode(true)
            item.querySelector('#album-id').innerText = album.id
            item.querySelector('#album-title').innerText = album.title
            tableBody.append(item)
        });
    })