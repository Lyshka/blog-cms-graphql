export const CustomLeftArrow = ({onClick, rest}) => (
	<div onClick={() => onClick()} className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-blue-500 rounded-full">
		<svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
		</svg>
	</div>
);

export const CustomRightArrow = ({onClick, rest}) => (
	<div onClick={() => onClick()} className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-blue-500 rounded-full">
		<svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
		</svg>
	</div>
)