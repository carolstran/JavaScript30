# Day 3 - CSS Variables
Today's exercise explored the use of CSS variables, aka [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*), through providing an image with sliders to adjust spacing, blur and border color.

CSS variables are still fairly new, and this was my first time working with them. Yes, there are variables in SASS - but these are different. CSS variables can be updated in JavaScript and once you update the initial variable, it automatically updates everywhere else that it is referenced on the page.

You can define the properties like this:
``` css
:root {
    --base: #ffc600;
    --spacing: 10px;
    --blur: 10px;
}
```

And then call it within a style element like this:
```css
padding: var(--spacing);
background: var(--base);
filter: blur(var(--blur));
```

## Takeaways
Aside from these CSS variables, there were a few addition TIL (today I learned) moments in this video, including...

#### Selecting a Color
Setting ```<input type="color">``` allows a color picker to pop up when you enter the input field.

#### Declaring Styles on ```:root```
I never knew this was an option before. However, it is described by Wes as "the highest level you can get" and similar to declaring it on the ```html``` element.

## Challenges
In this video, Wes clarified that ```querySelectorAll``` returns a NodeList, not an array - but they are "array-like." Understanding the difference took some additional research, particularly diving into [this article](https://toddmotto.com/a-comprehensive-dive-into-nodelists-arrays-converting-nodelists-and-understanding-the-dom/).
