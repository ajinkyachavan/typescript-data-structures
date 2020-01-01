

export class LinkedListNode<T> {

    next: LinkedListNode<T>;
    data: T;

    constructor(next: LinkedListNode<T>, data: T) {
        this.next = next;
        this.data = data;
    }

}