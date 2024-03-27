// for in 반복문
// 객체의 모든 키를 순화한다.

var student = {
    name : '김재중',
    age : 20,
    getInfo : function() {
        return '${this.name}은(는) ${this.age}세 입니다.';
    }
};

for (var key in student) {
    console.log('key : ${key}');    // 프로퍼티 키
    console.log('student[key] : ${student[key]}');  // 키에 해당하는 값
}