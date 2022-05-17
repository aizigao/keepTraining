class BinHeap {
    constructor(compare) {
        this._heap = [];
        this._compare = compare != null ? compare : (a, b) => a - b;
    }

    push(newItem) {
        this._heap.push(newItem);
        this._siftUp(this._heap.length - 1);
    }

    peek() {
        return this._heap[0];
    }

    size() {
        return this._heap.length;
    }

    /*
     * Removes and returns the item at the root of the heap.
     *
     * Maintains the ordering invariant as follows:
     *  1. "Pop" last element
     *  2. Replace parent "hole" with minimum child (starting with root)
     *     Continue this step until we've reached the end of the array.
     *  3. Place popped element in this last "hole"
     *  4. Sift element up towards root until no longer "less than" it's parent
     *
     * NOTE: This algorithm differs slightly from the "book" algorithm by always
     * swapping children and performing a sift-up (#4) at the end, rather than
     * stopping early when the ordering invariant is reached between the popped
     * last element and a child along the path.  This popped element will be large
     * anyway, so we're trading off 2x the comparison/branching count for a
     * miniscule number of potential additional assignments.
     */
    pop() {
        if (this._heap.length <= 1) {
            return this._heap.pop();
        }
        const prevRoot = this._heap[0];
        const item = this._heap.pop(); // Step #1
        let idx = 0;
        for (let childIdx = 1; childIdx < this._heap.length; ) {
            if (
                childIdx + 1 < this._heap.length &&
                this._compare(this._heap[childIdx + 1], this._heap[childIdx]) <
                    0
            ) {
                ++childIdx;
            }
            this._heap[idx] = this._heap[childIdx]; // Step #2
            idx = childIdx;
            childIdx = (idx << 1) + 1;
        }
        this._heap[idx] = item; // Step #3
        this._siftUp(idx); // Step #4
        return prevRoot;
    }

    /*
     * Starting at index, `idx`, in our heap, bubble this element up towards the
     * root until the ordering invariant no longer holds
     */
    _siftUp(idx) {
        const item = this._heap[idx];
        let parent = (idx - 1) >> 1;
        while (idx > 0 && this._compare(item, this._heap[parent]) < 0) {
            this._heap[idx] = this._heap[parent];
            this._heap[parent] = item;
            idx = parent;
            parent = (idx - 1) >> 1;
        }
    }
}

module.exports = BinHeap;
