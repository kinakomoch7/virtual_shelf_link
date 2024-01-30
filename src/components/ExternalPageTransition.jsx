const ExternalPageTransition = (props) => {
	const { url, contents } = props;
	return (
		<>
			<div>
				<button
					type="button"
					onClick={() => {
						window.open(url, "_blank");
					}}
				>
					{contents}
				</button>
			</div>
		</>
	);
};

export default ExternalPageTransition;
