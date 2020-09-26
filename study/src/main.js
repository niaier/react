import './css/index.scss';

import Hello from './components/test.jsx'


import React from 'react';
import ReactDOM from 'react-dom';

let mmd = '操你妈的'

class Test extends React.Component {
    render() {
        return <div>
            你是水水水水
        </div>
    }
}


class CommentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cmts: [
                { user: 1, content: 1 },
                { user: 2, content: 2 },
                { user: 3, content: 3 },
                { user: 4, content: 4 },
                { user: 5, content: 5 },
                { user: 6, content: 6 },
            ]
        }
    }
    render() {
        return <div>
            {this.state.cmts.map((item, i) => {
                return <div key={i}>
                    <h1>评论人：{item.user}</h1>
                    <h3>评论内容：{item.content}</h3>
                </div>
            })}
        </div>
    }
}

// var myDiv = React.createElement('div', { title: ' thTestis is a title', id: 'mydiv' }, '这是一个div');
let mydiv = <div>
    {mmd}
</div>

// function Hello() {
//     return <div>
//         <h1>
//             {name}
//             {/* 定义组件 */}
//         </h1>
//     </div>
// }

ReactDOM.render(mydiv, document.getElementById('app'));
ReactDOM.render(
    <Hello></Hello>
    , document.getElementById('app2'));

ReactDOM.render(
    <Test></Test>,
    document.getElementById('test')
);
ReactDOM.render(
    <CommentList></CommentList>,
    document.getElementById('commentList')
);


