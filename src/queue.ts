declare module "simple-double-linked-list";
import { List } from "simple-double-linked-list";

//--------------------------------------------------
//----------QUEUE-----------------------------------
//--------------------------------------------------
export class Queue<T>
{
    //--------------------------------------------------
    //----------VARIABLES-------------------------------
    //--------------------------------------------------
    //List storage
    queueList: List<T> = new List<T>();

    //--------------------------------------------------
    //---------CONSTRUCTOR------------------------------
    //--------------------------------------------------
    constructor()
    {

    }

    //--------------------------------------------------
    //----------METHODS---------------------------------
    //--------------------------------------------------
    /**
    * Returns the first element in the queue - O(1)
    * @returns Value at the front
    */
    Front(): T
    {
        if (this.Empty())
            return null;
        return this.queueList.Begin().Value();
    }

    /**
    * Returns the last element in the queue - O(1)
    * @returns Value at the back
    */
    Back(): T
    {
        if (this.Empty())
            return null;
        return this.queueList.End().Value();
    }

    /**
     * Adds item to the queue (to the back) - O(1)
     * @param value Value to add
     */
    Push(value: T)
    {
        this.queueList.AddFront(value);
    }

    /**
    * Removes the first element in the queue (the front one) - O(1)
    */
    Pop()
    {
        if (!this.Empty())
            this.queueList.Remove(this.queueList.Begin());
    }

    /**
    * Tells if the queue is empty - O(1)
    * @returns True if queue is empty
    */
    Empty()
    {
        return this.queueList.Size() === 0;
    }

    /**
    * Clears the queue. Removes all elements in the queue. - O(1)
    */
    Clear()
    {
        this.queueList.Clear();
    }

    /**
    * Returns length of the queue - O(1)
    * @returns Length of the queue
    */
    Size(): number
    {
        return this.queueList.Size();
    }
}