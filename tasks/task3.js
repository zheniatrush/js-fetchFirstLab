"Ваш код повинен зробити PATCH-запит до вказаного URL, де {userId} – це ID існуючого користувача."
"Для оновлення користувача передайте в запит нові дані, наприклад, нове ім’я."
"Поверніть відповідь від сервера з оновленими даними користувача."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


async function updateUser(id, updatedData) {
   try {
      const response = await fetch(
         `https://jsonplaceholder.typicode.com/users/${id}`,
         {
            method: "PATCH",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               name: updatedData.name,
            }),
         }
      );
      const users = await response.json();
      return users;
   } catch (error) {
      console.log(error);
      return null;
   }
}

console.log(updateUser(1, { name: 'New Name' }));

module.exports = updateUser;
