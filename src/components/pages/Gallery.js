import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from './Pagination/Pagination';
import { imageService } from "../../services";
import ImageList from "./ImageList";


function Math() {

    const dispatch = useDispatch();

    const { imageList, imageListError, loading, } = useSelector(state => state.image)

    useEffect(() => {
        dispatch(imageService.imageList())
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(200);

    const perPageArray = [100, 200, 500, 1000]

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = imageList.slice(indexOfFirstPost, indexOfLastPost);

    useEffect(() => {
        setCurrentPage(1)
    }, [postsPerPage]);

    return (
        <div class="container imageGallery">
            <div class="row">
                <div class="col-md-12">
                    <ImageList currentPosts={currentPosts} />
                </div>
            </div>
            {currentPosts &&
                <div class="row">
                    <div class="row gallery-bottom">
                        <div class="col-sm-2">
                            <select style={{ cursor: 'pointer' }} onChange={(e) => setPostsPerPage(parseInt(e.target.value))} value={postsPerPage} class="custom-select">
                                {perPageArray.map((value) => {
                                    return (
                                        <option value={value}>{value}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div class="col-sm-6">
                            <Pagination
                                className="pagination-bar"
                                currentPage={currentPage}
                                totalCount={imageList.length}
                                pageSize={postsPerPage}
                                siblingCount={1}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </div>
                        <div class="col-sm-4 text-right">
                            <em>Displaying {indexOfFirstPost} to {indexOfLastPost} (of {imageList.length} posts)</em>
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}

export default Math