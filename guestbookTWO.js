const list = document.querySelector('.container ul');

//Add a to do 
const addForm = document.forms['commentForm'];

//Function on the submit button
addForm.addEventListener('submit', function (e) {

    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value
    const bio = document.getElementById('bio').value

    //Create element 
    const li = document.createElement('li');
    const commentName = document.createElement('span');
    const bioComment = document.createElement('span');

    //add content to span-tags
    commentName.textContent = value;
    bioComment.textContent = value;

    //add classes
    commentName.classList.add('commentName');
    bioComment.classList.add('commentText');


    //append to document (orders matter here!)
    li.appendChild(commentName);
    li.appendChild(bioComment);
    list.appendChild(li)

});