import React, { useState, useEffect } from 'react';

// Define the lessons for the React learning path, now with a Web3 focus
const lessons = [
  {
    title: "Lesson 1: Components & JSX for dApps",
    explanation: `
      In React, a component is a reusable, independent piece of UI. For Web3, these are the building blocks of your Decentralized Application (dApp).
      You'll use functional components, which are JavaScript functions that return JSX (React's syntax extension for describing UI).

      The component's name should always start with an uppercase letter.
    `,
    exampleCode: `
      // A simple component to display wallet connection status
      import React from 'react';

      function WalletStatusDisplay() {
        return <p>Wallet Not Connected</p>;
      }

      export default WalletStatusDisplay;
    `,
    challenge: `
      Your task is to create a functional component named 'ConnectWalletButton'.
      This component should render a <button> tag with the text "Connect Wallet".

      Type your code below:
    `,
    solution: `
      function ConnectWalletButton() {
        return <button>Connect Wallet</button>;
      }
    `,
    checkFunction: (code) => {
      const normalizedCode = code.replace(/\s/g, '').toLowerCase();
      return normalizedCode.includes('functionconnectwalletbutton(){return<button>connectwallet</button>;}') ||
             normalizedCode.includes('constconnectwalletbutton=()=>{return<button>connectwallet</button>;}');
    }
  },
  {
    title: "Lesson 2: Passing Data with Props in dApps",
    explanation: `
      Props (short for "properties") are how you pass data from a parent component to a child component.
      In dApps, you'll often pass wallet addresses, network names, or token amounts using props.
      Props are read-only, ensuring child components don't accidentally modify parent data.
    `,
    exampleCode: `
      // Parent component (e.g., App.js)
      import React from 'react';

      function WalletDisplay(props) {
        return <p>Connected as: {props.address}</p>;
      }

      function App() {
        const userAddress = "0xAbc...123"; // This would come from a wallet connection
        return (
          <div>
            <WalletDisplay address={userAddress} />
          </div>
        );
      }

      export default App;
    `,
    challenge: `
      Modify your 'TokenBalance' component.
      It should now accept two props: 'symbol' (e.g., "ETH") and 'amount' (e.g., "0.5").
      It should display a <p> tag like: "Your [symbol] balance: [amount]".

      For example, if used as <TokenBalance symbol="ETH" amount="0.5" />, it should render "Your ETH balance: 0.5".

      Type your code below:
    `,
    solution: `
      function TokenBalance(props) {
        return <p>Your {props.symbol} balance: {props.amount}</p>;
      }
    `,
    checkFunction: (code) => {
      const normalizedCode = code.replace(/\s/g, '').toLowerCase();
      return normalizedCode.includes('functiontokenbalance(props){return<p>your{props.symbol}balance:{props.amount}</p>;}') ||
             normalizedCode.includes('consttokenbalance=(props)=>{return<p>your{props.symbol}balance:{props.amount}</p>;}') ||
             normalizedCode.includes('consttokenbalance=({symbol,amount})=>{return<p>your{symbol}balance:{amount}</p>;}');
    }
  },
  {
    title: "Lesson 3: Managing dApp State with useState",
    explanation: `
      Components often need to remember dynamic information, like whether a wallet is connected, or the status of a transaction. This is called "state".
      In functional components, we use the 'useState' Hook to add state.
      'useState' returns the current state value and a function to update it. When state changes, React re-renders the component.
    `,
    exampleCode: `
      import React, { useState } from 'react';

      function ConnectWallet() {
        const [isConnected, setIsConnected] = useState(false);

        const handleConnect = () => {
          setIsConnected(true); // Simulate connecting wallet
        };

        return (
          <div>
            <p>{isConnected ? 'Wallet Connected!' : 'Wallet Disconnected.'}</p>
            {!isConnected && <button onClick={handleConnect}>Connect Wallet</button>}
          </div>
        );
      }

      export default ConnectWallet;
    `,
    challenge: `
      Create a functional component named 'TransactionStatus'.
      It should have a state variable 'status' initialized to "Idle".
      Add a button that, when clicked, changes the 'status' to "Pending...".
      Display the current 'status' in a <p> tag.

      Remember to import 'useState' from 'react'.

      Type your code below:
    `,
    solution: `
      import React, { useState } from 'react';

      function TransactionStatus() {
        const [status, setStatus] = useState("Idle");

        const startTransaction = () => {
          setStatus("Pending...");
        };

        return (
          <div>
            <p>Transaction Status: {status}</p>
            <button onClick={startTransaction}>Start Transaction</button>
          </div>
        );
      }
    `,
    checkFunction: (code) => {
      const normalizedCode = code.replace(/\s/g, '').toLowerCase();
      return normalizedCode.includes('usestate("idle")') &&
             normalizedCode.includes('setstatus("pending...")') &&
             normalizedCode.includes('<buttononclick={starttransaction}>');
    }
  },
  {
    title: "Lesson 4: Event Handling for Web3 Actions",
    explanation: `
      Event handling is crucial for dApps, allowing users to interact with your UI and trigger blockchain actions.
      You'll use event listeners like 'onClick' on HTML elements (like buttons) to call JavaScript functions.
      These functions will then often interact with your wallet provider or smart contracts.
    `,
    exampleCode: `
      import React from 'react';

      function SendTransactionButton() {
        const handleClick = () => {
          console.log("Initiating transaction...");
          // In a real dApp, you'd call your Web3 library here
        };

        return (
          <button onClick={handleClick}>Send Transaction</button>
        );
      }

      export default SendTransactionButton;
    `,
    challenge: `
      Create a functional component named 'MintNFTButton'.
      It should render a <button> tag with the text "Mint NFT".
      When the button is clicked, it should log the message "Minting NFT..." to the console.

      Type your code below:
    `,
    solution: `
      function MintNFTButton() {
        const handleMint = () => {
          console.log("Minting NFT...");
        };

        return (
          <button onClick={handleMint}>Mint NFT</button>
        );
      }
    `,
    checkFunction: (code) => {
      const normalizedCode = code.replace(/\s/g, '').toLowerCase();
      return normalizedCode.includes('functionmintnftbutton(){') &&
             normalizedCode.includes('consthandlemint=()=>') &&
             normalizedCode.includes('console.log("mintingnft...")') &&
             normalizedCode.includes('<buttononclick={handlemint}>');
    }
  },
  {
    title: "Lesson 5: Conditional Rendering in dApps",
    explanation: `
      dApps often need to show different parts of the UI based on conditions, such as whether a user's wallet is connected,
      if data is loading, or if a transaction has succeeded.
      Conditional rendering allows you to render elements or components based on certain states or props.
    `,
    exampleCode: `
      import React from 'react';

      function DAppDashboard({ isConnected, isLoading }) {
        if (!isConnected) {
          return <p>Please connect your wallet to use the dApp.</p>;
        }

        if (isLoading) {
          return <p>Loading dApp data...</p>;
        }

        return (
          <div>
            <h2>Welcome to the dApp!</h2>
            <p>Your wallet is connected.</p>
            {/* ... other dApp content */}
          </div>
        );
      }

      export default DAppDashboard;
    `,
    challenge: `
      Create a functional component named 'DataLoader'.
      It should accept a prop 'isLoading' (boolean).
      If 'isLoading' is true, display an <h1> tag with "Loading data...".
      If 'isLoading' is false, display an <h1> tag with "Data loaded successfully!".

      Type your code below:
    `,
    solution: `
      function DataLoader({ isLoading }) {
        if (isLoading) {
          return <h1>Loading data...</h1>;
        }
        return <h1>Data loaded successfully!</h1>;
      }
    `,
    checkFunction: (code) => {
      const normalizedCode = code.replace(/\s/g, '').toLowerCase();
      return normalizedCode.includes('functiondataloader({isloading}){') &&
             normalizedCode.includes('if(isloading){return<h1>loadingdata...</h1>;}') &&
             normalizedCode.includes('return<h1>dataloadedsuccessfully!</h1>;');
    }
  },
  {
    title: "Lesson 6: `useEffect` for Blockchain Data",
    explanation: `
      The 'useEffect' Hook in React lets you perform side effects in functional components.
      In Web3, this is commonly used to fetch data from a blockchain or smart contract when a component mounts,
      or when certain dependencies (like a wallet address or network change) are updated.
      It's a powerful tool for synchronizing your UI with off-chain or on-chain data.
    `,
    exampleCode: `
      import React, { useState, useEffect } from 'react';

      function BlockchainDataFetcher() {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
          // Simulate fetching data from a blockchain API or smart contract
          const fetchData = async () => {
            setLoading(true);
            setTimeout(() => { // Simulate network delay
              setData("Some data from blockchain!");
              setLoading(false);
            }, 2000);
          };

          fetchData();
        }, []); // Empty dependency array means this runs once on mount

        return (
          <div>
            {loading ? <p>Fetching blockchain data...</p> : <p>{data}</p>}
          </div>
        );
      }

      export default BlockchainDataFetcher;
    `,
    challenge: `
      Create a functional component named 'UserBalanceFetcher'.
      It should use 'useState' for a 'balance' variable (initial: "0 ETH") and 'isLoading' (initial: true).
      Use 'useEffect' to simulate fetching a user's balance:
      After a 3-second delay, set 'balance' to "1.23 ETH" and 'isLoading' to false.
      Display "Loading balance..." while loading, and "Your balance: [balance]" when loaded.

      Remember to import 'useState' and 'useEffect' from 'react'.

      Type your code below:
    `,
    solution: `
      import React, { useState, useEffect } from 'react';

      function UserBalanceFetcher() {
        const [balance, setBalance] = useState("0 ETH");
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
          const fetchUserBalance = () => {
            setTimeout(() => {
              setBalance("1.23 ETH");
              setIsLoading(false);
            }, 3000); // Simulate 3-second fetch delay
          };

          fetchUserBalance();
        }, []); // Runs once on component mount

        return (
          <div>
            {isLoading ? <p>Loading balance...</p> : <p>Your balance: {balance}</p>}
          </div>
        );
      }
    `,
    checkFunction: (code) => {
      const normalizedCode = code.replace(/\s/g, '').toLowerCase();
      return normalizedCode.includes('usestate("0eth")') &&
             normalizedCode.includes('usestate(true)') &&
             normalizedCode.includes('useeffect(()=>') &&
             normalizedCode.includes('settimeout(()=>') &&
             normalizedCode.includes('setbalance("1.23eth")') &&
             normalizedCode.includes('setisloading(false)') &&
             normalizedCode.includes('isloading?<p>loadingbalance...</p>:<p>yourbalance:{balance}</p>');
    }
  },
];

