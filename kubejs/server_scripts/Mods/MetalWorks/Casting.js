ServerEvents.recipes((event) => {
	// === Functions ===
	function addItemCastingRecipe(recipe) {
		const castMapping = {
			ingot: {
				item: 'productivemetalworks:ingot_cast',
				fluidAmount: 90,
			},
			nugget: {
				item: 'productivemetalworks:nugget_cast',
				fluidAmount: 10,
			},
			gem: {
				item: 'productivemetalworks:gem_cast',
				fluidAmount: 100,
			},
			gear: {
				item: 'productivemetalworks:gear_cast',
				fluidAmount: 360,
			},
			rod: {
				item: 'productivemetalworks:rod_cast',
				fluidAmount: 45,
			},
			plate: {
				item: 'productivemetalworks:plate_cast',
				fluidAmount: 90,
			},
		}
		let castItem, fluidAmount, outCount
		if (castMapping[recipe.cast]) {
			castItem = castMapping[recipe.cast].item
			fluidAmount = castMapping[recipe.cast].fluidAmount
		} else {
			castItem = recipe.cast
			fluidAmount = recipe.amount
		}
		outCount = recipe.outCount !== undefined ? recipe.outCount : 1
		
        event.custom({
			type: 'productivemetalworks:item_casting',
			cast: {
				item: castItem,
			},
			consume_cast: false,
			fluid: {
				amount: fluidAmount,
				tag: recipe.fluid,
			},
			result: {
				count: outCount,
				id: recipe.output,
			},
		})
	}

	// === Recipes ===

	addItemCastingRecipe({
		cast: 'plate',
		fluid: 'c:liquid_ferricore',
		output: 'kubejs:ferricore_plate',
	})

	addItemCastingRecipe({
		cast: 'plate',
		fluid: 'c:liquid_blazegold',
		output: 'kubejs:blazegold_plate',
	})

	addItemCastingRecipe({
		cast: 'plate',
		fluid: 'c:liquid_celestigem',
		output: 'kubejs:celestigem_plate',
	})

	addItemCastingRecipe({
		cast: 'plate',
		fluid: 'c:liquid_eclipse_alloy',
		output: 'kubejs:eclipse_alloy_plate',
	})

	addItemCastingRecipe({
		cast: 'rod',
		fluid: 'c:liquid_ferricore',
		output: 'kubejs:ferricore_rod',
	})

	addItemCastingRecipe({
		cast: 'rod',
		fluid: 'c:liquid_blazegold',
		output: 'kubejs:blazegold_rod',
	})

	addItemCastingRecipe({
		cast: 'rod',
		fluid: 'c:liquid_celestigem',
		output: 'kubejs:celestigem_rod',
	})

	addItemCastingRecipe({
		cast: 'rod',
		fluid: 'c:liquid_eclipse_alloy',
		output: 'kubejs:eclipse_alloy_rod',
	})

	addItemCastingRecipe({
		cast: 'gear',
		fluid: 'c:liquid_ferricore',
		output: 'kubejs:ferricore_gear',
	})

	addItemCastingRecipe({
		cast: 'gear',
		fluid: 'c:liquid_blazegold',
		output: 'kubejs:blazegold_gear',
	})

	addItemCastingRecipe({
		cast: 'gear',
		fluid: 'c:liquid_celestigem',
		output: 'kubejs:celestigem_gear',
	})

	addItemCastingRecipe({
		cast: 'gear',
		fluid: 'c:liquid_eclipse_alloy',
		output: 'kubejs:eclipse_alloy_gear',
	})

})//End Of File...............................
