
//Ignore this file. It was a test file only

let field = document.querySelector('textarea')
let nameField = document.querySelector('#name')
let backUp = field.getAttribute('placeholder')
let btn = document.querySelector('.btn');
let clear = document.getElementById('clear')


field.onfocus = function()
{
    this.setAttribute('placeholder', "");
    this.style.borderColor = '#333';
    btn.style.display = "block";
}

field.onblur = function()
{
    this.setAttribute('placeholder', backUp);
    this.style.borderColor = '#aaa';
}

clear.onclick = function ()
{
    btn.style.display = 'none';
    field.value = '';
}



