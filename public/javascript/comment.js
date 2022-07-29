async function commentFormHandler(event) {
  event.preventDefault();

  const wine_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const comment_text = document.querySelector(
    'textarea[name="write-comment"]'
  ).value;

  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        wine_id,
        comment_text,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('#comment-button')
  .addEventListener('submit', commentFormHandler);
