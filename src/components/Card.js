import React from 'react'

export default function Card() {
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHieght": "360px" }}>
                    <img src="hhttps://media.istockphoto.com/id/1363306647/photo/paneer-tikka.jpg?s=612x612&w=0&k=20&c=asWl-6n8mMdacHR-oGak5Eo0Y_qqxSTnMkqQoCrPVA0=ttps://upload.wikimedia.org/wikipedia/commons/c/c2/Paneer_Tikka_Masala.jpghttps://www.google.com/url?sa=i&url=https%3A%2F%2https://www.cookwithkushi.com/wp-content/uploads/2023/02/paneer_tikka_at_home_01.jpgFwww.cookwithkushi.com%2Fpaneer-tikka-recipe%2F&psig=AOvVaw2UktGH-avDm0LbHnFpEgmv&ust=1694515330770000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJit66ywooEDFQAAAAAdAAAAABAE" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title.</p>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-success rounded' >
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}> {i + 1}</option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-100 bg-success rounded' >
                                <option value="half">Half</option>
                                <option value="full">Full</option>
                            </select>
                            <div className='d-inline h-100 fs-5'>
                                Total Price
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
