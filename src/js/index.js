class StatusPanel {
    constructor() {
        this.VisibleItems = {
            lights: 3,
            life: 2
        }
    
        this.game = document.querySelector('.game')
        this.lights = this.game.querySelectorAll('.game__panel-light')
        this.life = this.game.querySelectorAll('.panel__life')
        this.btnLight = this.game.querySelector('.game-btn--light')
        this.btnLife = this.game.querySelector('.game-btn--life')
    }
    
    
    showTextStatus = () => {
        const spanLife = document.querySelector('.game__text-life')
        const spanLight = document.querySelector('.game__text-light')
        
        spanLife.innerHTML = this.VisibleItems.life
        spanLight.innerHTML = this.VisibleItems.lights
    }
    
    
    
    updateVisibleItems = (element, typeIndex) => {
        // Array.from(element)
          // .reverse()
          // .forEach((item, index) => {
          //     if (index < typeIndex) {
          //         item.style.opacity = 0
          //     }
          // })
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
