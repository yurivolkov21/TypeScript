const age: number = 18;
console.log("Age:", age); // Expected: Age: 18

interface User {
    id: number;
    name: string;
    email?: string;
}

const u : User = {
    id: 123,
    name: "Alice",
}

console.log(u);

function add(a: number, b: number): number {
    return a + b;
}

console.log("Sum:", add(5, 7)); // Expected: Sum: 12

type Profile = { username?: string };

function getUserName(p: Profile): string {
    return p.username?.toUpperCase() ?? "Guest";
}

console.log(getUserName({ username: "Bob" })); // Expected: Bob
console.log(getUserName({})); // Expected: Guest

function firstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

console.log(firstElement([1, 2, 3])); // Expected: 1
console.log(firstElement(["a", "b"])); // Expected: "a"
console.log(firstElement([])); // Expected: undefined

// Tìm số lớn nhất trong mảng số nguyên. Với các yêu cầu sau:
// 1. Viết hàm nhận vào một mảng số nguyên (number[]).
// 2. Trả về số lớn nhất (nếu mảng rỗng thì trả về undefined).
// 3. Không dùng Math.max(...arr).

function findMax(arr: number[]): number | undefined {
    if (arr.length === 0) return undefined;

    let max = arr[0] as number;

    for (let i = 1; i < arr.length; i++) {
        const curr = arr[i] as number;
        if (curr > max) {
            max = curr;
        }
    }

    return max;
}

console.log(findMax([1,5,2,9,3])); // Expected: 9
console.log(findMax([-10,-3,-50])); // Expected: -3
console.log(findMax([])); // Expected: undefined