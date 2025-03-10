import { switchSection } from "./sections.js";
import { switchTab } from "./tabs.js";

export function initEvents()
{
    document.querySelectorAll("[data-tab]").forEach(element =>
    {
        element.addEventListener("click", () =>
        {
            switchSection(element.dataset.tab);
            switchTab(element.dataset.tab);
        });
    });
}
