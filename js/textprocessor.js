// $(document).ready(function(){
 	var listofcomand = new Array(4);
	listofcomand[0]=["idz"];
	listofcomand[1]=["co jest na","co znajduje sie na"];
	listofcomand[2]=["czym jest"];
	listofcomand[3]=["zmontuj","zrob"];
	var listofarg = new Array(4);
	listofarg[0]=["gore"];
	listofarg[1]=["dol","poludnie"];
	listofarg[2]=["lewo"];
	listofarg[3]=["prawo","wschod"];
	function textprocess(input)
	{
		var text="."+input.toLowerCase(); // dodaje kropke na poczatku, zeby zadne zdanie nie mialo priototetu zeru (bylo molziwe wstawienie w to miejsce najpierw)
		//text=text.split(".");
		//text=text.join(" i ");
		//text=text.split(".");
		//text=text.join(",");
		//text=text.split("oraz");
		//text=text.join(",");
		while(text!=text.replace(".",",")){text=text.replace(".",",");};
		//document.write(text);
		while(text!=text.replace("oraz",",")){text=text.replace("oraz",",");};
		while(text!=text.replace(" i ",",")){text=text.replace(" i ",",");};
		var atomsentence=text.split(",");
		//document.write(text);
		//document.write(atomsentence[3]);
		var command = new Array(atomsentence.length);
		//document.write("a");
		for (var i=0;i<atomsentence.length;i++)
		{
			command[i]=new Object;
			command[i].priority=i;
			for(var j=0;j<listofcomand.length;j++)
			{
				for(var k=0;k<listofcomand[j].length;k++)
				{
					if(command[i].main==null)
					{
						command[i].main=atomsentence[i].match(listofcomand[j][k]);
					}
					if(command[i].arg==null)
					{
						command[i].arg=atomsentence[i].match(listofarg[j][k]);
					}
				}
			}
			if(atomsentence[i].match("wczesniej"))
			{

				command[i].priority=command[i].priority-1.5;
			}
			if(atomsentence[i].match("najpierw"))
			{

				command[i].priority=0;
			}
		}
		for(var i=0;i<command.length;i++)
		{
			if(command[i].main==null && command[i].arg==null)
			{
				//document.write(i+"<br>");
				command.splice(i,1);
				i--;
			}
		}
		for(var i=0;i<command.length;i++)
		{
			if(command[i].main==null)
			{
				command[i].main=command[i-1].main;
			}
		}
		command.sort(function(a,b){return a.priority>b.priority});
		return command;
	}
	// var text="Idz w gore,Kacek, pozniej w dol, ale wczesniej w lewo. Chociaz moze najpierw zrob siekiere."
	// var temp=textprocess(text);
	// document.write(text+"<br>");
	// for(var i=0;i<temp.length;i++)
	// {
	// 	document.write(temp[i].main+" "+temp[i].arg+"<br>");
	// }
// }