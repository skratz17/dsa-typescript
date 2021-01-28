import { PriorityQueue } from './PriorityQueue';

describe('priorty queue functionality', () => {
  test('min priority queue with three elements', () => {
    const minPriorityQueue = new PriorityQueue<number>((a, b) => a - b);

    expect(minPriorityQueue.size()).toEqual(0);

    minPriorityQueue.insert(3);
    expect(minPriorityQueue.size()).toEqual(1);

    minPriorityQueue.insert(1);
    expect(minPriorityQueue.size()).toEqual(2);

    minPriorityQueue.insert(5);
    expect(minPriorityQueue.size()).toEqual(3);

    let min = minPriorityQueue.remove();
    expect(min).toEqual(1);
    expect(minPriorityQueue.size()).toEqual(2);

    min = minPriorityQueue.remove();
    expect(min).toEqual(3);
    expect(minPriorityQueue.size()).toEqual(1);

    min = minPriorityQueue.remove();
    expect(min).toEqual(5);
    expect(minPriorityQueue.size()).toEqual(0);
  });

  test('max priority queue with three elements', () => {
    const maxPriorityQueue = new PriorityQueue<number>((a, b) => b - a);

    expect(maxPriorityQueue.size()).toEqual(0);

    maxPriorityQueue.insert(3);
    expect(maxPriorityQueue.size()).toEqual(1);

    maxPriorityQueue.insert(1);
    expect(maxPriorityQueue.size()).toEqual(2);

    maxPriorityQueue.insert(5);
    expect(maxPriorityQueue.size()).toEqual(3);

    let max = maxPriorityQueue.remove();
    expect(max).toEqual(5);
    expect(maxPriorityQueue.size()).toEqual(2);

    max = maxPriorityQueue.remove();
    expect(max).toEqual(3);
    expect(maxPriorityQueue.size()).toEqual(1);

    max = maxPriorityQueue.remove();
    expect(max).toEqual(1);
    expect(maxPriorityQueue.size()).toEqual(0);
  });

  test('max priority queue of objects with comparison based on object property', () => {
    interface Node {
      id: number;
      value: number;
    }

    const maxPriorityQueue = new PriorityQueue<Node>((a, b) => b.value - a.value);

    expect(maxPriorityQueue.size()).toEqual(0);

    maxPriorityQueue.insert({ id: 1, value: 3 });
    expect(maxPriorityQueue.size()).toEqual(1);

    maxPriorityQueue.insert({ id: 2, value: 5 });
    expect(maxPriorityQueue.size()).toEqual(2);

    maxPriorityQueue.insert({ id: 3, value: 1 });
    expect(maxPriorityQueue.size()).toEqual(3);

    let max = maxPriorityQueue.remove();
    expect(max).toEqual({ id: 2, value: 5 });
    expect(maxPriorityQueue.size()).toEqual(2);

    max = maxPriorityQueue.remove();
    expect(max).toEqual({ id: 1, value: 3 });
    expect(maxPriorityQueue.size()).toEqual(1);

    max = maxPriorityQueue.remove();
    expect(max).toEqual({ id: 3, value: 1 });
    expect(maxPriorityQueue.size()).toEqual(0);
  });

  test('remove from empty priority queue throws error', () => {
    const minPriorityQueue = new PriorityQueue<number>((a, b) => a - b);

    expect(() => minPriorityQueue.remove()).toThrow('Cannot remove from empty priority queue.');
  });
});