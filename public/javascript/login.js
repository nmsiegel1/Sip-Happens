// allows the user to login
async function loginFormHandler(event) {
  event.preventDefault();

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
      alert('No user was found with that login information, please sign up!');
    }
  }
}

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
