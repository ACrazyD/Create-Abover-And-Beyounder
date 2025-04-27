StartupEvents.registry('fluid', (e) => {

    // Just Injecting Fluids Into Mods Because I Can...
    
    // Custom Fluids for PMW/Just Dire Things
    e.create('productivemetalworks:liquid_ferricore', 'thick')
        .displayName('Liquid Ferricore')
        .tint(0xB1E5DB)
        .noBlock()

    e.create('productivemetalworks:liquid_blazegold', 'thick')
        .displayName('Liquid Blazegold')
        .tint(0xCF6D4B)
        .noBlock()

    e.create('productivemetalworks:liquid_celestigem', 'thick')
        .displayName('Liquid Celestigem')
        .tint(0x36C3B9)
        .noBlock()

    e.create('productivemetalworks:liquid_eclipse_alloy', 'thick')
        .displayName('Liquid Eclipse Alloy')
        .tint(0x405663)
        .noBlock()

})// End Of File