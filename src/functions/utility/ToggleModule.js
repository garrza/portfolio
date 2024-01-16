export const ToggleModule = {
  calculateSettingAsThemeString: ({ localStorageTheme, systemSettingDark }) => {
    if (localStorageTheme !== null) {
      return localStorageTheme;
    }

    if (systemSettingDark.matches) {
      return "dark";
    }

    return "light";
  },

  updateButton: ({ buttonEl, isDark }) => {
    const newCta = isDark ? "Change to light theme" : "Change to dark theme";
    buttonEl.setAttribute("aria-label", newCta);
    buttonEl.innerText = newCta;
  },

  updateThemeOnHtmlEl: ({ theme }) => {
    document.querySelector("html").setAttribute("data-theme", theme);
  },

  initThemeToggle: () => {
    const button = document.querySelector("[data-theme-toggle]");
    const localStorageTheme = localStorage.getItem("theme");
    const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

    let currentThemeSetting = ToggleModule.calculateSettingAsThemeString({
      localStorageTheme,
      systemSettingDark,
    });

    ToggleModule.updateButton({
      buttonEl: button,
      isDark: currentThemeSetting === "dark",
    });
    ToggleModule.updateThemeOnHtmlEl({ theme: currentThemeSetting });

    button.addEventListener("click", (event) => {
      const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

      localStorage.setItem("theme", newTheme);
      ToggleModule.updateButton({
        buttonEl: button,
        isDark: newTheme === "dark",
      });
      ToggleModule.updateThemeOnHtmlEl({ theme: newTheme });

      currentThemeSetting = newTheme;
    });
  },
};

export default ToggleModule;
