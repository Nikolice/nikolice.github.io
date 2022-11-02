function task_3(array) {
    let result = '';
    const numbers = array.split(' ');
    numbers.forEach(element => {
        if (element % 3 == 0) {
            // alert(element);
            result += element + ' ';
        }
    });
    alert(result);
}