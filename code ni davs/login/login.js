document.querySelector('form').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      if(username && password) {
        // In a real application, you would send this data to a server
        alert('Login successful! Redirecting...');
        // window.location.href = 'dashboard.html'; // Redirect to dashboard
      } else {
        alert('Please fill in all fields');
      }
    });
