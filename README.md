# know-your-income  

My individual coding project.  
Currently hosted on Netlify:  
https://know-your-income.netlify.app/

## File structure
script.js - the main logic file  
index.html - main html file - to use the app, open this file on browser window  
style.css - main styling file  
average_calculation.html - an additional page for counting data before using the main page's features  
average_calculation.js - a logic file for average_calculation.html  
average_calculation.css - styles for average_calculation.html  
assets folder - contains all pictures  

## About the app
Created by Ekaterina Tereshko as an individual project during the coding program, it has the following features:

### User side  
- enter you monthly average income without taxes (counted for the last 12 months) into the first input field;
- enter the number of holiday days you are going to have into the second input field;
- if you do not know what your average income is, click the link that will lead you to the page where you can use a calculator for your average income;
- at the bottom of the main page the app will show you the amount of money that you will get as a holiday payment.  

### Logic side  
The app works with the two values, which are entered by user and stored in the constants: _rateForMonth_ and _holidayDays_.  
On click the **calculatePayment()** function is called. It checks if the _rateForMonth_ value is not empty and if _holidayDays_ is at least 1.  
Then it calculates _holidayPayment_ value as _rateForMonth_ / 29.3 * _holidayDays_.

**Thanks for your time exploring my project!**

**EKATERINA TERESHKO
ekaterina.tereshko.me@gmail.com**
