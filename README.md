# _Hal9000_

#### _A web application that returns numbers and outputs from 0 to the user input, August 23, 2019_

#### By _**Jennifer Batara**_

## Description

This web app asks for a users name, then a number to input. The web app will then return a list of numbers from 0 to the number the user input. Some numbers are special and the expected outputs are as follows:

1. Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, userName. I'm afraid I can't do that."
2. Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
3. Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"

The special outputs are listed from highest(top) to lowest(bottom) priority. Please read the specs section for more details on expected outputs and conditions.

## Specs

1. The user input number must be greater than 0
2. If multiple special numbers are present, the special output with the highest priority will be printed.

| Spec                      |Input          | Output |
|:---------------------------|:-------------:|:------|
| User must input number >0 | 0 | Error is given as an alert |
| Special Output Priority|    13   |  0 <br> 1: "Beep"!<br>2: "Boop!"<br>3: "I'm sorry..."<br>4<br>5<br>6<br>7<br>8<br>9<br>10: "Beep!"<br>11: "Beep!"<br>12: "Boop!" <br>13: I'm sorry...|





## Setup/Installation Requirements

* Internet Connection
* Internet browser
* Unix Terminal (optional)

Option 1: To view locally please copy the link to [this repo](https://github.com/jbatara/hal9000.git) and type the following command into your unix terminal:

$git clone repo_url

with repo_url being the url that was just copied. Open index.html using your internet browser of choice (not compatible with Safari) and talk to Hal9000!

Option 2: To view online, please visit the [website](https://jbatara.github.io/hal9000/) and ask Hal9000 to help you out!

Using Hal9000: Hal will ask for your name. Please type in your name and press submit. Once he has received your name, he will say hello to you with a personalized message. Please enter a number above 0 for Hal's query. The default answer will be top down, zero to your input number. If you wish to reverse the order, click the reverse button.

## Known Bugs

Currently after Hal finishes typing his personalized hello message, the message shrinks. A future update will fix this.

## Support and contact details

Please feel free to [contact the developer](mailto:jennifer.batara.dev@gmail.com) for any feedback or support related questions.

## Technologies Used

* Background photo by [Frank V.](https://unsplash.com/@franckinjapan) on [Unsplash](https://unsplash.com)
* Color scheme by uploading landing page photo to [Colormind](http://colormind.io/image/)
* html
* CSS
* Bootstrap
* javascript
* jQuery


### License

*MIT*

Copyright (c) 2019 **_Jennifer Batara_**
