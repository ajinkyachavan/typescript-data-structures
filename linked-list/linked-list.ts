import {LinkedListNode} from './node';

class LinkedList<T> {

    private front: LinkedListNode<T>;    

    constructor() {
        this.front = null;
    }

    insertNode(data: T) {
        const newNode = new LinkedListNode<T>(null, data);

        if (this.front === null) {
            this.front = newNode;
        } else {
            let refNode: LinkedListNode<T> = this.front;

            while (refNode.next !== null) {
                refNode = refNode.next;
            }

            refNode.next = newNode;
        }
    }   
    
    deleteNode(data: T) {
        if (this.front.data === data) {
            this.front = this.front.next;
        } else {
            let refNode = this.front;
            let followNode = refNode;

            while (refNode.data !== data) {
                followNode = refNode;
                refNode = refNode.next;
            }

            followNode.next = refNode.next;
        }
        
    }

    show() {
        let refNode = this.front;

        while (refNode !== null) {
            console.log(refNode.data);
            refNode = refNode.next;
        }
        console.log("-----------");
    }

}

const linkedList = new LinkedList<number>();

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