
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, RotateCcw, CheckCircle, XCircle } from 'lucide-react';
import { trueFalseQuestions } from '@/data/studyData';

interface TrueFalseModeProps {
  onBack: () => void;
}

const TrueFalseMode = ({ onBack }: TrueFalseModeProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<boolean[]>(new Array(trueFalseQuestions.length).fill(false));
  const [selectedOption, setSelectedOption] = useState<boolean | null>(null);

  const handleAnswerSelect = (answer: boolean) => {
    if (showResult) return;
    
    setSelectedAnswer(answer);
    setSelectedOption(answer);
    
    const isCorrect = answer === trueFalseQuestions[currentQuestion].isTrue;
    if (isCorrect && !answered[currentQuestion]) {
      setScore(score + 1);
    }
    
    const newAnswered = [...answered];
    newAnswered[currentQuestion] = true;
    setAnswered(newAnswered);
    setShowResult(true);
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setSelectedOption(null);
    setShowResult(false);
    setCurrentQuestion((prev) => (prev + 1) % trueFalseQuestions.length);
  };

  const prevQuestion = () => {
    setSelectedAnswer(null);
    setSelectedOption(null);
    setShowResult(false);
    setCurrentQuestion((prev) => (prev - 1 + trueFalseQuestions.length) % trueFalseQuestions.length);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setAnswered(new Array(trueFalseQuestions.length).fill(false));
  };

  const progressPercentage = ((currentQuestion + 1) / trueFalseQuestions.length) * 100;
  const current = trueFalseQuestions[currentQuestion];

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
            True or False
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
              Question {currentQuestion + 1} of {trueFalseQuestions.length}
            </p>

            <p className="text-sm sm:text-lg text-green-400">
              Score: {score} / {answered.filter(Boolean).length}
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
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white leading-relaxed break-words">
              {current.statement}
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {[
                { value: true, label: 'True', color: 'green' },
                { value: false, label: 'False', color: 'red' }
              ].map((option) => {
                const isSelected = selectedAnswer === option.value;
                const isCorrect = option.value === current.isTrue;
                const showCorrection = showResult;
                
                let buttonClass = "flex-1 p-4 border-2 rounded-lg transition-all duration-200 min-h-[48px] text-base sm:text-lg font-semibold touch-manipulation ";
                
                if (showCorrection) {
                  if (isCorrect) {
                    buttonClass += option.color === 'green' 
                      ? ' border-green-500 bg-green-500/20 text-green-400' 
                      : ' border-red-500 bg-red-500/20 text-red-400';
                  } else if (isSelected && !isCorrect) {
                    buttonClass += " border-gray-500 bg-gray-500/20 text-gray-400";
                  } else {
                    buttonClass += " border-gray-600 bg-gray-700 text-gray-300";
                  }
                } else {
                  if (isSelected) {
                    buttonClass += option.color === 'green' 
                      ? ' border-green-500 bg-green-500/20 text-green-400' 
                      : ' border-red-500 bg-red-500/20 text-red-400';
                  } else {
                    buttonClass += option.color === 'green'
                      ? ' border-gray-600 bg-gray-700 text-white hover:border-green-500 hover:bg-green-500/10'
                      : ' border-gray-600 bg-gray-700 text-white hover:border-red-500 hover:bg-red-500/10';
                  }
                }
                
                return (
                  <button
                    key={option.label}
                    onClick={() => handleAnswerSelect(option.value)}
                    className={buttonClass}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span>{option.label}</span>
                      {showCorrection && isCorrect && (
                        <CheckCircle className="w-5 h-5" />
                      )}
                      {showCorrection && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5" />
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
                {current.explanation}
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
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          
          <Button 
            onClick={nextQuestion} 
            variant="outline" 
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 min-h-[48px] text-sm sm:text-base touch-manipulation"
            disabled={!showResult && currentQuestion === trueFalseQuestions.length - 1}
          >
            {currentQuestion === trueFalseQuestions.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TrueFalseMode;
