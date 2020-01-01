var Queue = /** @class */ (function () {
    function Queue() {
        this.first = 0;
        this.last = -1;
        this.q = [];
    }
    Queue.prototype.insert = function (data) {
        this.q[++this.last] = data;
    };
    Queue.prototype.remove = function () {
        this.first++;
    };
    Queue.prototype.show = function () {
        for (var i = this.first; i <= this.last; i++) {
            console.log(this.q[i]);
        }
        console.log("---------");
    };
    return Queue;
}());
var q = new Queue();
q.insert(23);
q.insert(2);
q.insert(12);
q.show();
q.remove();
q.show();
