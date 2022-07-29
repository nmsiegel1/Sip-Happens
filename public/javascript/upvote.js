async function upvoteClickHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch('/api/wine/upvote', {
    method: 'PUT',
    body: JSON.stringify({
      wine_id: id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert('You can only vote on each pairing once!');
  }
}

document
  .querySelector('#upvote-btn')
  .addEventListener('click', upvoteClickHandler);
