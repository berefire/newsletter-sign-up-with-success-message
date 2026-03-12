# Frontend Mentor - Newsletter sign-up form with success message solution

![GitHub last commit](https://img.shields.io/github/last-commit/berefire/newsletter-sign-up-with-success-message)
![Repo size](https://img.shields.io/github/repo-size/berefire/newsletter-sign-up-with-success-message)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
[![Frontend Mentor](https://img.shields.io/badge/Frontend%20Mentor-3e54a3?style=for-the-badge&logo=frontendmentor&logoColor=white)](https://www.frontendmentor.io/)
[![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Visual Studio Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)
![Semantic HTML](https://img.shields.io/badge/Semantic%20HTML-ff9800?style=for-the-badge)
![Accessible](https://img.shields.io/badge/Accessibility-A11Y-0052cc?style=for-the-badge)
![Responsive Layout](https://img.shields.io/badge/Responsive%20Layout-Full%20Support-blue?style=for-the-badge)
![Mobile First](https://img.shields.io/badge/Mobile--First-Design-orange?style=for-the-badge)
[![Google Lighthouse](https://img.shields.io/badge/Lighthouse-Audit-00B0FF?style=for-the-badge&logo=lighthouse&logoColor=white)](./assets/downloads/lighthouse-performance-report.pdf)

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#-overview)
  - [The challenge](#-the-challenge)
  - [Screenshot](#-screenshot)
  - [Links](#-links)
- [My process](#️-my-process)
  - [Built with](#-built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#-continued-development)
  - [Useful resources](#-useful-resources)
  - [AI Collaboration](#-ai-collaboration)
- [Author](#-author)
- [Acknowledgments](#-acknowledgments)

## 📋 Overview

This project is a solution to the Newsletter sign-up form with success message challenge from Frontend Mentor.
The goal was to build an accessible and responsive newsletter subscription interface with form validation and a success confirmation state.

The project focuses on clean architecture, accessibility best practices, and modular JavaScript while following a mobile-first responsive approach.

---

### 🎯 The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

---

### 📸 Screenshot

#### Mobile (375x914)

| _Default_ | _Active_ | _Error_ |
| -------------------------- | ------------------------- | ------------------------ |
| ![Mobile](./public/assets/screenshots/mobile.png) | ![Mobile Active](./public/assets/screenshots/mobile-active.png) | ![Mobile Error](/public/assets/screenshots/mobile-error.png) |

| _Success Message_ | _Success Message Active_ |
| ------------------ | ------------------------ |
| ![Mobile Success Message](./public/assets/screenshots/mobile-sucess.png) | ![Mobile Success Message Active](./public/assets/screenshots/mobile-success-active.png) |

#### Tablet (768x914)

| _Default_ | _Active_ | _Error_ |
| -------------------------- | ------------------------- | ------------------------ |
| ![Tablet](./public/assets/screenshots/tablet.png) | ![Tablet Active](./public/assets/screenshots/tablet-active.png) | ![Tablet Error](/public/assets/screenshots/tablet-error.png) |

| _Success Message_ | _Success Message Active_ |
| ------------------ | ------------------------ |
| ![Tablet Success Message](./public/assets/screenshots/tablet-success-message.png) | ![Tablet Success Message Active](./public/assets/screenshots/tablet-success-message-active.png) |

#### Desktop (1024x914)

| _Default_ | _Active_ | _Error_ |
| -------------------------- | ------------------------- | ------------------------ |
| ![Desktop](./public/assets/screenshots/desktop.png) | ![Desktop Active](./public/assets/screenshots/desktop-active.png) | ![Desktop Error](/public/assets/screenshots/Desktop-error.png) |

| _Success Message_ | _Success Message Active_ |
| ------------------ | ------------------------ |
| ![Desktop Success Message](./public/assets/screenshots/desktop-success-message.png) | ![Desktop Success Message Active](./public/assets/screenshots/desktop-success-message-active.png) |

---

### 🔗 Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://berefire.github.io/newsletter-sign-up-with-success-message/](https://berefire.github.io/newsletter-sign-up-with-success-message/)

---

## ⚙️ My Process

### 🛠 Built With

- Semantic HTML5 markup
- CSS custom properties
- **CUBE CSS architecture**
- Mobile-first workflow
- **Vainilla JavaScript (ES Modules)**
- **Vite** for development and build tooling
- Accessible form validation
- CSS animations and transitions

---

### What I learned

While working on this project I improved my understanding of several important frontend concepts:

#### Modular JavaScript architecture

I separated responsibilities into different modules:

- validation logic
- UI state handling
- application initialization

This improved maintainability and code clarity.

#### Accessible form validation

I implemented several accessibility improvements:

- `aria-invalid` for invalid inputs
- `aria-live` for error announcements
- keyboard focus management
- semantic HTML labels and input associations

#### Responsive layout design

Using a mobile-first approach allowed the layout to adapt naturally between mobile and desktop. The desktop layout centers the card while the mobile layout allows the form to occupy the full viewport.

#### Animation with accessibility considerations

UI animations were implemented while respecting users who prefer reduced motion using the **prefers-reduced-motion** media query.

---

### 🚀 Continued development

In future projects I would like to further improve:

- advanced form validation patterns
- improved state management patterns in vanilla JavaScript
- deeper accessibility testing with screen readers
- performance optimization for interactive components

I also plan to continue refining my CSS architecture and component-based styling approaches.

---

### 📖 Useful resources

- [MDN Web Docs](https://developer.mozilla.org/es/) - excellent reference for HTML, CSS, and JavaScript
- [WebAIM](https://webaim.org/) - accessibility guidelines and contrast checking
- [Frontend Mentor](https://www.frontendmentor.io) - real-world frontend challenges and design files

---

### 🤖 AI Collaboration

AI tools were used during this project as development assistants to support problem-solving and improve code quality.

#### Tools used

- **ChatGPT** – for explanations, debugging support, and reviewing accessibility improvements.

#### How AI was used

AI was primarily used to:

- Review and improve accessibility practices (ARIA attributes, focus management, keyboard navigation).
- Suggest improvements to CSS architecture and layout patterns.
- Assist in writing and refining project documentation.
- Brainstorm solutions for specific issues such as GitHub Pages deployment and responsive layout adjustments.

#### What worked well

AI was particularly useful for:

- Identifying accessibility improvements that might otherwise be overlooked.
- Suggesting cleaner architectural patterns for organizing JavaScript modules.
- Speeding up documentation and explanations of best practices.

#### What didn't work as expected

Some suggestions required manual adjustments or verification, especially when related to project-specific implementation details.
All AI-generated suggestions were reviewed and adapted to ensure the final code remained clear, maintainable, and fully understood.

---

## 👤 Author

- Frontend Mentor - [@berefire](https://www.frontendmentor.io/profile/berefire)
- GitHub - [@berefire](https://github.com/berefire)

---

## 🙏 Acknowledgments

Thanks to Frontend Mentor for providing practical challenges that help developers improve real-world frontend skills.

---
