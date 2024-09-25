
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
        // Menghapus kelas 'active' dari semua link
        link.classList.remove('active');
        // Mendapatkan nilai 'onclick' dari link
        const onclickValue = link.getAttribute('onclick');
        if (onclickValue && onclickValue.includes(`'${sectionId}'`)) {
            // Menambahkan kelas 'active' pada link yang sesuai
            link.classList.add('active');
        }
    });   

}


document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});
