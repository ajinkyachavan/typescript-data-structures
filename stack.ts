

class Stack {
    stack: number[];
    top = -1;

    constructor() {
        this.stack = [];
    }

    push(data: number) {
        this.stack.push(data);
        ++this.top;
    }

    pop() {
        if (!this.isEmpty()) {
            this.stack.pop();
            this.top--;
        }
    }

    isEmpty() {
        return this.top == -1;
    }

    show() {
        for (let i = 0; i < this.stack.length; i++) {
            console.log(this.stack[i]);
        }
        console.log("--------")
    }
}

const s = new Stack();
s.push(3);
s.push(4);
s.push(1);
s.push(6);

s.show();

s.pop();
s.pop();

s.show();