function App() {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [userCode, setUserCode] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [showSolution, setShowSolution] = useState(false);
  const [llmResponse, setLlmResponse] = useState('');
  const [llmLoading, setLlmLoading] = useState(false);
  const [llmError, setLlmError] = useState('');
  const [showLlmResponse, setShowLlmResponse] = useState(false);
  const [web3TermInput, setWeb3TermInput] = useState(''); // State for the Web3 term input


  const currentLesson = lessons[currentLessonIndex];

  // Reset user code and feedback when lesson changes
  useEffect(() => {
    setUserCode('');
    setFeedbackMessage('');
    setShowSolution(false);
    setLlmResponse(''); // Clear LLM response
    setLlmError('');
    setLlmLoading(false);
    setShowLlmResponse(false);
    setWeb3TermInput(''); // Clear term input
  }, [currentLessonIndex]);

  const handleCodeChange = (event) => {
    setUserCode(event.target.value);
    setFeedbackMessage(''); // Clear feedback on new input
  };

  const checkCode = () => {
    if (currentLesson.checkFunction(userCode)) {
      setFeedbackMessage('🎉 Correct! Great job!');
    } else {
      setFeedbackMessage('🤔 Not quite. Review the explanation and example, then try again!');
    }
  };

  const goToNextLesson = () => {
    if (currentLessonIndex < lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    }
  };

  const goToPreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    }
  };

  // Function to get response from Gemini API
  const getGeminiResponse = async (prompt) => {
    setLlmLoading(true);
    setLlmError('');
    setLlmResponse('');
    setShowLlmResponse(true); // Show the response area

    try {
      let chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });
      const payload = { contents: chatHistory };
      const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const text = result.candidates[0].content.parts[0].text;
        setLlmResponse(text);
      } else {
        setLlmError('No response from LLM or unexpected format.');
      }
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setLlmError(`Failed to get response: ${error.message}`);
    } finally {
      setLlmLoading(false);
    }
  };

  const handleGetHint = () => {
    const hintPrompt = `I am learning React for Web3 development and am on a lesson about "${currentLesson.title}". The challenge is: "${currentLesson.challenge.trim()}". Can you give me a subtle hint to help me solve it, without giving away the direct answer? Focus the hint on React concepts relevant to Web3.`;
    getGeminiResponse(hintPrompt);
  };

  const handleExplainFurther = () => {
    const explainPrompt = `I am learning React for Web3 development and currently studying "${currentLesson.title}". The explanation provided is: "${currentLesson.explanation.trim()}". Can you elaborate on this topic or provide an alternative analogy to help deepen my understanding, specifically from a Web3 development perspective?`;
    getGeminiResponse(explainPrompt);
  };

  const handleCodeReview = () => {
    if (!userCode.trim()) {
      setLlmResponse('Please write some code in the editor before requesting a review.');
      setShowLlmResponse(true);
      return;
    }
    const reviewPrompt = `I am working on a React challenge for Web3 development. The current lesson is "${currentLesson.title}" and the challenge is: "${currentLesson.challenge.trim()}". Here is my code:\n\n\`\`\`javascript\n${userCode}\n\`\`\`\n\nPlease review my code. Provide suggestions for improvement, best practices, or potential fixes, keeping in mind React and Web3 development principles.`;
    getGeminiResponse(reviewPrompt);
  };

  const handleExplainTerm = () => {
    if (!web3TermInput.trim()) {
      setLlmResponse('Please enter a Web3 term in the input field to get an explanation.');
      setShowLlmResponse(true);
      return;
    }
    const termPrompt = `Please explain the Web3 term "${web3TermInput.trim()}" in a concise and beginner-friendly manner, relevant to React dApp development.`;
    getGeminiResponse(termPrompt);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 p-4 sm:p-8 flex flex-col items-center">
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      <style>
        {`
          body { font-family: 'Inter', sans-serif; }
          .code-block {
            background-color: #1a202c; /* Darker background for code */
            color: #f8f8f2;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
            font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
            font-size: 0.9rem;
            line-height: 1.5;
          }
          textarea {
            min-height: 200px;
          }
          /* Keyframe for loading animation */
          @keyframes pulse {
            0% { opacity: 0.5; }
            50% { opacity: 1; }
            100% { opacity: 0.5; }
          }
          .animate-pulse-custom {
            animation: pulse 1.5s infinite ease-in-out;
          }
        `}
      </style>

      <div className="w-full max-w-4xl bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-10 mb-8 border border-purple-700">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6">
          Master React for Web3: Build the Future of the Internet
        </h1>
        <p className="text-center text-lg sm:text-xl text-gray-400 mb-10">
          Your interactive guide to mastering the fundamentals of React for building dApps.
        </p>

        {/* Lesson Navigation */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={goToPreviousLesson}
            disabled={currentLessonIndex === 0}
            className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-700 group-hover:translate-x-0 ease">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
              Previous
            </span>
            <span className="relative invisible">Previous</span>
          </button>
          <span className="text-xl font-semibold text-gray-300">
            Lesson {currentLessonIndex + 1} of {lessons.length}
          </span>
          <button
            onClick={goToNextLesson}
            disabled={currentLessonIndex === lessons.length - 1}
            className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 translate-x-full bg-purple-700 group-hover:translate-x-0 ease">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:-translate-x-full ease">
              Next
            </span>
            <span className="relative invisible">Next</span>
          </button>
        </div>

        {/* Current Lesson Content */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-inner mb-8 border border-gray-600">
          <h2 className="text-3xl font-bold text-purple-300 mb-4">{currentLesson.title}</h2>
          <div className="text-lg leading-relaxed mb-6 text-gray-300" dangerouslySetInnerHTML={{ __html: currentLesson.explanation.replace(/\n/g, '<br>') }} />

          <h3 className="text-2xl font-semibold text-purple-400 mb-3">Example Code:</h3>
          <pre className="code-block mb-6 border border-gray-600">
            <code>{currentLesson.exampleCode.trim()}</code>
          </pre>

          <h3 className="text-2xl font-semibold text-purple-400 mb-3">Your Challenge:</h3>
          <p className="text-lg leading-relaxed text-gray-300 mb-4">{currentLesson.challenge}</p>

          <textarea
            className="w-full p-4 border-2 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono text-base bg-gray-900 text-gray-200 mb-4 shadow-md"
            value={userCode}
            onChange={handleCodeChange}
            placeholder="Write your React code here..."
          ></textarea>

          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <button
              onClick={checkCode}
              className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg transition-all duration-300 ease-out hover:scale-105"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-600 group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                Check My Code
              </span>
              <span className="relative invisible">Check My Code</span>
            </button>
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-white shadow-lg transition-all duration-300 ease-out hover:scale-105"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow-600 group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                {showSolution ? 'Hide Solution' : 'Show Solution'}
              </span>
              <span className="relative invisible">{showSolution ? 'Hide Solution' : 'Show Solution'}</span>
            </button>
          </div>

          {/* New LLM-powered buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              onClick={handleGetHint}
              disabled={llmLoading}
              className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-700 group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                {llmLoading && showLlmResponse ? 'Getting Hint...' : 'Get Hint ✨'}
              </span>
              <span className="relative invisible">{llmLoading && showLlmResponse ? 'Getting Hint...' : 'Get Hint ✨'}</span>
            </button>
            <button
              onClick={handleExplainFurther}
              disabled={llmLoading}
              className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold rounded-full bg-gradient-to-r from-indigo-600 to-indigo-800 text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-700 group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.105A9.702 9.702 0 0112 4c4.97 0 9 3.582 9 8z"></path></svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                {llmLoading && showLlmResponse ? 'Explaining...' : 'Explain Further ✨'}
              </span>
              <span className="relative invisible">{llmLoading && showLlmResponse ? 'Explaining...' : 'Explain Further ✨'}</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              onClick={handleCodeReview}
              disabled={llmLoading}
              className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold rounded-full bg-gradient-to-r from-teal-600 to-teal-800 text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-teal-700 group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M10 12H7"></path></svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                {llmLoading && showLlmResponse ? 'Reviewing Code...' : 'Code Review ✨'}
              </span>
              <span className="relative invisible">{llmLoading && showLlmResponse ? 'Reviewing Code...' : 'Code Review ✨'}</span>
            </button>
            <div className="flex-1 flex flex-col sm:flex-row items-stretch gap-2">
              <input
                type="text"
                value={web3TermInput}
                onChange={(e) => setWeb3TermInput(e.target.value)}
                placeholder="Enter Web3 term (e.g., 'gas')"
                className="flex-grow p-3 border-2 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono text-base bg-gray-900 text-gray-200 shadow-md"
              />
              <button
                onClick={handleExplainTerm}
                disabled={llmLoading}
                className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold rounded-full bg-gradient-to-r from-orange-600 to-orange-800 text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-700 group-hover:translate-x-0 ease">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9.247a8.672 8.672 0 011.087-2.062C11.371 4.88 12.552 4 14 4c1.448 0 2.629.88 3.685 2.185A8.672 8.672 0 0118.772 9.247m0 0a8.672 8.672 0 011.087 2.062C20.629 14.12 19.448 15 18 15c-1.448 0-2.629-.88-3.685-2.185M2.228 9.247a8.672 8.672 0 001.087 2.062C4.629 14.12 5.81 15 7.258 15c1.448 0 2.629-.88 3.685-2.185M2.228 9.247L5 12m-2.772-2.753L5 12m-2.772-2.753L5 12"></path></svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                  {llmLoading && showLlmResponse ? 'Explaining Term...' : 'Ask AI about Web3 Term ✨'}
                </span>
                <span className="relative invisible">{llmLoading && showLlmResponse ? 'Explaining Term...' : 'Ask AI about Web3 Term ✨'}</span>
              </button>
            </div>
          </div>


          {feedbackMessage && (
            <p className={`text-center text-xl font-semibold mt-4 ${feedbackMessage.includes('Correct') ? 'text-green-400' : 'text-red-400'}`}>
              {feedbackMessage}
            </p>
          )}

          {showSolution && (
            <div className="mt-6 p-4 bg-blue-900 rounded-lg border border-blue-700 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-300 mb-3">Solution:</h3>
              <pre className="code-block">
                <code>{currentLesson.solution.trim()}</code>
              </pre>
            </div>
          )}

          {/* LLM Response Area */}
          {showLlmResponse && (llmLoading || llmError || llmResponse) && (
            <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-gray-600 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-200 mb-3">AI Assistant:</h3>
              {llmLoading && <p className="text-gray-400 animate-pulse-custom">Loading...</p>}
              {llmError && <p className="text-red-400">Error: {llmError}</p>}
              {llmResponse && <p className="text-gray-300 whitespace-pre-wrap">{llmResponse}</p>}
            </div>
          )}
        </div>
      </div>

      <footer className="text-center text-gray-500 text-sm mt-8">
        Built with React and Tailwind CSS for aspiring developers.
      </footer>
    </div>
  );
}

export default App;
