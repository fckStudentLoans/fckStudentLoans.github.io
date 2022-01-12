window.onload = function () {
    jQuery("#numSubs").html('17');
    jQuery('.box .percent svg circle:nth-child(2)').css('stroke-dashoffset','calc(440 - (440 * 17) / 100)');
 }
            
        