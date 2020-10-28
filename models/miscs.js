function Misc(id, potato, onion, carrot, mushroom, greenonion, garlic, noodle, guksu, cychili, chili, squash, sesame, seaweed, rice, beansprouts, tofu, egg) {
    this.id = id;
    this.potato = potato;
    this.onion = onion;
    this.carrot = carrot;
    this.mushroom = mushroom;
    this.greenonion = greenonion;
    this.garlic = garlic;
    this.noodle = noodle;
    this.guksu = guksu;
    this.cychili = cychili;
    this.chili = chili;
    this.squash = squash;
    this.sesame = sesame;
    this.seaweed = seaweed;
    this.rice = rice;
    this.beansprouts = beansprouts;
    this.tofu = tofu;
    this.egg = egg;
}
Misc.prototype.toJSON = function () {
    return {
        id: this.id,
        '감자': this.potato,
        '양파': this.onion,
        '당근': this.carrot,
        '버섯': this.mushroom,
        '대파': this.greenonion,
        '마늘': this.garlic,
        '칼국수': this.noodle,
        '국수': this.guksu,
        '청양고추': this.cychili,
        '고추': this.chili,
        '애호박': this.squash,
        '깨': this.sesame,
        '김': this.seaweed,
        '밥': this.rice,
        '콩나물': this.beansprouts,
        '두부': this.tofu,
        '달걀': this.egg,
    }
}

module.exports = {
    kinds: [
        { name: '감자', '단위': '개' },
        { name: '양파', '단위': '개' },
        { name: '당근', '단위': '개' },
        { name: '버섯', '단위': '개' },
        { name: '대파', '단위': '단' },
        { name: '마늘', '단위': '개' },
        { name: '칼국수', '단위': '인분' },
        { name: '국수', '단위': '인분' },
        { name: '청양고추', '단위': '개' },
        { name: '고추', '단위': '개' },
        { name: '애호박', '단위': '개' },
        { name: '참깨', '단위': 'g' },
        { name: '김', '단위': 'g' },
        { name: '밥', '단위': 'g' },
        { name: '콩나물', '단위': 'g' },
        { name: '두부', '단위': 'g' },
        { name: '달걀', '단위': '개' },
    ],
    miscs: [
        new Misc('misc_214', 2, 0.5, 0.3, 0.5, 1, null, null, null, 2, null, null, null, null, null, null, null, null).toJSON()
    ]
}
