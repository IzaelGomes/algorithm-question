function calculateBankeNotes(withdrawn){
    const notes = [100, 50, 20, 10, 5, 2, 1]
    let useNoteIndex = 0
  
    if(withdrawn <= 0) return

    while(notes.length > useNoteIndex){
    
      const quantityNotes = Math.floor(withdrawn / notes[useNoteIndex])
      console.log(`${quantityNotes} nota(s) de R$ ${notes[useNoteIndex]}`)
      withdrawn = withdrawn % notes[useNoteIndex]
      useNoteIndex++
}

}