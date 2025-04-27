ServerEvents.recipes((event) => {
	// === Functions ===

	function MWalloying(event, recipes) {
		recipes.forEach((recipe) => {
			const fluids = recipe.fluids.map((f) => {
				if (f.type === 'tag') {
					return { amount: f.amount, tag: f.name }
				} else if (f.type === 'fluid') {
					return { amount: f.amount, fluid: f.name }
				} else {
					throw new Error(`Unknown fluid type: ${f.type}`)
				}
			})

			const conditions = recipe.fluids
				.filter((f) => f.type === 'tag')
				.map((f) => ({
					type: 'neoforge:not',
					value: {
						type: 'productivelib:fluid_tag_empty',
						tag: f.name,
					},
				}))

			// Separate custom event for each recipe
			event.custom({
				type: 'productivemetalworks:fluid_alloying',
				'neoforge:conditions': conditions,
				fluids: fluids,
				result: recipe.result,
				speed: recipe.speed ?? 10,
			})
		})
	}

	// === Recipes ===

	MWalloying(event, [
		{
			fluids: [
				{ type: 'tag', name: 'c:molten_platinum', amount: 500 },
				{ type: 'tag', name: 'c:molten_ender', amount: 500 },
			],
			result: { id: 'createmechanisms:enderiam', amount: 1000 },
			speed: 10,
		},
	])
}) // End of File
