window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#222';
  } else {
    navbar.style.backgroundColor = '#333';
  }
});

var menuItems = document.querySelectorAll('.navbar a');

menuItems.forEach(function(item) {
  item.addEventListener('mouseover', function() {
    this.style.color = '#FFD700';
  });

  item.addEventListener('mouseout', function() {
    this.style.color = '#fff';
  });

  item.addEventListener('click', function() {
    // Remove 'active' class from all menu items
    menuItems.forEach(function(item) {
      item.classList.remove('active');
    });

    // Add 'active' class to the clicked menu item
    this.classList.add('active');
  });
});
