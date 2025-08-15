![Expanding Cards Demo](https://github.com/JohnSilva98/Expanding-Cards/images/demo.gif)


<img width="1832" height="735" alt="image" src="https://github.com/user-attachments/assets/d8d00c0d-bba9-44e9-a849-46af77a30e63" />

# Expanding Cards Project

This project is a simple animation where, when you click on a card, it expands, and the previously expanded card retracts.

## 🛠️ Technologies Used
- <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML Logo" width="20"/> **HTML**
- <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS Logo" width="20"/> **CSS**
- <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript Logo" width="20"/> **JavaScript**

## ❓ How Does It Work?
The panels share two classes: `panel` and `active`.  
With JavaScript, when you click on a panel, the `active` class is added to the clicked panel, and a function is executed to remove the `active` class from the other panels.  

The CSS is responsible for the smooth animation, mainly using a `transition` that increases the width of the clicked element and decreases the width of the others that do not have the `active` class.

