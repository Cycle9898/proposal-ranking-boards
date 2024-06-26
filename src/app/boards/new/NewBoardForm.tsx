"use client";

import { Button } from "@/components/features/form/Button";
import { Input } from "@/components/features/form/Input";
import { FormEvent } from "react";
import { submitBoardForm } from "./newBoard.action";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { CancelButton } from "@/components/features/form/CancelButton";

function NewBoardForm() {
	const router = useRouter();

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);

		const title = String(formData.get("title"));

		submitBoardForm(title)
			.then(() => router.push("/"))
			.catch(error =>
				toast.error("Error, could not create this board.\n Please try again later.", { duration: 6000 })
			);
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col max-w-3xl gap-4">
			<Input label="Board title" name="title" />

			<div className="self-center flex items-center gap-4">
				<Button type="submit" className="self-center">
					Create board
				</Button>

				<CancelButton type="button" onClick={() => router.push("/")}>
					Cancel
				</CancelButton>
			</div>
		</form>
	);
}

export default NewBoardForm;
