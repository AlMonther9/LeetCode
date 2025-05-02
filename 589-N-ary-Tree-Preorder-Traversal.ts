/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 * 
 *     constructor(val?: number, children?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */


function preorder(root: _Node | null): number[] {
    const result: number[] = [];
    function recursivePreorder(node: _Node | null) {
        if (node === null) {
            return;
        }
        result.push(node.val);
        for (const child of node.children) {
            recursivePreorder(child);
        }
    }

    recursivePreorder(root);
    return result;
};
