export const getTypeColor = (type: string) => {
	switch (type) {
		case 'Bug':
			return 'bg-green-500';
		case 'Poison':
			return 'bg-purple-500';
		case 'Fire':
			return 'bg-red-500';
		case 'Water':
			return 'bg-blue-500';
		case 'Grass':
			return 'bg-green-600';
		case 'Electric':
			return 'bg-yellow-400';
		case 'Ice':
			return 'bg-blue-200';
		case 'Fighting':
			return 'bg-red-600';
		case 'Ground':
			return 'bg-yellow-600';
		case 'Flying':
			return 'bg-indigo-300';
		case 'Psychic':
			return 'bg-pink-400';
		case 'Rock':
			return 'bg-gray-500';
		case 'Ghost':
			return 'bg-indigo-700';
		case 'Dragon':
			return 'bg-purple-600';
		case 'Dark':
			return 'bg-gray-800';
		case 'Steel':
			return 'bg-gray-400';
		case 'Fairy':
			return 'bg-pink-200';
		default:
			return 'bg-gray-300';
	}
};
