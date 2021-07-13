const checkForm = () => {
  const input = document.querySelector('.input');
  let response = false;

  if (input.value !== '') {
    response = true;
  }
  return { response, user: input.value };
};

const noInputError = () => {
  const input = document.querySelector('.input');
  input.classList.add('error');
  setTimeout(() => input.classList.remove('error'), 3000);
};


export { checkForm, noInputError, clearDOM };