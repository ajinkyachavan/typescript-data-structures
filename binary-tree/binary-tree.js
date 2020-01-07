"use strict";
exports.__esModule = true;
var node_1 = require("./node");
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
    }
    BinaryTree.prototype.insertNode = function (data) {
        var newNode = new node_1.TreeNode(null, null, data);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            var refNode = this.root;
            var follow = refNode;
            while (refNode != null) {
                follow = refNode;
                refNode = data > refNode.data ? refNode.right : refNode.left;
            }
            if (data > follow.data) {
                follow.right = newNode;
            }
            else {
                follow.left = newNode;
            }
        }
    };
    BinaryTree.prototype.deleteNode = function (data) {
        if (this.root.data === data) {
            this.root = null;
        }
        else {
            var refNode = this.root;
            var follow = refNode;
            while (refNode.data !== data) {
                follow = refNode;
                refNode = refNode = data > refNode.data ? refNode.right : refNode.left;
            }
            if (refNode === null) {
                console.log("Data not found");
            }
            else if (refNode.left !== null && refNode.right === null) {
                follow.left = refNode.left;
            }
            else if (refNode.left === null && refNode.right !== null) {
                follow.right = refNode.right;
            }
            else if (refNode.left !== null && refNode.right !== null) {
                var temp = refNode;
                while (temp.left !== null) {
                    temp = temp.left;
                }
                temp.right = refNode.right;
                follow.right = temp;
            }
            else if (refNode.left === null && refNode.right === null) {
                if (data > follow.data) {
                    follow.right = null;
                }
                else {
                    follow.left = null;
                }
            }
        }
    };
    BinaryTree.prototype.show = function (node) {
        if (node === null) {
            return;
        }
        console.log(node.data);
        this.show(node.left);
        this.show(node.right);
    };
    return BinaryTree;
}());
var binaryTree = new BinaryTree();
binaryTree.insertNode(23);
binaryTree.insertNode(12);
binaryTree.insertNode(33);
binaryTree.insertNode(2);
binaryTree.insertNode(44);
binaryTree.insertNode(35);
binaryTree.show(binaryTree.root);
console.log("------------------");
binaryTree.deleteNode(12);
binaryTree.deleteNode(2);
binaryTree.deleteNode(35);
binaryTree.deleteNode(33);
binaryTree.show(binaryTree.root);
console.log("--------------");
binaryTree.insertNode(55);
binaryTree.insertNode(45);
binaryTree.insertNode(65);
binaryTree.insertNode(75);
binaryTree.show(binaryTree.root);
console.log("------------");
binaryTree.deleteNode(55);
binaryTree.deleteNode(75);
binaryTree.show(binaryTree.root);
