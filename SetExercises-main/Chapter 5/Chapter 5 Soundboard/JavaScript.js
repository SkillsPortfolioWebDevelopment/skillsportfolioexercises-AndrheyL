const sound = ['Aha!', 'Back of the net', 'Out of order', 'Dan', 'Goal', 'Hello', 'Jurassic Park', 'Kiss my face', 'Smell my cheese']

sound.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stop()


        document.getElementById(sound).play()
    })



    document.getElementById('button').
        appendChild(btn)
})

function stop() {
    sound.forEach(sound => {
        const song = document.getElementById
            (sound)

        song.pause()
        song.currentTime = 0;

    })

}
