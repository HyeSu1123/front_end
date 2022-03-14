/*
  자바스크립트 객체 : 원시값(number,string 등) 을 제외한 함수,배열도 객체.
  객체 구성 : 프로퍼티(객체의 상태),메소드 (객체의 동작 / 기능)
             객체의 프로퍼티값이 함수일 때 메소드이다.
  객체 정의 : 자바에서는 클래스를 먼저 정의하고 필요할 때 new 연산으로 생성
             자바스크립트는 프로토타입 기반이라고 한다. 바로 객체 리터럴로 생성할 수 있다.
*/

let person = {
  name : 'sana',age:19,
    sayHi : function(){//메소드 정의 : 객체의 프로퍼티값이 함수 정의일 때 메소드이다.
      console.log(`Hi!!나는 ${this.name}예요~`)
  }
} //객체 리터럴을 이용하여 객체 생성

person.sayHi()    //객체의 메소드 실행

//프로퍼티 접근하여 person 객체의 이름 변경
person.name = '사나'        //방법1
person.sayHi()

person['name'] = 'eunwoo'   //방법2
person.sayHi()

person.color = 'red'    //새로운 프로퍼티를 바로 추가할 수 있다.
console.log(person)

let person2 = {
  name : 'shana',age:19,
    sayHi(){  //메소드 정의 : function 생략 가능.
      console.log(`Hi!!나는 ${this.name}예요~`)
  }
}
person2.sayHi();