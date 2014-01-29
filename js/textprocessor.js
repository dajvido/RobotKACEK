var listofcomand = new Array(11);
listofcomand[0]=["idź",'idz', 'idź w kierunku' ,'idź w stronę', 'pójdź', 'poszedł'];
listofcomand[1]=['coJestNa', 'co jest na', 'co znajduje się', 'co jest'];
listofcomand[2]=['info',"czym jest", 'co zrobić z tego obiektu','co zrobić z tego','co zrobić','do czego to służy','co to jest',"jak zbudować"];
listofcomand[3]=["zmontuj","zrób",'stwórz','zbuduj','skomponuj','przygotuj', 'sporządź', 'montuj'];
listofcomand[4]=['jakDojscDo','jak dojść', 'jak przyjść', 'jak dotrzeć', 'jak dobrnąć', 'jak dociągnąć', 'jak zawędrować'];
listofcomand[5]=['jakDalekoDo','jak daleko do','jak daleko dojść do', 'ile dzieli od','ile iść', 'jak długa droga'];
listofcomand[6]=['podnieś','weź','wydobyj','wyciągnij', 'wyjmij', 'wydostań', 'wydźwignij', 'wyłów','wybierz', 'wygrzeb' ,'odgrzeb', 'wykop', 'podniósł', 'wziął', 'zabrał'];
listofcomand[7]=['odleć','odjedź','zakończmy to'];
listofcomand[8]=['kim jesteś'];
listofcomand[9]=['co mam zrobić'];
listofcomand[10]=['pokaż', 'wyświetl', 'wymień', 'podaj', 'co mam w'];
var listoffutureverbs=new Array (11);
listoffutureverbs=["poszedłem na ","powiedziałem Ci o obiekcie na ","powiedziałem co to ",'zrobiłem ',"obliczyłem drogę do ", "obliczyłem odległość do ","podniosłem ","sprobowałem odlecieć ",
 "opowiedziałem kim jestem ","powiedziałem co zrobic","pokazałem zawartość "];
var listofinfinitives=new Array (11);
listofinfinitives=["gdzie mam iść ","gdzie znajduje sie to, o czym Ci opowiedziec ","o czym mam opowiedziec","co mam zrobić","do czego mam znaleść drogę", "do czego dystans mam obliczyć","co mam podnieść","gdzie odlecieć",
 "","","o zawartość czego pytasz"];
var listofarg = new Array(16);
listofarg[0]=["góre","górze", 'północ','góra', 'górę', 'gore', 'tyłu','tył'];
listofarg[1]=["dół","południe", 'naprzod', 'prosto', 'przed siebie',];
listofarg[2]=["lewo",'zachód'];
listofarg[3]=["prawo","wschód"];
listofarg[4]=['baryłkę ropy','baryłki ropy','baryłka ropy','rope',"baryłce",'baryłki','baryłce','baryłce','baryłkę','baryłka']; //biernk,dopelniacz
listofarg[5]=['płytkę', 'płytki'];
listofarg[6]=['magmę','magmy','magma','magmie'];
listofarg[7]=['diament','diamentu','diamenty'];
listofarg[8]=['laser','laseru'];
listofarg[9]=['krzem','krzemu'];
listofarg[10]=['stal','stali'];
listofarg[11]=['złotą gwiazdę','złotej gwiazdy', ' złota gwiazda','złotą gwiazdę','gwiazdę'];
listofarg[12]=['podwozie','podwozia','dolna część','spodek'];
listofarg[13]=['nadwozie','nadwozia','górna część','krążek'];
listofarg[14]=['kabina','kokpitu','kokpit','kopułe', 'statek','odrzutowiec','samolot','superhipermegawyjebistypojazdkosmiczny', 'statku'];
listofarg[15]=['plecaka', 'plecak','torbe', 'torba', 'worek', 'kieszen', 'kieszeni'];

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
        if(atomsentence[i].match("wcześniej"))
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

