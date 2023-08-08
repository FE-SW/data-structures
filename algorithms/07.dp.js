function fibonacci(n) {
    let dp = new Array(n + 1).fill(0);
    dp[1] = 1;
  
    for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
  
    return dp[n];
  }
  
  const number = 10; // 예시로 10번째 피보나치 수를 계산합니다.
  console.log(`F(${number}) = ` + fibonacci(number)); // 출력 결과: F(10) = 55
  