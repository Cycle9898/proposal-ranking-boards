import UpVote from "./UpVote";

type PropositionLineProps = {
	title: string;
	id: number;
	voteCount: number;
};

function Proposition({ title, id, voteCount }: PropositionLineProps) {
	return (
		<div className="p-6 flex justify-between items-center rounded-lg shadow bg-gray-300 dark:bg-gray-800 border-gray-700 gap-2 w-full">
			<h5 className="text-2xl font-bold tracking-tight dark:text-white">{title}</h5>
			<UpVote voteCount={voteCount} propositionId={id} />
		</div>
	);
}

export default Proposition;
