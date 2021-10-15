# NomadCoder-Momentum
Clone Coding Repository for "JavaScript for Beginner" Course of NomadCoder

Lecture Link: https://nomadcoders.co/javascript-for-beginners
- Lecture language: English (Administrated in Korean)


## Purpose / Goal

I take the course to recap JavaScript basics and be familiar with some JS functions that will use frequently in the websites.  
At the end of the course, I am expected to build a clone of chrome application, [Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca).

Regisered to the [challenge](https://nomadcoders.co/faq/challenge/vanillajs) to finish the course in two weeks.


## What I Learn

- Recap basic JavaScript syntax
- JavaScript for web browsers
  - **Document Object**: Indicating the HTML document
    - It contains various characteristics (e.g. *title*, *body*, ...) of the page/document
  - Ways to find HTML elements with JavaScript
    - **document.getElementById(\<id>)**: Function to find HTML element by its *id*. 
    - **document.getElementsByClassName(\<className>)**: Function to find HTML elements by their *className*.
    It returns array of elements as there may exist numerous elements having same class name.
    - **document.getElementsByTagName(\<tagName>)**: Functions to get HTML elements by their *tagName*, like `h1`, `body`, and etc.
    It returns array of elements.
    - **document.querySelector(\<list CSS selector>)**: Function to select HTML element with CSS notations (e.g. `.hello h1` - Element having className `hello` inside `h1`).
    To search for specific className, put `.` in front of the className.
    To search for specific id, put `#` in front of the id.  
    The first matching element will return.
    If nothing match, it return null.  
    If you want to retrieve all the matching elements, use **document.querySelectorAll(\<list CSS selector>)**, which return an array of elements.  
    These functions can be used to get child elements.
    - Properties (e.g. `autoFocus`, `InnerHTML`, ...) for the element can also be retrieved/modified
  - Use **Element.addEventListener(\<eventType>, \<function>)** to make element to listen to the event (e.g. `click`).
  When `<eventType>` occurs, `<function>` called.
    - Available events can be found by using `console.dir(<element>)`.
    The property's name starts with `on` indicates the event available for the element.
    - Same as `Element.on<eventType> = <function>`, but using `addEventListener()` is preferrable, as we can later remove the event listener by using **Element.removeEventListener(\<eventType>, \<function>)**.
  - **Window Object**: Represent the windows containing the HTML elements.
    - able to **add eventListener** (`window.addEventListener(<eventType>, <function>)`)
  - To change style of Elements when certain event occurs,
    - It is preferred to add/remove `className`, which associated with the pre-defined styles on CSS file.
    (Use **Element.classList()** to get the array of class names, then modify the array to change styles.)
- Validate user's input
  - length (`maxlength` and `minlength`) and whether the input is required or not (`required`) can be checked without JavaScript (HTML Support).
  - To trigger **HTML validation**, the elements should be located inside `<form>` block.
    - Pressing `<button>`/Pressing `Enter` inside `<form>` block let the form to be submitted. 
    - Once form submitted, the website is refreshed.
    This behavior can be blocked by adding **SubmitEvent.preventDefault()** on the callback function, which added to the `EventListener` of `submit` event.
- **MouseEvent** is generated when user click the Element, and it contains coordinate information where the user clicked.
- **setInterval(\<function>, \<interval in ms>)**: Used when some action is occered every given time.
- **setTimeout(\<function>, \<timeout in ms>)**: Used when some action is occered only once after given time.


## Project

### Momentum Clone

Followed the lecture contents to build Clone of Momentum app. 
Only used HTML, CSS, Vanilla JavaScript.  

**Feature List (From Lecture)**  
- Login (Get username and print)
  - Once user enters the username, the form should disappear.
    Display the greeting message.
  - Use **localStorage** to store username
  - If username exists in the `localStoreage`, display the message with stored username.
- Clock: Format - *HH:MM:SS*
  - use **setInterval()** to generate the clock for each second
  - Format using **String.padStart(\<maxLength>, \<padString>)** and **String.padEnd(\<maxLength>, <\padString>)**.
- Random quotes
- Random background images
  - Create image (`<img>`) element on HTML document, using **document.createElement(\<tag name>)**.
- ToDo list

**What I added/modified**  
- Rather than define a function for each eventListener, I use [**arrow function**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).
- Rather than using pre-defined list of quotes object, it fetches some quotes from outside API (https://type.fit/api/quotes).
  - When timeout, the saved quote will be used (saved at `localStorage`).
  - Used [**Fetch API**](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to download quotes
  - The downloaded (and selected) quote will saved at `localStorage`.
- Rather than using pre-defined images for background, it download images (daily images from https://source.unsplash.com/daily).
  - Use queryString (search term) of `nasa`, `water`, `aviation`, `tech`, and `food` in random order.
  - After fetch (using Fetch API), use [**URL.createObjectURL()**](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL) to show the image on the document.
  - Rather than using separated `<img>` element, change `background` property of `<html>` element.
    - Set `width` and `height` property of `html` element 100% to fill the screen.
    - Use [**background-size: cover**](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size) to scale the image as large as possible.
    - Image position at center `background-position: center`
    - `background-repeat: no-repeat` to never repeat the image.
- Optimize script loading
  - use [**defer** and **async**](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) keyword

| \<Demo Image> | 
|:--:| 
| *Demo Image of Momentum Clone App* |

Code Link: https://github.com/hyecheol123/NomadCoder-Momentum/tree/main/momentum-clone   
Demo Link: \<URL>
