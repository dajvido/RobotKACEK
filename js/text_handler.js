// for (var j=0; j<21; j++)
// {
//     for (var k=0; k<21; k++)
//     {
//         $('#robot').attr("src", "/img/map/" + j + "-" + k + ".png");
//     }
// }
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
    $('#send_command').click(function() {
        var command = $('#text_commands').val();
        if (command !== "")
        {
            var message = '';
            var temp=textprocess(command);
            // debugger;
            for (var k=0; k<temp.length; k++)
            {
                for (var i=0; i<listofcomand.length; i++)
                {
                    for (var j=0; j<listofcomand[i].length;j++)
                    {
                        if (listofcomand[i][j].indexOf(temp[k].main) != -1)
                        {
                            // jeżeli każemy mu iść (iść jest na 0)
                            if (i == 0)
                            {
                                for (var l=0; l<listofarg.length; l++)
                                {
                                    if (listofarg[l].indexOf(temp[k].arg[0]) != -1)
                                    {
                                        what_way = l;
                                    }
                                }
                                if (what_way == 0)
                                {
                                    message = go_up();
                                }
                                else if (what_way == 1)
                                {
                                    message = go_down();
                                }
                                else if (what_way == 2)
                                {
                                    message = go_left();
                                }
                                else if (what_way == 3)
                                {
                                    message = go_right();
                                }
                                // if (temp[k].arg[0] == 'gore')
                                // {
                                //     message = go_up();
                                // }
                                // else if (temp[k].arg[0] == 'dol')
                                // {
                                //     message = go_down();
                                // }
                                // else if (temp[k].arg[0] == 'lewo')
                                // {
                                //     message = go_left();
                                // }
                                // else if (temp[k].arg[0] == 'prawo')
                                // {
                                //     message = go_right();
                                // }
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
            return '';
        }
        else
        {
            return '\nOjojoj za bardzo prawo';
        }
    }
});
$(document).keypress(function(e) {
    if(e.which == 13) {
        $('#send_command').trigger('click');
    }
});