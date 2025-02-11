# OliveCMS Theme

Welcome to the OliveCMS Theme repository, a sleek and modern skin for [OrchardCore](https://orchardcore.net/) crafted with care by [PUXdesign](https://www.puxdesign.cz/en/contact). Our mission was to revamp the administration interface of OrchardCore CMS with a look that not only unifies aesthetic elements but also enhances clarity and distinction between different concepts at first glance.

We paid a lot of attention to nested widget sections, so make sure to try that too - just create a widget with a flow inside.

## See Olive theme on Olive

For a visual look-and-feel, visit our OrchardCore dedicated website -> [Olive by PUXdesign](https://olive.puxdesign.cz/en/for-developers/olive-theme)

## Features

* **Modernization:** Upgrades the OrchardCore CMS visual layer to meet UI standards.
* **Clarity and Consistency:** Offers a clean and coherent design that retains the full structure of the original admin theme. There is **no change** in admin HTML structure.
* **Bootstrap Foundation:** Technically built upon the solid base of Bootstrap, this theme utilizes bootstrap, while adding new or modifying existing styles to provide desired feel.
* **Easy integration:** Installable via NuGet package or by simply downloading the repository with styles already built. As other OrchardCore themes, it provides straightforward activation within the admin Theme section.

## Using the Theme

To quickly integrate OliveCMS Theme into your OrchardCore CMS:

1. **Via NuGet Package:**
   - Add the package to your project and activate the theme in the admin.
   - ``dotnet add package PuxOrchard.Theme.OliveCMS``

2. **Cloning the Repository:**
   - Clone this repository, add references to your project, and activate the theme in the admin dashboard.
   - Alternatively, you can clone and utilize the styles in your own custom admin theme.
  
## Supported versions of OrchardCore
- it was created on 1.8.4 version of OrchardCore
- then it was ported and adapted to support 2.1.5 version of OrchardCore
- it should be backwards compatible with version > 1.8.3 - 2.1.5
- you may need to build the theme on your own, in case nuget for your version is not available

## Disclaimer
If you will start using OliveCMS Theme, keep in mind, that we primarily use this theme on our own projects. That means, it is designed to work with all our custom modules, that may interfere with standard CMS interface. Therefore, there may be visual bugs in some sections, that we do not use or we have modified in our custom modules. 

If you encounter a bug, feel free to create an issue.

## Build Instructions

If you choose to work with the repository, follow these steps to build the theme:

1. Ensure you have Node.js version 20 installed.
2. Open your terminal or command line interface.
3. Navigate to the theme root directory.
4. Run the following commands:
```
npm install         # Install dependencies
npm run build       # Compile the theme for production
npm run dev         # Run the theme for development
```

## Technologies & Frameworks

OliveCMS Theme uses the following tools:

* **[Bootstrap 5](https://getbootstrap.com/)** - For responsive design and familiar UI components (MIT License).
* **[Coolicons](https://github.com/krystonschwarze/coolicons)** - For crisp, expressive icons enriching the UI experience (CC 4.0 License).
* **[OpenSans](https://fonts.google.com/specimen/Open+Sans)** - For clear and legible typography (SIL License).

## Roadmap
* Dark theme support
* Revamp other admin sections - templates, shortcodes, content definitions, settings
* RTL support

## License

The theme itself adheres to the permissive BSD-3-Clause License, ensuring compatibility with a wide array of projects and maintaining openness for developers and businesses alike.

## Feedback and Contribution

Your thoughts and contributions are pivotal to the continuous evolution of OliveCMS Theme. Feel free to raise issues, propose changes, and submit pull requests. Together, let's shape the face of admin interfaces for the better.

---

Brought to you by the passion-infused folks at [PUXdesign](https://www.puxdesign.cz/en/contact) — where beauty meets functionality.

[⭐ Star us on GitHub](https://github.com/puxdesign/PuxOrchard.Theme.OliveCMS) — every star makes us more motivated!
