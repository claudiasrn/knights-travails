# Knight's Travails

A JavaScript solution to the classic "knight's shortest path" problem: given a starting square and an ending square on an 8x8 chessboard, find the shortest sequence of legal knight moves to get from one to the other.

## Problem

A knight moves in an L-shape: two steps in one direction and one step perpendicular to that. The chessboard can be thought of as a graph, where:

- Each square `[x, y]` (with `x` and `y` between `0` and `7`) is a **node**.
- Each legal knight move from a square is an **edge** connecting it to another square.

Finding the shortest path between two squares is then a graph traversal problem.

## Approach: Breadth-First Search (BFS)

This solution uses **Breadth-First Search (BFS)** rather than **Depth-First Search (DFS)**.

- **Depth-First Search (DFS)** explores as far as possible down one path before backtracking to try another. It's implemented recursively (or with a stack), and it will find *a* path, but not necessarily the *shortest* one — you'd have to explore every possible path and compare lengths afterward.
- **Breadth-First Search (BFS)** explores all paths of length 1 first, then all paths of length 2, then length 3, and so on — level by level, using a **queue**. Because it explores in strict order of path length, the very first time it reaches the target square, that path is *guaranteed* to be the shortest possible one. No need to generate every path and compare afterward.

Since the goal here is specifically the *shortest* path, BFS is the right tool: it stops as soon as it finds an answer, and that answer is provably optimal.

### How it works

1. Start a queue containing one entry: the path `[[start]]`.
2. Track visited squares in a `Set`, so the same square is never explored twice (this also prevents infinite loops, since a knight could otherwise move back and forth between two squares forever).
3. While the queue isn't empty:
   - Dequeue the front path and look at its last square (the current position).
   - If that square is the target, return the whole path — it's the shortest one.
   - Otherwise, generate all legal knight moves from that square (staying within the board's `0`–`7` bounds), and for each unvisited one, mark it visited and enqueue a new path (the old path plus that new square).

## Printing a path

```javascript
function printKnightPath(start, end) {
    const path = knightMoves(start, end);
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    path.forEach((square) => console.log(square));
}

printKnightPath([0, 0], [3, 3]);
```

Example output:

```
You made it in 2 moves! Here's your path:
[0,0]
[2,1]
[3,3]
```