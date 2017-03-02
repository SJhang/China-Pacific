function maxStep(n, k) {
  let step = 0;
  let jump = false;
  let skip = false;
  let result = 0;

  while (n > 0) {
    console.log("n = " + n);
    console.log("k = " + k);
    console.log("step = "+step);
    if (result + step + 1 === k) {
      jump = true;
      skip = true;
      n--;
    } else if (n >= 1 && result + step + 1 !== k){
      n--;
      step++;
      result += step;
    }

    if (n > 1) {
      if (skip) {
        skip = false;
      }
    } else {
      if (jump) {
        step++;
        result += step;
        jump = false;
      }
    }
  }
  console.log(result);
}

maxStep(2,2);
