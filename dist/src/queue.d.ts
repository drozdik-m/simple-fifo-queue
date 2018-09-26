import { List } from "simple-double-linked-list";
export declare class Queue<T> {
    queueList: List<T>;
    constructor();
    /**
    * Returns the first element in the queue - O(1)
    * @returns Value at the front
    */
    Front(): T;
    /**
    * Returns the last element in the queue - O(1)
    * @returns Value at the back
    */
    Back(): T;
    /**
     * Adds item to the queue (to the back) - O(1)
     * @param value Value to add
     */
    Push(value: T): void;
    /**
    * Removes the first element in the queue (the front one) - O(1)
    */
    Pop(): void;
    /**
    * Tells if the queue is empty - O(1)
    * @returns True if queue is empty
    */
    Empty(): boolean;
    /**
    * Clears the queue. Removes all elements in the queue. - O(1)
    */
    Clear(): void;
    /**
    * Returns length of the queue - O(1)
    * @returns Length of the queue
    */
    Size(): number;
}
