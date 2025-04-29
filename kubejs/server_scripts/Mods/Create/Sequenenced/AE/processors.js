// priority: 2
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
	/* createSequencedAssembly({
      baseItem: 'justdirethings:ferricore_ingot',
      incompleteItem: 'kubejs:incomplete_ferricore_mechanism',
      loops: 1,
      resultItems: [{ id: 'kubejs:ferricore_mechanism' }],
      sequenceSteps: [
        { type: 'deploying', ingredient: 'createmechanisms:wooden_mechanism' },
        { type: 'pressing' },
        { type: 'deploying', ingredient: 'justdirethings:raw_ferricore' }
      ]
    }) */

    createSequencedAssembly({
        baseItem: 'ae2:printed_calculation_processor',
        incompleteItem: 'kubejs:incomplete_calculation_processor',
        loops: 2,
        resultItems: [{ id: 'ae2:calculation_processor' }],
        sequenceSteps: [
            { type: 'filling', fluid: 'productivemetalworks:molten_redstone', amount: 100 },
            { type: 'deploying', ingredient: 'ae2:printed_silicon' },
            { type: 'pressing' },
        ]})
    
    createSequencedAssembly({
        baseItem: 'ae2:printed_logic_processor',
        incompleteItem: 'kubejs:incomplete_logic_processor',
        loops: 2,
        resultItems: [{ id: 'ae2:logic_processor' }],
        sequenceSteps: [
            { type: 'filling', fluid: 'productivemetalworks:molten_redstone', amount: 100 },
            { type: 'deploying', ingredient: 'ae2:printed_silicon' },
            { type: 'pressing' },
        ]})

    createSequencedAssembly({
        baseItem: 'ae2:printed_engineering_processor',
        incompleteItem: 'kubejs:incomplete_engineering_processor',
        loops: 2,
        resultItems: [{ id: 'ae2:engineering_processor' }],
        sequenceSteps: [
            { type: 'filling', fluid: 'productivemetalworks:molten_redstone', amount: 100 },
            { type: 'deploying', ingredient: 'ae2:printed_silicon' },
            { type: 'pressing' },
        ]})

    createSequencedAssembly({
        baseItem: 'appflux:printed_energy_processor',
        incompleteItem: 'kubejs:incomplete_energy_processor',
        loops: 2,
        resultItems: [{ id: 'appflux:energy_processor' }],
        sequenceSteps: [
            { type: 'filling', fluid: 'productivemetalworks:molten_redstone', amount: 100 },
            { type: 'deploying', ingredient: 'ae2:printed_silicon' },
            { type: 'pressing' },
        ]})

    createSequencedAssembly({
        baseItem: 'megacells:printed_accumulation_processor',
        incompleteItem: 'kubejs:incomplete_accumulation_processor',
        loops: 2,
        resultItems: [{ id: 'megacells:accumulation_processor' }],
        sequenceSteps: [
            { type: 'filling', fluid: 'productivemetalworks:molten_redstone', amount: 100 },
            { type: 'deploying', ingredient: 'ae2:printed_silicon' },
            { type: 'pressing' },
        ]})
    
    createSequencedAssembly({
        baseItem: 'advanced_ae:printed_quantum_processor',
        incompleteItem: 'kubejs:incomplete_quantum_processor',
        loops: 2,
        resultItems: [{ id: 'advanced_ae:quantum_processor' }],
        sequenceSteps: [
            { type: 'filling', fluid: 'productivemetalworks:molten_redstone', amount: 100 },
            { type: 'deploying', ingredient: 'ae2:printed_silicon' },
            { type: 'pressing' },
        ]})
    
    




}) // End Of File
