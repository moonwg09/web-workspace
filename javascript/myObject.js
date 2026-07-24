let person = {
    name: '홍길동',
    phone: '010-1111-1111',
    call: function(){
        alert('call...')
    }
}

let arr = []
arr['name'] = '홍길동'
arr['phone'] = '010-1234-5678'

const newPerson = function(name,phone) {
    let p = {
        name: name,
        phone: phone
    }
    
    return p
}

function Person(name,phone){
    this.name = name
    this.phone = phone
    this.call = () => {
        alert('call')
    }
}

class Person2 {
    constructor(name, phone) {
        this.name = name
        this.phone = phone
    }

    get name() {
        return this._name
    }

    get phone() {
        return this._phone
    }

    set name() {
        this._name = name
    }

    set phone() {
        this._phone = phone
    }

    call() {
        alert('class Person call()....')
    }

}

class Teacher extends Person2 {
    constructor(name, phone, major){
        super(name,phone)
        this._major = major        
    }
}