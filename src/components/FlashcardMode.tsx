
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight, RotateCcw, ArrowLeft, Smartphone } from 'lucide-react';
import { flashcards } from '@/data/studyData';

interface FlashcardModeProps {
  onBack: () => void;
}

const FlashcardMode = ({ onBack }: FlashcardModeProps) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const nextCard = () => {
    setIsFlipped(false);
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const resetCards = () => {
    setCurrentCard(0);
    setIsFlipped(false);
  };

  const progressPercentage = ((currentCard + 1) / flashcards.length) * 100;

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
            Flashcards
          </h1>
          
          <Button 
            onClick={resetCards} 
            variant="outline" 
            className="flex items-center gap-1 sm:gap-2 bg-gray-800 border-gray-600 text-white hover:bg-gray-700 text-sm sm:text-base py-2 px-3 sm:px-4"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden sm:inline">Reset</span>
          </Button>
        </div>

        {/* Progress section */}
        <div className="mb-4 sm:mb-6">
          <div className="text-center mb-3 sm:mb-4">
            <p className="text-base sm:text-lg text-blue-200">
              Card {currentCard + 1} of {flashcards.length}
            </p>
          </div>
          
          <div className="mb-3 sm:mb-4 px-2">
            <Progress value={progressPercentage} className="h-2 sm:h-3 bg-gray-700" />
            <p className="text-center text-xs sm:text-sm text-gray-400 mt-2">
              Progress: {Math.round(progressPercentage)}% Complete
            </p>
          </div>
        </div>

        {/* Mobile-optimized flashcard */}
        <div className="flex justify-center mb-4 sm:mb-6 px-2">
          <Card 
            className="w-full max-w-2xl min-h-[300px] sm:h-80 cursor-pointer hover:shadow-xl transition-all duration-300 bg-gray-800 border-gray-600 touch-manipulation"
            onClick={flipCard}
          >
            <CardContent className="h-full flex items-center justify-center p-4 sm:p-6">
              <div className="text-center w-full">
                {!isFlipped ? (
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-400">Question</h3>
                    <p className="text-base sm:text-lg leading-relaxed text-white break-words">
                      {flashcards[currentCard].front}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4">
                      <Smartphone className="w-4 h-4 inline mr-1" />
                      Tap to reveal answer
                    </p>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-green-400">Answer</h3>
                    <p className="text-base sm:text-lg leading-relaxed whitespace-pre-line text-white break-words">
                      {flashcards[currentCard].back}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4">
                      <Smartphone className="w-4 h-4 inline mr-1" />
                      Tap to see question
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mobile-optimized navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-2">
          <div className="flex gap-3 sm:gap-4">
            <Button 
              onClick={prevCard} 
              variant="outline" 
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-gray-800 border-gray-600 text-white hover:bg-gray-700 py-3 min-h-[48px] touch-manipulation"
              disabled={currentCard === 0}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-sm sm:text-base">Previous</span>
            </Button>
            
            <Button 
              onClick={nextCard} 
              variant="outline" 
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-gray-800 border-gray-600 text-white hover:bg-gray-700 py-3 min-h-[48px] touch-manipulation"
              disabled={currentCard === flashcards.length - 1}
            >
              <span className="text-sm sm:text-base">Next</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          
          <Button 
            onClick={flipCard} 
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 min-h-[48px] text-sm sm:text-base touch-manipulation"
          >
            {isFlipped ? 'Show Question' : 'Show Answer'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlashcardMode;
