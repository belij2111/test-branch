let buttonStart = document.createElement('button')
buttonStart.append('start')
document.body.append(buttonStart)

function start() {
    document.write(`branch-main <br>`)
}

buttonStart.addEventListener('click', start)