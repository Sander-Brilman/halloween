const timeListeners = {};

let documentHeight  = $( window ).height();
let documentWidth   = $( window ).width();

let audio           = new Audio('song.mp3');

let secondCounter   = 0;
let timer;


function executeTimeListener(seconds) {
    if (timeListeners[seconds] != null) {
        timeListeners[seconds]();
        timeListeners[seconds] = null;
    }
}

function addTimeListener(seconds, callback) {
    timeListeners[seconds] = callback;
}

function randomNum(min, max) {
    return min + Math.round(Math.random() * max);
}

function start(currentTime_sec) {
    audio.currentTime = currentTime_sec;
    secondCounter = currentTime_sec * 1000;

    audio.play();

    $('body').append($('<p class="text"></p>'))

    executeTimeListener(Math.round(audio.currentTime * 1000 / 500) * 500);

    $('.start').remove();
    $('#stop').show();
}

function stop() {
    audio.pause();
    $('body').html('<span class="text-warning h1">:(</span>');
    clearInterval(timer);
}

$(document).ready(function() {
    $('#start').click(function() {
        start(0);
    });

    $('#stop').click(function() {
        stop();
    })

    $(window).resize(function() {
        documentHeight = $(window).height();
        documentWidth  = $(window).width();
    })

    audio.onpause = function() {
        clearInterval(timer);
    };

    audio.onplay = function() {
        timer = setInterval(function() {
            console.log(audio.currentTime * 1000);
            executeTimeListener(Math.round(audio.currentTime * 1000 / 500) * 500)
        }, 500);
    }
})

// 
// define listeners
// 

addTimeListener(0, () => {
    movingSkulls(10, 100, 5150);
    setTimeout(() => {
        movingSkulls(0, 100, 5700);
    }, 5750)
})

addTimeListener(12500, () => {
    clearScreen();
    $('body').append($(`<p class="text"></p>`))

    printSpookyScarySkeletons($('body > p'));
})

addTimeListener(15000, () => {
    $('body > .text').html('');

    printText(
        $('body > p'), 
        [
            textPrintItem(0, span('Send')),
            textPrintItem(600, span('shivers', 'text-warning shake')),
            textPrintItem(1300, span('down')),
            textPrintItem(2000, span('your')),
            textPrintItem(2300, span('spine', 'text-warning')),
        ]
    )

    setTimeout(() => {
        $('.shake').removeClass('shake');
    }, 1500)
})

addTimeListener(19000, () => {
    $('body > .text').html('');
    printText(
        $('body > p'), 
        [
            textPrintItem(0, span('Shrieking', 'text-warning')),
            textPrintItem(400, span('💀💀')),
            textPrintItem(1000, span('will')),
            textPrintItem(1300, span('shock')),
            textPrintItem(1600, span('your')),
            textPrintItem(2000, span('soul')),
        ]
    )
})

addTimeListener(22000, () => {
    $('body > .text').html('');

    printText(
        $('body > p'), 
        [
            textPrintItem(0, span('Seal')),
            textPrintItem(400, span('your')),
            textPrintItem(850, span('doom', 'text-danger')),
            textPrintItem(1300, span('tonight')),
        ]
    )

    setTimeout(() => {
        loadImage('./images/patrick.gif', 1350);
    }, 1700)
})

addTimeListener(25000, () => {
    printSpookyScarySkeletons(
        $('body > p'),
        element => {
            element.addClass('red-shadow');
        },
        element => {
            shake(element)
        },
        element => {
            setTimeout(() => {
                spin(element, 750);
            }, 50)
        }
    );
})

addTimeListener(28000, () => {
    $('body > .text').html('');
    printText(
        $('body > p'), 
        [
            textPrintItem(0, span('Speak')),
            textPrintItem(400, span('with')),
            textPrintItem(850, span('such')),
            textPrintItem(1000, span('a')),
            textPrintItem(1400, span('screech', 'text-danger'), () => {
                setTimeout(() => {
                    vaporize($('body > p > span'), 1000);
                }, 500)
            }),
        ]
    )
})

