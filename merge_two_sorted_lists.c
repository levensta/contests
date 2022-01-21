#include <stdio.h>
#include <stdlib.h>

struct ListNode {
     int val;
     struct ListNode *next;
 };

struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2){
	if (!list2) {
		return list1;
	}
	else if (!list1) {
		return list2;
	}
    
	struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
	struct ListNode* p = head;

	struct ListNode* ptr1 = list1;
	struct ListNode* ptr2 = list2;
	while (ptr1 && ptr2) {
		if (ptr1->val < ptr2->val) {
			p->next = ptr1;
			ptr1 = ptr1->next;
		}
		else {
			p->next = ptr2;
			ptr2 = ptr2->next;
		}
		p = p->next;
	}

	if (ptr1) {
		p->next = ptr1;
	}
	if (ptr2) {
		p->next = ptr2;
	}

    return head->next;
}

// int main() {
// 	struct ListNode *lst1_1 = (struct ListNode *)malloc(sizeof(struct ListNode));
// 	struct ListNode *lst1_2 = (struct ListNode *)malloc(sizeof(struct ListNode));
// 	struct ListNode *lst1_3 = (struct ListNode *)malloc(sizeof(struct ListNode));
// 	lst1_1->val = 1;
// 	lst1_2->val = 2;
// 	lst1_3->val = 4;
// 	lst1_1->next = lst1_2;
// 	lst1_2->next = lst1_3;
// 	lst1_3->next = NULL;
// 	struct ListNode *lst2_1 = (struct ListNode *)malloc(sizeof(struct ListNode));
// 	struct ListNode *lst2_2 = (struct ListNode *)malloc(sizeof(struct ListNode));
// 	struct ListNode *lst2_3 = (struct ListNode *)malloc(sizeof(struct ListNode));
// 	lst2_1->val = 1;
// 	lst2_2->val = 3;
// 	lst2_3->val = 4;
// 	lst2_1->next = lst2_2;
// 	lst2_2->next = lst2_3;
// 	lst2_3->next = NULL;

// 	struct ListNode *tmp = mergeTwoLists(lst1_1, lst2_1);
// 	while (tmp) {
// 		printf("%d\n", tmp->val);
// 		tmp = tmp->next;
// 	}
// 	return 0;
// }