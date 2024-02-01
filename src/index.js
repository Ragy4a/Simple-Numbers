'use strict'

// Я не указал NUMBER тут так как оно бы перестало работать. Потому что он сразу видит что в инпуте ничего нет и ничего не дает. Но в самой функции всё работает. Я правильно понял? Извините, что сделал в функции. Стало интересно, также попробовал document.ElementById(....).value. :)
function calculateSimpleNumbers () {
    const NUMBER = document.getElementById('NUMBER').value;
    foundCycle: for (let i = 2; i <= NUMBER; i++) {
                    for (let j = 2; j < i; j++) {
                        if (i % j === 0) {
                            continue foundCycle;
            }
        }
        console.log(`${i} = simple number!`);
    }

};
