import React from 'react'

export default function RejectShipper() {
    return (
        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel2">Are you sure about reject shipper?Enter the reason</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div classNameName="modal-body">
                    <div className="form-group p-3">
                            <label htmlFor="exampleFormControlTextarea1">Reason</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger">Reject</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
