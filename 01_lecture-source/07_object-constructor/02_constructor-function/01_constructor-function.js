/* 생성자 함수 */

// 객체 리터럴에 의한 객체 생성
const student1 = {
    name : '김재중',
    age : 20,
    getInfo : function() {
        return `${this.name}은 ${this.age}세 입니다.`;
    }
};

const student2 = {
    name : '김재중',
    age : 20,
    getInfo : function() {
        return `${this.name}은 ${this.age}세 입니다.`;
    }
};

// 만약 수십명의 학생 객체를 만들어야 한다?
/*
    객체 리터럴을 이용한 객체 생성 방식은 직관적이고 간편하지만, 단 하나의 객체만 생성한다.
    동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우 매번 같은
    프로퍼티를 기술하기 비효율적이다.
*/

/*
    생성자 함수에 의한 객체 생성
    객체를 생성하기 위한 템플릿처럼 생성자 함수를 사용하여 프로퍼티 구조가
    동일한 객체 여러 개를 간편하게 생성할 수 있다.
 */

function student(name, age) {
    // 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.name = name;
    this.age = age;
    this.getInfo = function() {
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
}

const student3 = new student('조팽팽', 20);
const student4 = new student('조팽순', 20);
console.log(student3);
console.log(student4.getInfo());
