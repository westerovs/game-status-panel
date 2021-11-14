import AbstractObserver from '../utils/abstract-observer.js'
import { setSpritePosition } from '../utils/controls.js'

class StatusPanel {
    constructor() {
        this.VisibleItems = {
            light: 3,
            life: 0
        }
        this.countLight = 2
        
        // this.observer = new AbstractObserver()
        this.game = document.querySelector('.game')
        this.gameWindow = document.querySelector('.game__window')
        this.lights = this.game.querySelectorAll('.game__panel-light')
        this.life = this.game.querySelectorAll('.game__panel-life')

        this.btnLight = this.game.querySelector('.game-btn--light')
        this.btnLife = this.game.querySelector('.game-btn--life')
        this.skeleton = this.game.querySelector('.skeleton')
    }
    
    init = () => {
        this.update()
        this.addedHandlers()
        setSpritePosition(this.skeleton)
    }
    
    update = () => {
        if (this.VisibleItems.life <= 0) {
            this.VisibleItems.life = 0
        }

        this.updateVisibleItems(this.lights, this.VisibleItems.light)
        this.updateVisibleItems(this.life, this.VisibleItems.life)
        this.showTextStatus()
        this.createWinScreen()
    }
    
    addedHandlers = () => {
        this.btnLight.addEventListener('click', this.onHandlerLightBtn)
        this.btnLife.addEventListener('click', this.onHandlerLifeBtn)
    }
    
    removeHandlers = () => {
        this.btnLight.removeEventListener('click', this.onHandlerLightBtn)
        this.btnLife.removeEventListener('click', this.onHandlerLifeBtn)
    }
    
    showTextStatus = () => {
        const spanLife = document.querySelector('.game__text-life')
        const spanLight = document.querySelector('.game__text-light')
        
        spanLife.innerHTML = this.VisibleItems.life
        spanLight.innerHTML = this.VisibleItems.light
    }
    
    updateVisibleItems = (element, currentVisibleElements) => {
        element.forEach((item, index) => {
            if (index < currentVisibleElements) {
                item.style.opacity = '1'
            } else {
                item.style.opacity = '0'
            }
        })
    }
    
    onHandlerLightBtn = () => {
        const light = Array.from(this.lights)[this.countLight]
        this.countLight--
        
        const skeletonPosX = this.skeleton.getBoundingClientRect().x -  this.game.getBoundingClientRect().x
        const skeletonPosY = this.skeleton.getBoundingClientRect().y -  this.game.getBoundingClientRect().y

        light.style.position = 'absolute'
        light.style.top = `${ skeletonPosY }px`
        light.style.left = `${ skeletonPosX }px`

        this.VisibleItems.light--
        this.VisibleItems.life--
        this.update()
    }
    
    onHandlerLifeBtn = () => {
        this.VisibleItems.life++
        this.update()
    }
    
    createWinScreen = () => {
        let textVictory = document.querySelector('.game__victory')
        
        if (this.VisibleItems.light === 0 && this.VisibleItems.life === 2) {
            textVictory.innerHTML = 'CONGRATULATIONS YOU WIN!'
            textVictory.style.display = 'block'
            this.removeHandlers()
            return
        }
        if (this.VisibleItems.light === 0) {
            textVictory.innerHTML = 'GAME FAIL!'
            textVictory.style.display = 'block'
            this.removeHandlers()
            return
        }
        if (this.VisibleItems.life === 3) {
            textVictory.innerHTML = 'CONGRATULATIONS YOU WIN!'
            textVictory.style.display = 'block'
            this.removeHandlers()
            return
        }

    }
}

new StatusPanel().init()
