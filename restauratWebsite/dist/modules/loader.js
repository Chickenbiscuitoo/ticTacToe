function PageLoader () {
    const content = document.getElementById('content')

    const header = document.createElement('div')
    header.setAttribute('id', 'header')
    const main = document.createElement('div')
    main.setAttribute('id', 'main')
    const footer = document.createElement('div')
    footer.setAttribute('id', 'footer')

    const mainAbout = document.createElement('p')
    mainAbout.setAttribute('id', 'mainAbout')
    mainAbout.innerHTML = 'asdasdddddddddddddfadfsdgfsaf ga sfdasffdsd fasdf as f'

    content.append(header)
    content.append(main)
    content.append(footer)

    main.append(mainAbout)
}

export {PageLoader}