import React from 'react';

interface ButtonProps {
	onClick: () => void;
	children: React.ReactNode;
	className?: string;
	isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	onClick,
	children,
	className,
	isDisabled,
}) => {
	return (
		<button className={className} onClick={onClick} disabled={isDisabled}>
			{children}
		</button>
	);
};

export default Button;