addTimeListener(31000, () => {
    $('body > .text').html('');
    printText(
        $('body > p'), 
        [
            textPrintItem(0, span('You\'ll')),
            textPrintItem(400, span('shake', 'text-warning'), element => {
                tempClass(element, 'shake', 700)
            }),
            textPrintItem(750, span('and')),
            textPrintItem(1100, span('shudder', 'text-warning'), element => {
                tempClass(element, 'shake', 700)
            }),
            textPrintItem(1600, span('in')),
            textPrintItem(1800, span('surprise')),
        ]
    )
})

addTimeListener(34000, () => {
    $('body > .text').html('');
    printText(
        $('body > p'), 
        [
            textPrintItem(0, span('When')),
            textPrintItem(350, span('you')),
            textPrintItem(700, span('hear')),
            textPrintItem(1000, span('these')),
            textPrintItem(1300, span('zombies', 'text-success'), () => {
                loadImage('./images/zombie.png', 2000)
            }),
            textPrintItem(1600, span('shriek'), () => {
                $('img').addClass('spin');
            }),
        ]
    )
})

addTimeListener(37000, () => {
    clearScreen();

    $('body').append($(`<div class="dialog"></div>`))
    addTextBalloon('<i class="fa-sharp fa-solid fa-jack-o-lantern"></i>', 'pumpkin');
    addTextBalloon('<i class="fa-sharp fa-solid fa-skull"></i>', 'skull');

    tempClass($('.pumpkin > .text-balloon'), 'invisible', 500);
    tempClass($('.skull > .text-balloon'), 'invisible', 9500);
})

addTimeListener(37500, () => {
    printText(
        $('.pumpkin > .text-balloon'), 
        [
            textPrintItem(200, span('We\'re')),
            textPrintItem(600, span('so')),
            textPrintItem(1000, span('sorry')),
            textPrintItem(1700, span('skeletons', 'text-danger')),
            textPrintItem(3000, span('you\'re')),
            textPrintItem(3300, span('so')),
            textPrintItem(3600, span('misunderstood', 'text-warning')),
        ]
    )
})

addTimeListener(43500, () => {
    $('.pumpkin > .text-balloon').html('');

    printText(
        $('.pumpkin > .text-balloon'), 
        [
            textPrintItem(000, span('You')),
            textPrintItem(500, span('only')),
            textPrintItem(800, span('want')),
            textPrintItem(1200, span('to')),
            textPrintItem(1800, span('socialize', 'text-warning'), () => {
                loadImage('./images/skeletons-drinking-beer.jpg', 4000);
            }),
        ]
    )
})

addTimeListener(46500, () => {
    $('.pumpkin > .text-balloon').addClass('invisible');

    printText(
        $('.skull > .text-balloon'), 
        [
            textPrintItem(000, span('But')),
            textPrintItem(500, span('I')),
            textPrintItem(800, span('don\'t')),
            textPrintItem(1200, span('think')),
            textPrintItem(1800, span('we')),
            textPrintItem(2200, span('should')),
        ]
    )
})

addTimeListener(49500, () => {
    clearScreen();
    $('body').append('<p class="text"></p>');

    printText(
        $('body > .text'), 
        [
            textPrintItem(200, span('Cause')),
            textPrintItem(600, span('👻')),
            textPrintItem(1000, span('scary', 'text-danger')),
            textPrintItem(1600, span('skeletons')),
        ]
    )
})

addTimeListener(52500, () => {
    $('body > p').html('');

    printText(
        $('body > .text'), 
        [
            textPrintItem(200, span('Shout')),
            textPrintItem(600, span('startling', 'text-warning')),
            textPrintItem(1000, span('shrilly')),
            textPrintItem(2200, span('screams', 'text-danger'), element => {
                loadImage('./images/screaming_skeleton.jpg', 1000)
            }),
        ]
    )
})

