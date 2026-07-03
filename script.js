// 1. Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Mobile Menu Toggle Logic
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const icon = btn.querySelector('i');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    if (menu.classList.contains('hidden')) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    }
});

// Close mobile menu on link click
const mobileLinks = menu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});

// 3. Menu Tabs Logic
function openTab(event, tabId) {
    // Hide all tabs
    const categories = document.querySelectorAll('.menu-category');
    categories.forEach(cat => cat.classList.remove('active'));
    
    // Remove active state from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab
    document.getElementById(tabId).classList.add('active');
    
    // Highlight selected button
    event.currentTarget.classList.add('active');
}