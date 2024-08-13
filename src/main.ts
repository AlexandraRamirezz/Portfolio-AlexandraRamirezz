import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  document.addEventListener("DOMContentLoaded", () => {
    const theme = document.getElementById("theme") as HTMLImageElement | null;
    
    if (theme) {
      theme.onclick = () => {
        document.body.classList.toggle("white-theme");
        if (document.body.classList.contains("white-theme"))  {
          theme.src = "./assets/images/sun.png";
        } else {
          theme.src = "./assets/images/moon.png";
        }
      };
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const languagesElement = document.getElementById("languages") as HTMLElement | null;
    const textsToChange = document.querySelectorAll("[data-section]") as NodeListOf<HTMLElement>;
    
    const changeLanguage = async (language: string) => {
      const requestJson = await fetch(`./assets/languages/${language}.json`);
      const texts = await requestJson.json();
      
      Array.from(textsToChange).forEach((textToChange) => {
        const section = textToChange.dataset['section'];
        const value = textToChange.dataset['value'];
        if (section && value) {
          textToChange.innerHTML = texts[section][value];
        }
      });
      const languageItems = document.querySelectorAll('.languages-item');
      languageItems.forEach((item) => {
        const element = item as HTMLElement;
        element.classList.remove('active');
        if (element.dataset['language'] === language) {
          element.classList.add('active');
        }
      });
    };
    
    const setDefaultLanguage = async () => {
      const defaultLanguage = 'es';
      await changeLanguage(defaultLanguage);
    };
    
    if (languagesElement) {
      languagesElement.addEventListener("click", (e: Event) => {
        const target = e.target as HTMLElement;
        const language = target.dataset['language'] || target.parentElement?.dataset['language'];
        if (language) {
          changeLanguage(language);
        }
      });
      setDefaultLanguage();
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const emailIcon = document.getElementById('email-icon') as HTMLElement | null;
    const copyMessage = document.getElementById('copy-message') as HTMLElement | null;
    const email = 'ramirezdiazalexandrad@gmail.com';
    
    if (emailIcon && copyMessage) {
      emailIcon.addEventListener('click', () => {
        navigator.clipboard.writeText(email).then(() => {
          copyMessage.style.display = 'block';
          setTimeout(() => {
            copyMessage.style.display = 'none';
          }, 2000);
        }, (err) => {
          console.error('Could not copy text: ', err);
        });
      });
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const closeMenu = document.getElementById('close-menu');
    const navbar = document.getElementById('navbar');
    
    function toggleMenu() {
      if (window.innerWidth <= 860) {
        if (navbar && hamburgerMenu && closeMenu) {
          hamburgerMenu.addEventListener('click', function () {
            navbar.style.display = 'flex';
            hamburgerMenu.style.display = 'none';
            closeMenu.style.display = 'flex';
          });
          closeMenu.addEventListener('click', function () {
            navbar.style.display = 'none';
            closeMenu.style.display = 'none';
            hamburgerMenu.style.display = 'flex';
          });
        }
      } else {
        if (navbar && hamburgerMenu && closeMenu) {
          navbar.style.display = 'flex';
          hamburgerMenu.style.display = 'none';
          closeMenu.style.display = 'none';
        }
      }
    }
    window.addEventListener('resize', toggleMenu);
    toggleMenu();
  });