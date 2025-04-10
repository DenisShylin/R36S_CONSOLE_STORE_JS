// js/contact.js
// Импортируем иконки (предполагаем, что у вас есть отдельный файл для иконок)
import { renderIcon } from './iconscontact.js';
import i18next from 'i18next';

// Инициализация секции Contact
export function initContact() {
  console.log('Инициализация секции Contact');

  const contactForm = document.querySelector('.contact__form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const messageInput = document.getElementById('message');
  const submitButton = document.querySelector('.form__button');
  const errorContainer = document.createElement('div');

  errorContainer.className = 'form__error';
  errorContainer.style.display = 'none';
  errorContainer.innerHTML = `
    <div class="form__error-icon">${renderIcon('alert-circle', 16)}</div>
    <span></span>
  `;

  // Вставляем контейнер ошибки в начало формы
  contactForm.insertBefore(errorContainer, contactForm.firstChild);

  // Объект для хранения данных формы
  const formData = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  // Функция отображения ошибки с поддержкой i18n
  function showError(messageKey, fallbackMessage) {
    const message = i18next.t(messageKey, { defaultValue: fallbackMessage });
    errorContainer.querySelector('span').textContent = message;
    errorContainer.style.display = 'flex';
  }

  // Функция скрытия ошибки
  function hideError() {
    errorContainer.style.display = 'none';
  }

  // Обработчик изменения полей формы
  function handleInputChange(e) {
    const { name, value } = e.target;
    formData[name] = value;

    // Скрываем ошибку при изменении любого поля
    hideError();
  }

  // Добавляем обработчики изменения для каждого поля
  nameInput.addEventListener('input', handleInputChange);
  emailInput.addEventListener('input', handleInputChange);
  phoneInput.addEventListener('input', handleInputChange);
  messageInput.addEventListener('input', handleInputChange);

  // Обработчик отправки формы с поддержкой i18n
  async function handleSubmit(e) {
    e.preventDefault();

    // Устанавливаем состояние отправки
    const isSubmitting = true;
    updateFormState(isSubmitting);

    try {
      // Проверка обязательных полей
      if (
        !formData.name ||
        !formData.email ||
        !formData.phone ||
        !formData.message
      ) {
        throw new Error(
          i18next.t('contact.form.error.allFields', 'Please fill in all fields')
        );
      }

      // Валидация email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error(
          i18next.t(
            'contact.form.error.validEmail',
            'Please enter a valid email'
          )
        );
      }

      // Валидация телефона
      const phoneRegex = /^\+?[0-9]{10,14}$/;
      if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
        throw new Error(
          i18next.t(
            'contact.form.error.validPhone',
            'Please enter a valid phone number.'
          )
        );
      }

      // Имитация отправки на сервер
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Очистка формы после успешной отправки
      nameInput.value = '';
      emailInput.value = '';
      phoneInput.value = '';
      messageInput.value = '';

      // Сброс объекта данных
      Object.keys(formData).forEach(key => {
        formData[key] = '';
      });

      alert(
        i18next.t(
          'contact.form.success',
          'Message sent successfully! We will contact you shortly.'
        )
      );
    } catch (error) {
      showError(
        'contact.form.error.generic',
        error.message ||
          'There was an error sending your message. Please try again later.'
      );
      console.error('Form submission error:', error);
    } finally {
      // Сбрасываем состояние отправки
      updateFormState(false);
    }
  }

  // Функция обновления состояния формы с поддержкой i18n
  function updateFormState(isSubmitting) {
    const inputs = [nameInput, emailInput, phoneInput, messageInput];

    inputs.forEach(input => {
      input.disabled = isSubmitting;
    });

    submitButton.disabled = isSubmitting;

    if (isSubmitting) {
      submitButton.innerHTML = `<span class="button__icon">${renderIcon(
        'loader',
        20
      )}</span> ${i18next.t('contact.form.sending', 'Sending...')}`;
    } else {
      submitButton.innerHTML = `<span class="button__icon">${renderIcon(
        'send',
        20
      )}</span> ${i18next.t('contact.form.submit', 'Send message')}`;
    }
  }

  // Добавляем обработчик отправки формы
  contactForm.addEventListener('submit', handleSubmit);

  // Обработчик события изменения языка
  window.addEventListener('languageChanged', function (event) {
    updateFormState(submitButton.disabled);
  });

  // Возвращаем функцию для очистки обработчиков событий
  return function cleanup() {
    nameInput.removeEventListener('input', handleInputChange);
    emailInput.removeEventListener('input', handleInputChange);
    phoneInput.removeEventListener('input', handleInputChange);
    messageInput.removeEventListener('input', handleInputChange);
    contactForm.removeEventListener('submit', handleSubmit);
    window.removeEventListener('languageChanged', updateFormState);
  };
}

// Экспортируем функцию по умолчанию
export default initContact;
