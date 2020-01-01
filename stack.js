var Stack = /** @class */ (function () {
    function Stack() {
        this.top = -1;
        this.stack = [];
    }
    Stack.prototype.push = function (data) {
        this.stack[++this.top] = data;
    };
    Stack.prototype.pop = function () {
        if (!this.isEmpty()) {
            this.stack.pop();
            this.top--;
        }
    };
    Stack.prototype.isEmpty = function () {
        return this.top == -1;
    };
    Stack.prototype.show = function () {
        for (var i = 0; i < this.stack.length; i++) {
            console.log(this.stack[i]);
        }
        console.log("--------");
    };
    return Stack;
}());
var s = new Stack();
s.push(3);
s.push(4);
s.push(1);
s.push(6);
s.show();
s.pop();
s.pop();
s.show();
