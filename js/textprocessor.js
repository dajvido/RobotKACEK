	var listofcomand = new Array(11);
	listofcomand[0]=["idz",'idz', 'idź w kierunku' ,'idź w stronę', 'pojdz'];
	listofcomand[1]=['coJestNa', 'co jest na', 'co znajduje się', 'co jest'];
	listofcomand[2]=['info',"czym jest", 'co zrobić z tego obiektu','co zrobić z tego','co zrobić','do czego to służy'];
	listofcomand[3]=["zmontuj","zrob",'stwórz','zbuduj','skomponuj','przygotuj', 'sporządź'];
	listofcomand[4]=['jakDojscDo','jak dojść', 'jak przyjść', 'jak dotrzeć', 'jak dobrnąć', 'jak dociągnąć', 'jak zawędrować'];
	listofcomand[5]=['jakDalekoDo','jak daleko do','jak daleko dojść do', 'ile dzieli od','ile iść', 'jak długa droga'];
	listofcomand[6]=['podnies','wez','wydobyj','wyciągnij', 'wyjmij', 'wydostań', 'wydźwignij', 'wyłów','wybierz', 'wygrzeb' ,'odgrzeb', 'wykop'];
	listofcomand[7]=['odlec','odjedz','zakonczmy to'];
	listofcomand[8]=['kim jestem'];
	listofcomand[9]=['co mam zrobic'];
	listofcomand[10]=['pokaz', 'wyswietl', 'wymien', 'podaj', 'co mam w'];
	var listoffutureverbs=new Array (11);
	listoffutureverbs=["pojde na ","powiem co znajduje sie na ","powiem co to","oblicze jak dojsc do", "oblicze jak daleko do ","podniose ","sprobuje odleciec ",
	 "powiem kim jestem ","powiem co zrobic", "oto zawartosc mojego plecaka "];
	var listofinfinitives=new Array (11);
	listofinfinitives=["gdzie mam isc ","gdzie znajduje sie to, o czym Ci opowiedziec ","o czym mam opowiedziec","co mam zrobic","do czego mam znalesc droge", "do czego dystans mam obliczyc","co mam podniesc","gdzie odleciec", "jestem ksiezniczka",
	 "wymys cos ","co tu wpisac", "gdzie moj plecak"];
	var listofarg = new Array(15);
	listofarg[0]=["gore","gorze",'prosto', 'przed siebie', 'polnoc','gora'];
	listofarg[1]=["dol","poludnie", 'tyłu','tyl'];
	listofarg[2]=["lewo",'zachod'];
	listofarg[3]=["prawo","wschod"];
	listofarg[4]=['barylka ropy','barylke ropy','rope'];
	listofarg[5]=['tabula rasa','tabule raste'];
	listofarg[6]=['magma','magme'];
	listofarg[7]=['diament','diamenty'];
	listofarg[8]=['laser'];
	listofarg[9]=['krzem'];
	listofarg[10]=['stal'];
	listofarg[11]=['złota gwiazda','zlota gwiazde','gwiazde'];
	listofarg[12]=['podwozie','dolna czesc','spodek','dol'];
	listofarg[13]=['nadwozie','gorna czesc','krazek','gore'];
	listofarg[14]=['kabine','kokpit','kopule'];
	listofarg[15]=['plecak', 'torbe', 'torba', 'worek', 'kieszen', 'kieszeni'];
	listofarg[16]=['statek','odrzutowiec','samolot','superhipermegawyjebistypojazdkosmiczny'];
	function getarg(input)
	{
		var findarg;
		text=input.toLowerCase();
		for(var j=0;j<listofarg.length;j++) ////////////////////////////////////////////////////////to zmilem
			{
				for(var k=0;k<listofarg[j].length;k++)
				{
					if(findarg==null)
					{
						if(text.match(listofarg[j][k])!=null)
							findarg=j;
					}
				}
			}
		return findarg;
	}
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
						if(atomsentence[i].match(listofcomand[j][k])!=null)
							command[i].main=j;
					}
				}
			}
			for(var j=0;j<listofarg.length;j++) ////////////////////////////////////////////////////////to zmilem
			{
				for(var k=0;k<listofarg[j].length;k++)
				{
					if(command[i].arg==null)
					{
						if(atomsentence[i].match(listofarg[j][k])!=null)
							command[i].arg=j;
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
			if(command[i].main==null && (i==0||command[i].arg==null))
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