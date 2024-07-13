function displayElement(id)
{
    document.getElementById(id).style.display = "block";
}

function hideElement(id)
{
    document.getElementById(id).style.display = "none";
}


function toggleContent(button) {
    const contentId = button.getAttribute("toggle-content");
    const contentElement = document.getElementById(contentId);
    const isCurrentlyVisible = contentElement.style.display === "block";
    
    if (isCurrentlyVisible) {
        hideElement(contentId);
    } else {
        displayElement(contentId);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('input[type="checkbox"][toggle-content]').forEach(checkbox => {
        toggleContent(checkbox);
    });
});