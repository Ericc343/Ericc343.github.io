let clicker, upgrade, tenUp, rebirth
let upgradeCount1 = 0
let upgradeCount2 = 0
let upgradeCount3 = 0
let gameState = 0
let points = 0
let tenUpBought = false
let tenUpOn = false
let rebirthBought = false
let rebirthCount = 0

function setup() {
    createCanvas(700, 600)
    clicker = new CLICKER()
    upgrade = new UPGRADE()
    tenUp = new TENUP()
    rebirth = new REBIRTH()
}

function draw() {
    if (!rebirthBought) {
        background(171, 193, 222)
    } else if (rebirthBought) {
        background(20, 55, 70)
    }
    clicker.display()
    upgrade.display()
    tenUp.display()
    rebirth.display()
    stats()
}

function stats() {
    noStroke()
    textAlign(CENTER)
    textFont('Courier New')
    textSize(30)
    if (!rebirthBought) {
        fill(0)
        text("Points: ", 365, 40)
        text(points, 355, 75)
    } else if (rebirthBought) {
        fill(255)
        text("Points: ", 365, 40)
        text(points, 355, 75)
    }
}

function keyPressed() {
    if (gameState == 0) {
        if (key == ' ') {
            points += round(((1 + upgradeCount1) * (1 + 0.1 * upgradeCount2)) ** (1 + .001 * upgradeCount3)) * (1 + 2 * rebirthCount)
        }
        if (key == 'b' && points >= 5000 && !tenUpBought) {
            tenUpBought = true
            points -= 5000
        }
        if (key == 't' && tenUpBought && tenUpOn) {
            tenUpOn = false
        } else if (key == 't' && tenUpBought && !tenUpOn) {
            tenUpOn = true
        }
        if (key == 'q' && points >= 1000000 && !rebirthBought) {
            rebirthBought = true
            rebirthCount++
            points = 0
            upgradeCount1 = 0
            upgradeCount2 = 0
            upgradeCount3 = 0
            tenUpBought = false
            tenUpOn = false
        }
        if (tenUpOn) {
            if (key == 'e' && points >= 100) {
                    upgradeCount1 += 10
                    points -= 100
            }
            if (key == 'f' && points >= 20000) {
                    upgradeCount2 += 10
                    points -= 20000
            }
            if (key == 'r' && points >= 500000) {
                    upgradeCount3 += 10
                    points -= 500000
            }
        } else if (!tenUpOn) {
            if (key == 'e' && points >= 10) {
                upgradeCount1++
                points -= 10
            }
            if (key == 'f' && points >= 2000) {
                upgradeCount2++
                points -= 2000
            }
            if (key == 'r' && points >= 50000) {
                upgradeCount3++
                points -= 50000
            }
        }
        //Only when changing and developing
        //if (key == '0') {
            //points += 10 ** 21
        //}
    }
}

class CLICKER {
    display() {
        noStroke()
        textAlign(CENTER)
        textFont('Courier New')
        textSize(30)
        if (!rebirthBought) {
            fill(111, 186, 41)
            rect(300, 250, 100, 100)
            fill(74, 125, 26)
            text("Press", 350, 290)
            text("Space", 350, 320)
            fill(250, 217, 70)
            square(600, 0, 100)
        } else if (rebirthBought) {
            fill(128, 140, 62)
            rect(300, 250, 100, 100)
            fill(58, 64, 26)
            text("Press", 350, 290)
            text("Space", 350, 320)
            fill(0)
            square(600, 0, 100)
            fill(255)
            rect(600, 0, 2, 100)
            rect(600, 100, 100, 2)
        }
    }
}

class UPGRADE {
    display() {
        noStroke()
        textAlign(CENTER)
        textFont('Courier New')

        fill(250, 250, 250)
        rect(250, 500, 200, 80)
        fill(185, 185, 185)
        rect(250, 460, 200, 40)
        fill(125, 125, 125)
        textSize(23)
        text("+1 points", 350, 490)
        fill(100, 100, 100)
        text("Cost: ", 360, 525)
        text(10, 350, 565)
        fill(100, 150, 200)
        rect(230, 445, 30, 30)
        fill(255)
        textSize(20)
        text("E", 245, 465)

        fill(250, 250, 250)
        rect(25, 500, 200, 80)
        fill(185, 185, 185)
        rect(25, 460, 200, 40)
        fill(125, 125, 125)
        textSize(23)
        text("+.1x points", 125, 490)
        fill(100, 100, 100)
        text("Cost: ", 130, 525)
        text(2000, 120, 565)
        fill(100, 150, 200)
        rect(10, 445, 30, 30)
        fill(255)
        textSize(20)
        text("F", 25, 465)

        fill(250, 250, 250)
        rect(475, 500, 200, 80)
        fill(185, 185, 185)
        rect(475, 460, 200, 40)
        fill(125, 125, 125)
        textSize(23)
        text("points^(+.001)", 580, 490)
        fill(100, 100, 100)
        text("Cost: ", 580, 525)
        text(50000, 568, 565)
        fill(100, 150, 200)
        rect(455, 445, 30, 30)
        fill(255, 255, 255)
        textSize(20)
        text("R", 470, 465)
    }
}

class TENUP {
    display() {
        noStroke()
        textAlign(CENTER)
        textFont('Courier New')

        if (!tenUpBought) {
            fill(225, 225, 225)
            rect(500, 275, 200, 40)
            fill(100)
            textSize(16.5)
            text("Buy ten: 5000 points", 600, 300)
            textSize(15)
            fill(100, 150, 200)
            rect(490, 265, 20, 20)
            fill(255, 255, 255)
            text("B", 500, 280)
        } else if (tenUpBought && !tenUpOn) {
            fill(225, 60, 70)
            rect(500, 275, 200, 40)
            fill(0)
            textSize(20)
            text("Buy ten", 600, 300)
            textSize(15)
            fill(100, 150, 200)
            rect(490, 265, 20, 20)
            fill(255, 255, 255)
            text("T", 500, 280)
        } else if (tenUpBought && tenUpOn) {
            fill(60, 255, 60)
            rect(500, 275, 200, 40)
            fill(0)
            textSize(20)
            text("Buy ten", 600, 300)
            textSize(15)
            fill(100, 150, 200)
            rect(490, 265, 20, 20)
            fill(255, 255, 255)
            text("T", 500, 280)
        }
    }
}
class REBIRTH {
    display() {
        noStroke()
        textAlign(CENTER)
        textFont('Courier New')

        fill(154, 154, 154)
        rect(0, 0, 200, 100)
        fill(255)
        textSize(25)
        text("Rebirth", 100, 25)
        if (!rebirthBought) {
            textSize(20)
            fill(147, 125, 179)
            rect(185, 85, 30, 30)
            fill(255)
            text("Q", 200, 105)
            fill(255)
            text("Cost: 1M Points", 100, 75)
        } else if (rebirthBought) {
            textSize(20)
            text("Bought", 100, 75)
        }
    }
}
