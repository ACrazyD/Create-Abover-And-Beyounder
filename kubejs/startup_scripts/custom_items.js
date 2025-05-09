console.info('Mayhem Loading... Pt. 2')
StartupEvents.registry('item', (e) => {
	e.create('ferricore_gear').displayName('Ferricore Gear').texture('kubejs:item/gear').color(0xB1E5DB)
	e.create('ferricore_plate').displayName('Ferricore Plate').texture('kubejs:item/plate').color(0xB1E5DB)
	e.create('ferricore_rod').displayName('Ferricore Rod').texture('kubejs:item/rod').color(0xB1E5DB)
    e.create('blazegold_gear').displayName('Blazegold Gear').texture('kubejs:item/gear').color(0xCF6D4B)
    e.create('blazegold_plate').displayName('Blazegold Plate').texture('kubejs:item/plate').color(0xCF6D4B)
    e.create('blazegold_rod').displayName('Blazegold Rod').texture('kubejs:item/rod').color(0xCF6D4B)
    e.create('celestigem_gear').displayName('Celestigem Gear').texture('kubejs:item/gear').color(0x36C3B9)
    e.create('celestigem_plate').displayName('Celestigem Plate').texture('kubejs:item/plate').color(0x36C3B9)
    e.create('celestigem_rod').displayName('Celestigem Rod').texture('kubejs:item/rod').color(0x36C3B9)
    e.create('eclipse_alloy_gear').displayName('Eclipse Alloy Gear').texture('kubejs:item/gear').color(0x405663)
    e.create('eclipse_alloy_plate').displayName('Eclipse Alloy Plate').texture('kubejs:item/plate').color(0x405663)
    e.create('eclipse_alloy_rod').displayName('Eclipse Alloy Rod').texture('kubejs:item/rod').color(0x405663)
})

StartupEvents.registry('block', e => {
    e.create('certus_hull').displayName('Certus Hull').hardness(1.5)
})
