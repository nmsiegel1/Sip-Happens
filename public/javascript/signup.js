async function signupFormHandler(event) {
  event.preventDefault();

  // remember these are ids

  const email = document.querySelector('.sign-up-email').value.trim();
  const password = document.querySelector('.sign-up-password').value.trim();

  if (email && password) {

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
      document.location.replace('/pairings');
    } else {
      alert(response.statusText);
    }
  }
}

// remember these are ids
document.querySelector('.sign-up-form').addEventListener('submit', signupFormHandler);
