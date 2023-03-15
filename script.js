const log = new Log(document.querySelector('.log'));

const char = new Knight('Bruno');
const monster = new LittleMonster();

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.Start();

