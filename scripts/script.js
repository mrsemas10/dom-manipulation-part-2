//Part 1: Getting Started

//step 1
const mainEl = document.querySelector('main');
console.log(mainEl);

//step 2
mainEl.style.backgroundColor = 'var(--main-bg)';
//let backGroundColor = 'var(--main-bg)'

//step 3
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

//step 4
mainEl.classList = 'flex-ctr'; 

// Part 2: Creating a Menu Bar
 
//step 1
const topmenuEl = document.getElementById('top-menu');
console.log(topmenuEl);

// step 2
topmenuEl.style.height = ('100%');

// step 3
topmenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//step 4 
topmenuEl.classList = 'flex-around';

//Part 3

// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];


//step 1 
menuLinks.forEach(function(link) {

//step 2
let linkEl = document.createElement('a');
    
//step 3
    linkEl.setAttribute('href', link.href)
    
//step 4 
    linkEl.textContent = link.text;

    //step 5 
    topmenuEl.appendChild(linkEl);
});


// Part 1. Getting Started (part 3 from Lab 1)

// Menu data structure
// var menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
//   ];

// //step 1
// const mainEl = document.querySelector('main');
// console.log(mainEl);
// //step 2
// mainEl.style.backgroundColor = 'var(--main-bg)'
// //let backGroundColor = 'var(--main-bg)'
// //step 3 
// mainEl.innerHTML = '<h1>DOM Manipulation</h1>'
// //step 4 
// mainEl.classList = 'flex-ctr';

// Part 2: Adding Additional HTML and CSS
    // done on index.html and style.css


// Part 3: Creating the Submenu 

//step 1 
const subMenuEl = document.getElementById ('sub-menu');
console.log(subMenuEl);

//step 2
subMenuEl.style.height = ('100%');

//step 3 
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

//step 4
subMenuEl.classList = 'flex-around';

//step 1a 
subMenuEl.style.position = 'absolute';

//step 2a 
subMenuEl.style.top = '0';

// Part 4: Adding Menu Interaction
var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
];

// step 1
const topMenuLinks = topmenuEl.querySelector('a');
console.log(topMenuLinks);

// step 2
topmenuEl.addEventListener("click", onClick);

function onClick(evt) {
    evt.preventDefault();
    if ('a' === false) {
        return;
    }
    console.log('a');
}

// step 1a: I am very frustrated as i am reading the words but nothing is coming to mind 
// what I am supposed to do. i have no idea where i am supposed to go from here. even
// after reading the lesson and the notes from the code alongs several times...
// none of this makes any sense to me :( i even tried to google the answer and it is just not clicking
// on what i am supposed to do here



// Part 5: Adding Submenu Interaction

