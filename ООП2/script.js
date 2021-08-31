const arr = [1, 2, 4, 6];
Array.prototype.increase = () =>{
    console.log(this);
}

Array.prototype.increase = function (){
    for (let i =0; i< this.length; i++) {
        this[i]++;
    }
}
arr.increase();
console.log(arr)
//добавелние элементов массива

arr.push(2, true, 'hello'); //добавляет в конец
console.log(arr);

arr.splice(3, 0, 'js', 8)// 3 - индекс с которого начинается опперация,0 количество элементов кторые нудно удалить после индекса(3), js b 8 -элементы которые нужно добавить
console.log(arr);
arr.splice(-2, 2)// с - индексы считает с конца
console.log(arr);
const last = arr.pop();// возвращает и удаляет последний элемент массива
console.log(last);
console.log(arr);

arr.forEach((value, index, array) =>{
    console.log(value);//копия элемента массива, если менять value, значение в массиве не поменяется
    console.log(index);
    console.log(array);
})
arr.length = 0;//очищает массив
console.log(arr);
const users = [
    {
        age:33,
        name:'Vasya',
        status: 'active'
    },
    {
        age:85,
        name:'Kolya',
        status: 'active'
    },
    {
        age:16,
        name:'Anna',
        status: 'passive'
    },
    {
        age:45,
        name:'Olya',
        status: 'active'
    },
    {
        age:28,
        name:'Nastya',
        status: 'passive'
    }

]
const users2 = users.filter(v => v.age >= 18 ).filter(v => v.status === 'active')// отфильтрует только 18+ активных
                    .map(v =>{
                        return{
                        info: `${v.name}, ${v.age}`,
                        isAdult: v.age >=18,
                        age: v.age
                        }
                    });

console.log(users2);
user3 = users2
              .map(v =>v.age)
              .reduce((prev, v) => prev+v);
console.log(user3/users2.length)
//arr.reduceRight - тоже что и reduce, только справа налево

//spread  оператор служит для деструктуризации массивов или объектов
function sum (a,b,c){
    return a + b + c;
}
const arr2 = [1, 4, 8, 5, 78, 0]
console.log(sum(...arr2));

const arr3 =[100, 200, 300];
arr3.push(...arr2);
console.log(arr3);
const obj = {
    a : 1,
    b : 2,
    c : 3,

};
const {a:xa, b:xb, c:xc} = {...obj};
console.log(xa);
console.log(xb);
console.log(xc);

const copy = {...obj}; // создает копию объекта
copy.a = 45565654656;
console.log(copy);
console.log(obj);

const obj2 = {
    e:3,
    d:8
};
const obj3= {...obj, ...obj2};
console.log(obj3);
const arr4 = [...users, 120, arr3, 'js'];
console.log(arr4);

const test = {
    'hello':1,
    'world!':3 
};
console.log(test['world!']);
test['ddd']= 90;
console.log(test);
const map = new Map();//создание Map прваильный метод
map.keys
// диалоговые окна
alert('Hello user')
const result = confirm('Do you want to see this page&?')// ок или отмена
console.log(result);
const text =prompt('Enter your name','Vasya');
console.log(text);
const i = parseInt('123456');
console.log(i);
const f = parseFloat('123.456');
console.log(f);
Math.random(); //=[0;10)
console.log(Math.round(6.6))//округляет до большего целого
console.log(Math.trunc(6.6))// откидывает дробную часть