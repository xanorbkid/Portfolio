const express = require('express');
const app =express();
const path = require('path');

// Serve static files from the 'template' and 'assets' directories
app.use(express.static(path.join(__dirname, 'templates')));
app.use(express.static(path.join(__dirname, 'assets')));

  // Home page
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates',  'index.html'));
    // res.send('Welcome to my portfolio!');
  });
  
  // Projects page
  app.get('/projects', (req, res) => {
    res.send('Check out my projects!');
  });
  
  // About page
  app.get('/about', (req, res) => {
    res.send('Learn about me!');
  });
  
  // Contact page
  app.get('/contact', (req, res) => {
    res.send('Get in touch!');
  });


// app.listen(4000, () =>{
//     console.log('listening to port 4000')
// })

// Start the server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });