# Learn React

A minimal React application bootstrapped with [Vite](https://vitejs.dev/), designed to provide a fast and modern development experience. This project serves as a foundational template for building React applications with Vite.

## Features

- 📚 **Learn React Hooks**: Explore and practice React Hooks like `useState`, `useEffect`, and more through practical examples.

- ⚡ **Vite Integration**: Leverages Vite for rapid development and hot module replacement (HMR).
- ⚛️ **React**: Utilizes React for building user interfaces.
- 🧹 **ESLint**: Includes ESLint for maintaining code quality and consistency.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/IceCYrip/learn-react.git
   cd learn-react
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

### Running the Development Server

Start the development server with:

```bash
npm run dev
```

This will launch the application at `http://localhost:5173/` (default Vite port). The server supports hot module replacement, so changes will reflect in real-time.

### Building for Production

To build the application for production:

```bash
npm run build
```

The optimized and minified files will be generated in the `dist` directory.

### Previewing the Production Build

To preview the production build locally:

```bash
npm run preview
```

This will serve the contents of the `dist` directory at `http://localhost:4173/` (default preview port).

## Project Structure

```
learn-react/
├── public/                             # Static assets
├── src/                                # Source code
│   ├── App.jsx                         # Main React component
│   ├── main.jsx                        # Entry point
│   └── pages/                          # Included all pages
|       └── Learn/                      # Folder for learning material
|           ├── LearnHooks.jsx          # Render list of all hooks
|           └── Hooks/                  # React Hooks
|               ├── UseCallback.jsx     # Learn about useCallback hook
|               ├── UseContext.jsx      # Learn about useContext hook
|               ├── UseEffect.jsx       # Learn about useEffect hook
|               ├── UseMemo.jsx         # Learn about useMemo hook
|               ├── UseReducer.jsx      # Learn about useReducer hook
|               └── UseState.jsx        # Learn about useState hook
├── index.html                          # HTML template
├── package.json                        # Project metadata and scripts
├── vite.config.js                      # Vite configuration
├── eslint.config.js                    # ESLint configuration
└── README.md                           # Project documentation
```

## Scripts

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Starts the development server         |
| `npm run build`   | Builds the app for production         |
| `npm run preview` | Previews the production build locally |

## License

This project is open-source and available under the [MIT License](LICENSE).
