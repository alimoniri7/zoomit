function f() {
    let location = document.getElementById('container-center')

    // let mainBlock = document.createElement('div')
    // let imgBlock = document.createElement('img')
    // let leftBlock = document.createElement('div')

    // let category = document.createElement('b')
    // let title = document.createElement('a')
    // let subtitle = document.createElement('span')
    // let content = document.createElement('p')


    // category.append(leftBlock)
    // title.append(leftBlock)
    // subtitle.append(leftBlock)
    // content.append(leftBlock)

    // imgBlock.append(mainBlock)
    // leftBlock.append(mainBlock)

    // mainBlock.append(location)

    fetch("data/content.json").then(res => {
        return res.json()
    }).then(data => {
        data.forEach(item => {
            if (item.type == "wideBanner") {
                let mainBlock = document.createElement('div')
                let rightBlock = document.createElement('div')
                let leftBlock = document.createElement('div')

                let subtitle = document.createElement('span')
                let title = document.createElement('a')
                let content = document.createElement('p')

                leftBlock.append(subtitle)
                leftBlock.append(title)
                leftBlock.append(content)
                mainBlock.append(rightBlock)
                mainBlock.append(leftBlock)

                rightBlock.style.backgroundImage = `url(${item.image})`
                title.innerHTML = item.title
                subtitle.innerHTML = item.category + " | " + item.author + " | " + item.time.hour + ":" + item.time.minute + " " + item.time.year + "/" + item.time.month + "/" + item.time.day + " | " + item.comment + " دیدگاه"
                content.innerHTML = item.content

                title.setAttribute("href", "#")
                mainBlock.classList.add('content-box-wide')
                location.append(mainBlock)

            } else {
                let mainBlock = document.createElement('div')
                let imgBlock = document.createElement('img')
                let leftBlock = document.createElement('div')

                let category = document.createElement('b')
                let title = document.createElement('a')
                let subtitle = document.createElement('span')
                let content = document.createElement('p')


                leftBlock.append(category)
                leftBlock.append(title)
                leftBlock.append(subtitle)
                leftBlock.append(content)

                mainBlock.append(imgBlock)
                mainBlock.append(leftBlock)

                imgBlock.setAttribute("src", item.image)
                category.innerHTML = item.category
                title.innerHTML = item.title
                subtitle.innerHTML = item.author + " | " + item.time.hour + ":" + item.time.minute + " " + item.time.year + "/" + item.time.month + "/" + item.time.day + " | " + item.comment + " دیدگاه"
                content.innerHTML = item.content

                title.setAttribute("href", "#")
                location.append(mainBlock)
                mainBlock.classList.add("content-box")

            }
        });
    }).catch(err => {
        console.log(err);
    })
}

// drop down menu /--------------------------------------------------------------------------------------

//for large displays

function dropDown() {

}
let heads = document.querySelectorAll('.dropDown')
heads.forEach(head => {
    console.log(head.children[1]);
    head.addEventListener('click', function() {
        if (head.children[1].classList == "fadeIn") {
            head.children[1].classList.toggle('fadeIn')
            head.classList.toggle('open-menu')
            head.children[0].children[0].classList.toggle('rotate-180')
        } else {
            heads.forEach(head => {
                head.children[1].classList.remove('fadeIn')
                head.classList.remove('open-menu')
                head.children[0].children[0].classList.remove('rotate-180')

            })

            head.children[1].classList.add('fadeIn')
            head.classList.add('open-menu')
            head.children[0].children[0].classList.toggle('rotate-180')
        }

    })
})

document.querySelectorAll('main , nav , footer').forEach(area => {
    area.addEventListener('click', function() {
        let heads = document.querySelectorAll('.dropDown')
        heads.forEach(head => {
            head.children[1].classList.remove('fadeIn')
            head.classList.remove('open-menu')
            head.children[0].children[0].classList.remove('rotate-180')
            document.getElementById('header-menu-side').classList.remove('dis-block')

        })
    })
})


//burger menu 
let burgerMenu = document.getElementById('burger-menu')


burgerMenu.addEventListener('click', function() {
    document.getElementById('header-menu-side').classList.toggle('dis-block')
})