ServerEvents.recipes(event => {
    // === Function ===
	function addItemMeltingRecipe(recipe) {
		let ingredient = recipe.ingredient;
		let fluid = recipe.fluid;
		let amount = recipe.amount;
		let minTemp = recipe.minTemp !== undefined ? recipe.minTemp : 1000;
		let maxTemp = recipe.maxTemp !== undefined ? recipe.maxTemp : 0;

		event.custom({
			type: 'productivemetalworks:item_melting',
			ingredient: ingredient.startsWith('#') ? { tag: ingredient.slice(1) } : { item: ingredient },
			minimum_temperature: minTemp,
			maximum_temperature: maxTemp,
			result: [
				{
					id: fluid,
					amount: amount
				}
			],
			'neoforge:conditions': ingredient.startsWith('#') ? [
				{
					type: 'neoforge:not',
					value: {
						type: 'neoforge:tag_empty',
						tag: ingredient.slice(1)
					}
				}
			] : []
		});
	}

    // === Recipes ===
	addItemMeltingRecipe({
		ingredient: 'justdirethings:ferricore_ingot',
		fluid: 'productivemetalworks:liquid_ferricore',
		amount: 90,
	});

	addItemMeltingRecipe({
		ingredient: 'justdirethings:blazegold_ingot',
		fluid: 'productivemetalworks:liquid_blazegold',
		amount: 90
	});

	addItemMeltingRecipe({
		ingredient: 'justdirethings:celestigem',
		fluid: 'productivemetalworks:liquid_celestigem',
		amount: 100
	});

	addItemMeltingRecipe({
		ingredient: 'justdirethings:eclipsealloy_ingot',
		fluid: 'productivemetalworks:liquid_eclipse_alloy',
		amount: 90
	});

	addItemMeltingRecipe({
		ingredient: 'justdirethings:raw_ferricore',
		fluid: 'productivemetalworks:liquid_ferricore',
		amount: 180,
	});

	addItemMeltingRecipe({
		ingredient: 'justdirethings:raw_blazegold',
		fluid: 'productivemetalworks:liquid_blazegold',
		amount: 180
	});

	addItemMeltingRecipe({
		ingredient: 'justdirethings:raw_eclipsealloy',
		fluid: 'productivemetalworks:liquid_eclipse_alloy',
		amount: 180
	});
});
