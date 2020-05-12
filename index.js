function takeANumber(current,newPerson){

  current[current.length] = newPerson
  var number = current.length
  return "Welcome, " + newPerson + ". You are number " + number + " in line."
}
function nowServing(current){
  var number = current.length
  if (current.length > 0){
    return current.shift();

    //else {
    //    return "There is nobody waiting to be served!"
    //}
  }

}
