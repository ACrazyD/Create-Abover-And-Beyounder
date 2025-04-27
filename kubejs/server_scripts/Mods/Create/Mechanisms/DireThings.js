ServerEvents.recipes(function (event) {
    function item (id) {
      return { item: id }
    }
  
    function fluidStack (fluidName, amount) {
      return { type: 'fluid_stack', fluid: fluidName, amount: amount }
    }
  
    function result (id, chance) {
      return chance ? { chance: chance, id: id } : { id: id }
    }
  
    function createSequencedAssembly (args) {
      var incomplete = args.incompleteItem
  
      var sequence = args.sequenceSteps.map(function (step) {
        if (step.type === 'pressing') {
          return {
            type: 'create:pressing',
            ingredients: [item(incomplete)],
            results: [{ id: incomplete }]
          }
        } else if (step.type === 'filling') {
          return {
            type: 'create:filling',
            ingredients: [item(incomplete), fluidStack(step.fluid, step.amount)],
            results: [{ id: incomplete }]
          }
        } else {
          return {
            type: 'create:' + step.type,
            ingredients: [item(incomplete), item(step.ingredient)],
            results: [{ id: incomplete }]
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
        results: results
      })
    }
  
    // === Recipes ===
    createSequencedAssembly({
      baseItem: 'createmechanisms:wooden_mechanism',
      incompleteItem: 'kubejs:incomplete_ferricore_mechanism',
      loops: 1,
      resultItems: [{ id: 'kubejs:ferricore_mechanism' }],
      sequenceSteps: [
        { type: 'deploying', ingredient: 'justdirethings:raw_ferricore' },
        { type: 'filling', fluid: 'productivemetalworks:liquid_ferricore', amount: 90 },
        { type: 'pressing' },
        { type: 'deploying', ingredient: 'justdirethings:raw_ferricore' }
      ]
    })

    createSequencedAssembly({
      baseItem: 'kubejs:ferricore_mechanism',
      incompleteItem: 'kubejs:incomplete_blazegold_mechanism',
      loops: 2,
      resultItems: [{ id: 'kubejs:blazegold_mechanism' }],
      sequenceSteps: [
        { type: 'deploying', ingredient: 'justdirethings:raw_blazegold' },
        { type: 'filling', fluid: 'productivemetalworks:liquid_blazegold', amount: 90 },
        { type: 'pressing' },
        { type: 'deploying', ingredient: 'justdirethings:raw_blazegold' }
      ]
    })

    createSequencedAssembly({
      baseItem: 'kubejs:blazegold_mechanism',
      incompleteItem: 'kubejs:incomplete_celestigem_mechanism',
      loops: 3,
      resultItems: [{ id: 'kubejs:celestigem_mechanism' }],
      sequenceSteps: [
        { type: 'deploying', ingredient: 'justdirethings:celestigem' },
        { type: 'filling', fluid: 'productivemetalworks:liquid_celestigem', amount: 100 },
        { type: 'pressing' },
        { type: 'deploying', ingredient: 'justdirethings:celestigem' }
      ]
    })

    createSequencedAssembly({
      baseItem: 'kubejs:celestigem_mechanism',
      incompleteItem: 'kubejs:incomplete_eclipse_alloy_mechanism',
      loops: 4,
      resultItems: [{ id: 'kubejs:eclipse_alloy_mechanism' }],
      sequenceSteps: [
        { type: 'deploying', ingredient: 'justdirethings:raw_eclipsealloy' },
        { type: 'filling', fluid: 'productivemetalworks:liquid_eclipse_alloy', amount: 90 },
        { type: 'pressing' },
        { type: 'deploying', ingredient: 'justdirethings:raw_eclipsealloy' }
      ]
    })

})