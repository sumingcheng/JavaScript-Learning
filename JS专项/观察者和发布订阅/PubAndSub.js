class EventEmitter {
    // click 
    handlers = {}
    // 订阅
    on(type, handler, once) {
        if (!this.handlers[type]) {
            this.handlers[type] = [];
        }

        if (!this.handlers[type].includes(handler)) {
            this.handlers[type].push(handler);
            handler.once = once;
        }
    }
    // 是否只触发一次
    once(type, handler) {
        this.on(type, handler, true);
    }
    // 取消订阅
    off(type, handler) {
        if (this.handlers[type]) {
            this.handlers[type] = this.handlers[type].filter(h => {
                return h !== handler;
            })
        }
    }
    // 发布
    trigger(type) {
        if (this.handlers[type]) {
            this.handlers[type].forEach(handler => {
                handler.call(this);

                if (handler.once) {
                    this.off(type, handler);
                }
            });
        }
    }
}

const ev = new EventEmitter();

function handler1() {
    console.log('handler1');
}

function handler2() {
    console.log('handler2');
}

function handler3() {
    console.log('handler3');
}

ev.on('test', handler1);
// ev.on('test', handler1, true);
// ev.on('test', handler2);
// ev.on('test', handler3);

ev.trigger('test');
ev.trigger('test');