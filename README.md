# Burger Builder React Application

An interactive React learning project that lets a user assemble a burger, see its price change, and review an order summary.

## Features

- Add or remove salad, bacon, cheese, and meat
- Render the burger visually as ingredients change
- Prevent ingredient counts from going below zero
- Calculate the order price from the selected ingredients
- Review the current order in a modal
- Use a responsive toolbar and side drawer for navigation
- Cache the production application through the included service worker

## Application flow

~~~text
Build controls ──► BurgerBuilder state ──► Visual burger
                         │
                         └──► Order modal ──► Continue alert
~~~

The central state and price calculations live in [`src/containers/BurgerBuilder/BurgerBuilder.js`](./src/containers/BurgerBuilder/BurgerBuilder.js). Reusable UI pieces live under [`src/components`](./src/components).

## Run locally

### Prerequisites

- Node.js
- npm

Install the dependencies and start the development server:

~~~bash
npm install
npm start
~~~

Open http://localhost:3000.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm start` | Start the development server |
| `npm test` | Run the Jest test suite |
| `npm run build` | Create a production build |

## Project structure

~~~text
src/
├── components/
│   ├── Burger/          Burger, ingredients, controls, and order summary
│   ├── Navigation/      Toolbar and responsive side drawer
│   └── UI/              Modal, backdrop, and buttons
├── containers/
│   └── BurgerBuilder/   Ingredient state, price logic, and ordering flow
├── hoc/                 Layout and wrapper components
└── App.js               Application root
~~~

## Project status

This is a legacy React 16 learning project created with an older Create React App toolchain. It demonstrates the front-end builder interaction, but it does not include a backend, authentication, payment processing, or a real checkout. The Continue action currently displays an alert.

The repository includes the dependency snapshot and generated configuration used during the original development. Modernizing the dependencies should be handled as a separate upgrade.
