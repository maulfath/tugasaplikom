
function showSection(sectionId) {
    
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        const onclickValue = link.getAttribute('onclick');
        if (onclickValue && onclickValue.includes(`'${sectionId}'`)) {
            link.classList.add('active');
        }
    });   

}


document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});
