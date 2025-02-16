# Personal Finance Visualizer

A simple web application to track personal finances, visualize expenses, and manage transactions efficiently.

## 🚀 Features

- **Add, Edit, Delete Transactions** (Amount, Date, Description)
- **Transaction List View**
- **Monthly Expenses Bar Chart** using Recharts
- **Bootstrap for Beautiful UI**
- **Fully Responsive Design**

## 🛠 Tech Stack

- **Frontend**: React, Bootstrap, Recharts
- **State Management**: useState Hook
- **Styling**: Bootstrap, Custom CSS

## 📌 Installation & Setup

1. **Clone the repository**

```sh
git clone https://github.com/your-username/personal-finance-visualizer.git
cd personal-finance-visualizer
```

2. **Install dependencies**

```sh
npm install
```

3. **Start the development server**

```sh
npm start
```

The app will be available at `http://localhost:3000`

## 📂 Project Structure

```
personal-finance-visualizer/
├── src/
│   ├── components/
│   │   ├── TransactionForm.js
│   │   ├── TransactionList.js
│   │   ├── ExpenseChart.js
│   ├── App.js
│   ├── index.js
├── public/
├── package.json
├── README.md
```

## 🖥 Usage

1. **Add Transactions**: Enter the amount, description, and date, then click "Add Transaction".
2. **View Transactions**: All transactions are listed below the form.
3. **Delete Transactions**: Click the "Delete" button to remove an entry.
4. **View Expense Chart**: A bar chart dynamically updates based on your transactions.
