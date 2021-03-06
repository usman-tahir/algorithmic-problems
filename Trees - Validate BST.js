<<<<<<< HEAD
*
 * Definition for a binary tree node.
 function TreeNode(val) {
     this.val = val;
    this.left = this.right = null;
  }
 
=======
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
>>>>>>> e453f8a2e102b72965dae3c3a4d133d31f27158c
/**
 * @param {TreeNode} root
 * @return {boolean}
 */


var isValidBST = function(root) {
   
    return checkISBST (root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
};

function checkISBST (root, min, max) {
    if (root===null) {
       return true;
    }  
   if (root.val<=min||root.val>=max) {
       return false;
   } 
   return checkISBST(root.left, min, root.val)&&checkISBST(root.right, root.val, max)
   
}
