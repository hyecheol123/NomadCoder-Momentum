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


## Project
### Momentum Clone
\<Image Inserted Here>  
Code Link: \<URL>  
Demo Link: \<URL>
