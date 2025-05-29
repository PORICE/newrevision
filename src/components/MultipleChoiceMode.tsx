
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, RotateCcw, CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import { multipleChoiceQuestions as initialQuestions } from '@/data/studyData';

interface MultipleChoiceModeProps {
  onBack: () => void;
}

const MultipleChoiceMode = ({ onBack }: MultipleChoiceModeProps) => {
  const [questions, setQuestions] = useState([...initialQuestions]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<boolean[]>(new Array(initialQuestions.length).fill(false));
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswerSelect = (answerIndex: number, option: string) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setSelectedOption(option);
    
    const currentQ = questions[currentQuestionIndex];
    const correct = option === currentQ.answer;
    setIsCorrect(correct);
    
    if (correct) {
      if (!answered[questions[currentQuestionIndex].id - 1]) {
        setScore(score + 1);
      }
      
      const newAnswered = [...answered];
      newAnswered[questions[currentQuestionIndex].id - 1] = true;
      setAnswered(newAnswered);
    }
    
    setShowResult(true);
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (questions.length > 1) {
      // If we're at the end but have more questions, loop back to start
      setCurrentQuestionIndex(0);
    }
    
    setSelectedAnswer(null);
    setSelectedOption(null);
    setShowResult(false);
    setIsCorrect(null);
  };

  const shuffleArray = (array: any[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const reshuffleQuestion = () => {
    if (isCorrect === false) {
      // Shuffle the options for the current question
      const updatedQuestions = [...questions];
      const currentQ = { ...updatedQuestions[currentQuestionIndex] };
      
      // Store the correct answer
      const correctAnswer = currentQ.answer;
      
      // Shuffle all options
      const shuffledOptions = shuffleArray([...currentQ.options]);
      
      // Find the new index of the correct answer
      const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
      
      // Update the question with shuffled options
      updatedQuestions[currentQuestionIndex] = {
        ...currentQ,
        options: shuffledOptions,
        // Update the answer to point to the new index
        answer: shuffledOptions[newCorrectIndex]
      };
      
      setQuestions(updatedQuestions);
      
      // Reset the selection for the current question
      setSelectedAnswer(null);
      setSelectedOption(null);
      setShowResult(false);
      setIsCorrect(null);
    } else {
      moveToNextQuestion();
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(null);
      setSelectedOption(null);
      setShowResult(false);
      setIsCorrect(null);
    }
  };

  const resetQuiz = () => {
    setQuestions([...initialQuestions]);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setAnswered(new Array(initialQuestions.length).fill(false));
    setIsCorrect(null);
  };

  const progressPercentage = (answered.filter(Boolean).length / initialQuestions.length) * 100;
  const current = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 p-2 sm:p-4">
      <div className="max-w-4xl mx-auto">
        {/* Mobile-optimized header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <Button 
            onClick={onBack} 
            variant="outline" 
            className="flex items-center gap-1 sm:gap-2 bg-gray-800 border-gray-600 text-white hover:bg-gray-700 text-sm sm:text-base py-2 px-3 sm:px-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Menu</span>
            <span className="sm:hidden">Back</span>
          </Button>
          
          <h1 className="text-lg sm:text-2xl font-bold text-white text-center flex-1 mx-2 sm:mx-4">
            Multiple Choice
          </h1>
          
          <Button 
            onClick={resetQuiz} 
            variant="outline" 
            className="flex items-center gap-1 sm:gap-2 bg-gray-800 border-gray-600 text-white hover:bg-gray-700 text-sm sm:text-base py-2 px-3 sm:px-4"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden sm:inline">Reset</span>
          </Button>
        </div>

        {/* Progress and score section */}
        <div className="mb-4 sm:mb-6">
          <div className="text-center mb-3 sm:mb-4">
            <p className="text-base sm:text-lg text-blue-200">
              Question {currentQuestionIndex + 1} of {questions.length}
              {questions.length !== initialQuestions.length && (
                <span className="text-yellow-400 text-sm ml-2">
                  (+{initialQuestions.length - questions.length} remaining)
                </span>
              )}
            </p>

            <p className="text-sm sm:text-lg text-green-400">
              Score: {score} / {initialQuestions.length}
            </p>
          </div>
          
          <div className="mb-3 sm:mb-4 px-2">
            <Progress value={progressPercentage} className="h-2 sm:h-3 bg-gray-700" />
            <p className="text-center text-xs sm:text-sm text-gray-400 mt-2">
              Progress: {Math.round(progressPercentage)}% Complete
            </p>
          </div>
        </div>

        {/* Question card */}
        <Card className="bg-gray-800/80 border-gray-700 mb-4 sm:mb-6 mx-2">
          <CardContent className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white leading-relaxed">
              {current.question}
            </h3>
            
            <div className="space-y-3">
              {current.options.map((option: string, index: number) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = option === current.answer;
                const showCorrection = showResult;
                
                let buttonClass = "w-full p-3 sm:p-4 text-left border-2 rounded-lg transition-all duration-200 min-h-[48px] touch-manipulation ";
                
                if (showCorrection) {
                  if (isCorrect) {
                    buttonClass += "border-green-500 bg-green-500/20 text-green-400";
                  } else if (isSelected && !isCorrect) {
                    buttonClass += "border-red-500 bg-red-500/20 text-red-400";
                  } else {
                    buttonClass += "border-gray-600 bg-gray-700 text-gray-300";
                  }
                } else {
                  if (isSelected) {
                    buttonClass += "border-blue-500 bg-blue-500/20 text-blue-400";
                  } else {
                    buttonClass += "border-gray-600 bg-gray-700 text-white hover:border-gray-500 hover:bg-gray-600";
                  }
                }
                
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index, option)}
                    className={buttonClass}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-base break-words flex-1 text-left">
                        {String.fromCharCode(65 + index)}. {option}
                      </span>
                      {showCorrection && isCorrect && (
                        <CheckCircle className="w-5 h-5 text-green-400 ml-2 flex-shrink-0" />
                      )}
                      {showCorrection && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-red-400 ml-2 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Results section */}
        {showResult && (
          <Card className="bg-gray-800/80 border-gray-700 mb-4 sm:mb-6 mx-2">
            <CardContent className="p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-blue-400">Explanation:</h4>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed break-words">
                {current.answer}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-2">
          <Button 
            onClick={prevQuestion} 
            variant="outline" 
            className="flex-1 bg-gray-800 border-gray-600 text-white hover:bg-gray-700 py-3 min-h-[48px] text-sm sm:text-base touch-manipulation"
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          
          {showResult ? (
            <Button 
              onClick={reshuffleQuestion} 
              variant="outline" 
              className={`flex-1 py-3 min-h-[48px] text-sm sm:text-base touch-manipulation ${
                isCorrect 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-yellow-600 hover:bg-yellow-700 text-white'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                {isCorrect ? (
                  <span>Next Question</span>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4" />
                    <span>Reshuffle & Try Again</span>
                  </>
                )}
              </div>
            </Button>
          ) : (
            <Button 
              variant="outline" 
              className="flex-1 bg-gray-600 text-gray-400 py-3 min-h-[48px] text-sm sm:text-base touch-manipulation cursor-not-allowed"
              disabled
            >
              Select an answer
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultipleChoiceMode;
