import React from 'react';
import resetScroll from './resetScroll.js';


/**
 * 专门处理滚动条复位的高阶组件
 * @param {*} Comp  组件 
 */
export default function WithScroll(Comp) {
    return class MyResetScroll extends React.Component {
        constructor(props) {
            super(props);

        };

        componentDidMount() {
            const html = document.documentElement;
            const juli = html.scrollTop
            this.tirem = resetScroll({
                currentValue: juli,
                targetValue: 0,
                mode: 'easeBoth',
                callback(value) {
                    html.scrollTop = juli - Math.abs(value);
                }
            });
        };

        componentWillUnmount() {
            clearInterval(this.tirem);
        }

        render() {
            return (<Comp {...this.props}></Comp>);
        }
    }
};