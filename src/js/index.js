// import AbstractObserver from '../utils/abstract-observer.js'
import { setSpritePosition } from '../utils/controls.js'

class StatusPanel {
    constructor() {
        this.VisibleItems = {
            light: 3,
            life: 0
        }
        this.countLight = 2
        
        this.game = document.querySelector('.game')
        this.lights = this.game.querySelectorAll('.game__panel-light')
        this.life = this.game.querySelectorAll('.game__panel-life')

        this.btnLight = this.game.querySelector('.game-btn--light')
        this.btnLife = this.game.querySelector('.game-btn--life')
        this.btnGameOver = this.game.querySelector('.game__over')
        this.skeleton = this.game.querySelector('.skeleton')
    }
    
    init = () => {
        this.update()
        this.addedHandlers()
        setSpritePosition(this.skeleton, this.game)
    }
    
    update = () => {
        if (this.VisibleItems.life <= 0) {
            this.VisibleItems.life = 0
        }

        this.updateVisibleItems(this.lights, this.VisibleItems.light)
        this.updateVisibleItems(this.life, this.VisibleItems.life)
        this.createWinScreen()
    }
    
    restartGame = () => {
        window.location.reload()
    }
    
    addedHandlers = () => {
        this.btnGameOver.addEventListener('click', this.restartGame)
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

        this.game.classList.add('strikeLight')
        setTimeout(() => {
            this.game.classList.remove('strikeLight')
        }, 200)
        
        light.style.position = 'absolute'
        light.style.top = `${ skeletonPosY }px`
        light.style.left = `${ skeletonPosX }px`
    
        this.VisibleItems.light--
        // если молний 0, но есть 2 жизни, то всё равно считать это победой
        if (this.VisibleItems.light === 0 && this.VisibleItems.life === 2) {
            this.createWinScreen()
            return
        }
    
        this.VisibleItems.life--
        this.update()
    }
    
    onHandlerLifeBtn = () => {
        this.game.classList.add('strikeLife')
        setTimeout(() => {
            this.game.classList.remove('strikeLife')
        }, 200)
    
        this.VisibleItems.life++
        this.update()
    }
    
    createWinScreen = () => {
        let textVictory = document.querySelector('.game__victory')
        this.showTextStatus()
    
        if (this.VisibleItems.light === 0 && this.VisibleItems.life === 2) {
            textVictory.innerHTML = 'CONGRATULATIONS YOU WIN!'
            textVictory.style.display = 'block'
            this.btnGameOver.style.display = 'block'
            document.body.classList.add('win')
            this.removeHandlers()
            return
        }
        if (this.VisibleItems.light === 0) {
            textVictory.innerHTML = 'GAME FAIL!'
            textVictory.style.display = 'block'
            this.btnGameOver.style.display = 'block'
            document.body.classList.add('fail')
            this.removeHandlers()
            return
        }
        if (this.VisibleItems.life === 3) {
            textVictory.innerHTML = 'CONGRATULATIONS YOU WIN!'
            this.btnGameOver.style.display = 'block'
            textVictory.style.display = 'block'
            this.removeHandlers()
            document.body.classList.add('win')
        }

    }
}

new StatusPanel().init()
