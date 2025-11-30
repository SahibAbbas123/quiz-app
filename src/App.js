import React, { useState } from 'react';
import { CheckCircle, XCircle, Award, RefreshCw, Maximize, Minimize, Sun, Moon } from 'lucide-react';

const quizData = [
  { question: "What's the main goal of a university startup program?", options: ["Networking and social events", "Helping students create businesses", "Academic research only", "Career counseling services"], correct: 1 },
  { question: "Forbes has a cool list of successful young people under 30. What's it called?", options: ["Forbes Next Generation Leaders", "Forbes 30 Under 30", "Forbes Young Innovators", "Forbes Rising Stars 30"], correct: 1 },
  { question: "A startup worth $1 billion+ is called a:", options: ["Unicorn", "Dragon", "Phoenix", "Titan"], correct: 0 },
  { question: "Y Combinator helps:", options: ["Venture capital firms", "New businesses get started", "Technology conferences", "Investment banking"], correct: 1 },
  { question: "When investors give you money for part of your company, it's called:", options: ["Angel investment", "Private equity", "Venture capital", "Seed funding"], correct: 2 },
  { question: "Facebook changed its name to:", options: ["Alphabet", "Meta", "X Corp", "Metaverse Inc."], correct: 1 },
  { question: "AI means computers can:", options: ["Think and learn like humans", "Process data faster", "Connect to the internet", "Run multiple programs"], correct: 0 },
  { question: "Which Bangladesh company is super successful and handles mobile money?", options: ["Nagad", "Rocket", "bKash", "Pathao Pay"], correct: 2 },
  { question: "IPO means a company:", options: ["Sells shares to everyone for the first time", "Gets acquired by another company", "Raises venture capital", "Merges with competitors"], correct: 0 },
  { question: "Who owns SpaceX (the rocket company)?", options: ["Richard Branson", "Larry Page", "Jeff Bezos", "Elon Musk"], correct: 3 },
  { question: "A scalable business can:", options: ["Expand to new markets", "Grow big easily", "Increase revenue quickly", "Hire more employees"], correct: 1 },
  { question: "MVP means making:", options: ["A prototype for testing", "A simple first version to test your idea", "A beta version product", "A market-ready solution"], correct: 1 },
  { question: "A social enterprise:", options: ["Has social media presence", "Solves social problems AND makes money", "Donates to charities", "Focuses on community building"], correct: 1 },
  { question: "Bootstrapping means:", options: ["Getting angel investment", "Starting with your own money", "Using crowdfunding", "Taking small business loans"], correct: 1 },
  { question: "Before starting a business, you should FIRST:", options: ["Create a business plan", "Check if people want your product", "Register your company", "Build your product"], correct: 1 },
  { question: "A cap table shows:", options: ["Investment rounds history", "Who owns how much of the company", "Company valuation over time", "Shareholder voting rights"], correct: 1 },
  { question: "Which country has the MOST unicorn startups?", options: ["United Kingdom", "India", "USA", "China"], correct: 2 },
  { question: "A 'moat' is:", options: ["A marketing strategy", "Something that protects your business from competitors", "A type of business loan", "A partnership agreement"], correct: 1 },
  { question: "'Lean Startup' was made famous by:", options: ["Peter Thiel", "Steve Blank", "Eric Ries", "Paul Graham"], correct: 2 },
  { question: "A Decacorn is worth:", options: ["$5 billion", "$1 billion exactly", "$10 billion or more", "$100 billion or more"], correct: 2 },
  { question: "AI helps businesses by:", options: ["Reducing operational costs", "Improving decision-making", "Doing tasks automatically and faster", "Enhancing customer service"], correct: 2 },
  { question: "Meta made a virtual office called:", options: ["Meta Workspace", "Horizon Workrooms", "Virtual Office Pro", "Metaverse Office"], correct: 1 },
  { question: "Digital Bangladesh is:", options: ["E-governance initiative", "Mobile banking system", "Using technology to develop the country", "Internet infrastructure project"], correct: 2 },
  { question: "The Berkus Method helps:", options: ["Evaluate market size", "Calculate how much a new startup is worth", "Assess business risks", "Measure revenue potential"], correct: 1 },
  { question: "TAM, SAM, SOM tell you:", options: ["Target customer segments", "How many customers you could have", "Marketing strategy scope", "Sales funnel stages"], correct: 1 },
  { question: "A term sheet is:", options: ["Legal contract for investment", "An early agreement about investment", "Financial projection document", "Partnership memorandum"], correct: 1 },
  { question: "Anti-dilution protects:", options: ["Company valuation", "Early investors' shares", "Founder equity percentage", "Stock price stability"], correct: 1 },
  { question: "J-curve means:", options: ["Rapid growth phase", "Losing money first, making money later", "Market penetration curve", "Investment return pattern"], correct: 1 },
  { question: "'Creative Destruction' was an idea by:", options: ["Peter Drucker", "Joseph Schumpeter", "Clayton Christensen", "Michael Porter"], correct: 1 },
  { question: "SAFE makes fundraising:", options: ["More flexible for startups", "Easier and quicker", "Less risky for investors", "Convertible to equity"], correct: 1 },
  { question: "ARR is money that comes:", options: ["From annual contracts", "Every year regularly (like subscriptions)", "From recurring customers", "As predictable revenue"], correct: 1 },
  { question: "ChatGPT works because of:", options: ["Neural networks with simple algorithms", "Cloud computing databases", "Transformer technology", "Recurrent neural networks (RNN)"], correct: 2 },
  { question: "To see if a business is really making money, check:", options: ["Total revenue earned", "Profit after paying all costs", "Gross profit margin", "Cash flow statement"], correct: 1 },
  { question: "Dual-class shares let founders:", options: ["Sell shares at higher prices", "Keep control of their company", "Avoid paying dividends", "Issue more shares easily"], correct: 1 },
  { question: "GPUs help AI because they:", options: ["Use less memory than CPUs", "Calculate super fast (parallel processing)", "Are designed for cloud storage", "Have better cooling systems"], correct: 1 },
  { question: "Burn Multiple shows:", options: ["Monthly operating expenses", "How well you use investor money", "Customer acquisition rate", "Revenue growth speed"], correct: 1 },
  { question: "Open Innovation means:", options: ["Making all patents public", "Getting ideas from inside AND outside your company", "Sharing profits with employees", "Open source software development"], correct: 1 },
  { question: "A data room is for:", options: ["Storing server equipment", "Sharing secret company info safely with investors", "Conducting virtual meetings", "Backing up company data"], correct: 1 },
  { question: "Innovation means:", options: ["Using new technology", "Creating something new or better", "Improving efficiency", "Digital transformation"], correct: 1 }
];

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);
  
  const institutionLogo = 'cuess_logo.png';

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
  };

  const nextQuestion = () => {
    if (selectedAnswer !== null) {
      const isCorrect = selectedAnswer === quizData[currentQuestion].correct;
      if (isCorrect) {
        setScore(score + 1);
      }
      setAnswers([...answers, { question: currentQuestion, selected: selectedAnswer, correct: isCorrect }]);
    }
    
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setShowAnswer(false);
  };

  if (showResult) {
    const percentage = Math.round((score / quizData.length) * 100);
    return (
      <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900' : 'bg-gradient-to-br from-gray-100 via-cyan-50 to-blue-100'} flex items-center justify-center p-4 py-8 overflow-y-auto transition-colors duration-300`}>
        <button onClick={toggleFullscreen} className={`fixed top-4 right-4 z-50 ${isDarkMode ? 'bg-gray-800/80 hover:bg-gray-700 text-cyan-400' : 'bg-white/80 hover:bg-gray-100 text-cyan-600'} p-3 rounded-lg transition-all shadow-lg`} title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}>
          {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
        </button>
        <button onClick={toggleTheme} className={`fixed top-4 right-20 z-50 ${isDarkMode ? 'bg-gray-800/80 hover:bg-gray-700 text-yellow-400' : 'bg-white/80 hover:bg-gray-100 text-blue-600'} p-3 rounded-lg transition-all shadow-lg`} title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <div className="max-w-2xl w-full my-auto">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-4 mb-2">
              <img src={institutionLogo} alt="CUESS Logo" className="w-12 h-12" />
              <div className="text-left">
                <h1 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Chittagong University Entrepreneur & Startup Society</h1>
                <p className={`text-xs ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>Ideas . Charisma . Purpose</p>
              </div>
            </div>
          </div>
          <div className={`${isDarkMode ? 'bg-gray-800/50 border-cyan-500/20' : 'bg-white/70 border-cyan-300'} backdrop-blur-lg rounded-2xl shadow-2xl p-6 border`}>
            <div className="text-center">
              <Award className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
              <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>Quiz Complete!</h2>
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-6 mb-4">
                <p className="text-5xl font-bold text-white mb-2">{score}/{quizData.length}</p>
                <p className="text-xl text-cyan-100">{percentage}% Correct</p>
              </div>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
                {percentage >= 80 ? "Outstanding! You're a startup expert! 🚀" : percentage >= 60 ? "Great job! You know your stuff! 💡" : percentage >= 40 ? "Good effort! Keep learning! 📚" : "Keep studying and try again! 💪"}
              </p>
              <button onClick={restartQuiz} className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-base flex items-center gap-2 mx-auto transition-all transform hover:scale-105">
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-xs`}>CUESS GM Recruitment Quiz</p>
            <p className={`${isDarkMode ? 'text-gray-500' : 'text-gray-500'} text-xs mt-1`}>Prepared for Students, by Students</p>
          </div>
        </div>
      </div>
    );
  }

  const question = quizData[currentQuestion];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900' : 'bg-gradient-to-br from-gray-100 via-cyan-50 to-blue-100'} flex items-center justify-center p-4 py-8 overflow-y-auto transition-colors duration-300`}>
      <button onClick={toggleFullscreen} className={`fixed top-4 right-4 z-50 ${isDarkMode ? 'bg-gray-800/80 hover:bg-gray-700 text-cyan-400' : 'bg-white/80 hover:bg-gray-100 text-cyan-600'} p-3 rounded-lg transition-all shadow-lg`} title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}>
        {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
      </button>
      <button onClick={toggleTheme} className={`fixed top-4 right-20 z-50 ${isDarkMode ? 'bg-gray-800/80 hover:bg-gray-700 text-yellow-400' : 'bg-white/80 hover:bg-gray-100 text-blue-600'} p-3 rounded-lg transition-all shadow-lg`} title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
      <div className="max-w-3xl w-full my-auto">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-4 mb-2">
            <img src={institutionLogo} alt="CUESS Logo" className="w-12 h-12" />
            <div className="text-left">
              <h1 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Chittagong University Entrepreneur & Startup Society</h1>
              <p className={`text-xs ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>Ideas . Charisma . Purpose</p>
            </div>
          </div>
        </div>
        <div className={`${isDarkMode ? 'bg-gray-800/50 border-cyan-500/20' : 'bg-white/70 border-cyan-300'} backdrop-blur-lg rounded-2xl shadow-2xl p-6 border`}>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <span className={`${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'} font-semibold text-sm`}>Question {currentQuestion + 1} of {quizData.length}</span>
              <span className="text-green-500 font-semibold text-sm">Score: {score}</span>
            </div>
            <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded-full h-2 mb-4`}>
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 h-2 rounded-full transition-all duration-500" style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }} />
            </div>
            <h2 className={`text-xl md:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} leading-tight`}>{question.question}</h2>
          </div>
          <div className="space-y-3 mb-4">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === question.correct;
              const showCorrect = showAnswer && isCorrect;
              const showIncorrect = showAnswer && isSelected && !isCorrect;
              return (
                <button key={index} onClick={() => handleAnswer(index)} className={`w-full p-3 rounded-xl text-left font-medium transition-all transform hover:scale-[1.02] text-sm ${showCorrect ? 'bg-green-600 text-white border-2 border-green-400' : showIncorrect ? 'bg-red-600 text-white border-2 border-red-400' : isSelected && !showAnswer ? 'bg-yellow-500 text-gray-900 border-2 border-yellow-400 font-bold' : isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-white border-2 border-transparent hover:border-cyan-500' : 'bg-white hover:bg-cyan-50 text-gray-900 border-2 border-gray-200 hover:border-cyan-500'}`}>
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showCorrect && <CheckCircle className="w-5 h-5" />}
                    {showIncorrect && <XCircle className="w-5 h-5" />}
                  </div>
                </button>
              );
            })}
          </div>
          {selectedAnswer !== null && !showAnswer && (
            <div className="mb-4 flex justify-center">
              <img src="bigB_thinking.gif" alt="Thinking..." className="h-32 object-contain" />
            </div>
          )}
          {showAnswer && (
            <div className="mb-4 flex justify-center">
              <img src={selectedAnswer === question.correct ? "bigB-7crore.gif" : "bigB_wrongAnswer.gif"} alt={selectedAnswer === question.correct ? "Correct!" : "Wrong Answer"} className="h-32 object-contain" />
            </div>
          )}
          {selectedAnswer !== null && !showAnswer && (
            <button onClick={() => setShowAnswer(true)} className={`w-full mb-3 ${isDarkMode ? 'bg-cyan-600 hover:bg-cyan-700' : 'bg-cyan-500 hover:bg-cyan-600'} text-white px-6 py-3 rounded-xl font-semibold text-base transition-all transform hover:scale-[1.02]`}>Reveal Answer</button>
          )}
          {showAnswer && (
            <button onClick={nextQuestion} className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-base transition-all transform hover:scale-[1.02]">
              {currentQuestion < quizData.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          )}
        </div>
        <div className="text-center mt-4">
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-xs`}>CUESS GM Recruitment Quiz</p>
          <p className={`${isDarkMode ? 'text-gray-500' : 'text-gray-500'} text-xs mt-1`}>Prepared for Students, by Students</p>
        </div>
      </div>
    </div>
  );
}