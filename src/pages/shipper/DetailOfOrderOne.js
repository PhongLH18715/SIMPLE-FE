// import React from 'react'

// export default function DetailOfOrderOne() {
//     return (
//         <div className='container-fluid pb-5 pt-3'>
//             <div className='row'>
//                 <div className='col-9'>
//                     <h2>List new Order <i className="fa-solid fa-greater-than" /> Detail of Oder</h2>
//                 </div>
//                 {/* <div className='col-3' style={{ fontSize: '20px', display: 'flex', justifyContent: 'flex-end' }}>
//                     <span style={{ cursor: 'pointer', display: 'block' }}>Hello [Name] <i className="fa-solid fa-circle-user" /></span>
//                     <span style={{ cursor: 'pointer', display: 'block', marginLeft: '50px' }}><i className="fa-solid fa-bars" /></span>
//                 </div> */}
//             </div>
//             <div className='row'>
//                 <div className='col-12'>
//                     <div className='d-flex'>
//                         <div><span style={{ fontSize: '30px', marginRight: '10px' }}><i className="fa-solid fa-cart-shopping" /></span></div>
//                         <div><p style={{ fontSize: '25px', fontWeight: 'bold' }}>[Order_ID] + <button disabled type="button" className="btn btn-info">[Status]</button></p>
//                             <p>Revenue from order: [Revenue from order]</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='row'>
//                 <div className='col-9'>
//                     <div>
//                         <div>
//                             <nav>
//                                 <div className="nav nav-tabs" id="nav-tab" role="tablist">
//                                     <button className="nav-link active" id="nav-home-tab" data-toggle="tab" data-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Overview</button>
//                                     <button className="nav-link" id="nav-profile-tab" data-toggle="tab" data-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Related Information</button>
//                                     <button className="nav-link" id="nav-contact-tab" data-toggle="tab" data-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Update History</button>
//                                 </div>
//                             </nav>
//                             <div className="tab-content" id="nav-tabContent">
//                                 <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
//                                     <div className='mt-3'>
//                                         <h4>Note</h4>
//                                         <p>Text view</p>
//                                     </div>
//                                     <div className='mt-3'>
//                                         <h4>Attachment</h4>
//                                         <div className="card">
//                                             <div className="card-header">
//                                                 <button type="button" class="btn btn-outline-primary mr-5"><i className="fa-solid fa-plus" /> Upload</button>
//                                                 <button type="button" class="btn btn-outline-primary mr-5">Save</button>
//                                                 <button type="button" class="btn btn-outline-danger">Cancel</button>
//                                             </div>
//                                             <div className="card-body">
//                                                 <p className='d-flex justify-content-between'><span>abcxyz.pdf</span><span>270.892kb</span>
//                                                     <span style={{ fontSize: '20px' }}><i className="fa-solid fa-download" style={{ cursor: 'pointer' }} /><i style={{ cursor: 'pointer' }} className="fa-sharp fa-solid fa-xmark ml-5" /></span></p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className='mt-3'>
//                                         <h4>Exchange</h4>
//                                         <div className="border border-secondary p-3">
//                                             <div className='p-2 border border-primary d-inline-block' style={{ borderRadius: '5px' }}>
//                                                 <span className='mr-3'><i className="fa-regular fa-pen-to-square" /></span>
//                                                 <span>Exchange</span>
//                                             </div>

//                                         </div>
//                                         <div className='mt-2 p-3'>
//                                             <form>

//                                                 <div className="form-group">
//                                                     <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
//                                                 </div>
//                                                 <button type="submit" className="btn btn-primary mr-5">Save</button>
//                                                 <button type="button" className="btn btn-danger">Cancel</button>
//                                             </form>
//                                         </div>
//                                         <div>
//                                             <div className='row mt-3'>
//                                                 <div className='col-1'>
//                                                     <span style={{
//                                                         padding: '10px',
//                                                         backgroundColor: '#b7bfc1',
//                                                         borderRadius: '50%',
//                                                         width: '40px',
//                                                         height: '40px'
//                                                     }}><i className="fa-regular fa-pen-to-square" /></span>
//                                                 </div>
//                                                 <div className='col-11 d-flex justify-content-between' style={{
//                                                     paddingTop: '10px',
//                                                     paddingBottom: '10px',
//                                                     paddingRight: '20px',
//                                                     paddingLeft: '20px',
//                                                     backgroundColor: '#cfd7d7',
//                                                     borderRadius: '5px'
//                                                 }}>
//                                                     <span>Lê Hồng Phong (phonglh) (Agent) 10/03/2022: Alo</span>
//                                                     <span><div>
//                                                         <i className="fa-solid fa-pen" /><i className="fa-solid fa-trash-can ml-3" />
//                                                     </div>
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                             <div className='row mt-3'>
//                                                 <div className='col-1'>
//                                                     <span style={{
//                                                         padding: '10px',
//                                                         backgroundColor: '#b7bfc1',
//                                                         borderRadius: '50%',
//                                                         width: '40px',
//                                                         height: '40px'
//                                                     }}><i className="fa-regular fa-pen-to-square" /></span>
//                                                 </div>
//                                                 <div className='col-11 d-flex justify-content-between' style={{
//                                                     paddingTop: '10px',
//                                                     paddingBottom: '10px',
//                                                     paddingRight: '20px',
//                                                     paddingLeft: '20px',
//                                                     backgroundColor: '#cfd7d7',
//                                                     borderRadius: '5px'
//                                                 }}>
//                                                     <span>Lê Hồng Phong (phonglh) (Agent) 10/03/2022: Alo</span>
//                                                     <span><div>
//                                                         <i className="fa-solid fa-pen" /><i className="fa-solid fa-trash-can ml-3" />
//                                                     </div>
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
//                                 <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
//                             </div>
//                         </div>

//                     </div>

//                 </div>
//                 <div className='col-3'>
//                     <button type="button" className="btn btn-primary">Book</button>
//                     <div className='border border-secondary mt-2'>
//                         <div className="card border-0">
//                             <div className="card-body">
//                                 <h5 className="card-title">General information</h5>
//                                 <p className="card-text">Status: <button type="button" className="btn btn-info" disabled>[Status]</button></p>
//                                 <p className="card-text">Order Id: </p>
//                                 <p className="card-text">Customer Name: </p>
//                                 <p className="card-text">Phone Number: </p>
//                                 <p className="card-text">Address: </p>
//                                 <p className="card-text">Locality: </p>
//                                 <p className="card-text">Creator: </p>
//                                 <p className="card-text">Date created: </p>
//                                 <p className="card-text">Latest update users: </p>
//                                 <p className="card-text">Latest update date: </p>
//                             </div>
//                         </div>
//                         <div className="card border-0">
//                             <div className="card-body">
//                                 <h5 className="card-title">Shipper information</h5>
//                                 <p className="card-text">Fullname: </p>
//                                 <p className="card-text">Birthday: </p>
//                                 <p className="card-text">Citizen: </p>
//                                 <p className="card-text">Gender: </p>
//                                 <p className="card-text">Email: </p>
//                                 <p className="card-text">Phone Number: </p>
//                                 <p className="card-text">Address: </p>
//                                 <p className="card-text">Locality: </p>
//                             </div>
//                         </div>
//                         <div className="card border-0">
//                             <div className="card-body">
//                                 <h5 className="card-title">Agent information</h5>
//                                 <p className="card-text">Fullname: </p>
//                                 <p className="card-text">Agent Id: </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//         </div>
//     )
// }
