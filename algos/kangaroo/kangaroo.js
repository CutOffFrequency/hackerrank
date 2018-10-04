function kangaroo(x1, v1, x2, v2) {
  let fastRoo, slowRoo;

  let initRoo = (start, speed) => {
    return { start, speed, pos: start };
  };

  let labelRoos = (one, two) => {
    fastRoo = one.speed > two.speed ? one : two;
    slowRoo = one.speed < two.speed ? one : two;
  };

  labelRoos(initRoo(x1, v1), initRoo(x2, v2));

  let moveRoo = roo => (roo.pos = roo.pos + roo.speed);

  if (
    (fastRoo.speed === slowRoo.speed && fastRoo.pos === slowRoo.pos) ||
    fastRoo.pos > slowRoo.pos
  ) {
    return "NO";
  } else {
    while (fastRoo.pos < slowRoo.pos) {
      moveRoo(fastRoo);
      moveRoo(slowRoo);
    }
    return fastRoo.pos === slowRoo.pos ? "YES" : "NO";
  }
}

console.log(kangaroo(0, 3, 4, 2));
