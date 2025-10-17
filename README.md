💱 Currency Converter App

A simple and responsive Currency Converter built using ReactJS.
It allows users to convert one currency into another in real-time using live exchange rates.

🚀 Features

🌍 Convert between any two world currencies

🔄 Real-time exchange rate updates

💰 User-friendly and responsive UI

⚡ Built with React Hooks (useState, useEffect)

🧩 Modular component structure

🎨 Styled with Tailwind CSS (or your preferred CSS framework)

🛠️ Tech Stack

ReactJS

JavaScript (ES6+)

Tailwind CSS / CSS

Exchange Rate API (for real-time currency data)

🔧 API Used

You can use any free currency API such as:

ExchangeRate API

Currency API

Frankfurter API

In the project, the API is fetched inside a custom hook:

useEffect(() => {
  fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then((res) => res.json())
    .then((data) => setRates(data.rates));
}, [fromCurrency]);



