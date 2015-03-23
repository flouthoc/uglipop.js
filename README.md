# Uglipop.js
[Website](http://flouthoc.github.io/uglipop.js/)
<h4>(Pure Javascript)</h4>
An ultra lightweight,unstyled 2kb Minimal Javascript.
Is Lightweight Non-fancy Modal Written is JS , Uglipop is highly customizable

![image](https://github.com/flouthoc/Uglipop.js/blob/master/shot.png)

<h3>Checkout Documentation</h3>
[Documentation Here](http://flouthoc.github.io/uglipop.js/)

<h1>Let’s see it in action.</h1>
[Check Out Demo](http://flouthoc.github.io/uglipop.js/)
<p>In Raw form <strong>Uglipop</strong> does not contain modal like this it is actually unstyled , in order to full fill its aim of being fully customizable , minimal and lightweight.
<strong>That's the reason behind calling it Ugly</strong>
Things That can be used with <strong>Uglipop</strong>
<ul>
<li>You Can Use <strong>Div</strong>.</li>
<li>You Can use <strong>Plain HTML</strong></li>
<li>You Can use <strong>AJAX Response</strong></li>
<li>You Can use <strong>Iframe</strong></li>
<li>You Can use <strong>Images</strong></li>
</ul>
<p>You Can always use Uglipop with minimal code like this</p>
```js
uglipop({class:'put', //styling class for Modal
        source:'html',
        content:'<div> All HTML goes here </div>'});}
```
<h1>How does it look when it's Ugly & raw?</h1>
<p>Well <strong>UgliPop</strong> at its worst looks really bad but the good part is that <strong> you can style it way the way you want it </strong></p>
```js
uglipop({class:'put2', //styling class for Modal
        source:'html',
        content:'<h1>This is some Raw Content</h1>'});}
```
```css
.put2{
      background-color:#fff;
    }
```
<h1>How do I style my Uglipop Modal ?</h1>
Well Styling an Uglipop Modal is pretty simple and easy
    while calling uglipop(); watchout for argument <strong>  <em>class:"Your Styling Class Name Goes Here"</em></strong> so your code becomes something like this.
    
```js
uglipop({class:'my-styling-class', //styling class for Modal
        source:'html',
        content:'<h1>This is some Raw Content</h1>'});}
```
```css
.my-styling-class{
      background-color:#fff;
      color:black;
      /*all CSS goes here*/
    }
```
<h1>How Do I use Other Div inside Uglipop Modal ?</h1>
Using Other Div inside Uglipop Modal is Pretty Simple , minimum possible code can go like this
```js
uglipop({class:'my-styling-class', //styling class for Modal
        source:'div', //'div' instead of 'html'
        content:'your div id goes here'});}
```
```html
<div id='some-div-id' style='display:none;'>
        other html goes here .....
        </div>
```
<h1>Can We Use Images inside Uglipop Modal?</h1>
<p>Sure you can always use the images inside the uglipop by using it in HTML mode </p>
```js
uglipop({source:'html',
        content:'<img src="url-goes-here"></img>'});}
```
<h1>How Do I Create Custome Themes for Uglipop?</h1>
```js
uglipop({class:'put', //styling class for Modal
        source:'html',
        content:'<div> All HTML goes here </div>'});}
```
```css
.put{
      border-radius: 10px;
      background-color:white;
      width:300px;
      height:300px;
      padding:10px;
     -webkit-box-shadow: 0px 0px 39px 12px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 39px 12px rgba(0,0,0,0.75);
box-shadow: 0px 0px 39px 12px rgba(0,0,0,0.75);
    }
```

<h1>Bug Fixes</h1>
[<strike>Browser prefixes on transform style (to fix positioning issues with Safari, Chromium, IE, etc) </strike>](https://github.com/flouthoc/uglipop.js/pull/2) <strong> Fixed By</strong> [Corey Jepperson(@acoreyj)](https://github.com/acoreyj)
