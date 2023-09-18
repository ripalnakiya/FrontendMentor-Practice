# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Links

- [Solution URL](https://github.com/ripalnakiya/NFT-Preview-Card-Component.git)
- [Live Site URL](https://ripalnakiya.github.io/NFT-Preview-Card-Component/)

## My process

### Built with

- Flexbox

### What I learned

By using flexbox , almost everything was simple to align.

The only difficulty I came across was making the image hover animation , At first I though it would require use of 'transition' or 'animation' property of CSS but when I went through other's code , the concept was really very simple.

The idea is , have a background color 'cyan' and then reduce the opacity of the Equilibrium image when hovered over!

Yeah but still you can add transition to make it smoother.

Have a look at the code snippet below:

```html
<div class="images">
  <img src="images/image-equilibrium.jpg" />
  <img src="images/icon-view.svg" />
</div>
```

```css
.images:hover {
  cursor: pointer;
}

.images:hover img:nth-child(1) {
  /*When image container is hovered then change the opacity of Equilibrium image*/
  opacity: 0.7;
}

.images:hover img:nth-child(2) {
  /*When image container is hovered then bring back the eye image element*/
  display: inline;
}
```

### Useful resources

- [FlexBox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This is really a good article to understand flexbox in layman's language.
- [Box alignment](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox) - This article will help you out to have more understanding of alignments in flexbox.

## Author

- Frontend Mentor - [@ripalll](https://www.frontendmentor.io/profile/ripalll)
- LinkedIn - [@RipalNakiya](https://www.linkedin.com/in/ripal-nakiya-0a96a4203/)
- Twitter - [@RipalNakiya](https://twitter.com/RipalNakiya)
- Instagram - [@jets_5645](https://www.instagram.com/jets_5645/?hl=en)
