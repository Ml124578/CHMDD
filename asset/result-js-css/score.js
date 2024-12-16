function function2() {
function alignSequences_1() {
    const a = document.getElementById("sequenceA").value;
    const b = jsonData.sequence; // 你的数据中似乎有一个序列B
  
    // 调用smith_waterman_with_score函数
    smith_waterman_with_score(a, b);
  }
  
function smith_waterman_with_score(a, b) {
    let scoreTable = new Array();
    let sourceTable = new Object();
    let maxScore = -1;
    let maxX = -1;
    let maxY = -1;
  
    // 构建惩罚得分矩阵
    for (let y = 0; y <= b.length; y++) {
      let row = new Array();
      for (let x = 0; x <= a.length; x++) {
        row.push(0);
      }
      scoreTable.push(row);
    }
  
    for (let y = 1; y < scoreTable.length; y++) {
      let letterB = b.substring(y - 1, y);
      for (let x = 1; x < scoreTable[y].length; x++) {
        let letterA = a.substring(x - 1, x);
        let leftUpScore = scoreTable[y - 1][x - 1] + (letterA == letterB ? 3 : -3);
        let upScore = scoreTable[y - 1][x] - 2;
        let leftScore = scoreTable[y][x - 1] - 2;
        let score = leftUpScore;
        let source = [[x - 1, y - 1]];
  
        if (upScore == score) {
          source.push([y - 1, x]);
        } else if (upScore > score) {
          score = upScore;
          source = [[y - 1, x]];
        }
        if (leftScore == score) {
          source.push([y, x - 1]);
        } else if (leftScore > score) {
          score = leftScore;
          source = [[y, x - 1]];
        }
  
        if (score < 0) {
          score = 0;
        } else {
          sourceTable[x + "_" + y] = source;
        }
        scoreTable[y][x] = score;
  
        if (score > maxScore) {
          maxScore = score;
          maxX = x;
          maxY = y;
        }
      }
    }
  
    // 回溯惩罚得分矩阵
    if (maxScore > 0) {
        let minX = maxX;
        let minY = maxY;
      
        while (true) {
          if (sourceTable[minX + "_" + minY]) {
            let sources = sourceTable[minX + "_" + minY];
            let maxIndex = 0;
      
            for (let i = 1; i < sources.length; i++) {
              if (
                scoreTable[sources[i][1]][sources[i][0]] >
                scoreTable[sources[maxIndex][1]][sources[maxIndex][0]]
              ) {
                maxIndex = i;
              }
            }
      
            if (scoreTable[sources[maxIndex][1]][sources[maxIndex][0]] > 0) {
              minX = sources[maxIndex][0];
              minY = sources[maxIndex][1];
            } else {
              break;
            }
          } else {
            break;
          }
        }
      
        const alignmentA = a.substring(minX - 1, maxX);
        const alignmentB = b.substring(minY - 1, maxY);
      
        const alignmentScore = maxScore;
        document.getElementById("alignmentScore").innerText = "Alignment Score: " + alignmentScore;

        console.log(a + ": " + alignmentA);
        console.log(b + ": " + alignmentB);
      }
  }
  document.getElementById("seqButton").addEventListener("click", function() {
    alignSequences_1();
  });
}