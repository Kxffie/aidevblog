import { useRouter } from 'next/router';

const GoBackButton = () => {
	const router = useRouter();
	return (
		<button
			className="px-2 py-1 text-lg font-semibold text-white rounded-md shadow-lg bg-violet-500"
			onClick={() => router.back()}
		>
			Go Back
		</button>
	);
};

export default GoBackButton;