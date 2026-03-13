TypeScript Practice Repo

Mục đích
- Đây là repo dùng để test TypeScript và luyện bài tập nhỏ.
- Toàn bộ bài tập hiện tại nằm trong một file duy nhất: src/index.ts.

Cấu trúc repo
- src/index.ts: Chứa tất cả đoạn code test và bài tập.
- tsconfig.json: Cấu hình compiler TypeScript.
- package.json: Script chạy và dependency.

Nội dung đã có trong src/index.ts
- Khai báo kiểu cơ bản (number, interface, type).
- Hàm cộng 2 số add(a, b).
- Optional chaining và nullish coalescing với getUserName.
- Generic với hàm firstElement<T>.
- Bài tập tìm số lớn nhất trong mảng findMax(arr) không dùng Math.max(...arr).

Cấu hình TypeScript hiện tại
- rootDir: ./src
- outDir: ./dist
- strict: true
- noUncheckedIndexedAccess: true
- exactOptionalPropertyTypes: true
- sourceMap, declaration, declarationMap: bật
- module: nodenext
- target: esnext

Scripts
- npm run dev
  - Chạy tsc ở watch mode và đồng thời chạy node dist/index.js.

Cách sử dụng nhanh
1. Cài dependency:
	npm install
2. Chạy dự án:
	npm run dev

Ghi chú
- Repo này hiện tập trung vào một file duy nhất là src/index.ts để tiện test nhanh các bài tập TypeScript.
