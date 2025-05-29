import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

type Language = {
  code: string;
  name: string;
  nativeName: string;
};

export const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili' },
  { code: 'sheng', name: 'Sheng', nativeName: 'Sheng' },
];

type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  en: {
    'app.title': 'CPY 416: Introduction to Counselling',
    'app.faculty': 'University of Nairobi - Faculty of Arts',
    'app.lecturer': 'Dr. Benta Malusi',
    'menu.flashcards': 'Flashcards',
    'menu.flashcards.desc': 'Study key concepts, definitions, and theories from all course topics (200+ cards)',
    'menu.startFlashcards': 'Start Flashcards',
    'menu.multipleChoice': 'Multiple Choice',
    'menu.multipleChoice.desc': 'Test your knowledge with comprehensive multiple choice questions (200+ questions)',
    'menu.startQuiz': 'Start Quiz',
    'menu.trueFalse': 'True or False',
    'menu.trueFalse.desc': 'Quick true/false questions to reinforce your understanding (200+ questions)',
    'menu.startTFQuiz': 'Start T/F Quiz',
    'course.overview': 'Course Overview',
    'course.objectives': 'Course Objectives',
    'course.objectives.list': '• Understanding origins and future directions in counselling psychology\n• Describing characteristics of effective counsellors\n• Understanding counselling in cultural contexts\n• Assisting clients in therapy effectively\n• Interpreting professional standards and ethics',
    'course.assessment': 'Assessment',
    'course.tests': 'Tests and Quizzes (CATs):',
    'course.exam': 'Examination:',
    'course.attendance': 'Plus: Class Attendance and Participation',
  },
  sw: {
    'app.title': 'CPY 416: Utangulizi wa Ushauri',
    'app.faculty': 'Chuo Kikuu cha Nairobi - Kitivo cha Sanaa',
    'app.lecturer': 'Dkt. Benta Malusi',
    'menu.flashcards': 'Kadi za Kujifunzia',
    'menu.flashcards.desc': 'Jifunze dhana muhimu, ufafanuzi, na nadharia kutoka kwa mada zote za kozi (kadi 200+)',
    'menu.startFlashcards': 'Anza Kujifunza',
    'menu.multipleChoice': 'Maswali ya Kuchagua',
    'menu.multipleChoice.desc': 'Jaribu ujuzi wako kwa maswali ya kuchagua jibu (zaidi ya maswali 200)',
    'menu.startQuiz': 'Anza Jaribio',
    'menu.trueFalse': 'Kweli au Sio Kweli',
    'menu.trueFalse.desc': 'Maswali ya kweli/si kweli ya kukusaidia kukumbuka mambo muhimu (zaidi ya maswali 200)',
    'menu.startTFQuiz': 'Anza Jaribio la Kweli/Si Kweli',
    'course.overview': 'Ufupisho wa Kozi',
    'course.objectives': 'Malengo ya Kozi',
    'course.objectives.list': '• Kuelewa asili na mwelekeo wa baadaye katika saikolojia ya ushauri\n• Kuelezea sifa za washauri bora\n• Kuelewa ushauri katika miktadha ya kitamaduni\n• Kuwasaidia wateja kwa ufanisi katika tiba\n• Kufasili viwango vya kitaaluma na maadili',
    'course.assessment': 'Tathmini',
    'course.tests': 'Majaribio na Maswali (CATs):',
    'course.exam': 'Mtihani:',
    'course.attendance': 'Pamoja na: Uwepo na Ushiriki Darasani',
  },
  sheng: {
    'app.title': '',
    'app.faculty': '',
    'app.lecturer': '',
    'menu.flashcards': 'Kadi za Kufunzwa',
    'menu.flashcards.desc': 'Jifunze mambo muhimu, maelezo, na theories kutoka kwa mada zote (zaidi ya kadi 200)',
    'menu.startFlashcards': 'Anza Kufunzwa',
    'menu.multipleChoice': 'Maswali ya Kuchagua',
    'menu.multipleChoice.desc': 'Jaribu ujuzi wako kwa maswali ya kuchagua (zaidi ya maswali 200)',
    'menu.startQuiz': 'Anza Mchezo',
    'menu.trueFalse': 'Kweli au Sio Kweli',
    'menu.trueFalse.desc': 'Maswali ya kweli/si kweli kukusaidia kukumbuka (zaidi ya maswali 200)',
    'menu.startTFQuiz': 'Anza Mchezo wa Kweli/Simwizi',
    'course.overview': '',
    'course.objectives': '',
    'course.objectives.list': '',
    'course.assessment': '',
    'course.tests': '',
    'course.exam': '',
    'course.attendance': '',
  },
  // Add more translations for other languages as needed
};

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
  languages: Language[];
};

const defaultLanguage = 'en';

export const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key: string) => key,
  languages: [],
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<string>(
    localStorage.getItem('language') || defaultLanguage
  );

  const setLanguage = useCallback((lang: string) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[language]?.[key] || translations[defaultLanguage]?.[key] || key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
