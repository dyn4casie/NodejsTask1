1) Display a form which prompts you to enter a message when you visit localhost:8080;

e.g:  Please enter a message below:       

       Message: an input box is here where user submits their message
       Submit: a submit button is below.


       So far, you should have a form element which wraps around an input element and a submit button. 

       Your input element should have a name html property equal to message so you can get the value when you submit

       Your form should also have a method property equal to "POST" and an action property that equals to "/message"

CLUE: You can use "res.write()" to write html tags like forms, inputs, buttons and send to the browser. Look up html forms and how to send them using res.write() on google. 

2) When you submit to "/message", you should have your input written to a file named message.txt. You must use the inbuilt node js fs module.

 
Upload your solution to your github repo and submit the link to that repo.

DO NOT USE EXPRESS JS. JUST NODE JS.