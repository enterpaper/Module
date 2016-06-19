var names = ["Yaakov", "John", "Jen", "Jason", "Paul",
	"Frank", "Larry", "Paula", "Laura", "Jim"];
var firstLetter = "j";
for (var index in names)
{
	if(firstLetter == names[index].charAt(0).toLowerCase())
	{
		byeSpeaker.speak(names[index]);
	}
	else
	{
		helloSpeaker.speak(names[index]);
	}
}