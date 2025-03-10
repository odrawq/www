export function switchTab(targetSection)
{
    document.querySelectorAll("#menu > span").forEach(tab =>
    {
        const isActiveTab = tab.dataset.tab === targetSection;

        tab.classList.toggle("active-tab", isActiveTab);
        tab.classList.toggle("inactive-tab", !isActiveTab);
    });
}
