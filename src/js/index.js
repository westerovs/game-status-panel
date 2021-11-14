class StatusPanel {
    constructor() {
        this.VisibleItems = {
            light: 2,
            life: 2
        }
    
        this.game = document.querySelector('.game')
        this.lights = this.game.querySelectorAll('.game__panel-light')
        this.life = this.game.querySelectorAll('.game__panel-life')
        this.btnLight = this.game.querySelector('.game-btn--light')
        this.btnLife = this.game.querySelector('.game-btn--life')
    }
    
    init() {
        this.updateVisibleItems(this.lights, this.VisibleItems.light)
        this.updateVisibleItems(this.life, this.VisibleItems.life)
        this.showTextStatus()
        this.addedHandlers()
    }
    
    update() {
    
    }
    
    addedHandlers() {
        this.btnLight.addEventListener('click', this.onHandlerLightBtn)
        this.btnLife.addEventListener('click', this.onHandlerLifeBtn)
    }
    
    showTextStatus = () => {
        const spanLife = document.querySelector('.game__text-life')
        const spanLight = document.querySelector('.game__text-light')
        
        spanLife.innerHTML = this.VisibleItems.life
        spanLight.innerHTML = this.VisibleItems.light
    }
    
    updateVisibleItems = (element, currentVisibleElements) => {
        element
          .forEach((item, index) => {
              if (index < currentVisibleElements) {
                  item.style.opacity = '1'
              }
          })
    }
    
    onHandlerLightBtn = () => {
        this.VisibleItems.light--
        this.showTextStatus()
        this.createWinScreen()
    }
    
    onHandlerLifeBtn = () => {
        this.VisibleItems.life++
        this.showTextStatus()
        this.createWinScreen()
    }
    
    createWinScreen = () => {
        let textVictory = document.querySelector('.game__victory')
        if (this.VisibleItems.light === 0 && this.VisibleItems.life === 2) {
            textVictory.innerHTML = 'CONGRATULATIONS YOU WIN!'
            return
        }
        if (this.VisibleItems.light === 0) {
            textVictory.innerHTML = 'GAME FAIL!'
            return
        }
        if (this.VisibleItems.life === 3) {
            textVictory.innerHTML = 'CONGRATULATIONS YOU WIN!'
            return
        }

    }
}

new StatusPanel().init()
