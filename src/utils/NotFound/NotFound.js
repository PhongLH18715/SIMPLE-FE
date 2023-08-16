import { Empty } from 'antd';
import { useSelector } from 'react-redux';
import './notFound.css'


function NotFound() {
  const auth = useSelector(state => state.auth)
  const { isShipper, isAgent, isAdmin } = auth
  return (
    <div style={{margin: '0 auto', marginTop: 200}}>
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    </div>
  )
}

export default NotFound