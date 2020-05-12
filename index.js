function takeANumber(current,newPerson){
  current[current.length] = newPerson
  number = current.length
  return "Welcome " + newPerson + ". You are number " + number + " in line."
}