
// Create a  Node for LL
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

//LL class

class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
    //push an element into LL.

    push(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
        return this;
    }

    //Pop method in LL

    pop(){
        let temp = this.head;
        let prev = this.head;

        if(!this.head) return undefined;

        while(temp.next){
            prev = temp;
            temp = temp.next;
        }

        this.tail = prev;
        this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return temp;


    }

    //unshift in LL

    unshift(value){

        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;

    }

    //shift in LL

    shift(value){
        const newNode = new Node(value);

        if(!this.head){
            return undefined;
        }
        let temp = this.head;
        this.head = this.head.next;
        this.length--;

        if(this.length === 0){
            this.tail = null;
        }
        temp.next = null;
        return temp;



    }

    //get method in LL

    get(index){
        if(index < 0 || index >= this.length){
            return undefined;
        }

        let temp = this.head;
        for(let i = 0; i < index; i++){
            temp = temp.next;
        }
        return temp;

    }

    //set method in LL

    set(index, value){
        let temp = this.get(index);
        if(temp){
            temp.value = value;
            return true;
        }
        return false;

    }

    //insert method in LL

    insert(index, value){
        if(index === 0){
            return this.shift(value);
        }
        if(index === this.length) {
            return this.push(value);
        }
        if(index < 0 || index > this.length){
            return false;
        }

        const newNode = new Node(value);
        const temp = this.get(index - 1);

        newNode.next = temp.next;
        temp.next = newNode;
        this.length ++;
        return true;
    }


    //Remove method in LL

    remove(index){
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        if(index < 0 || index >= this.length) return undefined;

        const before = this.get(index - 1);
        const temp = before.next;

        before.next = temp.next;
        temp.next = null;

        this.length--;
        return temp;
    }

}





const myLinkedList = new LinkedList(3);
//calling push method

// myLinkedList.push(25);
// myLinkedList.push(22);
// myLinkedList.push(1);
// myLinkedList.push(5);

myLinkedList.push(10);

//calling pop method

myLinkedList.pop(5);
myLinkedList.unshift(12);