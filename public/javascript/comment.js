const commentFormHandler = async function (event) {
  event.preventDefault();

  const body = document.querySelector(
    'textarea[name="comment-input-text"]'
  ).value;
  const wine_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (body) {
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        wine_id,
        body,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    document.location.reload();
  }
};

document
  .querySelector('.comment-input')
  .addEventListener('submit', commentFormHandler);
