# SilverWear

A landing page, about me page, a custom page, and premade page for Silver Wear — my personal brand and shop for handcrafted silver jewelry made from repurposed silverware.

## Project Description

### Introduction and Low Fidelity

<img width="600" height="1004" alt="InitialSketchofSilverWear" src="https://github.com/user-attachments/assets/c0287e26-b57f-4a06-943e-3309961e33b9" />

First I started with sketching out a low fidelity idea of what the website could look like and possible functionality. 
I really wanted there to be movement and interactive elements in the main page.
Once I decided what images, colors, and intitial layout of some of the pages, I started creating a mid-high fidelity prototype in Figma.

### Mid Fidelity to Functionality

![initialSilverWearPage](https://github.com/user-attachments/assets/e2cf84f5-aa11-4ad0-8250-7642d008542c)

Using this prototype in Figma, I used Cursor to reference the Frame and start the intitial development of the site.
This wasn't the most successful but it had a lot of the core elements of the Figma prototype. This included layout and some style elements.
The photos were also not translated into cursor so I had to attach those into cursor to replace the place holders it gave me.

Once I had most of the assests inputed into cursor, I started working with cursor to develop the site in the way I originally planned.
This looked like a lot of chats giving adjustments and changes in the functionality of the page. Once I had the landing page layed out, 
and an understanding of core identity of the SilverWear's site, I began developing the other pages of the site. This included the product page that displayed a grid of rings,
and a about me page that displayed my photo and what the mission of SilverWare is.

### Interactions

I implemented a few main interactions into the SilverWear website. Each ring box has a movement and collisions with other rings. The ring boxes also diplay binary in the top right corner that says "ring".
The boxes, when hovered, invert the colors of the image. The navigation menu has hover elements too, giving a soft drop shadow glow.

### After Effects Interactions

Using after effects, I added two interaction animations to make the website more fun and organic. I created an endless gif of a wavy box that will display behind the ring boxes when hovered over them. I worked with cursor to make a ease out animation for the gif to come in when hovered and to leave with a faster ease in.
The other interaction I created in After Effects was a splash effect that happens when the user clicks the screen at any moment. I worked with cursor to get the animation to work on click, and then personally adjusted the code until the animation length felt correct.

### Takeaways

Overall I learned that you can design and great layout and design in Figma, but this will mostly guide working with Cursor once the frame is input into the program.
Cursor is very powerful and gives a lot of possiblity into your websites. There are times I reference the code when I want to make small changes but that is very rare.
I also learned that gifs are an easy way to implment your motion design into websites and don't take a lot of memory to run.
I did try using Figma make to transfer my mid fidelity to a functional high fidelity, but felt more resistance than working with Cursor.




# Cursor Description
## Design

Based on the Figma design from [Silver wear web design](https://www.figma.com/design/g3sJaXPOIC6LSv8JLWhKbO/Silver-wear-web-design).

## Features

- **Sky & clouds background** — Animated gradient sky with floating cloud shapes
- **Navigation** — Custom, Premade, About, Contact links
- **Brand title** — "Silver Wear" in elegant script typography
- **Product display** — Seven moving ring images arranged around the title
- **Responsive** — Adapts to mobile with stacked ring layout

## Running locally

Open `index.html` directly in your browser, or use a local server:

```bash
# Python 3
python -m http.server 8000

# Then visit http://localhost:8000
```

## Customization

- **Ring images**: Replace the `src` attributes in `index.html` with your actual product photos
- **Colors**: Edit the CSS variables and gradient in `styles.css`
- **Fonts**: The design uses Island Moments (script) and DM Sans (navigation) from Google Fonts
