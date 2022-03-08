var a=12,b=13
console.log(a+b)

const fruits =["Banana","Orange","Apple","Mango"]
console.log('1,toString()')
console.log(fruits.toString())
console.log('2,join()')
console.log(fruits.join("*")) /* join() 메서드는 배열 요소를 문자열로 결합합니다.
이 예에서는 " * "를 요소 사이의 구분 기호로 사용했습니다. */
console.log('3,pop()')
console.log(fruits)
console.log(fruits.pop()) /* pop() 메서드는 배열에서 마지막 요소를 제거합니다 */
console.log(fruits)
console.log(fruits.pop())
console.log(fruits.pop())
console.log(fruits)
console.log(fruits.pop())
console.log(fruits.pop())
console.log(fruits.pop())

console.log('4,push()')
fruits.push("Kiwi") /* push() 메서드는 새 요소를 배열에 추가합니다. */
console.log(fruits)
fruits.push("Banana")
console.log(fruits)
let length = fruits.push("Mango") /*push() 메서드는 새 배열 길이를 반환합니다. */
console.log(fruits)

console.log('5,shift()')
fruits.shift() /*shift() 메서드는 배열의 첫 번째 요소를 제거하고 다른 요소를 왼쪽으로 "이동"합니다. */
console.log(fruits)

console.log('6,unshift()')
fruits.unshift("Lemon") /*unshift() 메서드는 배열의 시작 부분에 새 요소를 추가합니다. */
console.log(fruits)

console.log('7,length')
fruits[0] = "Kiwi" /*배열 요소는 인덱스 번호를 사용하여 바꾼다. */
console.log(fruits)

fruits[fruits.length] = "Apple" /*length 속성은 push() 메서드를 사용하지 않고 배열에 새 요소를 추가하는 쉬운 방법을 제공합니다. */
console.log(fruits)

console.log('8,delete')
delete fruits[0] /* 0번째 배열 삭제 */
console.log("The first fruit is: "+ fruits[0]) /*요소를 삭제하면 배열에 정의되지 않은 구멍이 남습니다. */
console.log(fruits)

console.log('9,concat()') //연결
const myGirls = ["Cecilie", "Lone"]
const myBoys = ["Emil", "Tobias", "Linus"]
const myChildren = myGirls.concat(myBoys) /*concat() 메서드는 배열을 병합(연결)합니다. */
console.log(myChildren)

console.log('9-1,concat()') //연결
const array3 = ["Robin", "Morgan"];
const myChildren2 = myGirls.concat(myBoys, array3);
console.log(myChildren2)

console.log('9-2,concat()') //연결
const myChildren3 = myBoys.concat("Peter")
console.log(myChildren3)

