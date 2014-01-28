var objects = [['barylka', 4, 4], ['diament', 10, 8], ['gwiazda', 5, 5], ['krzem', 8, 5], ['laser', 5, 9], ['magma', 10, 11], ['stal', 11, 11], ['tabularsa', 6, 6]];
// for (var j=0; j<21; j++)
// {
//     for (var k=0; k<21; k++)
//     {
//         $('#robot').attr("src", "/img/map/" + j + "-" + k + ".png");
//     }
// }
var plecak = [];//['barylka', 'magma', 'tabularasa', 'krzem', 'stal', 'laser', 'diament', 'gwiazda'];
function dodaj_do_plecaka() {
    plecak.push($('#D3').attr('data-info'));
    // objects.splice(objects.indexOf([$('#D3').attr('data-info')]))
    for (var i=0; i<objects.length; i++) {
        if (objects[i][0] == $('#D3').attr('data-info')) {
            objects.splice(i, 1);
        }
    }
    $('#D3').find('.object').remove();
    $('#D3').attr('data-info', '');
}
function wyswietl_plecak() {
    if (plecak.length) {
        return 'W plecaku mam: ' + plecak.toString();
    }
    else {
        return 'Pusto tu!';
    }
}
function montuj() {
    var ship_progress = $('#ship_progress').attr('data-progress');
    if (ship_progress == '0') {
        if (plecak.indexOf('barylka') != -1 && plecak.indexOf('magma') != -1 && plecak.indexOf('tabularasa') != -1)//barylka, magma, tabularasa
        {
            $('#ship_progress').attr('data-progress', '3');
            $('#ship_image').attr('src', "img/ship/3.png");
            plecak.splice(plecak.indexOf('barylka'), 1);
            plecak.splice(plecak.indexOf('magma'), 1);
            plecak.splice(plecak.indexOf('tabularasa'), 1);
            return "Hura! Powolutku do przodu!";
        }
        else {
            return "Czegos mi tutaj brakuje.";
        }
    }
    else if (ship_progress == '3') {
        //krzem, stal, laser
        if (plecak.indexOf('krzem') != -1 && plecak.indexOf('stal') != -1 && plecak.indexOf('laser') != -1)
        {
            $('#ship_progress').attr('data-progress', '6');
            $('#ship_image').attr('src', "img/ship/6.png");
            plecak.splice(plecak.indexOf('krzem'), 1);
            plecak.splice(plecak.indexOf('stal'), 1);
            plecak.splice(plecak.indexOf('laser'), 1);
            return "No juz calkiem, calkiem.";
        }
        else {
            return "Czegos mi tutaj brakuje.";
        }
    }
    else {
        //diament, gwiazda
        if (plecak.indexOf('diament') != -1 && plecak.indexOf('gwiazda') != -1)
        {
            $('#ship_progress').attr('data-progress', '9');
            $('#ship_image').attr('src', "img/ship/9.png");
            plecak.splice(plecak.indexOf('diament'), 1);
            plecak.splice(plecak.indexOf('gwiazda'), 1);
            return "Skonczone! Mozna odlatywac!";
        }
        else {
            return "Czegos mi tutaj brakuje.";
        }
    }
}
function set_objects() {
    $('.object').parent().attr('data-info', '');
    $('.object').remove();
    var position_zero = $('#A0').attr('data-position'),
        position_x = position_zero.split('-')[0],
        position_y = position_zero.split('-')[1];
    for (var i=0; i<objects.length; i++) {
        // for (var j=1; j<objects[i].length; j++) {
        //     var object_position = objects[i][j];
        //     //#TODO: if (position_x >)

        // }
        if (objects[i][1] >= position_x && objects[i][1] <= position_x + 6) {
            if (objects[i][2] >= position_y && objects[i][2] <= position_y + 6) {
                $('div[data-position="' + objects[i][1] + '-' + objects[i][2] + '"]').attr('data-info', objects[i][0]);
                if ($('div[data-position="' + objects[i][1] + '-' + objects[i][2] + '"]').attr('id') == 'D3') {
                    $('div[data-position="' + objects[i][1] + '-' + objects[i][2] + '"]').html('<img id="robot" src="img/RobotKACEK.png"><img class="object" src="img/materials/' + objects[i][0] + '.png">');
                } else {
                    $('div[data-position="' + objects[i][1] + '-' + objects[i][2] + '"]').html('<img class="object" src="img/materials/' + objects[i][0] + '.png">');
                }
            }
        }
    }
};
var temp;
var question;
var message;
 $(document).ready(function(){
    var tx=[], t=[];
    for (var y=0; y<21; y++)
    {
        for (var x=0; x<21; x++)
        {
            tx[x] = "url('../img/map/" + y + "-" + x + ".png')";
        }
        t[y] = tx;
        tx = [];
    }
    {
    // for (var i=0; i<7; i++)
    // {
    //     for (var j=0; j<21; j++)
    //     {
    //         for (var k=0; k<21; k++)
    //         {
    //             $('#A' + i).css("background-image", "url('../img/map/" + j + "-" + k + ".png')");
    //             $('#B' + i).css("background-image", "url('../img/map/" + j + "-" + k + ".png')");
    //             $('#C' + i).css("background-image", "url('../img/map/" + j + "-" + k + ".png')");
    //             $('#D' + i).css("background-image", "url('../img/map/" + j + "-" + k + ".png')");
    //             $('#E' + i).css("background-image", "url('../img/map/" + j + "-" + k + ".png')");
    //             $('#F' + i).css("background-image", "url('../img/map/" + j + "-" + k + ".png')");
    //             $('#G' + i).css("background-image", "url('../img/map/" + j + "-" + k + ".png')");
    //         }
    //     }
    // }
    // if ($.cookie('all_commands') == "")
    // {
    }
        /* LEFT side of platform */
        $('#AL').css("background-image", "url('../img/map/7-6.png')");
        $('#BL').css("background-image", "url('../img/map/8-6.png')");
        $('#CL').css("background-image", "url('../img/map/9-6.png')");
        $('#DL').css("background-image", "url('../img/map/10-6.png')");
        $('#EL').css("background-image", "url('../img/map/11-6.png')");
        $('#FL').css("background-image", "url('../img/map/12-6.png')");
        $('#GL').css("background-image", "url('../img/map/13-6.png')");

        /* RIGHT side of platform */
        $('#AR').css("background-image", "url('../img/map/7-13.png')");
        $('#BR').css("background-image", "url('../img/map/8-13.png')");
        $('#CR').css("background-image", "url('../img/map/9-13.png')");
        $('#DR').css("background-image", "url('../img/map/10-13.png')");
        $('#ER').css("background-image", "url('../img/map/11-13.png')");
        $('#FR').css("background-image", "url('../img/map/12-13.png')");
        $('#GR').css("background-image", "url('../img/map/13-13.png')");

        /* UP side of platform */
        for(var k=0; k<7; k++)
        {
            $('#Up' + k).css("background-image", "url('../img/map/6-" + (k + 7) + ".png')");
        }

        /* DOWN side of platform */
        for(var k=0; k<7; k++)
        {
            $('#Down' + k).css("background-image", "url('../img/map/14-" + (k + 7) + ".png')");
        }
        /* Platform */
        for (var i=0; i<7; i++)
        {
            $('#A' + i).css("background-image", "url('../img/map/7-" + (i + 7) + ".png')");
            $('#A' + i).attr('data-position', '7-' + (i + 7));
            $('#B' + i).css("background-image", "url('../img/map/8-" + (i + 7) + ".png')");
            $('#B' + i).attr('data-position', '8-' + (i + 7));
            $('#C' + i).css("background-image", "url('../img/map/9-" + (i + 7) + ".png')");
            $('#C' + i).attr('data-position', '9-' + (i + 7));
            $('#D' + i).css("background-image", "url('../img/map/10-" + (i + 7) + ".png')");
            $('#D' + i).attr('data-position', '10-' + (i + 7));
            $('#E' + i).css("background-image", "url('../img/map/11-" + (i + 7) + ".png')");
            $('#E' + i).attr('data-position', '11-' + (i + 7));
            $('#F' + i).css("background-image", "url('../img/map/12-" + (i + 7) + ".png')");
            $('#F' + i).attr('data-position', '12-' + (i + 7));
            $('#G' + i).css("background-image", "url('../img/map/13-" + (i + 7) + ".png')");
            $('#G' + i).attr('data-position', '13-' + (i + 7));
        }
    // }
    var specyfy=false;
    set_objects();
    $('#send_command').click(function() {
        var command = $('#text_commands').val();
        if (command !== "")
        {
            if(specyfy==false)//jesli nie jest w trybie uscislania
            {
                message = '';
                temp=textprocess(command);
                question = '';
                k=0
            }
            else//jesli uscisla - czyli odpowiada na pytanie o argument do funkcji
            {
                command=command.toLowerCase();
                if(command.match("nie")!=null||command.match("nic")!=null||command.match("nigdzie")!=null)
                {
                    message="";
                    k++;
                }
                else{
                    temp[k].arg=getarg(command);
                    //specyfy=false;
                    message="";
                }
            }
            for (;;k++)
            {
                if(k==temp.length)
                {

                    specyfy=false;
                    break;
                }
                //message+='\n'+temp[k].main+" "+temp[k].arg;
                if(match(temp[k].main,temp[k].arg))// ----------------czy funkcja i argument pasują do siebie (np. idz w gwiazde nie dziala)
                    question+=listoffutureverbs[temp[k].main]+listofarg[temp[k].arg][0]+",";//jesli pasuja zapisujemy je do pytania (przyda sie ja nie beda pasowac)
                else
                {
                    specyfy=true; //jak nie pasuja schodzimy w tryb uscislania
                    var add="";
                    if(question!="")
                        add=" pozniej";
                    message='\n'+"Okey, "+question+"ale "+listofinfinitives[temp[k].main]+add+"?";//pisze co zrobil do tej pory i pyta co zrobic dalej
                    break;
                }
                var i=temp[k].main;
                //for (var i=0; i<listofcomand.length; i++)
                {
                    //for (var j=0; j<listofcomand[i].length;j++)
                    {
                  //      if (listofcomand[i][j].indexOf(temp[k].main) != -1)
                        {
                            // jeżeli każemy mu iść (iść jest na 0)
                            if (i == 0)
                            {
                                //for (var l=0; l<listofarg.length; l++)
                                //{
                                  //  if (listofarg[l].indexOf(temp[k].arg[0]) != -1)
                                    //{
                                      //  what_way = l;
                                    //}
                                //}
                                var what_way=temp[k].arg;
                                if (what_way == 0)
                                {
                                    message += go_up();
                                }
                                else if (what_way == 1)
                                {
                                    message += go_down();
                                }
                                else if (what_way == 2)
                                {
                                    message += go_left();
                                }
                                else if (what_way == 3)
                                {
                                    message += go_right();
                                }
                            }
                            //jeżeli każemy mu montować
                            if (i == 3) {
                                message += '\n' + montuj();
                            }
                            // jeżeli każemy mu podnieść (podnoszenie jest na 6)
                            if (i == 6) {
                                if (listofarg[temp[k].arg].indexOf($('#D3').attr('data-info')) != -1)
                                {
                                    dodaj_do_plecaka();
                                } else {
                                    message += '\nCo ja mam podniesc?';
                                    if ($('#D3').attr('data-info'))
                                    {
                                         message += ' Widze tutaj ' + $('#D3').attr('data-info');
                                    }
                                    else {
                                        message += ' Nie widze nic "podnoszalnego".'
                                    }
                                }
                            }
                            // jeżeli każemy wyświetlić plecak
                            if (i == 10) {
                                message += ('\n' + wyswietl_plecak());
                            }
                        }
                    }
                }
            }
            var currentTime = new Date(),
                hours = currentTime.getHours(),
                minutes = currentTime.getMinutes();


            if (minutes < 10)
            {
                minutes = "0" + minutes;
            }

            $('#text_commands').val('');
            var text = $('#text_field').val(),
                quote = '\n[' + hours + ':' + minutes + ']: ' + command;
            $('#text_field').val(function(i, text) {
                return text + quote;
            });
            if (message !== "")
            {
                $('#text_field').val(function(i, text) {
                    return text + message;
                });
            }
            $('#text_commands').focus();
            $('#text_field').scrollTop($('#text_field')[0].scrollHeight);

        }
    });
    window.addEventListener("beforeunload", function (e) {
        $.cookie('all_commands', $('#text_field').val(), { expires: 7 });
        // (e || window.event).returnValue = $.cookie('all_commands', $('#text_field').val(), { expires: 7 });     //Gecko + IE
        // return $.cookie('all_commands', $('#text_field').val(), { expires: 7 });                                //Webkit, Safari, Chrome etc.
    });
    $('#text_field').val($.cookie('all_commands'));
    $('#restart_game').click(function() {
        $('#text_field').val('');
        window.location.reload(true);
    });
    function go_up() {
        var position = $('#A0').attr('data-position').split('-'),
            y = position[0],
            x = position[1];
        if (y > 0)
        {
            for(var k=0; k<7; k++)
            {
                $('#Up' + k).css("background-image", "url('../img/map/" + (parseInt(y, 10) - 2) + "-"+ (parseInt(x, 10) + parseInt(k, 10)) + ".png')");
            }
            for (var i=0; i<7; i++)
            {
                $('#A' + i).css("background-image", "url('../img/map/" + (parseInt(y, 10) - 1) + "-"+ (parseInt(x, 10) + parseInt(i, 10)) + ".png')");
                $('#A' + i).attr('data-position', (parseInt(y, 10) - 1) + "-" + (parseInt(x, 10) + parseInt(i, 10)));
                $('#B' + i).css("background-image", "url('../img/map/" + y + "-"+ (parseInt(x, 10) + parseInt(i, 10)) + ".png')");
                $('#B' + i).attr('data-position', (parseInt(y, 10)) + "-" + (parseInt(x, 10) + parseInt(i, 10)));
                $('#C' + i).css("background-image", "url('../img/map/" + (parseInt(y, 10) + 1) + "-"+ (parseInt(x, 10) + parseInt(i, 10)) + ".png')");
                $('#C' + i).attr('data-position', (parseInt(y, 10) + 1) + "-" + (parseInt(x, 10) + parseInt(i, 10)));
                $('#D' + i).css("background-image", "url('../img/map/" + (parseInt(y, 10) + 2) + "-"+ (parseInt(x, 10) + parseInt(i, 10)) + ".png')");
                $('#D' + i).attr('data-position', (parseInt(y, 10) + 2) + "-" + (parseInt(x, 10) + parseInt(i, 10)));
                $('#E' + i).css("background-image", "url('../img/map/" + (parseInt(y, 10) + 3) + "-" + (parseInt(x, 10) + parseInt(i, 10)) + ".png')");
                $('#E' + i).attr('data-position', (parseInt(y, 10) + 3) + "-" + (parseInt(x, 10) + parseInt(i, 10)));
                $('#F' + i).css("background-image", "url('../img/map/" + (parseInt(y, 10) + 4) + "-"+ (parseInt(x, 10) + parseInt(i, 10)) + ".png')");
                $('#F' + i).attr('data-position', (parseInt(y, 10) + 4) + "-" + (parseInt(x, 10) + parseInt(i, 10)));
                $('#G' + i).css("background-image", "url('../img/map/" + (parseInt(y, 10) + 5) + "-"+ (parseInt(x, 10) + parseInt(i, 10)) + ".png')");
                $('#G' + i).attr('data-position', (parseInt(y, 10) + 5) + "-" + (parseInt(x, 10) + parseInt(i, 10)));
            }
            set_objects();
            return '';
        }
        else
        {
            return '\nGdzie tam tak wysoko nie wejde!';
        }
    }
    function go_down() {
        var position = $('#G0').attr('data-position').split('-'),
            y = position[0],
            x = position[1];
        if (y < 20)
        {
            for(var k=0; k<7; k++)
            {
                $('#Down' + k).css("background-image", "url('../img/map/" + (parseInt(y, 10) + 2) + "-"+ (parseInt(x, 10) + parseInt(k, 10)) + ".png')");
            }
            for (var i=0; i<7; i++)
            {
                $('#A' + i).css("background-image", "url('../img/map/" + (parseInt(y, 10) - 5) + "-"+ (parseInt(x, 10) + parseInt(i, 10)) + ".png')");
                $('#A' + i).attr('data-position', (parseInt(y, 10) - 5) + "-" + (parseInt(x, 10) + parseInt(i, 10)));
                $('#B' + i).css("background-image", "url('../img/map/" + (parseInt(y, 10) - 4) + "-"+ (parseInt(x, 10) + parseInt(i, 10)) + ".png')");
                $('#B' + i).attr('data-position', (parseInt(y, 10) - 4) + "-" + (parseInt(x, 10) + parseInt(i, 10)));
                $('#C' + i).css("background-image", "url('../img/map/" + (parseInt(y, 10) - 3) + "-"+ (parseInt(x, 10) + parseInt(i, 10)) + ".png')");
                $('#C' + i).attr('data-position', (parseInt(y, 10) - 3) + "-" + (parseInt(x, 10) + parseInt(i, 10)));
                $('#D' + i).css("background-image", "url('../img/map/" + (parseInt(y, 10) - 2) + "-"+ (parseInt(x, 10) + parseInt(i, 10)) + ".png')");
                $('#D' + i).attr('data-position', (parseInt(y, 10) - 2) + "-" + (parseInt(x, 10) + parseInt(i, 10)));
                $('#E' + i).css("background-image", "url('../img/map/" + (parseInt(y, 10) - 1) + "-" + (parseInt(x, 10) + parseInt(i, 10)) + ".png')");
                $('#E' + i).attr('data-position', (parseInt(y, 10) - 1) + "-" + (parseInt(x, 10) + parseInt(i, 10)));
                $('#F' + i).css("background-image", "url('../img/map/" + y + "-"+ (parseInt(x, 10) + parseInt(i, 10)) + ".png')");
                $('#F' + i).attr('data-position', y + "-" + (parseInt(x, 10) + parseInt(i, 10)));
                $('#G' + i).css("background-image", "url('../img/map/" + (parseInt(y, 10) + 1) + "-"+ (parseInt(x, 10) + parseInt(i, 10)) + ".png')");
                $('#G' + i).attr('data-position', (parseInt(y, 10) + 1) + "-" + (parseInt(x, 10) + parseInt(i, 10)));
            }
            set_objects();
            return '';
        }
        else
        {
            return '\nOj nie tak nisko nie chcę!';
        }
    }
    function go_left() {
        var position = $('#A0').attr('data-position').split('-'),
            y = position[0],
            x = position[1];
        if (x > 0)
        {
            $('#AL').css("background-image", "url('../img/map/" + y + "-"+ (parseInt(x, 10) - 2) + ".png')");
            $('#BL').css("background-image", "url('../img/map/" + (parseInt(y, 10) + 1) + "-" + (parseInt(x, 10) - 2) + ".png')");
            $('#CL').css("background-image", "url('../img/map/" + (parseInt(y, 10) + 2) + "-"+ (parseInt(x, 10) - 2) + ".png')");
            $('#DL').css("background-image", "url('../img/map/" + (parseInt(y, 10) + 3) + "-"+ (parseInt(x, 10) - 2) + ".png')");
            $('#EL').css("background-image", "url('../img/map/" + (parseInt(y, 10) + 4) + "-" + (parseInt(x, 10) - 2) + ".png')");
            $('#FL').css("background-image", "url('../img/map/" + (parseInt(y, 10) + 5) + "-"+ (parseInt(x, 10) - 2) + ".png')");
            $('#GL').css("background-image", "url('../img/map/" + (parseInt(y, 10) + 6) + "-"+ (parseInt(x, 10) - 2) + ".png')");
            for (var i=0; i<7; i++)
            {
                $('#A' + i).css("background-image", "url('../img/map/" + y + "-"+ (parseInt(x, 10) + parseInt(i, 10) - 1) + ".png')");
                $('#A' + i).attr('data-position', y + "-" + (parseInt(x, 10) + parseInt(i, 10) - 1));
                $('#B' + i).css("background-image", "url('../img/map/" + (parseInt(y, 10) + 1) + "-" + (parseInt(x, 10) + parseInt(i, 10) - 1) + ".png')");
                $('#B' + i).attr('data-position', (parseInt(y, 10) + 1) + "-" + (parseInt(x, 10) + parseInt(i, 10) - 1));
                $('#C' + i).css("background-image", "url('../img/map/" + (parseInt(y, 10) + 2) + "-"+ (parseInt(x, 10) + parseInt(i, 10) - 1) + ".png')");
                $('#C' + i).attr('data-position', (parseInt(y, 10) + 2) + "-" + (parseInt(x, 10) + parseInt(i, 10) - 1));
                $('#D' + i).css("background-image", "url('../img/map/" + (parseInt(y, 10) + 3) + "-"+ (parseInt(x, 10) + parseInt(i, 10) - 1) + ".png')");
                $('#D' + i).attr('data-position', (parseInt(y, 10) + 3) + "-" + (parseInt(x, 10) + parseInt(i, 10) - 1));
                $('#E' + i).css("background-image", "url('../img/map/" + (parseInt(y, 10) + 4) + "-" + (parseInt(x, 10) + parseInt(i, 10) - 1) + ".png')");
                $('#E' + i).attr('data-position', (parseInt(y, 10) + 4) + "-" + (parseInt(x, 10) + parseInt(i, 10) - 1));
                $('#F' + i).css("background-image", "url('../img/map/" + (parseInt(y, 10) + 5) + "-"+ (parseInt(x, 10) + parseInt(i, 10) - 1) + ".png')");
                $('#F' + i).attr('data-position', (parseInt(y, 10) + 5) + "-" + (parseInt(x, 10) + parseInt(i, 10) - 1));
                $('#G' + i).css("background-image", "url('../img/map/" + (parseInt(y, 10) + 6) + "-"+ (parseInt(x, 10) + parseInt(i, 10) - 1) + ".png')");
                $('#G' + i).attr('data-position', (parseInt(y, 10) + 6) + "-" + (parseInt(x, 10) + parseInt(i, 10) - 1));
            }
            set_objects();
            return '';
        }
        else
        {
            return '\nOjojoj za bardzo lewo';
        }
    }
    function go_right() {
        var position = $('#A0').attr('data-position').split('-'),
            y = position[0],
            x = position[1];
        if (x < 14)
        {
            $('#AR').css("background-image", "url('../img/map/" + y + "-"+ (parseInt(x, 10) + 8) + ".png')");
            $('#BR').css("background-image", "url('../img/map/" + (parseInt(y, 10) + 1) + "-" + (parseInt(x, 10) + 8) + ".png')");
            $('#CR').css("background-image", "url('../img/map/" + (parseInt(y, 10) + 2) + "-"+ (parseInt(x, 10) + 8) + ".png')");
            $('#DR').css("background-image", "url('../img/map/" + (parseInt(y, 10) + 3) + "-"+ (parseInt(x, 10) + 8) + ".png')");
            $('#ER').css("background-image", "url('../img/map/" + (parseInt(y, 10) + 4) + "-" + (parseInt(x, 10) + 8) + ".png')");
            $('#FR').css("background-image", "url('../img/map/" + (parseInt(y, 10) + 5) + "-"+ (parseInt(x, 10) + 8) + ".png')");
            $('#GR').css("background-image", "url('../img/map/" + (parseInt(y, 10) + 6) + "-"+ (parseInt(x, 10) + 8) + ".png')");
            for (var i=0; i<7; i++)
            {
                $('#A' + i).css("background-image", "url('../img/map/" + y + "-"+ (parseInt(x, 10) + parseInt(i, 10) + 1) + ".png')");
                $('#A' + i).attr('data-position', y + "-" + (parseInt(x, 10) + parseInt(i, 10) + 1));
                $('#B' + i).css("background-image", "url('../img/map/" + (parseInt(y, 10) + 1) + "-" + (parseInt(x, 10) + parseInt(i, 10) + 1) + ".png')");
                $('#B' + i).attr('data-position', (parseInt(y, 10) + 1) + "-" + (parseInt(x, 10) + parseInt(i, 10) + 1));
                $('#C' + i).css("background-image", "url('../img/map/" + (parseInt(y, 10) + 2) + "-"+ (parseInt(x, 10) + parseInt(i, 10) + 1) + ".png')");
                $('#C' + i).attr('data-position', (parseInt(y, 10) + 2) + "-" + (parseInt(x, 10) + parseInt(i, 10) + 1));
                $('#D' + i).css("background-image", "url('../img/map/" + (parseInt(y, 10) + 3) + "-"+ (parseInt(x, 10) + parseInt(i, 10) + 1) + ".png')");
                $('#D' + i).attr('data-position', (parseInt(y, 10) + 3) + "-" + (parseInt(x, 10) + parseInt(i, 10) + 1));
                $('#E' + i).css("background-image", "url('../img/map/" + (parseInt(y, 10) + 4) + "-" + (parseInt(x, 10) + parseInt(i, 10) + 1) + ".png')");
                $('#E' + i).attr('data-position', (parseInt(y, 10) + 4) + "-" + (parseInt(x, 10) + parseInt(i, 10) + 1));
                $('#F' + i).css("background-image", "url('../img/map/" + (parseInt(y, 10) + 5) + "-"+ (parseInt(x, 10) + parseInt(i, 10) + 1) + ".png')");
                $('#F' + i).attr('data-position', (parseInt(y, 10) + 5) + "-" + (parseInt(x, 10) + parseInt(i, 10) + 1));
                $('#G' + i).css("background-image", "url('../img/map/" + (parseInt(y, 10) + 6) + "-"+ (parseInt(x, 10) + parseInt(i, 10) + 1) + ".png')");
                $('#G' + i).attr('data-position', (parseInt(y, 10) + 6) + "-" + (parseInt(x, 10) + parseInt(i, 10) + 1));
            }
            set_objects();
            return '';
        }
        else
        {
            return '\nOjojoj za bardzo prawo';
        }
    }
    function match(mainnumber,argnumber)
    {
        return !(argnumber==null);
    }
});
$(document).keypress(function(e) {
    if(e.which == 13) {
        $('#send_command').trigger('click');
    }
});