'use strict';

var data = [
    {
        id: 'box1',
        title: 'First box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted', 'special-header', 'important']
    },
    {
        id: 'box2',
        title: 'Second box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['special-header', 'important']
    },
    {
        id: 'box3',
        title: 'Third box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted', 'important']
    },
    {
        id: 'box4',
        title: 'Fourth box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted']
    },
    {
        id: 'box5',
        title: 'Fifth box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: []
    },
];

const createDiv = () => {
    for (let i = 0; i < data.length; i++) {
        let newBox = document.createElement("div");
        newBox.setAttribute("id", data[i].id);
        const {categories} = data[i];
        for (let j =0; j<categories.length; j++) {
            newBox.classList.add(categories[j]);
        }
        const headerBox = document.createElement("h1");
        headerBox.innerText = data[i].title;
        newBox.appendChild(headerBox);
        newBox.innerHTML = newBox.innerHTML + data[i].content;
        document.body.appendChild(newBox);
    }
};
createDiv();
