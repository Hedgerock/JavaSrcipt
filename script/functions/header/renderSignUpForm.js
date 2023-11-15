function initSignUpBox() {
    signUpBtn.onclick = function() {
        const signUpFieldset = document.createElement('fieldset');
        signUpFieldset.className = 'sign-up-fieldset';
        signUpFieldset.setAttribute('name', 'signUpFieldset');
        initNoScrollToBody();

        initFormContent(signUpFieldset);
        initLabelContent(inputs, signUpFieldset);
    }
}

function initFormContent(signUpFieldset) {
    const signUpLayout = document.createElement('div');
    const signUpForm = document.createElement('form');
    const formTitle = document.createElement('h2');
    const submitSignUpBtn = document.createElement('button');

    signUpLayout.className = 'sign-up-layout';
    signUpLayout.onclick = function() {
        signUpForm.remove();
        signUpLayout.remove();
        removeNoScrollToBody();
    }

    signUpForm.className = 'sign-up-form';
    signUpForm.setAttribute('name', 'signUpForm');
    signUpForm.setAttribute('action', '#');

    formTitle.className = 'sign-up-form__title';
    formTitle.textContent = 'Sign Up form';

    submitSignUpBtn.className = 'sign-up-form__button';
    submitSignUpBtn.setAttribute('type', 'submit');
    submitSignUpBtn.textContent = 'Sign Up';

    signUpForm.onsubmit = function(event) {
        event.preventDefault();
        const formInputs = document.forms.signUpForm.signUpFieldset.elements;
        let inputsAreFull = true;
        const log = [];

        inputsAreFull = objectLoopValidation(formInputs, log, inputsAreFull)

        if (inputsAreFull) {
            console.log(log);
            for (let item of formInputs) {
                item.value = '';
            }
        }
    }

    document.body.append(signUpLayout, signUpForm);
    signUpForm.append(formTitle, signUpFieldset, submitSignUpBtn);
}

function initLabelContent(content, signUpFieldset) {
    content.forEach(function(input) {
        const labelEl = document.createElement('label');
        const inputEl = document.createElement('input');

        labelEl.className = 'sign-up-label';
        labelEl.textContent = input.labelContent;

        inputEl.className = 'sign-up-label__input';
        inputEl.setAttribute('type', input.type);
        inputEl.setAttribute('name', input.inputName);
        inputEl.setAttribute('placeholder', input.placeholder);

        signUpFieldset.append(labelEl);
        labelEl.append(inputEl);
    })
}
