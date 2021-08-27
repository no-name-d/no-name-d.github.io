rightCol = document.querySelector('.right__col');
leftCol = document.querySelector('.left__col');
rightSlider = document.querySelector('.right__col-open');
leftSlider = document.querySelector('.left__col-open');
rootContainer = document.querySelector('.container');
let widthSensor = 0;

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

progressFill();

if (rightCol) {
    rightCol.addEventListener("mouseover", removeProgressBar, false);
}
if (leftCol) {
    leftCol.addEventListener("mouseover", backProgressBar, false);
    // leftCol.addEventListener("mousemove", progressFill, false);
}
if (rightSlider) {
    rightSlider.addEventListener("click", function () {
        if (document.documentElement.clientWidth < 640) {
            rightCol.style.display = "flex";
            rightCol.style.flex = "0 0 100%";
            leftCol.style.display = "none";
            widthSensor = 1;
            console.log(widthSensor);
        }
        if (rightSlider.style.display = "block") {
            leftSlider.style.display = "block";
            rightSlider.style.display = "none";
        }
    }, false);
}

if (leftSlider) {
    leftSlider.addEventListener("click", function () {
        if (document.documentElement.clientWidth < 640) {
            leftCol.style.display = "";
            leftSlider.style.display = "flex";
            leftCol.style.flex = "0 0 100%";
            rightCol.style.display = "none";
            widthSensor = 1;
            console.log(widthSensor);
        }
        if (leftSlider.style.display = "block") {
            rightSlider.style.display = "block";
            leftSlider.style.display = "none";
        }

    }, true);
}

function removeProgressBar() {
    progressBar = document.querySelectorAll('progress');
    // progressNull();
    for (const iter of progressBar) {
        iter.style.display = "none";
    };
    leftCol.style.opacity = 0.3;
    if (document.documentElement.clientWidth > 640) {
        if (widthSensor == 0) {
            rootContainer.style.flexWrap = "nowrap";
        }
        console.log(widthSensor);
        leftCol.style.display = "flex";
        // leftCol.style.flex = "0 0 30%";
        if (widthSensor == 1) {
            location = location

            widthSensor = 0;
        }
    }

};

function backProgressBar() {
    // progressFill();
    progressBar = document.querySelectorAll('progress');
    for (const iter of progressBar) {
        iter.style.display = "block";
    };
    leftCol.style.opacity = 1;
    if (document.documentElement.clientWidth > 640) {
        if (widthSensor == 0) {
            rootContainer.style.flexWrap = "nowrap";
        }
        leftCol.style.display = "flex";
        // leftCol.style.flex = "0 0 70%";
        leftCol.style.overflow = "scroll";
        rightCol.style.overflow = "scroll";
        if (widthSensor == 1) {
            // rootContainer.style.overflow = "scroll";
            // leftCol.style.display = "";
            // leftCol.style.overflow = "";
            // leftCol.style.overflow = "scroll";
            // leftCol.style.display = "flex";
            // leftCol.style.display.flex = "0 0 30%";
            // leftCol.style.width = "30%";
            // leftCol.style.width = "100px";
            widthSensor = 0;
        }
        // if (leftSlider.style.display = "none") {
        //     rightSlider.style.display = "block";
        // }
    };
}

function progressFill() {
    let progressValues = [50, 80, 60, 65, 75, 70, 30, 15, 20, 70, 50, 60, 35, 20];
    progressBars = document.querySelectorAll('progress');
    if (progressValues.length == progressBars.length) {
        let i = 0;
        for (const iter of progressBars) {
            let check = progressValues[i];
            if (iter.value == check) {
                i++;
                continue
            }
            if (iter.value != check) {
                let id = setInterval(frame, 30);
                function frame() {
                    {
                        iter.value += 1;
                        if (check === iter.value) {
                            console.log(iter.value + "-___-" + check);
                            clearInterval(id);
                        }
                    }
                }
            }
            i++;
        }
    }
}

function progressNull() {
    ProgressBars = document.querySelectorAll('progress');
    for (const iter of ProgressBars) {
        iter.value = 1;
    }
}
