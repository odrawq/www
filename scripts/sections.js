const _sections = document.querySelectorAll("#main > div");

export function switchSection(targetSection)
{
    _sections.forEach(section =>
    {
        section.style.display = section.id === targetSection ? "block" : "none";
    });
}

_sections.forEach(section =>
{
    section.style.display = "none";
});

document.getElementById(document.querySelector(".active-tab").dataset.tab).style.display = "block";
