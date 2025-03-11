export function calculateCombos(input: Int32Array): Int32Array {
  const results: i32[] = [];
  const len = input.length;

  for (let mask: u32 = 3; mask < (1 << len); mask++) {
    let sum: i32 = 0;
    const combo: i32[] = [];
    
    // 收集组合
    for (let i = 0; i < len; i++) {
      if (mask & (1 << i)) {
        const num = input[i];
        sum += num;
        combo.push(num);
      }
    }

    // 有效性检查
    if (combo.length < 2 || sum >= 36) continue;
    const required = 36 - sum;
    if (required < 1 || required > 13) continue;

    // 逐个添加结果元素（修复 push 参数问题）
    results.push(required);
    results.push(combo.length);
    for (let i = 0; i < combo.length; i++) {
      results.push(combo[i]);
    }
  }

  // 正确转换结果数组
  const output = new Int32Array(results.length);
  for (let i = 0; i < results.length; i++) {
    output[i] = results[i];
  }
  return output;
}