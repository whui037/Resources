/**
 * @fileoverview Example to compose HTTP request
 * and handle the response.
 *
 */

const url = "https://hotoday.whatshub.top/douban_new/new";
const method = "GET";
const headers = {"Field": "test-header-param"};
const data = {"info": "abc"};

const myRequest = {
    url: url,
    method: method, // Optional, default GET.
    headers: headers, // Optional.
    body: JSON.stringify(data) // Optional.
};

$task.fetch(myRequest).then(response => {
    // response.statusCode, response.headers, response.body
    var moveData = JSON.parse(response.body);
    var message = "";
    for (let index = 0; index < moveData.data.length; index++) {
        const element = moveData.data[index];
        message += element.title + "\n";
    }
    $notify(moveData.title, moveData.subtitle, message); // Success!
    $done();
}, reason => {
    // reason.error
    console.log(reason.error);
    $done();
});
