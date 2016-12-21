import * as $ from 'jquery'

const markup = `
<div> 
    <h2>Hello, I am the app v 0.2</h2>
    <button id='btn'>Click me</button>
    <div id='place-holder' />
</div>
`;

document.write(markup);

$('#btn').click(() => {
    $('#place-holder').text('Welcome!');
})