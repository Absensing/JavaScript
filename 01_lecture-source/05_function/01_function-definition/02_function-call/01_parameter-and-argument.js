/* 매개변수와 전달인다(인수) */

// 함수 선언문
function hello(name) {

    //매개변수는 함수 몸체 내부에서만 참조 가능
    console.log(name);

    return `${name} 님 하이요~`;
}

// 매개변수는 함수 몸체 내부에서만 참조 가능
// console.log(name);

// 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관이 된다.
console.log(arguments);

console.hello('김재중');

var result = hello('김재중');
console.log(result);

// 함수는 매개변수의 갯수와 인수의 갯수가 일치하는 지 체크하지 않는다.
// 인수(전달인자) 가 부족해서 할당되지 않ㅇ느 매개변수의 값은 undefined 이다.
result = hello();
console.log(result);

// 매개변수보다 인수가 더 많은 경우 초과된 인수는 무시도니다.
// 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.
result = hello('김재중', '김현중')
console.log(result);

function hi(name = '아무개') {

    // 인수를 전달하지 않았을 경우, undefined를 전달했을 경우 ES6에서 도입 된
    // 매개변수 기본값을 사용할 수 있다.

    
}
function hi(name) {

    return `{name} 안녕~~`;
}

result = hi();;
console.log(result);