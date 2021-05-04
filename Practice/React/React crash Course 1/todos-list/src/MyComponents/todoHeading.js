import React from 'react'

export default function todoHeading() {
    return (
        <div>
             <h3 className="text-center">
                    Todo's List
                </h3>
                <br />
                <hr></hr>
                <br />
               
                <div className="row">
                    <div className="col-sm-2">
                        <h6>SNo.</h6>
                    </div>
                    <div className="col-sm-4">
                        <h5>Title</h5>
                    </div>
                    <div className="col-sm-4">
                        <h5>Description</h5>
                    </div>
                    <div className="col-sm-2">
                        <h5>Action</h5>
                    </div>
                </div>
               
        </div>
    )
}
