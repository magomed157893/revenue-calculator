class RevenueCalc {
    constructor() {
        this.area = document.getElementById("revenue-area");
        this.twoNumber = document.getElementById("revenue-two");
        this.purchase = document.getElementById("revenue-purchase");
        this.threeNumber = document.getElementById("revenue-three");
        this.result = document.getElementById("revenue-result");
    }

    setAreaRange = () => {
        let areaRange = this.area.noUiSlider.get();

        if (areaRange >= 20 && areaRange < 30) {
            let purchaseRange = this.purchase.noUiSlider.get();

            if (purchaseRange >= 100 && purchaseRange < 300) { return; }
            this.purchase.noUiSlider.set(100);
        }
        if (areaRange >= 30 && areaRange < 40) {
            let purchaseRange = this.purchase.noUiSlider.get();

            if (purchaseRange >= 300 && purchaseRange < 800) { return; }
            this.purchase.noUiSlider.set(300);
        }
        if (areaRange == 40) {
            let purchaseRange = this.purchase.noUiSlider.get();

            if (purchaseRange >= 500 && purchaseRange <= 1000) { return; }
            this.purchase.noUiSlider.set(500);
        }
    }

    setPurchaseRange = () => {
        let purchaseRange = this.purchase.noUiSlider.get();

        if (purchaseRange >= 100 && purchaseRange < 300) {
            let areaRange = this.area.noUiSlider.get();

            if (areaRange >= 20 && areaRange < 30) { return; }
            this.area.noUiSlider.set(20);
        }
        if (purchaseRange >= 300 && purchaseRange < 800) {
            let areaRange = this.area.noUiSlider.get();

            if (areaRange >= 30 && areaRange < 40) { return; }
            this.area.noUiSlider.set(30);
        }
        if (purchaseRange >= 500 && purchaseRange <= 1000) {
            let areaRange = this.area.noUiSlider.get();

            if (areaRange == 40) { return; }
            this.area.noUiSlider.set(40);
        }
    }

    setResult = () => {
        this.result.innerHTML = `<b>${Math.round(this.purchase.noUiSlider.get() * 2.1)} тыс руб</b>`;
    }

    mount = () => {
        noUiSlider.create(this.area, {
            start: 25,
            tooltips: false,
            connect: [true, false],
            step: 1,
            range: {
                "min": 20,
                "max": 40
            },
            format: {
                to: function (value) {
                    return parseInt(value);
                },
                from: function (value) {
                    return parseInt(value);
                }
            }
        });

        this.area.noUiSlider.on("update", () => {
            this.twoNumber.value = this.area.noUiSlider.get();
        });

        this.area.noUiSlider.on("set", () => {
            this.setAreaRange();
        });

        this.twoNumber.addEventListener("change", (e) => {
            this.area.noUiSlider.set(e.target.value);
            this.setAreaRange();
        });

        noUiSlider.create(this.purchase, {
            start: 200,
            tooltips: false,
            connect: [true, false],
            step: 1,
            range: {
                "min": 100,
                "max": 1000
            },
            format: {
                to: function (value) {
                    return parseInt(value);
                },
                from: function (value) {
                    return parseInt(value);
                }
            }
        });

        this.purchase.noUiSlider.on("update", () => {
            this.threeNumber.value = this.purchase.noUiSlider.get();
        });

        this.purchase.noUiSlider.on("set",  () => {
            this.setPurchaseRange();
            this.setResult();
        });

        this.threeNumber.addEventListener("change", (e) => {
            this.purchase.noUiSlider.set(e.target.value);
            this.setPurchaseRange();
        });

        this.setResult();
    }
}

const revenueCalc = new RevenueCalc();
revenueCalc.mount();
