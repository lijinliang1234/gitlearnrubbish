class lesson {
    data = [];
    init() {
        this.data = [{
            name: 'js'
        }, {
            name: "c++"
        }]
    }
    get(){
        return this.data
    }
}

let obj = new lesson();
obj.init();
export {
    obj
};