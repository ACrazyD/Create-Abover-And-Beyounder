console.info('Mayhem Loading... Pt. 1')
StartupEvents.registry('item', e => {
  e.create('ferricore_mechanism').displayName('Ferricore Mechanism').texture('kubejs:item/mechanism').color(0xB1E5DB)
  e.create('blazegold_mechanism').displayName('Blazegold Mechanism').texture('kubejs:item/mechanism').color(0xCF6D4B)
  e.create('celestigem_mechanism').displayName('Celestigem Mechanism').texture('kubejs:item/mechanism').color(0x36C3B9)
  e.create('eclipse_alloy_mechanism').displayName('Eclipse Alloy Mechanism').texture('kubejs:item/mechanism').color(0x405663)

  // !!! TO BE REMOVED AFTER CUSTOM ITEMS ARE FIXED !!!
  // === AE2/Addons ===
  // === Core ===
  e.create('incomplete_formation_core').texture('ae2:item/formation_core').color(0x4F4F4F)
  e.create('incomplete_annihilation_core').texture('ae2:item/annihilation_core').color(0x4F4F4F)
  // === Processors ===
  e.create('incomplete_logic_processor').texture('ae2:item/logic_processor').color(0x4F4F4F)
  e.create('incomplete_calculation_processor').texture('ae2:item/calculation_processor').color(0x4F4F4F)
  e.create('incomplete_engineering_processor').texture('ae2:item/engineering_processor').color(0x4F4F4F)
  //Non-Core
  e.create('incomplete_energy_processor').texture('appflux:item/energy_processor').color(0x4F4F4F)
  e.create('incomplete_accumulation_processor').texture('megacells:item/accumulation_processor').color(0x4F4F4F)
  e.create('incomplete_quantum_processor').texture('advanced_ae:item/quantum_processor').color(0x4F4F4F)

  // === Cells ===
  //e.create('incomplete_storage_cell').texture('ae2:item/cell_component_1k').color(0x4F4F4F)
  e.create('incomplete_1k_storage_cell').texture('ae2:item/cell_component_1k').color(0x4F4F4F)
  e.create('incomplete_4k_storage_cell').texture('ae2:item/cell_component_4k').color(0x4F4F4F)
  e.create('incomplete_16k_storage_cell').texture('ae2:item/cell_component_16k').color(0x4F4F4F)
  e.create('incomplete_64k_storage_cell').texture('ae2:item/cell_component_64k').color(0x4F4F4F)
  e.create('incomplete_256k_storage_cell').texture('ae2:item/cell_component_256k').color(0x4F4F4F)
  e.create('incomplete_1M_storage_cell').texture('megacells:item/cell_component_1m').color(0x4F4F4F)
  e.create('incomplete_4M_storage_cell').texture('megacells:item/cell_component_4m').color(0x4F4F4F)
  e.create('incomplete_16M_storage_cell').texture('megacells:item/cell_component_16m').color(0x4F4F4F)
  e.create('incomplete_64M_storage_cell').texture('megacells:item/cell_component_64m').color(0x4F4F4F)
  e.create('incomplete_256M_storage_cell').texture('megacells:item/cell_component_256m').color(0x4F4F4F)
  e.create('incomplete_bulk_storage_cell').texture('megacells:item/bulk_cell_component').color(0x4F4F4F)
  e.create('incomplete_1k_energy_cell').texture('appflux:item/core_1k').color(0x4F4F4F)
  e.create('incomplete_4k_energy_cell').texture('appflux:item/core_4k').color(0x4F4F4F)
  e.create('incomplete_16k_energy_cell').texture('appflux:item/core_16k').color(0x4F4F4F)
  e.create('incomplete_64k_energy_cell').texture('appflux:item/core_64k').color(0x4F4F4F)
  e.create('incomplete_256k_energy_cell').texture('appflux:item/core_256k').color(0x4F4F4F)
  e.create('incomplete_1m_energy_cell').texture('appflux:item/core_1m').color(0x4F4F4F)
  e.create('incomplete_4m_energy_cell').texture('appflux:item/core_4m').color(0x4F4F4F)
  e.create('incomplete_16m_energy_cell').texture('appflux:item/core_16m').color(0x4F4F4F)
  e.create('incomplete_64m_energy_cell').texture('appflux:item/core_64m').color(0x4F4F4F)
  e.create('incomplete_256m_energy_cell').texture('appflux:item/core_256m').color(0x4F4F4F)
  e.create('incomplete_quantum_storage_cell').texture('advanced_ae:item/quantum_storage_component').color(0x4F4F4F)

  // === Create/Addons ===
  // === Core ===

  // === Mekanism ===
  // === Teir Upgrades ===
  //base
  e.create('incomplete_basic_teir_installer').texture('mekanism:item/basic_tier_installer').color(0x4F4F4F)
  e.create('incomplete_advanced_teir_installer').texture('mekanism:item/advanced_tier_installer').color(0x4F4F4F)
  e.create('incomplete_elite_teir_installer').texture('mekanism:item/elite_tier_installer').color(0x4F4F4F)
  e.create('incomplete_ultimate_teir_installer').texture('mekanism:item/ultimate_tier_installer').color(0x4F4F4F)
  //extra
  e.create('incomplete_absolute_teir_installer').texture('mekanism_extras:item/absolute_tier_installer').color(0x4F4F4F)
  e.create('incomplete_supreme_teir_installer').texture('mekanism_extras:item/supreme_tier_installer').color(0x4F4F4F)
  e.create('incomplete_cosmic_teir_installer').texture('mekanism_extras:item/cosmic_tier_installer').color(0x4F4F4F)
  e.create('incomplete_infinite_teir_installer').texture('mekanism_extras:item/infinite_tier_installer').color(0x4F4F4F)
  // === QIO Drives ===
  //base
  e.create('incomplete_qio_drive').texture('mekanism:item/qio_drive_base').color(0x4F4F4F)
  e.create('incomplete_hyper_dense_qio_drive').texture('mekanism:item/qio_drive_hyper_dense').color(0x4F4F4F)
  e.create('incomplete_time_dilating_qio_drive').texture('mekanism:item/qio_drive_time_dilating').color(0x4F4F4F)
  e.create('incomplete_supermassive_qio_drive').texture('mekanism:item/qio_drive_supermassive').color(0x4F4F4F)
  //extra
  e.create('incomplete_collapse_qio_drive').texture('mekanism_extras:item/qio_drive_collapse').color(0x4F4F4F)
  e.create('incomplete_gamma_qio_drive').texture('mekanism_extras:item/qio_drive_gamma').color(0x4F4F4F)
  e.create('incomplete_black_hole_qio_drive').texture('mekanism_extras:item/qio_drive_black_hole').color(0x4F4F4F)
  e.create('incomplete_singularity_qio_drive').texture('mekanism_extras:item/qio_drive_singularity').color(0x4F4F4F)
  // === Alloys ===
  //Base
  e.create('incomplete_infused_alloy').texture('mekanism:item/alloy_infused').color(0x4F4F4F)
  e.create('incomplete_reinforced_alloy').texture('mekanism:item/alloy_reinforced').color(0x4F4F4F)
  e.create('incomplete_atomic_alloy').texture('mekanism:item/alloy_atomic').color(0x4F4F4F)
  //extra
  e.create('incomplete_radiance_alloy').texture('mekanism_extras:item/alloy_radiance').color(0x4F4F4F)
  e.create('incomplete_thermonuclear_alloy').texture('mekanism_extras:item/alloy_thermonuclear').color(0x4F4F4F)
  e.create('incomplete_shining_alloy').texture('mekanism_extras:item/alloy_shining').color(0x4F4F4F)
  e.create('incomplete_spectrum_alloy').texture('mekanism_extras:item/alloy_spectrum').color(0x4F4F4F)
  // === Control Mechanism ===
  //base
  e.create('incomplete_basic_control_mechanism').texture('mekanism:item/basic_control_circuit').color(0x4F4F4F)
  e.create('incomplete_advanced_control_mechanism').texture('mekanism:item/advanced_control_circuit').color(0x4F4F4F)
  e.create('incomplete_elite_control_mechanism').texture('mekanism:item/elite_control_circuit').color(0x4F4F4F)
  e.create('incomplete_ultimate_control_mechanism').texture('mekanism:item/ultimate_control_circuit').color(0x4F4F4F)
  //extra
  e.create('incomplete_absolute_control_mechanism').texture('mekanism_extras:item/absolute_control_circuit').color(0x4F4F4F)
  e.create('incomplete_supreme_control_mechanism').texture('mekanism_extras:item/supreme_control_circuit').color(0x4F4F4F)
  e.create('incomplete_cosmic_control_mechanism').texture('mekanism_extras:item/cosmic_control_circuit').color(0x4F4F4F)
  e.create('incomplete_infinite_control_mechanism').texture('mekanism_extras:item/infinite_control_circuit').color(0x4F4F4F)

  // === Dire Things ===
  e.create('incomplete_ferricore_mechanism').texture('kubejs:item/incomplete_mechanism').color(0x809A95)
  e.create('incomplete_blazegold_mechanism').texture('kubejs:item/incomplete_mechanism').color(0x8F5E4D)
  e.create('incomplete_celestigem_mechanism').texture('kubejs:item/incomplete_mechanism').color(0x438984)
  e.create('incomplete_eclipse_alloy_mechanism').texture('kubejs:item/incomplete_mechanism').color(0x485359)
})