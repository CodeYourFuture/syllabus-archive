# Possible solutions to class exercises:

``js
document.querySelector('#donateBike').addEventListener('click', donateClicked)

function donateClicked() {
    var jumbotron = document.querySelector('.jumbotron');
    //for exercise 1:
    // alert("Thank you for donating!");
    //for exercise 2:
    // jumbotron.style.backgroundColor = "red";

    //for exercise 3:
    jumbotron.className += " red";
}

document.querySelector('#addToLearnMore').addEventListener('click', addToLearnMore);

function addToLearnMore() {
    var firstArticle = document.querySelector('article');
    var newParagraph = document.createElement('p');
    newParagraph.innerText = "hello!!!";
    firstArticle.appendChild(newParagraph);
}

document.querySelector('#allImages').addEventListener('click', increaseAllImages);

function increaseAllImages() {
    var images = document.querySelectorAll('img');
    for (var image of images) {
        image.width -= 10;
        image.height -= 10;
    }
}

document.querySelector('#addArticleBtn').addEventListener('click', addOnSide);

function addOnSide() {
    
    var addArticleBox = document.querySelector('.addArticle');
    var articleContainer = document.querySelector('#mainArticles');

    var newParagraph = document.createElement('p');
    newParagraph.innerText = addArticleBox.value;
    var newArticle = document.createElement('article');
    newArticle.className = 'article';
    newArticle.appendChild(newParagraph);

    articleContainer.appendChild(newArticle);
}
```