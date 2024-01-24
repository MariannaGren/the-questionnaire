const form = document.querySelector(".form");
const clear = document.querySelector("#clear");
const name = document.querySelector("#name");
const secondName = document.querySelector("#secondName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const agree = document.querySelector("#agree");

form.addEventListener("submit", (event) => {
  // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
  // https://learn.javascript.ru/default-browser-action
  event.preventDefault();

  // Здесь твой код
  const userName = name.value;
  const userSecondName = secondName.value;
  const userEmail = email.value;
  const userPhone = phone.value;
  const userAgree = agree.value;

  fetch("https://polinashneider.space/user", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer: MariannaGren",
    },
    body: JSON.stringify({
      name: userName,
      secondName: userSecondName,
      email: userEmail,
      phone: userPhone,
      agree: userAgree,
    }),
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      console.log(data);
      alert("Данные успешно отправлены!");
      form.reset();
    })
    .catch((error) => {
      alert("Произошла ошибка, при отправке");
      form.reset();
    });
});
