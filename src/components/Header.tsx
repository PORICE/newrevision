import React from 'react';
import { useTranslation } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header: React.FC = () => {
  const { t, language, setLanguage, languages } = useTranslation();
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white">{t('app.title')}</h1>
          </div>
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-300 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <Languages className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">{currentLanguage.name}</span>
                  <span className="sr-only">Change language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-gray-800 border-gray-700 text-white">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    className={`cursor-pointer ${language === lang.code ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                    onClick={() => setLanguage(lang.code)}
                  >
                    <span className="flex-1">{lang.name}</span>
                    <span className="text-xs text-gray-400">{lang.nativeName}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
