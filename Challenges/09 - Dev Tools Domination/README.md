# Day 9 - Dev Tools Domination
This video walked through some tips you can do within the console, adding a little more flavor than `console.log()`

He starts the video with "I guess you know most of these, but I hope you learn one or two little nuggets"—and I did. So here are my nuggets of knowledge to share:

## Takeaways

#### Interpolated Strings—The old way
`console.log('Hello I am a %s string!', '💩');`

The `%s` puts the second argument in the string. But while this way of writing strings still works, it's less relevant now that we have ES6 back ticks.

![strings](https://user-images.githubusercontent.com/26869552/33235855-c2e0a63a-d242-11e7-9acd-f3afa909cf12.png)

#### Styling console text
`console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue');`

The `%c` allows you to apply any font style to console text. You put `%c` in front of the text that you want to style, then the second argument you pass the console will be interpolated to the text

![styled](https://user-images.githubusercontent.com/26869552/33235858-17c7beae-d243-11e7-85a5-7a678494aae4.png)

#### Adding warnings
`console.warn('OH NOOO');`

This will give you a warning, as well as stack traces to where it got called.

![warning](https://user-images.githubusercontent.com/26869552/33235885-a4db4f4a-d243-11e7-92e2-69183bb41e2b.png)

#### Flagging errors
`console.error('shit!');`

This won't throw an error necessarily, but it will display an error within the console. It will also give you a stack trace to where the error was flagged.

![errors](https://user-images.githubusercontent.com/26869552/33235899-03e5888e-d244-11e7-8900-3ee184393f74.png)

#### Testing
`console.assert(1 === 1, 'This is wrong!');`

You can test for something and if it is false, it will drop this error into your console. Almost like an alternative for an `if` statement.

If you run the above, however, you won't see anything. `console.assert()` only fires if something is wrong.

`console.assert(1 === 2, 'This is wrong!');`
![testing](https://user-images.githubusercontent.com/26869552/33235928-dfeae630-d244-11e7-9c96-42f826c870ed.png)

You can also use `console.assert()` to test elements.
```javascript
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');
```
So if the class list does not contain ouch, it will show the message.

![screen shot 2017-11-26 at 01 01 51](https://user-images.githubusercontent.com/26869552/33235949-71e5ba6a-d245-11e7-9a0f-4841e451e659.png)

#### Clearing your console
`console.clear();`

As you probably suspected, this clears your console. It's a great way to mess with another dev if you put it at the end of their code.

![clear](https://user-images.githubusercontent.com/26869552/33235956-eb213d0a-d245-11e7-83a3-1c7602e5fe48.png)

#### Viewing DOM elements
`console.dir(p);`

If you only run `console.log(p);`, it will just display the line of code. But `console.dir(p)` will give a dropdown of the element: Children, dataset, classlist, etc.

![p](https://user-images.githubusercontent.com/26869552/33235979-adaa9c68-d246-11e7-8b3e-2ba83ef53628.png)

#### Grouping
`console.group()`

Groups like elements together by object.
```javascript
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`); // Pass it the same string you did to start it
});
```
![group](https://user-images.githubusercontent.com/26869552/33236020-6389150a-d247-11e7-8c90-dd9149d82ffb.png)

You can also switch out `.group` for `.groupCollapsed` and then they will appear collapsed by default.
```javascript
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`); // Pass it the same string you did to start it
});
```
![groupcollapsed](https://user-images.githubusercontent.com/26869552/33236034-bc9607d4-d247-11e7-83e6-2ab0637690da.png)

#### Counting
`console.count()`

This will count however many times you use a specific word, number, object, DOM node, etc. It all logs in real-time.
```javascript
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
```
![counting](https://user-images.githubusercontent.com/26869552/33236051-2b22acfc-d248-11e7-898b-ed01da958bde.png)

#### Timing
`console.time()`

See how long something takes.

I know there is also `performance.now()` in the browser, but this is a quick way to see how long things are taking.
```javascript
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data'); // Pass it the same string you did to start it
    console.log(data);
  });
```
![timing](https://user-images.githubusercontent.com/26869552/33236065-986634c8-d248-11e7-92af-2519426ad374.png)
