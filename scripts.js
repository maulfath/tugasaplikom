
function showSection(sectionId) {
    
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});
