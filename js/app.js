document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

 const form = document.querySelector('#new-item-form');

 const handleFormSubmit = function(evt) {
   evt.preventDefault();

   const newItem = document.createElement('p');
    newItem.textContent = `${evt.target.title.value} ${evt.target.author.value} ${evt.target.category.value}`
    newItem.classList.add('book')
    console.log(newItem);

  const readingListDiv = document.querySelector('#reading-list');
    readingListDiv.appendChild(newItem);

  form.reset()
}
  form.addEventListener('submit', handleFormSubmit);

  const deleteAll = document.querySelector('#delete-button');

  const handleDeleteButton = function(evt) {

    // const readingListDiv = document.querySelector('#reading-list');
    //   readingListDiv.removeChild('p.book');
    const readingListDiv = document.querySelector('#reading-list');
    readingListDiv.innerHTML = ''
      // readingListDiv.parentNode.removeChild(readingListDiv);

  }

  deleteAll.addEventListener('click', handleDeleteButton);

});
