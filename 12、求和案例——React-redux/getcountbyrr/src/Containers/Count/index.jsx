// 引入核心API connect
import {connect} from 'react-redux'
// 引入UI组件
import CountUI from '../../Components/Content'
// 引入redux action中的方法
import {createIncrement,createdecrement,asyncIncrement} from '../../redux/count_action'

// mapStateToProps接受一个参数，返回一个对象，用于向ui组件传递状态
function mapStateToProps(state){
  return {count:state}
}

// mapDIspatchToProps接受一个参数，返回一个对象，用于向ui组件操作状态的方法
function mapDIspatchToProps(dispatch){
  return {
    increment: number =>  dispatch(createIncrement(number)),
    decrement: number =>  dispatch(createdecrement(number)),
    asyncincrement: (number,time) =>  dispatch(asyncIncrement(number,time)),
  }
}
// 向外暴露一个容器组件，使用connect方法
export default connect(mapStateToProps,mapDIspatchToProps)(CountUI)