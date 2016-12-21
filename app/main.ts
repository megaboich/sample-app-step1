import * as $ from 'jquery'

import { Calculator } from 'app/calculator'

const markup = `
<div> 
    <h2>Hello, I am the app v 0.2</h2>
    <button id='btn'>Click me</button>
    <div id='place-holder' />
</div>
`;

document.write(markup);

$('#btn').click(() => {
    var n1 = 10;
    var n2 = 20;
    var calculator = new Calculator();
    var result = calculator.add(n1, n2)

    $('#place-holder').text(`${n1} + ${n2} = ${result}`);
})