addTimeListener(55500, () => {
    $('body > p').html('');

    printText(
        $('body > .text'), 
        [
            textPrintItem(200, span('They\'ll', 'position-relative'), element => {
                element.css('top', `${randomNum(0, 100)}px`)
            }),
            textPrintItem(600, span('sneak', 'position-relative'), element => {
                element.css('top', `${randomNum(0, 100)}px`)
            }),
            textPrintItem(1000, span('from', 'position-relative'), element => {
                element.css('top', `${randomNum(0, 100)}px`)
            }),
            textPrintItem(1600, span('their', 'position-relative'), element => {
                element.css('top', `${randomNum(0, 100)}px`)
            }),
            textPrintItem(2000, span('sarcophagus', 'position-relative text-warning'), element => {
                element.css('top', `${randomNum(0, 100)}px`)
            }),
        ]
    )
})

addTimeListener(59000, () => {
    $('body > p').html('');

    printText(
        $('body > .text'), 
        [
            textPrintItem(200, span('And')),
            textPrintItem(500, span('just')),
            textPrintItem(800, span('won\'t', 'text-danger')),
            textPrintItem(1100, span('leave')),
            textPrintItem(1400, span('you')),
            textPrintItem(1700, span('be')),
            textPrintItem(2200, span('😔')),
        ]
    )
})

addTimeListener(62500, () => {
    clearScreen();

    movingSkulls(10, 100, 5150);
    setTimeout(() => {
        movingSkulls(0, 100, 5700);
    }, 5750)

    intervalWithTimer(() => {
        $('.lg-skull').each(function() {
            $(this).css('font-size', `${randomNum(30, 80)}px`)
        })
    }, 10000)
})


addTimeListener(74500, () => {
    clearScreen();
    $('body').append($(`<p class="text"></p>`))

    printText(
        $('body > .text'), 
        [
            textPrintItem(0, span('Spirits')),
            textPrintItem(600, span('supernatural', 'ghost-text'), element => {
                intervalWithTimer(
                    setInterval(() => {
                        element.css('color', randomNum(0, 1) ? 'black' : 'white');
                    }, 100), 
                    2500
                );
                setTimeout(() => {
                    $('.ghost-text').css('color', 'white');
                }, 3000)
            }),
            textPrintItem(3000, span('are')),
            textPrintItem(3400, span('shy', 'text-warning')),
            textPrintItem(3800, span('what\'s')),
            textPrintItem(4000, span('all')),
            textPrintItem(4700, span('the')),
            textPrintItem(5000, span('fuss?')),
        ]
    )
})

addTimeListener(81000, () => {
    $('body > p').html('');

    printText(
        $('body > .text'), 
        [
            textPrintItem(0, span('But')),
            textPrintItem(300, span('bags', 'text-warning')),
            textPrintItem(600, span('of')),
            textPrintItem(850, span('bones', 'text-danger')),
            textPrintItem(1200, span('seem')),
            textPrintItem(1600, span('so')),
            textPrintItem(2000, span('unsafe')),
            textPrintItem(3000, span('it\'s')),
            textPrintItem(3450, span('semi-', 'm-0 purple huge-text'), element => {
                tempClass(element, 'shake', 450)
            }),
            textPrintItem(3750, span('serious', 'm-0 purple huge-text'), element => {
                element.addClass('shake');
            }),
        ]
    )

    setTimeout(() => {
        $('body > p').html('');
    }, 3400)
})

addTimeListener(87500, () => {
    $('body > p').html('');

    let lettersPrintItems = [];
    let letters = 'Spooky scary skeletons'.split('');
    let timeout = 000;
    let isOrange = false;

    letters.forEach(letter => {
        if (letter == ' ') {
            isOrange = !isOrange;
        }
        lettersPrintItems.push(textPrintItem(timeout, span(letter, isOrange ? 'text-warning' : '')));
        timeout += 110;
    })

    printText(
        $('body > .text'),
        lettersPrintItems
    )
})

