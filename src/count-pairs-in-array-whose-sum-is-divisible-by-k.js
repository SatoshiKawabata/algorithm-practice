function myCountKdivPairs(A, K) {
  let cnt = 0;
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      cnt++;
      if ((A[i] + A[j]) % K === 0) {
        sum++;
      }
    }
  }
  console.log("myCountKdivPairs loop count", cnt)
  return sum;
}

function countKdivPairs(A, K) {
  let cnt = 0;
  const freq = new Array(K).fill(0)
  for (let i = 0; i < A.length; i++) {
    cnt++
    // 剰余の数
    ++freq[A[i] % K]
  }
  // 剰余が0のときは足しても0になる
  let sum = freq[0] * (freq[0] - 1) / 2;

  for (let i = 1; i < K / 2; i++) {
    cnt++;
    // 剰余がiの数とK-iの数を足せば0になるので、その組み合わせ
    sum += freq[i] * freq[K - i];
  }

  if (K % 2 === 0) {
    // Kが偶数のときもその組み合わせを足す
    sum += (freq[K / 2] * (freq[K / 2] - 1) / 2);
  }
  console.log("countKdivPairs loop count", cnt)
  return sum;
}

module.exports = {
  myCountKdivPairs,
  countKdivPairs,
};