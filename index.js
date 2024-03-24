let buttonStart = document.createElement('button')
buttonStart.append('start')
document.body.append(buttonStart)

function start() {
    document.write(`branch-main <br>`)
    document.write(`branch-dev1 <br>`)
}

buttonStart.addEventListener('click', start)