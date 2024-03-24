let buttonStart = document.createElement('button')
buttonStart.append('start')
document.body.append(buttonStart)

function start() {
    document.write("branch-main")
}

buttonStart.addEventListener('click', start)