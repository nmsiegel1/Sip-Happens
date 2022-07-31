// allows the user to login
async function loginFormHandler(event) {
  event.preventDefault();

  // remember these are ids
  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('You must be logged in to access this page');
    }
  }
}

// remember these are ids

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
