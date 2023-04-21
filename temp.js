function solveNQueens(n) {
  let index = 0;
  const answer = [];
  const tamplate = [];

  while (index < n) {
    const isValid = fill(index, n);
    const tempArr = []; //[[]]
    if (isValid) {
      for (const a of isValid) {
        console.log(a);
      }
      answer.push(isValid);
    }
    index++;
    console.log("--------------------------------");
  }
  return answer;
}

function fill(qPos, n) {
  const blackList = [qPos];
  let newPos = qPos;
  let count = 0;
  const arr = [];
  for (let j = 0; j < n; j++) {
    let row = "";

    //filling row with dots and a Q
    for (let i = 0; i < n; i++) {
      if (newPos != i) {
        row += ".";
      } else {
        row += "Q";
        count++;
      }
    }
    arr.push(row);

    //finding position for new Q
    newPos += 2;
    for (let i = 0; i < n - 1; i++) {
      if (newPos + i >= n) {
        newPos = 0;
      }
      if (!blackList.includes(newPos + i) && newPos - 3 != newPos + i) {
        console.log("newPos - 3: ", newPos - 3);
        console.log("newPos + i: ", newPos + i);
        newPos += i;
        console.log("NEW: ", newPos);
        console.log("blackList: ", blackList);

        break;
      }
      if (i == n - 2) return false;
    }
  }
  //   function isValid(arr,qP)

  return count === n ? arr : false;
}

solveNQueens(4);
