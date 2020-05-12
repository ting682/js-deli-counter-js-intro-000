function takeANumber(current,newPerson){

  current[current.length] = newPerson
  var number = current.length
  return "Welcome, " + newPerson + ". You are number " + number + " in line."
}
function nowServing(current){
  var number = current.length
  var serving = current[0]
  if (current.length > 0){

    current.shift();
    return "Currently serving " + serving + "."
  }
    else {
        return "There is nobody waiting to be served!"
    }


}
