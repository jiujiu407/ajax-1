
let n = 1;
getPage.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange = () =>{
        if(request.readyState === 4 && request.status === 200){
            const array = JSON.parse(request.response);
            array.forEach(item =>{
                const li = document.createElement("li");
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n += 1;
        }
    };
    request.send()
};

getJSON.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open('GET','/5.json');
    request.onreadystatechange = () =>{
       if(request.readyState === 4 && request.status === 200){
           console.log(request.response);
           //JSON.parse把符合JSON语法的字符串,变成对应的对象或其他东西
           const object = JSON.parse(request.response)
           myName.textContent = object.name
       }
    };
    request.send()
};

getXML.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open("GET","/4.xml");
    request.onreadystatechange = () =>{
        if(request.readyState === 4 && request.status === 200){
           const dom = request.responseXML;
           const text = dom.getElementsByTagName('warning')[0].textContent
           console.log(text.trim())
        }
    };
    request.send()
}
getHTML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onload = () =>{
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () =>{}
    request.send()
}
getJS.onclick = ()=> {
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onload = ()=>{
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () =>{}
    request.send()
}

getCSS.onclick = () =>{
//创建一个XMLHttpRequest对象
const request = new XMLHttpRequest()
//调用open方法
request.open('GET','/style.css'); //readyState = 1
request.onreadystatechange = () => {
    // 下载完成,但是不知道是成功2xx还是失败4xx,5xx
    console.log(request.readyState)
    if(request.readyState === 4){
        console.log('下载完成');
        if(request.status>=200 && request.status < 300){
        //创建style标签
        const style = document.createElement('style')
       //填写style内容
       style.innerHTML = request.response
       document.head.appendChild(style)
        }else{
            alert('加载css失败')
        }
    }
}
// //监听对象的onload&onerror事件
// request.onload = ()=>{
//     //输出请求响应内容
//     console.log('request.response')
//     console.log(request.response)
//     //创建style标签
//     const style = document.createElement('style')
//     //填写style内容
//     style.innerHTML = request.response
//     document.head.appendChild(style)
// };
// request.onerror = ()=>{
//     console.log('失败了')
// };
//调用对象的send方法（发送请求）
request.send(); //readState = 2
};