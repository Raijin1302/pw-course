// a. Khai báo chiều cao của bạn (cm)
const height = 169

// Chỉ áp dụng cho chiều cao > 100cm
if (height > 100) {
  // Tính số lẻ của chiều cao (Ví dụ 170cm -> 70)
  const oddPart = height % 100 // hoặc: height - 100;

  const idealWeight = (oddPart * 9) / 10
  const maxWeight = oddPart
  const minWeight = (oddPart * 8) / 10

  // b. In ra cân nặng lý tưởng, tối đa, tối thiểu trên cùng một dòng
  console.log(
    `Cân nặng lý tưởng: ${idealWeight}kg - Cân nặng tối đa: ${maxWeight}kg - Cân nặng tối thiểu: ${minWeight}kg`,
  )
} else {
  console.log(
    `Chiều cao ${height}cm không hợp lệ. Công thức chỉ áp dụng cho chiều cao > 100cm!`,
  )
}

/*------------------------------------------------------------------------------------------*/
// const calculateWeight = (height) => {
//   if (height <= 100) {
//     console.log(
//       `Chiều cao ${height}cm không hợp lệ. Công thức chỉ áp dụng cho chiều cao > 100cm!`,
//     )
//     return
//   }

//   const oddPart = height % 100 // hoặc: height - 100;

//   const idealWeight = (oddPart * 9) / 10
//   const maxWeight = oddPart
//   const minWeight = (oddPart * 8) / 10

//   console.log(
//     `Cân nặng lý tưởng: ${idealWeight}kg - Cân nặng tối đa: ${maxWeight}kg - Cân nặng tối thiểu: ${minWeight}kg`,
//   )
// }

// calculateWeight(170)
// calculateWeight(95)
// calculateWeight(100)
