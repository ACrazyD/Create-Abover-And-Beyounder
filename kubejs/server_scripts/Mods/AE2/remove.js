ServerEvents.recipes(e => { 
    // Remove Types (Refrence)
    //e.remove({ output: '' })
    //e.remove({ output: '#' })
    //e.remove({ mod: '' })
    //e.remove({ id: '' })
    
    // === Removing The Unwanted ===
    e.remove({ output: 'ae2:inscriber' })
    
})// End Of File