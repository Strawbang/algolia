import React, { ChangeEventHandler, RefObject } from 'react';

interface InputProps {
	className: string;
	type: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	min?: string;
	max?: string;
	disabled?: boolean;
	value?: string | number;
	placeholder?: string;
	autoFocus?: boolean;
	ref?: RefObject<HTMLInputElement>;
	autoComplete?: string;
	autoCorrect?: string;
	autoCapitalize?: string;
	spellCheck?: boolean;
	maxLength?: number;
	checked?: boolean;
}

const Input: React.FC<InputProps> = ({
	value,
	onChange,
	className,
	type,
	ref,
	placeholder = '',
	autoFocus = false,
	autoComplete,
	autoCorrect,
	autoCapitalize,
	spellCheck,
	maxLength,
	checked,
	min,
	max,
	disabled,
}) => {
	return (
		<input
			ref={ref}
			type={type}
			className={className}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			autoFocus={autoFocus}
			autoComplete={autoComplete}
			autoCorrect={autoCorrect}
			autoCapitalize={autoCapitalize}
			spellCheck={spellCheck}
			maxLength={maxLength}
			checked={checked}
			min={min}
			max={max}
			disabled={disabled}
		/>
	);
};

export default Input;
