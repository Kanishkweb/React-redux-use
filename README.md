
# React-redux-use

This is a simple React app that demonstrates the use of Redux action creators to manage the state of a bank account. You can deposit or withdraw money from the account and see the balance update in real time.

## Installation

To run this app, you need to have Node.js and npm installed on your machine. Then, follow these steps:

1. Clone this repository to your local machine: `git clone https://github.com/Kanishkweb/React-redux-use.git`
2. Navigate to the project folder: `cd React-redux-use`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and go to http://localhost:3000 to see the app in action.

## Usage

The app has a simple interface that allows you to enter an amount of money and choose to deposit or withdraw it from the account. The balance will be displayed below the input field and will change accordingly. You can also see the history of transactions in a table below the balance.

## Redux Action Creators

The app uses Redux to manage the state of the account and the transactions. The following action creators are defined in src/actions/bankingActions.js:

- `depositMoney(amount)`: Dispatches this action to deposit the specified `amount` into the account balance.
- `withdrawMoney(amount)`: Dispatches this action to withdraw the specified `amount` from the account balance.

## Folder Structure

The project structure is organized as follows:

```
├── public
│   └── index.html
├── src
│   ├── actions
│   │   └── bankingActions.js
│   ├── components
│   │   ├── AccountBalance.js
│   │   ├── DepositForm.js
│   │   ├── TransactionHistory.js
│   │   └── WithdrawForm.js
│   ├── reducers
│   │   └── bankingReducer.js
│   ├── App.js
│   └── index.js
├── .gitignore
├── LICENSE
├── package.json
└── README.md
```

- The `public` directory contains the HTML file for the app.
- The `src` directory contains the main source code.
- The `actions` directory holds the Redux action creators.
- The `components` directory contains the React components responsible for rendering the forms, the balance and the history.
- The `reducers` directory holds the Redux reducer responsible for updating the state based on dispatched actions.

Feel free to explore the code and make any modifications or enhancements according to your needs.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
