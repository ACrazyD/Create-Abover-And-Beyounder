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
    baseItem: 'createmechanisms:advanced_precision_mechanism',
    incompleteItem: 'createmechanisms:incomplete_ender_mechanism',
    loops: 10,
    resultItems: [{ id: 'createmechanisms:ender_mechanism' }],
    sequenceSteps: [
      { type: 'filling', fluid: 'createmechanisms:enderiam', amount: 200 },
      { type: 'pressing' },
      { type: 'deploying', ingredient: 'create:powdered_obsidian' },
      { type: 'deploying', ingredient: 'ae2:ender_dust' }
    ]
  })

  createSequencedAssembly({
    baseItem: 'create:andesite_casing',
    incompleteItem: 'createmechanisms:incomplete_wooden_mechanism',
    loops: 2,
    resultItems: [
      { chance: 60.0, id: 'createmechanisms:wooden_mechanism' },
      { chance: 10.0, id: 'create:andesite_casing' },
      { chance: 5.0, id: 'create:andesite_alloy' },
      { chance: 5.0, id: 'create:cogwheel' },
      { chance: 5.0, id: 'create:large_cogwheel' },
      { chance: 5.0, id: 'create:shaft' },
      { chance: 5.0, id: 'minecraft:andesite' },
      { chance: 5.0, id: 'create:zinc_nugget' }
    ],
    sequenceSteps: [
      { type: 'deploying', ingredient: 'create:cogwheel' },
      { type: 'pressing' },
      { type: 'deploying', ingredient: 'create:large_cogwheel' },
      { type: 'pressing' },
      { type: 'deploying', ingredient: 'create:shaft' }
    ]
  })

  createSequencedAssembly({
    baseItem: 'create:precision_mechanism',
    incompleteItem: 'createmechanisms:incomplete_advanced_precision_mechanism',
    loops: 4,
    resultItems: [
      { chance: 60.0, id: 'createmechanisms:advanced_precision_mechanism' },
      { chance: 8.0, id: 'create:precision_mechanism' },
      { chance: 8.0, id: 'create:zinc_ingot' },
      { chance: 5.0, id: 'create:brass_ingot' },
      { chance: 3.0, id: 'create:brass_sheet' },
      { chance: 2.0, id: 'create:iron_sheet' },
      { chance: 2.0, id: 'createmechanisms:wooden_mechanism' },
      { chance: 6.0, id: 'createmechanisms:zinc_mechanism' },
      { chance: 6.0, id: 'createmechanisms:rubber_mechanism' }
    ],
    sequenceSteps: [
      { type: 'deploying', ingredient: 'createmechanisms:wooden_mechanism' },
      { type: 'deploying', ingredient: 'createmechanisms:zinc_mechanism' },
      { type: 'deploying', ingredient: 'createmechanisms:rubber_mechanism' }
    ]
  })

  createSequencedAssembly({
    baseItem: 'createmechanisms:bronze',
    incompleteItem: 'createmechanisms:incomplete_heat_mechanism',
    loops: 5,
    resultItems: [{ id: 'createmechanisms:heat_mechanism' }],
    sequenceSteps: [
      { type: 'pressing' },
      { type: 'deploying', ingredient: 'minecraft:magma_block' },
      { type: 'filling', fluid: 'minecraft:lava', amount: 200 }
    ]
  })

  createSequencedAssembly({
    baseItem: 'createmechanisms:wooden_mechanism',
    incompleteItem: 'createmechanisms:incomplete_rubber_mechanism',
    loops: 1,
    resultItems: [{ id: 'createmechanisms:rubber_mechanism' }],
    sequenceSteps: [
      { type: 'deploying', ingredient: 'createmechanisms:cured_rubber' },
      { type: 'pressing' },
      { type: 'deploying', ingredient: 'create:copper_nugget' }
    ]
  })

  createSequencedAssembly({
    baseItem: 'justdirethings:ferricore_ingot',
    incompleteItem: 'kubejs:incomplete_ferricore_mechanism',
    loops: 1,
    resultItems: [{ id: 'kubejs:ferricore_mechanism' }],
    sequenceSteps: [
      { type: 'deploying', ingredient: 'createmechanisms:wooden_mechanism' },
      { type: 'pressing' },
      { type: 'deploying', ingredient: 'justdirethings:raw_ferricore' }
    ]
  })
})
