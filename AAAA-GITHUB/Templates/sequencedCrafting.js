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
  })// End Of File
  