addTimeListener(90000, () => {
    $('body > p').html('');

    printText(
        $('body > .text'), 
        [
            textPrintItem(0, span('Are')),
            textPrintItem(250, span('silly', 'text-warning'), element => {
                loadImage('./images/skeleton-dancing.gif', 900);
            }),
            textPrintItem(1100, span('all')),
            textPrintItem(1400, span('the')),
            textPrintItem(1700, span('same')),
        ]
    )
})

addTimeListener(93000, () => {
    $('body > p').html('');

    printText(
        $('body > .text'), 
        [
            textPrintItem(0, span('They\'ll')),
            textPrintItem(250, span('smile', 'text-warning')),
            textPrintItem(1100, span('and')),
            textPrintItem(1400, span('scrabble')),
            textPrintItem(1700, span('slowly', 'text-warning from-top'), element => {
                
            }),
            textPrintItem(2600, span('by')),
        ]
    )
})

addTimeListener(96000, () => {
    $('body > p').html('');

    let insaneElement = $(`
    <span>
        <span>i</span>
        <span>n</span>
        <span>s</span>
        <span>a</span>
        <span>n</span>
        <span>e</span>
    </span>
    `)

    printText(
        $('body > .text'), 
        [
            textPrintItem(0, span('And')),
            textPrintItem(250, span('drive', 'text-warning')),
            textPrintItem(700, span('you')),
            textPrintItem(1200, span('so')),
            textPrintItem(1500, insaneElement, element => {
                intervalWithTimer(
                    setInterval(() => {
                        element.find('span').each(function() {
                            $(this).css('color', `rgb(${randomNum(0, 255)} ${randomNum(0, 255)} ${randomNum(0, 255)})`);
                        })
                    }, 100),
                    3000
                )
            }),
        ]
    )
})

addTimeListener(99500, () => {
    $('body > p').html('');

    printText(
        $('body > .text'), 
        [
            textPrintItem(200, span('Sticks', 'text-warning')),
            textPrintItem(500, span('and')),
            textPrintItem(900, span('stones', 'text-warning')),
            textPrintItem(1500, span('will')),
            textPrintItem(1900, span('break'), element => {
                setTimeout(() => {
                    element.html(`
                    <span class="break-left">br</span>
                    <span class="break-right">eak</span>
                    `);
                }, 100)
            }),
            textPrintItem(2300, span('your')),
            textPrintItem(2600, span('bones', 'text-danger')),
        ]
    )
})

addTimeListener(102500, () => {
    $('body > p').html('');

    printText(
        $('body > .text'), 
        [
            textPrintItem(0, span('They')),
            textPrintItem(400, span('seldom', 'text-warning')),
            textPrintItem(1100, span('let')),
            textPrintItem(1350, span('you')),
            textPrintItem(2000, span('snooze'), element => {
                sleepEffect(element, 2000)
            }),
        ]
    )
})

addTimeListener(106000, () => {
    $('body > p').html('');

    printSpookyScarySkeletons($('body > p'));
})

addTimeListener(109000, () => {
    $('body > p').html('');

    printText(
        $('body > .text'), 
        [
            textPrintItem(0, span('Will')),
            textPrintItem(500, span('wake')),
            textPrintItem(1000, span('you')),
            textPrintItem(1700, span('with')),
            textPrintItem(2500, span('a')),
        ]
    )

    setTimeout(() => {
        clearScreen();
        $('body').append($('<h1 class="text-danger boo">BOO!</h1>'))
        setTimeout(() => {
            $('h1').addClass('spin', 500);
        }, 500)
    }, 3500)
})

addTimeListener(114000, () => {
    clearScreen();
    movingSkulls(10, 100, 5150);
    setTimeout(() => {
        movingSkulls(0, 100, 5700);
    }, 5750)
})

addTimeListener(126000, () => {
    clearScreen();
    $('body').append($('<p class="text"> Thanks for <span class="text-warning ms-3">watching <i class="fa-sharp fa-solid fa-jack-o-lantern"></i></span></p>'));
    $('body').append($('<a href="index.html" class="btn btn-warning">No problem</a>'))
    $('#stop').hide();
})

