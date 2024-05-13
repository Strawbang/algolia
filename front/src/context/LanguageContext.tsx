import React, {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';

type LanguageContextType = {
	selectedLanguage: string;
	handleLanguageChange: (language: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
);

export const useLanguageContext = (): LanguageContextType => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error(
			'useLanguageContext must be used within a LanguageProvider'
		);
	}
	return context;
};

type LanguageProviderProps = {
	children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
	children,
}) => {
	const [selectedLanguage, setSelectedLanguage] = useState<string>(() => {
		const storedLanguage = localStorage.getItem('selectedLanguage');
		return storedLanguage || 'english';
	});

	const handleLanguageChange = (language: string) => {
		setSelectedLanguage(language);
	};

	useEffect(() => {
		localStorage.setItem('selectedLanguage', selectedLanguage);
	}, [selectedLanguage]);

	const contextValue: LanguageContextType = {
		selectedLanguage,
		handleLanguageChange,
	};

	return (
		<LanguageContext.Provider value={contextValue}>
			{children}
		</LanguageContext.Provider>
	);
};
