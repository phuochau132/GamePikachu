// Tìm ra đường đi searchRoad(startItem, goalItem)
map = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

class Item {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  compare = (that) => {
    if (this.x == that.x && this.y == that.y) {
      return true;
    }
    return false;
  };
}
class NextItem {
  constructor(next, current) {
    this.next = next;
    this.current = current;
  }
}
let roadCheck = [];
const search = (start, end) => {
  let arr = [];
  let visited = initVisited();
  arr.push(start);
  while (true) {
    let current = arr.shift();
    if (current == null) {
      return false;
    } else {
      //[current.x][current.y + 1]
      try {
        let item = new Item(current.x, current.y - 1);
        if (item.compare(end)) {
          roadCheck.push(new NextItem(item, current));
          return true;
        } else {
          if (
            !visited[current.x][current.y - 1] &&
            map[current.x][current.y - 1] == 0 &&
            !arr.includes(item)
          ) {
            arr.push(item);
            roadCheck.push(new NextItem(item, current));
          }
        }
      } catch (error) {}
      try {
        let item = new Item(current.x, current.y + 1);
        if (item.compare(end)) {
          roadCheck.push(new NextItem(item, current));
          return true;
        } else {
          if (
            !visited[current.x][current.y + 1] &&
            map[current.x][current.y + 1] == 0 &&
            !arr.includes(item)
          ) {
            roadCheck.push(new NextItem(item, current));
            arr.push(item);
          }
        }
      } catch (error) {}
      //[current.x+1][current.y]
      try {
        let item = new Item(current.x + 1, current.y);
        if (item.compare(end)) {
          roadCheck.push(new NextItem(item, current));
          return true;
        } else {
          if (
            !visited[current.x + 1][current.y] &&
            map[current.x + 1][current.y] == 0 &&
            !arr.includes(item)
          ) {
            roadCheck.push(new NextItem(item, current));
            arr.push(item);
          }
        }
      } catch (error) {}
      // [current.x - 1][current.y];
      try {
        let item = new Item(current.x - 1, current.y);
        if (item.compare(end)) {
          roadCheck.push(new NextItem(item, current));
          return true;
        } else {
          if (
            !visited[current.x - 1][current.y] &&
            map[current.x - 1][current.y] == 0 &&
            !arr.includes(item)
          ) {
            roadCheck.push(new NextItem(item, current));
            arr.push(item);
          }
        }
      } catch (error) {}
      visited[current.x][current.y] = true;
    }
  }
};
// Tìm đường đi
const searchRoad = (start, goal) => {
  let rs = [];
  if (search(start, goal)) {
    let v = goal;
    while (true) {
      rs.push(v);
      if (v.compare(start)) {
        break;
      } else {
        roadCheck.forEach((tmp) => {
          if (tmp.next.compare(v)) {
            v = tmp.current;
          }
        });
      }
    }
  }
  return rs;
};

// init visited
let initVisited = () => {
  let visited = [];
  for (let i = 0; i < map.length; i++) {
    let arr = [];
    for (let j = 0; j < map[i].length; j++) {
      arr.push(false);
    }
    visited.push(arr);
    arr = [];
  }
  return visited;
};

const startItem = new Item(3, 3);
const goalItem = new Item(1, 1);
//End tìm đường đi

// console.log(searchRoad(startItem, goalItem));
