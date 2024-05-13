import React from 'react';

interface ImgProps {
	src: string;
	alt: string;
	className?: string;
	style?: React.CSSProperties;
}

const Img: React.FC<ImgProps> = ({ src, alt, className = '', style = {} }) => {
	return <img src={src} alt={alt} className={className} style={style} />;
};

export default Img;
