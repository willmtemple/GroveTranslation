import grove from './translation';
import { setTimeout } from 'timers';

function f1() {
    grove.ledOn(0);
    setTimeout(f2, 1000);
}

function f2() {
    grove.ledOff(0);
    setTimeout(f1, 1000);
}