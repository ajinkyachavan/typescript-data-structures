

export class TreeNode<T> {

    left: TreeNode<T>;
    right: TreeNode<T>;
    data: T;

    constructor(left: TreeNode<T>, right: TreeNode<T>, data: T) {
        this.left = left;
        this.right = right;
        this.data = data;
    }
}