// events function
function clearScreen() {
    $('body > *:not(#stop)').remove();
}

function movingSkulls(numSkulls, speed, duration) {
    for (let index = 0; index < numSkulls; index++) {
        $('body').append('<span class="abs lg-skull">💀</span>');
    }

    intervalWithTimer(
        setInterval(function() {
            $('.abs').each(function() {
                $(this).css({top: randomNum(0, documentHeight), left: randomNum(0, documentWidth)});
            }) 
        }, speed), 
        duration
    );
}

function printText(targetJqueryElement, textPrintItems = []) {
    textPrintItems.forEach(textPrintItem => {
        if (textPrintItem.timeout == 0) {
            targetJqueryElement.append(textPrintItem.element);
            if (typeof textPrintItem.callback === 'function') {
                textPrintItem.callback(textPrintItem.element);  
            }
            return;
        }

        setTimeout(() => {
            targetJqueryElement.append(textPrintItem.element);

            if (typeof textPrintItem.callback === 'function') {
                textPrintItem.callback(textPrintItem.element);  
            }
        }, textPrintItem.timeout)
    })
}

function textPrintItem(timeout, appendElement, callback = null) {
    return {timeout: timeout, element: appendElement, callback: callback}
}

function span(text, classes = '', attributes = {}) {
    attributesString = '';
    for (const key in attributes) {
        attributesString += `${key}="${attributes[key]}" `;
    }

    return $(`<span class="${classes}" ${attributesString}>${text}</span>`);
} 

function loadImage(imageUrl, duration, classes = 'top-left',) {
    let imgElement = $(`<img class="floating-image ${classes}" src="${imageUrl}">`);
    $('body').append(imgElement);
    setTimeout(() => {
        imgElement.remove();
    }, duration);
}

function printSpookyScarySkeletons(targetJqueryElement, callbackWord1 = null, callbackWord2 = null, callbackWord3 = null) {
    $('body > .text').html('');

    printText(
        targetJqueryElement, 
        [
            textPrintItem(0, span('Spooky'), callbackWord1),
            textPrintItem(600, span('Scary', 'text-warning'), callbackWord2),
            textPrintItem(1300, span('Skeletons'), callbackWord3),
        ]
    )
}

function intervalWithTimer(interval, duration) {
    setTimeout(() => {
        clearInterval(interval);
    }, duration)
}

function shake(targetJqueryElement, duration = 0) {
    if (duration == 0) {
        targetJqueryElement.addClass('shake');
        return;
    }

    tempClass(targetJqueryElement, 'shake', duration);
}

function spin(targetJqueryElement, lengthAnimation_ms = 0) {
    targetJqueryElement.addClass('spin').css('animation-duration', `${lengthAnimation_ms}ms`);
    setTimeout(() => {
        targetJqueryElement.removeClass('spin');
    }, lengthAnimation_ms)
}

function vaporize(targetJqueryElement, lengthAnimation_ms = 0) {
    targetJqueryElement.addClass('vaporize').css('animation-duration', `${lengthAnimation_ms}ms`);
    setTimeout(() => {
        targetJqueryElement.remove();
    }, lengthAnimation_ms)
}

function tempClass(targetJqueryElement, htmlclass, duration) {
    targetJqueryElement.addClass(htmlclass);
    setTimeout(() => {
        targetJqueryElement.removeClass(htmlclass);
    }, duration)
}

function addTextBalloon(speakerInnerHtml, containerClasses = '') {
    $('.dialog').append($(`<div class="speaker ${containerClasses}"><div class="text-balloon"></div><div class="source">${speakerInnerHtml}</div></div>`))
}

function sleepEffect(targetJqueryElement, duration) {
    let z = $('<b class="sleep-z text-info">z</b>');
    targetJqueryElement.append(z);
    intervalWithTimer(
        setInterval(() => {
            let z = $('<b class="sleep-z text-info">z</b>');
            targetJqueryElement.append(z);
            setTimeout(() => {
                z.remove();
            }, 800)
        }, 1000),
        duration
    )
}