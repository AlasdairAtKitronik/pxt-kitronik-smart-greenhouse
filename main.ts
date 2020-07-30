{
    "name": "pxt-kitronik-ec-board",
    "version": "0.0.1",
    "dependencies": {
        "core": "*",
        "ws2812b": "github:KitronikLtd/pxt-ws2812b#v0.0.5",
        "kitronik_RTC": "github:KitronikLtd/pxt-kitronik-rtc-base#v0.0.12",
        "kitronik_BME280": "github:KitronikLtd/pxt-kitronik-bme280-base#0.0.1"
    },
    "files": [
        "README.md",
        "main.blocks",
        "main.ts"
    ],
    "testFiles": [
        "test.ts"
    ],
    "supportedTargets": [
        "microbit"
    ],
    "preferredEditor": "tsprj",
    "yotta": {
        "config": {
            "microbit-dal": {
                "bluetooth": {
                    "enabled": 0
                }
            }
        }
    }
}
