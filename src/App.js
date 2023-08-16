import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginAll from './components/LoginAll'
import AgentManagement from './pages/admin/agent/AgentManagement'
import LocalityManagement from './pages/admin/Locality/LocalityManagement'
import { dispatchLoginAdmin, dispatchLoginAgent, dispatchLoginShipper } from './redux/actions/authAction'
import ACTIONS from './redux/actions/index'
import TemplateAdmin from './templates/Admin/TemplateAdmin'
import NotFound from './utils/NotFound/NotFound'
// import TemplateAdmin from './pages/admin/TemplateAdmin';
import LoginAgent from './components/LoginAgent'
import LoginShipper from './components/LoginShipper'
import DashboardAdmin from './pages/admin/dashboard/Dashboard'
import DashboardAgent from './pages/agent/dashboard/Dashboard'
import DetailOfOrderOM from './pages/agent/DetailOfOrderOM'
import OrderManagemet from './pages/agent/orderManager/OrderManagemet'
import ShipperManagemet from './pages/agent/ShipperManagement'
import ProductManagement from './pages/agent/product/ProductManagement'
import DeliveryHistory from './pages/shipper/delivery/DeliveryHistory'
import DetailOfOrder from './pages/shipper/delivery/DetailOfOrder'
import DetailOfOrderOne from './pages/shipper/DetailOfOrderOne'
import HomePageShipper from './pages/shipper/dashboard/HomePage'
import ListNewOrder from './pages/shipper/order/listOrder/ListNewOrder'
import OrderShipping from './pages/shipper/order/orderShipping/OrderShipping'
import OrderShippingCF from './pages/shipper/OrderShippingCF'
import RegisterOne from './pages/shipper/auth/RegisterOne'
import TemplateAgent from './templates/Agent/TemplateAgent'
import TemplateShipper from './templates/Shipper/TemplateShipper'
import ProfileAgent from './pages/agent/profile/ProfileAgent'
import InventoryManager from './pages/agent/inventory/InventoryManager'
import DetailOrder from './pages/shipper/order/listOrder/DetailOrder'
import ProfileShipper from './pages/shipper/profile/ProfileShipper'

