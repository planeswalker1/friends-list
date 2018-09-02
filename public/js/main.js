const form = document.querySelector('form');
const input = document.querySelector('input');
const output = document.querySelector('.hidden');

form.addEventListener('submit', function (event) {
  if (input.value === '') {
    event.preventDefault();
    output.classList.remove('hidden');
  }
});

input.addEventListener('focus', function () {
  output.classList.add('hidden');
});