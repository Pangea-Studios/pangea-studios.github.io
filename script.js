window.addEventListener(
    'scroll',
    () => {
        document.body.style.setProperty(
            '--scroll',
            window.scrollY /
                (document.body.offsetHeight - window.innerHeight),
        );

		if (window.scrollY /
			(document.body.offsetHeight - window.innerHeight) >= 1) {
			document.body.style.setProperty(
				'--scroll',
				0.9999,
			);
				}
    },
    false,
);
