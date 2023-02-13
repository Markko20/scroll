gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if(ScrollTrigger.isTouch !==1) { //если не на устройствах с тачем

  ScrollSmoother.create ({
    wrapper: '.wrapper', //то где будет плавный скрол(т.е. весь сайт)
    content:'.content',  //то у чего будет плавный скролл
    smooth: 1.5,
    effects: true,
  })

  gsap.fromTo('.hero-section', { opacity: 1}, {
    opacity: 0, 
    scrollTrigger : {
      trigger: '.hero-section', //элемент триггера
      start: 'center',
      end: '820',
      scrub: true //возвращаем предыдущее значение, что бы при скролле верх opacity возвращал прежднее значение
    }
  })

  //что бы элементы собирались с боков
  let itemsL = gsap.utils.toArray('.gallery__left .gallery__item') //берем все айтемы с левого блока
  //перебиранм их циклом, что бы они всплывали не одновременно, а друг за другом
  itemsL.forEach(item => {

    gsap.fromTo(item, { x: -100, opacity:0}, {

      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
        star: '-850',
        end: '-100',
        scrub: true,
      }
    })

  })

  let itemsR = gsap.utils.toArray('.gallery__right .gallery__item') //берем все айтемы с правого блока
  itemsR.forEach(item => {

    gsap.fromTo(item, { x: 100, opacity:0}, {

      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
        star: '-850',
        end: '-100',
        scrub: true,
      }
    })

  })

}