export default function App() {
  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const auth = useSelector(state => state.auth)
  const { tokenUser, tokenTrainer, tokenAdmin } = token
  const { isShipper, isAgent, isAdmin } = auth
  const adminLogin = localStorage.getItem('admin')
  const refreshTokenAdmin = localStorage.getItem('refresh_token_admin')
  const agentLogin = localStorage.getItem('agent')
  const refreshTokenAgent = localStorage.getItem('refresh_token_agent')
  const shipperLogin = localStorage.getItem('shipper')
  const refreshTokenShipper = localStorage.getItem('refresh_token_shipper')
  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')

  
    if (adminLogin) {
      const getToken = async () => {
        const res = await axios.post('https://simpay-api.hpscamera.com/api/auth/refresh-tokens', {refresh_token:refreshTokenAdmin})
        console.log(res.data)
        localStorage.setItem('refresh_token_admin', res.data.refresh.token)
        dispatch({ type: ACTIONS.GET_TOKEN_ADMIN, payload: res.data.access.token})
        dispatch(dispatchLoginAdmin())
      }
      getToken()
    }
    if (agentLogin) {
      const getTokenAgent = async () => {
        const res = await axios.post('https://simpay-api.hpscamera.com/api/auth/refresh-tokens', {refresh_token:refreshTokenAgent})
        localStorage.setItem('refresh_token_agent', res.data.refresh.token)
        dispatch({ type: ACTIONS.GET_TOKEN_AGENT, payload: res.data.access.token})
        dispatch(dispatchLoginAgent())
      }
      getTokenAgent()
    }
    if (shipperLogin) {
      const getTokenAgent = async () => {
        const res = await axios.post('https://simpay-api.hpscamera.com/api/auth/refresh-tokens', {refresh_token:refreshTokenShipper})
        localStorage.setItem('refresh_token_shipper', res.data.refresh.token)
        dispatch({ type: ACTIONS.GET_TOKEN_SHIPPER, payload: res.data.access.token})
        dispatch(dispatchLoginShipper())
      }
      getTokenAgent()
    }
  }, [dispatch, isShipper, isAdmin, isAgent])
  useEffect(() => {
    // if (tokenUser) {
    //   const getUser = () => {
    //     dispatch(dispatchLoginUser())
    //     return fetchUser(tokenUser).then(res => {
    //       dispatch(dispatchGetUser(res))
    //     })
    //   }
    //   getUser()
    // }
    // if (tokenAdmin) {
    //   const getAdmin = () => {
    //     dispatch(dispatchLoginAdmin())
    //     return fetchAdmin(tokenAdmin).then(res => {
    //       dispatch(dispatchGetAdmin(res))
    //     })
    //   }
    //   getAdmin()
    // }

  }, [token, dispatch, tokenUser, tokenTrainer, tokenAdmin])
  //console.log(isAgent)
  return (
    <Router>
      <Switch>
        <Route path="/" component={isAdmin ? NotFound : LoginAll} exact />
        <TemplateAdmin path="/admin/dashboard" ComponentAdmin={isAdmin ? DashboardAdmin : NotFound } exact />
        <TemplateAdmin path="/admin/agentManagement" ComponentAdmin={isAdmin ? AgentManagement : NotFound } exact />
        <TemplateAdmin path="/admin/localityManagement" ComponentAdmin={isAdmin ? LocalityManagement : NotFound } exact />
        <TemplateAdmin path="/admin/product" ComponentAdmin={isAdmin ? ProductManagement : NotFound } exact />
        <TemplateAdmin path="/admin/shipperManagement" ComponentAdmin={isAdmin ? ShipperManagemet : NotFound } exact />
        
        <Route path="/agent" component={isAgent ? NotFound : LoginAgent} exact />
        <TemplateAgent path="/agent/profile" ComponentAgent={isAgent ? ProfileAgent : NotFound } exact />
        <TemplateAgent path="/agent/dashboard" ComponentAgent={isAgent ? DashboardAgent : NotFound } exact />
        <TemplateAgent path="/agent/orderManagement" ComponentAgent={isAgent ? OrderManagemet : NotFound } exact />
        <TemplateAgent path="/agent/orderManagement/detailOfOrderOM" ComponentAdmin={isAgent ? DetailOfOrderOM : NotFound } exact />
        {/* <TemplateAgent path="/agent/shipperManagement" ComponentAgent={isAgent ? ShipperManagemet : NotFound } exact /> */}
        <TemplateAgent path="/agent/productManagement" ComponentAgent={isAgent ? ProductManagement : NotFound } exact />
        <TemplateAgent path="/agent/inventoryManager" ComponentAgent={isAgent ? InventoryManager : NotFound } exact />
        <Route path="/shipper" component={shipperLogin ? HomePageShipper : LoginShipper} exact />
        <Route path="/shipper/registerOne" component={ RegisterOne } exact />
        <TemplateShipper path="/shipper/profile" ComponentShipper={isAgent ? ProfileShipper : NotFound } exact />
        <TemplateShipper path="/shipper/home" ComponentShipper={shipperLogin ? HomePageShipper : NotFound } exact />
        <TemplateShipper path="/shipper/listNewOrder" ComponentShipper={shipperLogin ? ListNewOrder : NotFound } exact />
        <TemplateShipper path="/shipper/listNewOrder/detail-order/:id" ComponentShipper={shipperLogin ? DetailOfOrder : NotFound } exact />
        <TemplateShipper path="/shipper/orderShipping" ComponentShipper={shipperLogin ? OrderShipping : NotFound } exact />
        <TemplateShipper path="/shipper/orderShipping/detail/:id" ComponentShipper={shipperLogin ? DetailOrder : NotFound } exact />
        <TemplateShipper path="/shipper/orderShipping/orderShippingCF" ComponentShipper={shipperLogin ? OrderShippingCF : NotFound } exact />
        <TemplateShipper path="/shipper/deliveryHistory" ComponentShipper={shipperLogin ? DeliveryHistory : NotFound } exact />
        <TemplateShipper path="/shipper/deliveryHistory/detailOfOrder" ComponentShipper={shipperLogin ? DetailOfOrder : NotFound } exact />
      </Switch>
    </Router>
  )
}
