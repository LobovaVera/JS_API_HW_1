// Задание 3.
// Необходимо создать страницу со списком статей.
// Каждая статья состоит из id, заголовка, текста статьи.
// id - будем брать из unix timestamp.
// Необходимо подготовить список статей в JSON-формате,
// которые будут выводиться на странице при первом ее 
// открытии.
// Необходимо реализовать возможность удаления статьи.
// Необходимо реализовать возможность добавления статьи.
// Необходимо реализовать возможность изменения статьи,
// ввод данных можно реализовать через prompt.
// Статьи должны сохраняться в локальное хранилище 
// браузера, и должны быть доступны после перезагрузки 
// страницы.

// let initialNewsList = JSON.stringify([
//     {
//         id: Date.now(), 
//         title: "title1", 
//         text: "text1"
//     },
//     {
//         id: Date.now(), 
//         title: "title2", 
//         text: "text2"
//     }

// ]);
const lsKey = 'articles';
const initialJson = 
'[{"id":1709639202543,"title":"title1","text":"text1"},{"id":1709639202545,"title":"title2","text":"text2"},{"id":1709639202546,"title":"title3","text":"text3"}]';

if(!localStorage.getItem(lsKey)){
localStorage.setItem(lsKey, initialJson);
}
const articles = JSON.parse(localStorage.getItem(lsKey));

function createArticleHTML(article){
  
    return `<li>
                <h2>${article.title}</h2>
                <p>${article.text}</p>
            </li>`;  
}

const ulList = articles.map(createArticleHTML).join('');
const newsBox = document.querySelector('.news');
newsBox.innerHTML = ulList;