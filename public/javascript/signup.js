// allows the user to create user
async function signupFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#signup-email').value.trim();
  const password = document.querySelector('#signup-password').value.trim();
  const username = document.querySelector('#signup-username').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Unable to signup!');
    }
  }
}

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
