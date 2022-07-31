// allows the user to logout
async function logout() {
  console.log('clicked');
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Unable to log out!');
  }
}

// remember these are ids
document.querySelector('#logout').addEventListener('click', logout);
