const setSpritePosition = (element, game) => {
  let translate = 0
  let scale = 1
  let step = 10
  
  document.addEventListener('keydown', (key) => {
    // ↑→↓← - смена позиции
    if (key.code === 'ArrowLeft') {
      scale = -1
      translate -= step
    }
    if (key.code === 'ArrowRight') {
      scale = 1
      translate += step
    }
  
    if (element.getBoundingClientRect().right >= game.getBoundingClientRect().right) {
      element.style.transform = `translateX(${ translate -= step }px) scaleX(${ scale })`
    }
    if (element.getBoundingClientRect().left <= game.getBoundingClientRect().left) {
      element.style.transform = `translateX(${ translate += step }px) scaleX(${ scale })`
    }
    
    element.style.transform = `translateX(${ translate }px) scaleX(${ scale })`
  })
}

export {
  setSpritePosition
}
