ServerEvents.recipes(function (event) {
	function item(id) {
		return { item: id }
	}

	function fluidStack(fluidName, amount) {
		return { type: 'fluid_stack', fluid: fluidName, amount: amount }
	}

	function result(id, chance) {
		return chance ? { chance: chance, id: id } : { id: id }
	}

	function createSequencedAssembly(args) {
		var incomplete = args.incompleteItem

		var sequence = args.sequenceSteps.map(function (step) {
			if (step.type === 'pressing') {
				return {
					type: 'create:pressing',
					ingredients: [item(incomplete)],
					results: [{ id: incomplete }],
				}
			} else if (step.type === 'filling') {
				return {
					type: 'create:filling',
					ingredients: [item(incomplete), fluidStack(step.fluid, step.amount)],
					results: [{ id: incomplete }],
				}
			} else {
				return {
					type: 'create:' + step.type,
					ingredients: [item(incomplete), item(step.ingredient)],
					results: [{ id: incomplete }],
				}
			}
		})

		var results = (args.resultItems || []).map(function (r) {
			return result(r.id, r.chance)
		})

		event.custom({
			type: 'create:sequenced_assembly',
			ingredient: item(args.baseItem),
			transitional_item: { id: incomplete },
			loops: args.loops,
			sequence: sequence,
			results: results,
		})
	}

	// === Recipes ===
	createSequencedAssembly({
        baseItem: 'sophisticatedstorage:basic_to_netherite_tier_upgrade',
        incompleteItem: 'kubejs:incomplete_1k_storage_cell',
        loops: 2,
        resultItems: [
            { chance: 95.0, id: 'ae2:cell_component_1k' },
            { chance: 5.0, id: 'ae2:logic_processor' },
            { chance: 5.0, id: 'ae2:engineering_processor' },
            { chance: 5.0, id: 'ae2:calculation_processor' },
            { chance: 3.0, id: 'ae2:certus_quartz_crystal' },
            { chance: 1.0, id: 'minecraft:netherite_scrap'}
        ],
        sequenceSteps: [
            { type: 'deploying', ingredient: 'ae2:logic_processor' },
            { type: 'deploying', ingredient: 'ae2:engineering_processor' },
            { type: 'deploying', ingredient: 'ae2:calculation_processor' },
            { type: 'pressing' },
        ]
    })

    createSequencedAssembly({
        baseItem: 'ae2:cell_component_1k',
        incompleteItem: 'kubejs:incomplete_4k_storage_cell',
        loops: 2,
        resultItems: [
            { chance: 95.0, id: 'ae2:cell_component_4k' },
            { chance: 10.0, id: 'ae2:cell_component_1k' },
            { chance: 5.0, id: 'ae2:certus_quartz_crystal' },
        ],
        sequenceSteps: [
            { type: 'deploying', ingredient: 'ae2:cell_component_1k' },
            { type: 'deploying', ingredient: 'ae2:cell_component_1k' },
            { type: 'pressing' },
            { type: 'deploying', ingredient: 'ae2:certus_quartz_crystal' },
        ]
    })

        
    
}) // End Of File
