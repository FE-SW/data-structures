function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  const number = 10; // 예시로 10번째 피보나치 수를 계산합니다.
  console.log(`F(${number}) = ` + fibonacci(number)); // 출력 결과: F(10) = 55
  