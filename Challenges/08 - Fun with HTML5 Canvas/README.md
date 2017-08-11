# Day 8 - Fun with HTML5 Canvas
Today we built and spiced up an HTML5 canvas. When you click down and drag, something will be drawn on the canvas. In our case, a colorful and size-shifting line!

## Takeaways

#### "Size up" our canvas to fit the window
``` javascript
const canvas = document.querySelector('#draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

Nothing crazy, but this was new to me and will ensure that your canvas spans the exact width and height of the browser.

#### #BADA55
The greatest hex color code.

#### Introduction to HSL
Once we had the lines on the canvas drawing properly, it was time to add the color. The goal was to create a rainbow gradient effect and this was accomplished using HSL. Wes explained HSL by saying that it is "essentially the rainbow, but you can programmatically select pieces of the rainbow." H is for hue that spans from red all the way over to the "other red." S, which is saturation, determines how bright it is and L stands for lightness. Lightness ranges from white to the absence of light - or black. This is all illustrated on [Mother-effing hsl()](http://mothereffinghsl.com/).

To accomplish the rainbow gradient in our stroke, first we set ```let hue = 0;``` up where we declare our other ```let``` variables. Then we used the following within the ```draw()``` function:
``` javascript
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; // above ctx.beginPath();
hue++; // right before the closing bracket
```

Another cool feature of HSL is that if you go over 360, the colors will simply loop back around and start from red again! Or if you prefer, you could also add this ```if``` statement to reset it:
``` javascript
if (hue >= 360) {
    hue = 0;
}
```

#### Changing the line width _while_ drawing
My code doesn't show this, but there's a way to change the line width as you draw. You can do this by manipulating the ```lineWidth``` of your context.

One option is to set the ```lineWidth``` equal to your hue:
``` javascript
ctx.lineWidth = hue;
```
But I'd recommend only doing this if you follow the step above where you reset the hue variable to 0 once it reaches 360.

Another option is to have it so that once it hits that maximum, then it fades itself back. You can do this by first setting ```let direction = true;``` and head to the bottom of the ```draw()``` function, right before the closing bracket:
``` javascript
if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
}

if (direction) {    
    ctx.lineWidth++;
} else {
    ctx.lineWidth--;
}
```
In the case above, we're incrementing it up to 100 before we flip the direction.

#### Global Composite Operation
If you know Photoshop, this will sound familiar because it's basically the blend function. All you have to do is add:
``` javascript
ctx.globalCompositeOperation = 'multiply';
```
Then the colors will blend together as you overlap them. Eventually everything will turn black, but it's fun at first. Find other options beyond multiply [here](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation).
