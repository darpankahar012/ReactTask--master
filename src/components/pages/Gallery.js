import React, { useState, useEffect } from "react";
import "../../App.css";
import Pagination from './Pagination/Pagination';

function Math() {
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <>
            <div class="container imageGallery">
                <div class="row">
                    <div class="col-md-12">
                        <div id="grid" class="row customgrid">
                            <div class="mix col-sm-3 page1 page4 margin30">
                                <div class="item-img-wrap ">
                                    <img src="https://via.placeholder.com/312x315/FFB6C1/000000" class="img-responsive" alt="workimg" />
                                    <div class="item-img-overlay">
                                        <a href="#" class="show-image">
                                            <span></span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div class="mix col-sm-3 page2 page3 margin30">
                                <div class="item-img-wrap ">
                                    <img src="https://via.placeholder.com/312x315/20B2AA/000000" class="img-responsive" alt="workimg" />
                                    <div class="item-img-overlay">
                                        <a href="#" class="show-image">
                                            <span></span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div class="mix col-sm-3  page3 page2 margin30 ">
                                <div class="item-img-wrap ">
                                    <img src="https://via.placeholder.com/312x315/87CEFA/000000" class="img-responsive" alt="workimg" />
                                    <div class="item-img-overlay">
                                        <a href="#" class="show-image">
                                            <span></span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div class="mix col-sm-3  page4 margin30">
                                <div class="item-img-wrap ">
                                    <img src="https://via.placeholder.com/312x315/EE82EE/000000" class="img-responsive" alt="workimg" />
                                    <div class="item-img-overlay">
                                        <a href="#" class="show-image">
                                            <span></span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div class="mix col-sm-3 page1 margin30 ">
                                <div class="item-img-wrap ">
                                    <img src="https://via.placeholder.com/312x315/#FF6347/000000" class="img-responsive" alt="workimg" />
                                    <div class="item-img-overlay">
                                        <a href="#" class="show-image">
                                            <span></span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div class="mix col-sm-3  page2 margin30">
                                <div class="item-img-wrap ">
                                    <img src="https://via.placeholder.com/312x315/008080/000000" class="img-responsive" alt="workimg" />
                                    <div class="item-img-overlay">
                                        <a href="#" class="show-image">
                                            <span></span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div class="mix col-sm-3  page3 margin30">
                                <div class="item-img-wrap ">
                                    <img src="https://via.placeholder.com/312x315/DDA0DD/000000" class="img-responsive" alt="workimg" />
                                    <div class="item-img-overlay">
                                        <a href="#" class="show-image">
                                            <span></span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div class="mix col-sm-3 page4  margin30">
                                <div class="item-img-wrap ">
                                    <img src="https://via.placeholder.com/312x315/FFA500/000000" class="img-responsive" alt="workimg" />
                                    <div class="item-img-overlay">
                                        <a href="#" class="show-image">
                                            <span></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="mix col-sm-3 page1 margin30 ">
                                <div class="item-img-wrap ">
                                    <img src="https://via.placeholder.com/312x315/#FF6347/000000" class="img-responsive" alt="workimg" />
                                    <div class="item-img-overlay">
                                        <a href="#" class="show-image">
                                            <span></span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div class="mix col-sm-3  page2 margin30">
                                <div class="item-img-wrap ">
                                    <img src="https://via.placeholder.com/312x315/008080/000000" class="img-responsive" alt="workimg" />
                                    <div class="item-img-overlay">
                                        <a href="#" class="show-image">
                                            <span></span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div class="mix col-sm-3  page3 margin30">
                                <div class="item-img-wrap ">
                                    <img src="https://via.placeholder.com/312x315/DDA0DD/000000" class="img-responsive" alt="workimg" />
                                    <div class="item-img-overlay">
                                        <a href="#" class="show-image">
                                            <span></span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div class="mix col-sm-3 page4  margin30">
                                <div class="item-img-wrap ">
                                    <img src="https://via.placeholder.com/312x315/FFA500/000000" class="img-responsive" alt="workimg" />
                                    <div class="item-img-overlay">
                                        <a href="#" class="show-image">
                                            <span></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row gallery-bottom">
                    <div class="col-sm-6">
                        {/* <ul class="pagination">
                            <li>
                                <a href="#" aria-label="Previous">
                                    <span aria-hidden="true">«</span>
                                </a>
                            </li>
                            <li class="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li>
                                <a href="#" aria-label="Next">
                                    <span aria-hidden="true">»</span>
                                </a>
                            </li>
                        </ul> */}
                        <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={50}
                            pageSize={2}
                            siblingCount={1}
                            onPageChange={page => setCurrentPage(page)}
                        />
                    </div>
                    <div class="col-sm-6 text-right">
                        <em>Displaying 1 to 8 (of 100 posts)</em>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Math