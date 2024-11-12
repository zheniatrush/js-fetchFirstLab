"Ваш код повинен зробити POST-запит до вказаного URL."
"Для створення нового користувача, передайте в запит наступні дані:"
"name: ваше ім’я"
"email: ваш email"
"Поверніть відповідь від сервера після створення користувача."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


async function createUser(user) {
   try {
      const response = await fetch(
         "https://jsonplaceholder.typicode.com/users",
         {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
         }
      );
      const users = await response.json();
      return users;
   } catch (error) {
      console.log(error);
      return null;
   }
}

console.log(createUser({name: "Sam", email: "fjsnfkjns2342@gmail.com"}))

module.exports = createUser;
