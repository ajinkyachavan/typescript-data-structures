"use strict";
exports.__esModule = true;
var node_1 = require("./node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.front = null;
    }
    LinkedList.prototype.insertNode = function (data) {
        var newNode = new node_1.LinkedListNode(null, data);
        if (this.front === null) {
            this.front = newNode;
        }
        else {
            var refNode = this.front;
            while (refNode.next !== null) {
                refNode = refNode.next;
            }
            refNode.next = newNode;
        }
    };
    LinkedList.prototype.deleteNode = function (data) {
        if (this.front.data === data) {
            this.front = this.front.next;
        }
        else {
            var refNode = this.front;
            var followNode = refNode;
            while (refNode.data !== data) {
                followNode = refNode;
                refNode = refNode.next;
            }
            followNode.next = refNode.next;
        }
    };
    LinkedList.prototype.show = function () {
        var refNode = this.front;
        while (refNode !== null) {
            console.log(refNode.data);
            refNode = refNode.next;
        }
        console.log("-----------");
    };
    return LinkedList;
}());
var linkedList = new LinkedList();
linkedList.insertNode(4);
linkedList.insertNode(13);
linkedList.insertNode(1);
linkedList.insertNode(5);
linkedList.insertNode(88);
linkedList.show();
linkedList.deleteNode(1);
linkedList.deleteNode(4);
linkedList.deleteNode(88);
linkedList.show();
