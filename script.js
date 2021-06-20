//simple shop ing list
const button = document.getElementById('enter');
let input = document.getElementById('userinput');
let ul = document.querySelector('ul');
const inputLenght = () => {
  return input.value.length;
};
const createListElement = () => {
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = '';
};
const addListAfterClick = () => {
  if (inputLenght() > 0) {
    createListElement();
  }
};
const AddListAfterKeypress = (event) => {
  if (input.value.length > 0 && event.key === 'Enter') {
    createListElement();
  }
};
button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', AddListAfterKeypress);
