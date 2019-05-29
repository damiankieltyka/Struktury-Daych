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

let createBox;
let addData;
let runStyles;
let bElements;
const body = document.getElementById('body');
const highlighted = 'highlighted';
const special_header = 'special-header';
const imp = 'important';

createBox = () => {
    for (let i = 0; i < 5; i++) {
        let box = '<div class="box"><div class="header"></div><div class="box-content"></div></div>';
        body.innerHTML = box + body.innerHTML;
    }
};

addData = () => {
    for (let i = 0; i < 5; i++) {
        let dataObj = data[i];
        let header = document.querySelectorAll('.header')[i];
        let content = document.querySelectorAll('.box-content')[i];
        bElements = document.querySelectorAll('.box')[i];
        bElements.id = dataObj.id;
        header.innerHTML = dataObj.title;
        content.innerHTML = dataObj.content;
    }
};

runStyles = () => {
    for (let i = 0; i < 5; i++) {
        bElements = document.querySelectorAll('.box')[i];
        let bHeader = document.querySelectorAll('.header')[i];
        if (data[i].categories.includes(highlighted)) {
            bElements.className += " highlighted";
        }
        if (data[i].categories.includes(imp)) {
            bElements.className += " important";
        }
        if (data[i].categories.includes(special_header)) {
            bHeader.className += " special-header";
        }
    }
};

createBox();
addData();
runStyles();