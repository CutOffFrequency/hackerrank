function kangaroo(x1, v1, x2, v2) {
  let fastRoo, slowRoo;
  // inits roo objects
  let initRoo = (start, speed) => {
    return { start, speed, pos: start };
  };
  // determines which is faster
  let labelRoos = (one, two) => {
    fastRoo = one.speed > two.speed ? one : two;
    slowRoo = one.speed < two.speed ? one : two;
  };
  labelRoos(initRoo(x1, v1), initRoo(x2, v2));
  // moves roo based on speed
  let moveRoo = roo => (roo.pos = roo.pos + roo.speed);
  // if fastRoo is ahead or roos have equal speed but different position
  if (
    (fastRoo.speed === slowRoo.speed && fastRoo.pos === slowRoo.pos) ||
    fastRoo.pos > slowRoo.pos
  ) {
    return "NO";
  } else {
    // increment roos positions while fast roo is not ahead
    while (fastRoo.pos < slowRoo.pos) {
      moveRoo(fastRoo);
      moveRoo(slowRoo);
    }
    return fastRoo.pos === slowRoo.pos ? "YES" : "NO";
  }
}

console.log(kangaroo(0, 3, 4, 2));
