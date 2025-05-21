# React Learning App

An interactive React application built with Tailwind CSS for learning React and Web3 development. This app provides hands-on lessons, code challenges, and AI-powered assistance for learning React concepts in the context of Web3 development.

## Features

- Interactive React lessons with Web3 focus
- Real-time code validation
- AI-powered hints and explanations
- Beautiful UI with Tailwind CSS
- Responsive design
- Code review functionality
- Web3 term explanations

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- A Gemini API key for AI features

## Getting Started

1. Clone the repository:
```bash
git clone <your-repository-url>
cd react-learning-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Gemini API key:
```
REACT_APP_GEMINI_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm start
```

The app will open in your default browser at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
react-learning-app/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx          # Main application component
│   ├── index.js         # Application entry point
│   └── index.css        # Global styles and Tailwind imports
├── .env                 # Environment variables (not tracked by git)
├── .gitignore          # Git ignore rules
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── postcss.config.js   # PostCSS configuration
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Environment Variables

The following environment variables are required:

- `REACT_APP_GEMINI_API_KEY`: Your Gemini API key for AI features

## Security Notes

- Never commit the `.env` file to version control
- Keep your API keys private
- The `.gitignore` file is configured to exclude sensitive files

## Technologies Used

- React 18
- Tailwind CSS
- Gemini AI API
- Create React App
- PostCSS
- Autoprefixer

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 