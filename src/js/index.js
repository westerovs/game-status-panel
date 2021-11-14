class StatusPanel {
    constructor() {
        this.VisibleItems = {
            lights: 2,
            life: 2
        }
    
        this.lights = document.querySelectorAll('.game__panel-light')
        this.life = document.querySelectorAll('.panel__life')
    }
    
    
    showTextStatus = () => {
        const spanLife = document.querySelector('.game__text-life')
        const spanLight = document.querySelector('.game__text-light')
        
        spanLife.innerHTML = this.VisibleItems.life
        spanLight.innerHTML = this.VisibleItems.lights
    }
    
    
    
    updateVisibleItems = (element, typeIndex) => {
        Array.from(element)
          .reverse()
          .forEach((item, index) => {
              if (index < typeIndex) {
                  item.style.opacity = 0
              }
          })
    }
    
    
    init() {
        this.updateVisibleItems(this.lights, this.VisibleItems.lights)
        this.updateVisibleItems(this.life, this.VisibleItems.life)
        this.showTextStatus()
    }
    
    update() {
    
    }
}

new StatusPanel().init()
