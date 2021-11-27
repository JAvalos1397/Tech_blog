async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('#post_title"]').value;
  const content = document.querySelector('#post_content"]').value;

  console.log("=========================================",content)

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('.create_post_form').addEventListener('submit', newFormHandler);