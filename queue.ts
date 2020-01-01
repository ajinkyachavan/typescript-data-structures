

class Queue<T> {

    first = 0;
    last = -1;
    q: T[];

    constructor() {
        this.q = [];
    }

    insert(data: T) {
        this.q[++this.last] = data;
    }

    remove() {
        this.first++;
    }

    show() {
        for (let i=this.first; i<=this.last; i++) {
            console.log(this.q[i]);
        }
        console.log("---------")
    }

}

const q = new Queue<number>();

q.insert(23);
q.insert(2);
q.insert(12);

q.show();

q.remove();

q.show();