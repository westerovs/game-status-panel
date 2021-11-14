const setSpritePosition = (element) => {
  let translate = 0
  let scale = 1
  
  document.addEventListener('keydown', (key) => {
    // ↑→↓← - смена позиции
    if (key.code === 'ArrowLeft') {
      scale = -1
      translate -= 10
    }
    if (key.code === 'ArrowRight') {
      scale = 1
      translate += 10
    }
  
    element.style.transform = `translateX(${ translate }px) scaleX(${ scale })`
  })
}

export {
  setSpritePosition
}
