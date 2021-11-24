async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector("#name_signup").value.trim();
    const email = document.querySelector("#email_signup").value.trim();
    const password = document.querySelector("#password_signup").value.trim();
  
    if (username && email && password) {
      const response = await fetch("/api/users", {
        method: "post",
        body: JSON.stringify({
          username,
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      // check the response status
      if (response.ok) {
        console.log("success");
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
    }
  }
  
document.querySelector('#signup_btn').addEventListener('click', signupFormHandler);
