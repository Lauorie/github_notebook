function addNoteButton() {
    const starButton = document.querySelector('.js-toggler-target.starred');
    if (starButton && !document.querySelector('.note-button')) {
      const noteButton = document.createElement('button');
      noteButton.className = 'note-button';
      noteButton.textContent = 'Add Note';
      noteButton.addEventListener('click', openNoteDialog);
      starButton.parentNode.insertBefore(noteButton, starButton.nextSibling);
    }
  }
  
  function openNoteDialog() {
    const repoName = document.querySelector('.repo-header .mr-2').textContent.trim();
    const note = prompt('Enter a note for this repository:');
    
    if (note !== null) {
      localStorage.setItem(`note_${repoName}`, note);
      alert('Note saved!');
    }
  }
  
  // Run function when the page loads
  addNoteButton();
  
  // Observe for changes in the DOM (for single-page app navigation)
  const observer = new MutationObserver(addNoteButton);
  observer.observe(document.body, { childList: true, subtree: true });