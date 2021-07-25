export const ShowMessage = (
	title = "",
	description,
	status,
	fn,
	duration = 1000
) => {
	return fn({
		title,
		position: "top",
		description: JSON.stringify(description),
		status,
		duration,
		isClosable: true,
	});
};
