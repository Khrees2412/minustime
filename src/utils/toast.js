export const showMessage = (
	title = "",
	description,
	status,
	fn,
	duration = 2000
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
