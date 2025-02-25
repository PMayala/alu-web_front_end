const gloablVariable = 'Welcome';

function outer() {
    alert(gloablVariable);

    const course = 'Holberton';

    function inner() {
        alert(`${gloablVariable} ${course}`);

        const exclamation = '!';

        function inception() {
            alert(`${gloablVariable} ${course}${exclamation}`)
        }
        inception();
    }
    inner();
}
outer();
