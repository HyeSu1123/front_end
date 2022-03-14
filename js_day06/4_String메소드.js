let text = "John Doe"
console.log(text)

let txt = "ABCDEFGHIGKLMNOPQRSTUVWXYZ"
let length = txt.length  //length속성은 문자열의 길이를 반환합니다.
console.log(length)

let str = "Apple, Banana, Kiwi"
let part = str.slice(7,13)
console.log(part)
/*
slice()문자열의 일부를 추출하고 추출된 부분을 새 문자열로 반환합니다.
이 메서드는 시작 위치와 끝 위치(끝은 포함되지 않음)의 2가지 매개변수를 사용합니다.
이 예에서는 문자열의 일부를 위치 7에서 위치 12(13-1)로 잘라냅니다
*/

//JavaScript는 0부터 위치를 계산합니다.
let part2 = str.slice(-12,-6)
console.log(part2)
/*
매개변수가 음수이면 위치는 문자열 끝에서 계산됩니다.
이 예에서는 위치 -12에서 위치 -6까지 문자열의 일부를 잘라냅니다.
 */
let part3 = str.slice(7)
console.log(part3) //두 번째 매개변수를 생략하면 이 메서드는 나머지 문자열을 잘라냅니다.또는 끝에서 계산
part = str.slice(-12)
console.log(part)

//substring()와slice() 비슷하나 substring()은 음수 인덱스를 허용할 수 없다
//두 번째 매개변수를 생략하면 substring()문자열의 나머지 부분을 잘라냅니다
part = str.substring(7,13)
console.log(part)


//substr()와 slice()비슷하나 두 번째 매개변수 가 추출된 부분 의 길이 를 지정한다는 것입니다. 두 번째 매개변수를 생략하면 substr()문자열의 나머지 부분을 잘라냅니다. 
part = str.substr(7,6)
console.log(part)

//첫 번째 매개변수가 음수이면 위치는 문자열 끝에서 계산됩니다.
part = str.substr(-4)
console.log(part)

//replace()메서드는 지정된 값을 문자열의 다른 값으로 바꿉니다.
text = "Please visit Microsoft!"
let newText = text.replace("Microsoft","W3Schools")
console.log(newText)

/*
메서드는 호출 된 replace()문자열을 변경하지 않습니다.
replace()메서드는 새 문자열을 반환합니다.
replace()메서드는 첫 번째 일치 항목 만 대체합니다.
*/

text = "Please visit Microsoft and Microsoft!"
newText = text.replace("Microsoft","W3Schools")
console.log(newText) //첫 번째 일치 항목만 대체하며 대소문자를 구분한다.

text = "Please visit Microsoft!"
newText = text.replace("MICROSOFT","W3Schools")
console.log(newText)

//대소문자를 구분하지 않는 것을 바꾸려면 다음과 같이 플래그가 있는 정규식을 사용합니다    (  /i  )
text = "Please visit Microsoft and Microsoft!"
newText = text.replace(/MICROSOFT/i,"W3Schools")
console.log(newText)

//모든 일치 항목을 바꾸려면 플래그 와 함께 정규식 을 사용합니다(전역 일치)./g
newText = text.replace(/Microsoft/g, "W3Schools")
console.log(newText)

//toUpperCase() 대문자로 변환됩니다.
let _text = text.toUpperCase()
console.log(_text)

//toLowerCase() 소문자로 변환됩니다
_text = text.toLowerCase()
console.log(_text)

//concat() 두 개 이상의 문자열을 결합 (+ 대신 사용할 수 있다.)
let text1 = "Hello" 
let text2 = "World"
let text3 = text1.concat(" ", text2) 
console.log(text3)

//trim() 메서드는 문자열의 양쪽에서 공백을 제거
text1 = "                  Hi         "
text2 = text1.trim()
console.log(text2)

text = "5"
let padded = text.padStart(4,0)
console.log(padded)

text = "5"
padded = text.padEnd(4,2)
console.log(padded)

//charAt()메서드는 문자열의 지정된 인덱스(위치)에 있는 문자를 반환
text = "HELLO WORLD"
let char = text.charAt(0)
console.log(char)
char = text.charAt(3)
console.log(char)

//charCodeAt()메서드는 문자열의 지정된 인덱스에 있는 문자의 유니코드를 반환
text = "HELLO WORLD"
char = text.charCodeAt(0)
console.log(char)
char = text.charCodeAt(10)
console.log(char)

