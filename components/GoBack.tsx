import { useRouter } from 'next/router';
import { FiChevronLeft } from 'react-icons/fi';

const GoBackButton = () => {
	const router = useRouter();
	return (
		<button
			className="px-2 py-1 text-lg font-semibold text-white rounded-md shadow-lg bg-violet-500 tooltip" data-tip="Go Back" onClick={() => router.back()}>
			<FiChevronLeft size={36} />
		</button>
	);
};

export default GoBackButton;