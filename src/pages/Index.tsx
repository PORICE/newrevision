
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, CheckCircle, FileText } from 'lucide-react';
import FlashcardMode from '@/components/FlashcardMode';
import MultipleChoiceMode from '@/components/MultipleChoiceMode';
import TrueFalseMode from '@/components/TrueFalseMode';
import { useTranslation } from '@/contexts/LanguageContext';
import Header from '@/components/Header';

type StudyMode = 'menu' | 'flashcards' | 'multiple-choice' | 'true-false';

const Index = () => {
  const [currentMode, setCurrentMode] = useState<StudyMode>('menu');
  const { t } = useTranslation();

  const renderCurrentMode = () => {
    switch (currentMode) {
      case 'flashcards':
        return <FlashcardMode onBack={() => setCurrentMode('menu')} />;
      case 'multiple-choice':
        return <MultipleChoiceMode onBack={() => setCurrentMode('menu')} />;
      case 'true-false':
        return <TrueFalseMode onBack={() => setCurrentMode('menu')} />;
      default:
        return (
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
            <Header />
            <div className="max-w-4xl mx-auto p-2 sm:p-4">
              <div className="h-4 sm:h-6"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <Card className="bg-gray-800/80 border-gray-700 hover:bg-gray-700/80 transition-all duration-300 cursor-pointer backdrop-blur-sm" 
                      onClick={() => setCurrentMode('flashcards')}>
                  <CardHeader className="text-center pb-4">
                    <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-blue-400 mb-2" />
                    <CardTitle className="text-lg sm:text-xl text-white">{t('menu.flashcards')}</CardTitle>
                    <CardDescription className="text-gray-300 text-sm">
                      {t('menu.flashcards.desc')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base">
                      {t('menu.startFlashcards')}
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/80 border-gray-700 hover:bg-gray-700/80 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                      onClick={() => setCurrentMode('multiple-choice')}>
                  <CardHeader className="text-center pb-4">
                    <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-green-400 mb-2" />
                    <CardTitle className="text-lg sm:text-xl text-white">{t('menu.multipleChoice')}</CardTitle>
                    <CardDescription className="text-gray-300 text-sm">
                      {t('menu.multipleChoice.desc')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-base">
                      {t('menu.startQuiz')}
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/80 border-gray-700 hover:bg-gray-700/80 transition-all duration-300 cursor-pointer backdrop-blur-sm sm:col-span-2 lg:col-span-1"
                      onClick={() => setCurrentMode('true-false')}>
                  <CardHeader className="text-center pb-4">
                    <FileText className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-purple-400 mb-2" />
                    <CardTitle className="text-lg sm:text-xl text-white">{t('menu.trueFalse')}</CardTitle>
                    <CardDescription className="text-gray-300 text-sm">
                      {t('menu.trueFalse.desc')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-base">
                      {t('menu.startTFQuiz')}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated Doodle Background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
        {/* Doodle Elements */}
        <div className="absolute inset-0 opacity-20 overflow-hidden">
          {[...Array(15)].map((_, i) => {
            const size = Math.random() * 120 + 80;
            const style = {
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 40 + 20}s linear infinite`,
              animationDelay: `${Math.random() * 20}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: 0.1 + Math.random() * 0.3,
            };
            
            // Different doodle shapes
            const shapes = [
              // Circle
              <div key={`circle-${i}`} className="absolute rounded-full border-2 border-blue-400" style={style} />,
              // Square
              <div key={`square-${i}`} className="absolute border-2 border-purple-400" style={style} />,
              // Triangle
              <div key={`triangle-${i}`} className="absolute" style={{
                ...style,
                width: 0,
                height: 0,
                borderLeft: `${size/2}px solid transparent`,
                borderRight: `${size/2}px solid transparent`,
                borderBottom: `${size}px solid rgba(236, 72, 153, 0.3)`,
                background: 'none',
              }} />,
              // Line
              <div key={`line-${i}`} className="absolute h-1 bg-green-400" style={{
                ...style,
                width: `${size}px`,
                height: '2px',
                transform: `rotate(${Math.random() * 180}deg)`,
              }} />
            ];
            
            return shapes[Math.floor(Math.random() * shapes.length)];
          })}
          
          {/* Continuous squiggly line */}
          <svg className="absolute w-full h-full" style={{ opacity: 0.2 }}>
            <path 
              d="M0,100 C150,200 350,0 500,100 C650,200 750,0 1000,100" 
              stroke="#60a5fa" 
              fill="none" 
              strokeWidth="2"
              strokeDasharray="10,10"
            >
              <animate 
                attributeName="d" 
                dur="60s" 
                repeatCount="indefinite"
                values="
                  M0,100 C150,200 350,0 500,100 C650,200 750,0 1000,100;
                  M0,100 C150,0 350,200 500,100 C650,0 750,200 1000,100;
                  M0,100 C150,200 350,0 500,100 C650,200 750,0 1000,100"
                keyTimes="0;0.5;1"
              />
            </path>
          </svg>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {renderCurrentMode()}
      </div>
      
      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(20px, 20px) rotate(5deg);
          }
          50% {
            transform: translate(0, 40px) rotate(0deg);
          }
          75% {
            transform: translate(-20px, 20px) rotate(-5deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
