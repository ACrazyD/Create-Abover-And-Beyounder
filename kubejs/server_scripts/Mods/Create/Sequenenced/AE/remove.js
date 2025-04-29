// prority: 1
ServerEvents.recipes(e => { 
    // Remove Types (Refrence)
    //e.remove({ output: '' })
    //e.remove({ output: '#' })
    //e.remove({ mod: '' })
    //e.remove({ id: '' })
    
    //Chips
    e.remove({ output: 'ae2:logic_processor'})
    e.remove({ output: 'ae2:engineering_processor'})
    e.remove({ output: 'ae2:calculation_processor'})
    e.remove({ output: 'appflux:energy_processor'})
    e.remove({ output: 'megacells:accumulation_processor'})
    e.remove({ output: 'advanced_ae:quantum_processor'})

    // Storage Components
    e.remove({ output: 'ae2:cell_component_1k'})
    e.remove({ output: 'ae2:cell_component_4k'})
    e.remove({ output: 'ae2:cell_component_16k'})
    e.remove({ output: 'ae2:cell_component_64k'})
    e.remove({ output: 'ae2:cell_component_256k'})
    e.remove({ output: 'megacells:cell_component_1m'})
    e.remove({ output: 'megacells:cell_component_4m'})
    e.remove({ output: 'megacells:cell_component_16m'})
    e.remove({ output: 'megacells:cell_component_64m'})
    e.remove({ output: 'megacells:bulk_cell_component'})
    e.remove({ output: 'appflux:core_1k'})
    e.remove({ output: 'appflux:core_4k'})
    e.remove({ output: 'appflux:core_16k'})
    e.remove({ output: 'appflux:core_64k'})
    e.remove({ output: 'appflux:core_256k'})
    e.remove({ output: 'appflux:core_1m'})
    e.remove({ output: 'appflux:core_4m'})
    e.remove({ output: 'appflux:core_16m'})
    e.remove({ output: 'appflux:core_64m'})
    e.remove({ output: 'appflux:core_256m'})
    e.remove({ output: 'advanced_ae:quantum_storage_component'})

    //Random Bits
    e.remove({ output: 'ae2:formation_core'})
    e.remove({ output: 'ae2:annihilation_core'})
    
})// End Of File