document.addEventListener("DOMContentLoaded", function () {
    var obj = {
        x: 600,
        y: 415,
        keys: undefined,
        start() {
            var canvas = document.getElementById("canv")
            var ctx = canvas.getContext("2d")
            var ctx2 = canvas.getContext("2d")
            var image3 = new Image()
            image3.src = "crowd.jpg"
            image3.onload = function () {
                ctx.rect(1, 1, 1200, 600);
                ctx.stroke();
                var pat = ctx.createPattern(this, "repeat");
                ctx.fillStyle = pat;
                ctx.fill()
                var image2 = new Image()
                image2.src = "sand.jpg"
                image2.onload = function () {
                    path1 = new Path2D();
                    path1.moveTo(200, 100);
                    path1.lineTo(1000, 100);
                    path1.arc(1000, 300, 200, Math.PI * 3 / 2, Math.PI * 10 / 4);
                    path1.lineTo(200, 500);
                    path1.arc(200, 300, 200, Math.PI * 1 / 2, Math.PI * 3 / 2);
                    ctx.beginPath()
                    ctx.moveTo(200, 100);
                    ctx.lineTo(1000, 100);
                    ctx.arc(1000, 300, 200, Math.PI * 3 / 2, Math.PI * 10 / 4);
                    ctx.lineTo(200, 500);
                    ctx.arc(200, 300, 200, Math.PI * 1 / 2, Math.PI * 3 / 2);
                    var pat = ctx.createPattern(this, "repeat");
                    ctx.fillStyle = pat;
                    ctx.fill()
                    ctx.closePath();
                    ctx.stroke()
                    var image = new Image()
                    image.src = "grass.jpg"
                    image.onload = function () {
                        path2 = new Path2D()
                        path2.moveTo(300, 200);
                        path2.lineTo(900, 200);
                        path2.arc(900, 300, 100, Math.PI * 3 / 2, Math.PI * 10 / 4);
                        path2.lineTo(300, 400);
                        path2.arc(300, 300, 100, Math.PI * 1 / 2, Math.PI * 3 / 2);
                        ctx.beginPath()
                        ctx.moveTo(300, 200);
                        ctx.lineTo(900, 200);
                        ctx.arc(900, 300, 100, Math.PI * 3 / 2, Math.PI * 10 / 4);
                        ctx.lineTo(300, 400);
                        ctx.arc(300, 300, 100, Math.PI * 1 / 2, Math.PI * 3 / 2);
                        var pat = ctx.createPattern(this, "repeat");
                        ctx.fillStyle = pat;
                        ctx.fill()
                        ctx.closePath();
                        ctx.stroke()
                        var numberOfPlayers
                        var select = document.createElement("SELECT")
                        for (let i = 0; i < 5; i++) {
                            if (i != 1) {
                                var option = document.createElement("OPTION")
                                option.innerText = i
                                option.value = i
                                select.appendChild(option)
                            }
                        }
                        select.addEventListener("change", function () {
                            numberOfPlayers = this.value
                            this.parentNode.removeChild(select)
                            if (numberOfPlayers == 1) {
                                obj.keys = prompt("wciśnij klawisze")
                                obj.run(0, null, null, null)
                            }
                            else if (numberOfPlayers == 2) {
                                obj.keys = prompt("wciśnij klawisze")
                                obj.run(0, 22, null, null)
                            }
                            else if (numberOfPlayers == 3) {
                                obj.keys = prompt("wciśnij klawisze")
                                obj.run(0, 22, 44, null)
                            }
                            else {
                                obj.keys = prompt("wciśnij klawisze")
                                obj.run(0, 22, 44, 66)
                            }

                        })
                        select.style.display = "block"
                        select.style.marginLeft = "50px"
                        document.body.appendChild(select)
                    }
                }
            }
        },

        run(shift, shift2, shift3, shift4) {
            var winner = false
            var canvas = document.getElementById("canv")
            var ctx = canvas.getContext("2d")
            var objX = obj.x
            var firstPath = new Path2D()
            var secondPath = new Path2D()
            var thirdPath = new Path2D()
            var fourthPath = new Path2D()
            var objY = obj.y
            var objX = obj.x
            objY += shift
            var objX2 = objX
            var objY2 = objY + shift2
            var objX3 = objX
            var objY3 = objY + shift3
            var objX4 = objX
            var objY4 = objY + shift4
            ctx.moveTo(objX, objY)
            var turn = [false, false, false, false]
            document.addEventListener("keydown", function (event) {
                for (let i = 0; i < obj.keys.length; i++) {
                    if (event.key == obj.keys[i]) {
                        if (i == 0 && line1 == true) {
                            turn[i] = true
                        }
                        else if (i == 1 && line2 == true) {
                            turn[i] = true
                        }
                        else if (i == 2 && line3 == true) {
                            turn[i] = true
                        }
                        else if (i == 3 && line4 == true) {
                            turn[i] = true
                        }
                    }
                }
            })
            document.addEventListener("keyup", function (event) {
                for (let i = 0; i < obj.keys.length; i++) {
                    if (event.key == obj.keys[i]) {
                        turn[i] = false
                    }
                }
            })
            var currentAngle = [0, 0, 0, 0]
            var cos = []
            var notInSand = true
            var notInSand2 = true
            var notInSand3 = true
            var notInSand4 = true
            var inGrass = false
            var inGrass2 = false
            var inGrass3 = false
            var inGrass4 = false
            var line1
            var line2
            var line3
            var line4
            var nowStart = false
            if (shift2 == null) {
                var img1 = new Image()
                img1.src = "motor.png"
                img1.onload = function () {
                    ctx.drawImage(img1, objX, objY)
                    line1 = true
                    line2 = false
                    line3 = false
                    line4 = false
                }
            }
            else if (shift3 == null) {
                console.log("tutaj")
                var img1 = new Image()
                img1.src = "motor.png"
                img1.onload = function () {
                    ctx.drawImage(img1, objX, objY - 11)
                    line1 = true
                    line2 = true
                    line3 = false
                    line4 = false
                }
                var img2 = new Image()
                img2.src = "motor.png"
                img2.onload = function () {
                    ctx.drawImage(img1, objX2, objY2 - 11)
                }
            }
            else if (shift4 == null) {
                var img1 = new Image()
                img1.src = "motor.png"
                img1.onload = function () {
                    ctx.drawImage(img1, objX, objY - 11)
                    line1 = true
                    line2 = true
                    line3 = true
                    line4 = false
                }
                var img2 = new Image()
                img2.src = "motor.png"
                img2.onload = function () {
                    ctx.drawImage(img1, objX2, objY2 - 11)
                }
                var img3 = new Image()
                img3.src = "motor.png"
                img3.onload = function () {
                    ctx.drawImage(img1, objX3, objY3 - 11)
                }
            }
            else {
                var img1 = new Image()
                img1.src = "motor.png"
                img1.onload = function () {
                    ctx.drawImage(img1, objX, objY - 11)
                    line1 = true
                    line2 = true
                    line3 = true
                    line4 = true
                }
                var img2 = new Image()
                img2.src = "motor.png"
                img2.onload = function () {
                    ctx.drawImage(img1, objX2, objY2 - 11)
                }
                var img3 = new Image()
                img3.src = "motor.png"
                img3.onload = function () {
                    ctx.drawImage(img1, objX3, objY3 - 11)
                }
                var img4 = new Image()
                img4.src = "motor.png"
                img4.onload = function () {
                    ctx.drawImage(img1, objX4, objY4 - 11)
                }
            }
            obj.image3 = new Image()
            obj.image3.src = "crowd.jpg"
            obj.image3.onload = function () {
                obj.image2 = new Image()
                obj.image2.src = "sand.jpg"
                obj.image2.onload = function () {
                    obj.image = new Image()
                    obj.image.src = "grass.jpg"
                    obj.image.onload = function () {
                        obj.img1 = new Image()
                        obj.img1.src = "motor.png"
                        obj.img1.onload = function () {
                            //ctx.drawImage(obj.img1, objX, objY - 11)
                            frame()
                        }
                    }
                }
            }
            var firstPrev = true
            var firstNow = true
            var firstLap = -1
            var secondPrev = true
            var secondNow = true
            var secondLap = -1
            var thirdPrev = true
            var thirdNow = true
            var thirdLap = -1
            var fourthPrev = true
            var fourthNow = true
            var fourthLap = -1
            function frame() {
                if (winner == false) {
                    console.log("klatka")
                    var before = document.getElementById("currentLeader").innerText
                    before = parseInt(before)
                    var canvas = document.getElementById("canv")
                    var ctx = canvas.getContext("2d")
                    ctx.clearRect(1, 1, 1500, 600)
                    ctx.rect(1, 1, 1200, 600);
                    ctx.stroke();
                    var pat = ctx.createPattern(obj.image3, "repeat");
                    ctx.fillStyle = pat;
                    ctx.fill()
                    path1 = new Path2D();
                    path1.moveTo(200, 100);
                    path1.lineTo(1000, 100);
                    path1.arc(1000, 300, 200, Math.PI * 3 / 2, Math.PI * 10 / 4);
                    path1.lineTo(200, 500);
                    path1.arc(200, 300, 200, Math.PI * 1 / 2, Math.PI * 3 / 2);
                    ctx.beginPath()
                    ctx.moveTo(200, 100);
                    ctx.lineTo(1000, 100);
                    ctx.arc(1000, 300, 200, Math.PI * 3 / 2, Math.PI * 10 / 4);
                    ctx.lineTo(200, 500);
                    ctx.arc(200, 300, 200, Math.PI * 1 / 2, Math.PI * 3 / 2);
                    var pat = ctx.createPattern(obj.image2, "repeat");
                    ctx.fillStyle = pat;
                    ctx.fill()
                    ctx.closePath();
                    ctx.stroke()
                    path2 = new Path2D()
                    path2.moveTo(300, 200);
                    path2.lineTo(900, 200);
                    path2.arc(900, 300, 100, Math.PI * 3 / 2, Math.PI * 10 / 4);
                    path2.lineTo(300, 400);
                    path2.arc(300, 300, 100, Math.PI * 1 / 2, Math.PI * 3 / 2);
                    ctx.beginPath()
                    ctx.moveTo(300, 200);
                    ctx.lineTo(900, 200);
                    ctx.arc(900, 300, 100, Math.PI * 3 / 2, Math.PI * 10 / 4);
                    ctx.lineTo(300, 400);
                    ctx.arc(300, 300, 100, Math.PI * 1 / 2, Math.PI * 3 / 2);
                    var pat = ctx.createPattern(obj.image, "repeat");
                    ctx.fillStyle = pat;
                    ctx.fill()
                    ctx.closePath();
                    ctx.stroke()
                    if (shift != null) {
                        ctx.save()
                        ctx.translate(objX, objY);
                        ctx.rotate(-currentAngle[0]);
                        ctx.drawImage(obj.img1, -30, -11)
                        ctx.restore();
                    }
                    if (shift2 != null) {
                        ctx.save()
                        ctx.translate(objX2, objY2);
                        ctx.rotate(-currentAngle[1]);
                        ctx.drawImage(obj.img1, -30, -11)
                        ctx.restore();
                    }
                    if (shift3 != null) {
                        ctx.save()
                        ctx.translate(objX3, objY3);
                        ctx.rotate(-currentAngle[2]);
                        ctx.drawImage(obj.img1, -30, -11)
                        ctx.restore();
                    }
                    if (shift4 != null) {
                        ctx.save()
                        ctx.translate(objX4, objY4);
                        ctx.rotate(-currentAngle[3]);
                        ctx.drawImage(obj.img1, -30, -11)
                        ctx.restore();
                    }
                    ctx.moveTo(objX, objY)
                    window.requestAnimationFrame(frame)
                    notInSand = ctx.isPointInPath(path1, objX, objY)
                    inGrass = ctx.isPointInPath(path2, objX, objY)
                    if (notInSand != true || inGrass != false) {
                        line1 = false
                        turn[0] = false
                    }
                    notInSand2 = ctx.isPointInPath(path1, objX2, objY2)
                    inGrass2 = ctx.isPointInPath(path2, objX2, objY2)
                    if (notInSand2 != true || inGrass2 != false) {
                        line2 = false
                        turn[1] = false
                    }
                    notInSand3 = ctx.isPointInPath(path1, objX3, objY3)
                    inGrass3 = ctx.isPointInPath(path2, objX3, objY3)
                    if (notInSand3 != true || inGrass3 != false) {
                        line3 = false
                        turn[2] = false
                    }
                    notInSand4 = ctx.isPointInPath(path1, objX4, objY4)
                    inGrass4 = ctx.isPointInPath(path2, objX4, objY4)
                    if (notInSand4 != true || inGrass4 != false) {
                        line4 = false
                        turn[3] = false
                    }
                    for (let i = 0; i < turn.length; i++) {
                        if (turn[i] == true) {
                            currentAngle[i] += 0.04
                        }
                    }
                    for (let i = 0; i < currentAngle.length; i++) {
                        cos[i] = Math.cos(currentAngle[i])
                    }
                    if (line1 == true) {
                        if (objX > 614 && objY > 399) {
                            firstNow = true
                            if (firstPrev == false && firstNow == true) {
                                firstLap += 1
                                if (firstLap > before) {
                                    before = firstLap
                                }
                            }
                            firstPrev = true
                        }
                        else {
                            firstPrev = false
                        }
                        if ((currentAngle[0] % 6.28) < 3.14) {
                            var x = cos[0] * 4
                            var y2 = (Math.pow(x, 2) - 16) * -1
                            var y = Math.sqrt(y2)
                            ctx.fillStyle = pat
                            ctx.lineTo(objX + x, objY - y)
                            firstPath.moveTo(objX, objY)
                            objX += x
                            objY -= y
                            firstPath.lineTo(objX, objY)
                            ctx.stroke(firstPath)
                            obj.x = objX
                            obj.y = objY
                            ctx.stroke()
                        }
                        else if ((currentAngle[0] % 6.28) < 6.28) {
                            var x = cos[0] * 4
                            var y2 = (Math.pow(x, 2) - 16) * -1
                            var y = Math.sqrt(y2)
                            ctx.lineTo(objX + x, objY + y)
                            firstPath.moveTo(objX, objY)
                            objX += x
                            objY += y
                            firstPath.lineTo(objX, objY)
                            ctx.stroke(firstPath)
                            ctx.stroke()
                        }
                    }
                    else {
                        ctx.stroke(firstPath)
                    }
                    if (line2 == true) {
                        if (objX2 > 614 && objY2 > 399) {
                            secondNow = true
                            if (secondPrev == false && secondNow == true) {
                                secondLap += 1
                                if (secondLap > before) {
                                    before = secondLap
                                }
                            }
                            secondPrev = true
                        }
                        else {
                            secondPrev = false
                        }
                        ctx.moveTo(objX2, objY2)
                        if ((currentAngle[1] % 6.28) < 3.14) {
                            var x = cos[1] * 4
                            var y2 = (Math.pow(x, 2) - 16) * -1
                            var y = Math.sqrt(y2)
                            ctx.lineTo(objX2 + x, objY2 - y)
                            secondPath.moveTo(objX2, objY2)
                            objX2 += x
                            objY2 -= y
                            secondPath.lineTo(objX2, objY2)
                            ctx.stroke(secondPath)
                            ctx.stroke()
                        }
                        else if ((currentAngle[1] % 6.28) < 6.28) {
                            var x = cos[1] * 4
                            var y2 = (Math.pow(x, 2) - 16) * -1
                            var y = Math.sqrt(y2)
                            ctx.lineTo(objX2 + x, objY2 + y)
                            secondPath.moveTo(objX2, objY2)
                            objX2 += x
                            objY2 += y
                            secondPath.lineTo(objX2, objY2)
                            ctx.stroke(secondPath)
                            ctx.stroke()
                        }
                    }
                    else {
                        ctx.stroke(secondPath)
                    }
                    if (line3 == true) {
                        if (objX3 > 614 && objY3 > 399) {
                            thirdNow = true
                            if (thirdPrev == false && thirdNow == true) {
                                thirdLap += 1
                                if (thirdLap > before) {
                                    before = thirdLap
                                }
                            }
                            thirdPrev = true
                        }
                        else {
                            thirdPrev = false
                        }
                        ctx.moveTo(objX3, objY3)
                        if ((currentAngle[2] % 6.28) < 3.14) {
                            var x = cos[2] * 4
                            var y2 = (Math.pow(x, 2) - 16) * -1
                            var y = Math.sqrt(y2)
                            ctx.lineTo(objX3 + x, objY3 - y)
                            thirdPath.moveTo(objX3, objY3)
                            objX3 += x
                            objY3 -= y
                            thirdPath.lineTo(objX3, objY3)
                            ctx.stroke(thirdPath)
                            ctx.stroke()
                        }
                        else if ((currentAngle[2] % 6.28) < 6.28) {
                            var x = cos[2] * 4
                            var y2 = (Math.pow(x, 2) - 16) * -1
                            var y = Math.sqrt(y2)
                            ctx.lineTo(objX3 + x, objY3 + y)
                            thirdPath.moveTo(objX3, objY3)
                            objX3 += x
                            objY3 += y
                            thirdPath.lineTo(objX3, objY3)
                            ctx.stroke(thirdPath)
                            ctx.stroke()
                        }
                    }
                    else {
                        ctx.stroke(thirdPath)
                    }
                    if (line4 == true) {
                        if (objX4 > 614 && objY4 > 399) {
                            fourthNow = true
                            if (fourthPrev == false && fourthNow == true) {
                                fourthLap += 1
                                if (fourthLap > before) {
                                    before = fourthLap
                                }
                            }
                            fourthPrev = true
                        }
                        else {
                            fourthPrev = false
                        }
                        ctx.moveTo(objX4, objY4)
                        if ((currentAngle[3] % 6.28) < 3.14) {
                            var x = cos[3] * 4
                            var y2 = (Math.pow(x, 2) - 16) * -1
                            var y = Math.sqrt(y2)
                            ctx.lineTo(objX4 + x, objY4 - y)
                            fourthPath.moveTo(objX4, objY4)
                            objX4 += x
                            objY4 -= y
                            fourthPath.lineTo(objX4, objY4)
                            ctx.stroke(fourthPath)
                            ctx.stroke()
                        }
                        else if ((currentAngle[3] % 6.28) < 6.28) {
                            var x = cos[3] * 4
                            var y2 = (Math.pow(x, 2) - 16) * -1
                            var y = Math.sqrt(y2)
                            ctx.lineTo(objX4 + x, objY4 + y)
                            fourthPath.moveTo(objX4, objY4)
                            objX4 += x
                            objY4 += y
                            fourthPath.lineTo(objX4, objY4)
                            ctx.stroke(fourthPath)
                            ctx.stroke()
                        }
                    }
                    else {
                        ctx.stroke(fourthPath)
                    }
                    if (line1 == true) {
                        ctx.moveTo(objX, objY)
                    }
                    else if (line2 == true) {
                        ctx.moveTo(objX2, objY2)
                    }
                    else if (line3 == true) {
                        ctx.moveTo(objX3, objY3)
                    }
                    else if (line4 == true) {
                        ctx.moveTo(objX4, objY4)
                    }
                    document.getElementById("currentLeader").innerText = before
                    if (before == 5 && winner == false) {
                        winner = true
                        if (firstLap == 5) {
                            document.getElementById("currentLeader").innerText = 5
                            if (document.getElementById("currentLeader").innerText == 5) {
                                setTimeout(function () {
                                    alert("wygrał gracz nr 1")
                                    line1 = undefined
                                }, 100)
                                window.cancelAnimationFrame(frame)
                            }

                        }
                        else if (secondLap == 5) {
                            document.getElementById("currentLeader").innerText = 5
                            if (document.getElementById("currentLeader").innerText == 5) {
                                setTimeout(function () {
                                    alert("wygrał gracz nr 2")
                                    line2 = undefined
                                }, 100)
                                window.cancelAnimationFrame(frame)
                            }
                        }
                        else if (thirdLap == 5) {
                            document.getElementById("currentLeader").innerText = 5
                            if (document.getElementById("currentLeader").innerText == 5) {
                                setTimeout(function () {
                                    alert("wygrał gracz nr 3")
                                    line3 = undefined
                                }, 100)
                                window.cancelAnimationFrame(frame)
                            }
                        }
                        else if (fourthLap == 5) {
                            document.getElementById("currentLeader").innerText = 5
                            if (document.getElementById("currentLeader").innerText == 5) {
                                setTimeout(function () {
                                    alert("wygrał gracz nr 4")
                                    line4 = undefined
                                }, 100)
                                window.cancelAnimationFrame(frame)
                            }
                        }

                    }
                    if (line1 == true && line2 != true && line3 != true && line4 != true && winner == false) {
                        window.cancelAnimationFrame(frame)
                        winner = true
                        alert("wygrał gracz nr 1")
                        line1 = undefined
                    }
                    else if (line1 != true && line2 == true && line3 != true && line4 != true && winner == false) {
                        window.cancelAnimationFrame(frame)
                        winner = true
                        alert("wygrał gracz nr 2")
                        line2 = undefined
                    }
                    else if (line1 != true && line2 != true && line3 == true && line4 != true && winner == false) {
                        window.cancelAnimationFrame(frame)
                        winner = true
                        alert("wygrał gracz nr 3")
                        line3 = undefined
                    }
                    else if (line1 != true && line2 != true && line3 != true && line4 == true && winner == false) {
                        window.cancelAnimationFrame(frame)
                        winner = true
                        alert("wygrał gracz nr 4")
                        line4 = undefined
                    }
                }
            }
        },
    }
    obj.start()
})