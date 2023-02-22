let l1 = [1, 2, 4], l2 = [1, 3, 4];

var mergeTwoLists = function (l1, l2) {
  let list = new ListNode() // 初始化
  function merge(i, j, pre){
    if(i === null || j === null) { // 结束的条件
      pre.next = i ? i : j // 该结束了，谁还剩余，就把谁贴上去
      return list.next
    }
    if (i.val < j.val) {
      pre.next = new ListNode(i.val)
      return merge(i.next, j, pre.next)
    } else {
      pre.next = new ListNode(j.val)
      return merge(i, j.next, pre.next)
    }
  }
  return merge(list1, list2, list)
};

console.log(mergeTwoLists(l1, l2));