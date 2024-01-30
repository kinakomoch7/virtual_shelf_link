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
					style={{
						cursor: 'pointer',
						backgroundColor: '#021529',
						borderColor: 'white',
						borderRadius: 5,
						borderWidth: 1,
						width: '100%',
					}}
				>
					<div style={{  fontSize: 20, color:'white' }}>
						{contents}
					</div>
				</button>
			</div>
		</>
	);
};

export default ExternalPageTransition;
