function generateHashtag(str) {
   
    if(!str || str.trim().length === 0) return false
      let restWords = ''
      let finalWord = ''
      let arryW = str.split(' ').map(letter => {
  
       if(letter !== ''){
           restWords += letter[0].toUpperCase() + letter.slice(1)
       }
      
      }).join('')
  
    
    if(finalWord[0] === '#'){
      finalWord = restWords
      if(finalWord.length > 140) return false
    
      return finalWord
    }
     finalWord = '#'+ restWords
    
    if(finalWord.length > 140) return false
    
    return finalWord
  }