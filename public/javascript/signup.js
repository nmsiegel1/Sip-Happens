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
      // we don't have a dashboard so it will just go to the pairings
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

// remember these are ids
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
