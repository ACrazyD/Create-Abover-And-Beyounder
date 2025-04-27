ServerEvents.tags('item', (event) => {
    // === Dire Things ===
	event.add('c:rods', 'kubejs:ferricore_rod')
    event.add('c:plates', 'kubejs:ferricore_plate')
    event.add('c:gears', 'kubejs:ferricore_gear')
    event.add('c:rods', 'kubejs:blazegold_rod')
    event.add('c:plates', 'kubejs:blazegold_plate')
    event.add('c:gears', 'kubejs:blazegold_gear')
    event.add('c:rods', 'kubejs:celestigem_rod')
    event.add('c:plates', 'kubejs:celestigem_plate')
    event.add('c:gears', 'kubejs:celestigem_gear')
    event.add('c:rods', 'kubejs:eclipse_alloy_rod')
    event.add('c:plates', 'kubejs:eclipse_alloy_plate')
    event.add('c:gears', 'kubejs:eclipse_alloy_gear')

})

ServerEvents.tags('fluid', (e) => {
    // === Dire Things ===
    e.add('c:liquid_ferricore', 'productivemetalworks:liquid_ferricore')
    e.add('c:liquid_blazegold', 'productivemetalworks:liquid_blazegold')
    e.add('c:liquid_celestigem', 'productivemetalworks:liquid_celestigem')
    e.add('c:liquid_eclipse_alloy', 'productivemetalworks:liquid_eclipse_alloy')

})
