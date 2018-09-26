exports.__esModule = true;
var simple_double_linked_list_1 = require("simple-double-linked-list");
//--------------------------------------------------
//----------QUEUE-----------------------------------
//--------------------------------------------------
var Queue = /** @class */ (function () {
    //--------------------------------------------------
    //---------CONSTRUCTOR------------------------------
    //--------------------------------------------------
    function Queue() {
        //--------------------------------------------------
        //----------VARIABLES-------------------------------
        //--------------------------------------------------
        //List storage
        this.queueList = new simple_double_linked_list_1.List();
    }
    //--------------------------------------------------
    //----------METHODS---------------------------------
    //--------------------------------------------------
    /**
    * Returns the first element in the queue - O(1)
    * @returns Value at the front
    */
    Queue.prototype.Front = function () {
        if (this.Empty())
            return null;
        return this.queueList.Begin().Value();
    };
    /**
    * Returns the last element in the queue - O(1)
    * @returns Value at the back
    */
    Queue.prototype.Back = function () {
        if (this.Empty())
            return null;
        return this.queueList.End().Value();
    };
    /**
     * Adds item to the queue (to the back) - O(1)
     * @param value Value to add
     */
    Queue.prototype.Push = function (value) {
        this.queueList.AddFront(value);
    };
    /**
    * Removes the first element in the queue (the front one) - O(1)
    */
    Queue.prototype.Pop = function () {
        if (!this.Empty())
            this.queueList.Remove(this.queueList.Begin());
    };
    /**
    * Tells if the queue is empty - O(1)
    * @returns True if queue is empty
    */
    Queue.prototype.Empty = function () {
        return this.queueList.Size() === 0;
    };
    /**
    * Clears the queue. Removes all elements in the queue. - O(1)
    */
    Queue.prototype.Clear = function () {
        this.queueList.Clear();
    };
    /**
    * Returns length of the queue - O(1)
    * @returns Length of the queue
    */
    Queue.prototype.Size = function () {
        return this.queueList.Size();
    };
    return Queue;
}());
exports.Queue = Queue;
