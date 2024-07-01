## Frontend Mentor Challenge 15 - Blog Preview Card

This is my solution to the [Blog Preview Card](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS) challenge on [Frontend Mentor](https://www.frontendmentor.io/).

### Screenshots of the Solution (Desktop & Mobile). 🔍

![](./solution_screenshots/screenshot_desktop.jpeg)
![](./solution_screenshots/screenshot_mobile.jpeg)

#

### Links. 🔗

- Live Site URL: https://blog-preview-card-darkstarxdd.vercel.app/

#

### Built with. 🔨

- HTML.
- Tailwind.
- Vite.

#

### Features. ✨

- The requirements of the project stated that the font sizes need to slightly change with the screen size, but without using media queries. So I used the `clamp()` function on the font size.
  ```css
  .text-clamp-100 {
    font-size: clamp(0.75rem, 2vw, 0.875rem);
  }
  ```
- To make the whole card clickable, I used a pseudo element. I added the pseudo element to the `<a>` inside the `<h2>`. Then made the card component `position: relative`. Now when `top-0` `right-0` `bottom-0` `left-0` is given to the pseudo element, it will be same size as the card component.
- Added the hover effect to the card component. So when hoverd over the card the `box-shadow` will get slightly bigger.

#

### Testing and Accessibility. 🧪

- Used the Responsively App to check the site's appearance on various screen sizes, from 320x480 to 3000x2000.
- Set the browser font size on desktop to various values ranging from 9px to 56px to ensure everything on the site scales properly with the user's preferred browser font size.
- Zoomed the page in and out using Ctrl + Scroll wheel (up to 500%).
- Tested with the NVDA screen reader.
- Viewed the site on an iPhone 11.
- Performed Lighthouse and PageSpeed tests. ([PageSpeed Result.](https://pagespeed.web.dev/analysis/https-blog-preview-card-darkstarxdd-vercel-app/b5c8y1o65d?form_factor=mobile))

#

### New Things Learned. 🎓

- It's my first time using Tailwind, so had to learn how to setup a project with it.
- Using the the [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) VS Code plugin. It was super helpful since it shows the underlying CSS properties for each utility class.
- How to use the `tailwind.config.js` file to extend the default theme to include my own custom values.
- Using `@layer` to include my own classes.
- _When using pseudo elements, Tailwind will automatically add `content: ''` by default so you don’t have to specify it unless you want a different value._

#

### Ending Notes. 📝

- I am not entirely sure how much I like using Tailwind yet. This was only a very small project. I still enjoy creating all my classes and variables from scratch. Maybe on bigger projects Tailwind shows it's true power.

#

### Tools I Use. 🔧

- [Prettier VS Code Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatter.

- [Responsively.app](https://responsively.app/) - A free and open source tool that allows you to test your webpage on different screen sizes, take screenshots and much more.

- [Color Contrast Checker by coolors.co](https://coolors.co/contrast-checker/112a46-acc8e5) - Check color contrast ratios and if needed, update the colors to match the WCAG guidelines.

- [Google Webfonts Helper by Mario Ranftl](https://gwfh.mranftl.com/fonts) - Provides WOFF2 format for Google Fonts.

- [PerfectPixel by WellDoneCode](https://chromewebstore.google.com/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi) - A chrome extension that enables you to overlay an image, over a webpage. This makes it easier to spot any major differences between your result and the design.

#

- My Frontend Mentor Profile - [@DarkstarXDD](https://www.frontendmentor.io/profile/DarkstarXDD)
