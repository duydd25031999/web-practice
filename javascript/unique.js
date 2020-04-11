// removeDuplicate([1, 1, 2, 3, 3]) // [1, 2, 3]

/**
 * lọc ra array mới không có duplicate
 * @param {Array} oldArray 
 * @returns {Array} array mới không có duplicate
 */
function removeDuplicate(oldArray) {
    /**
     * Ban đầu chưa thực hiện việc gì
     * => newArray rỗng
     */
    var newArray = []

    /**
     * Kiểm tra từng element trong oldArray xem đã tồn tại trong newArray chưa
     * Nếu chưa tồn tại thì thêm vào newArray
     * @param {*} oldElement 
     */
    function addElementToNewArray(oldElement) {
        /**
         * Flag là 1 biến chứa trạng thái của đối tượng
         * ví dụ
         * đối tượng facebookMessage
         * var facebookMessageFlag
         * facebookMessageFlag = Đã gửi
         * facebookMessageFlag = Đã nhận
         * facebookMessageFlag = Đã xem
         * 
         * Ở trường hợp này chỉ 2 trạng thái : đúng/sai
         * => data type của flag là Boolean
         * ban đầu chưa biết gì nên giá trị = false
         */
        var exitInNewArrayFlag = false

        /**
         * Kiểm tra từng element trong array mới
         * nếu có 1 element = oldElement => oldElement đã tồn tại trong newArray
         * @param {*} elementInNewArray 
         */
        function checEqualOldElement(elementInNewArray) {
            if(elementInNewArray === oldElement) {
                exitInNewArrayFlag = true
            }
        }

        newArray.forEach(checEqualOldElement)
        
        if(!exitInNewArrayFlag) {
            newArray.push(oldElement)
        }
    }

    oldArray.forEach(addElementToNewArray)
    return newArray
}

console.log(removeDuplicate([1, 1, 2, 3, 3]))