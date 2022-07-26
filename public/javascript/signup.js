async function signupFormHandler(event) {
  event.preventDefault();

  // remember these are ids
  const email = document.querySelector('#exampleInputEmail1').value.trim();
  const password = document.querySelector('#exampleInputPassword1').value.trim();
  const remember = document.querySelector('#exampleCheck1');

  if (email && password && remember) {
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
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}

// remember these are ids
document.querySelector('#login-form').addEventListener('submit', signupFormHandler);
