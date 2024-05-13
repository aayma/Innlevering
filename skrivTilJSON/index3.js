const ansatt = require('./skole.json')

function les(error,jsonString){
    if (error){
        console.log(error)
    }else{
    const data = JSON.parse(jsonString)
        console.log(data.fylke){
    catch(error){
        console.log('Feil i parsing')
  
  
  
    }
}
}

const nyobjekt={
    "navn":"Ole",
    "yrke":"Rektor",
    "ansattnummer":"2",
    "skole":"skoleskole"
}

fs.read('./skole.json', 'utf-8',les)


fs.writeFile('./skole3.json', JSON.stringify(nyobjekt),error => (
    if (error){
        console.log(error)
    }
    else{
        console.log('Fil skrevet')
    }
)}