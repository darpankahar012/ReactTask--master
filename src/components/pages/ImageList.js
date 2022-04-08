import React, { memo } from 'react'

function ImageList({ currentPosts }) {
    return (
        <div id="grid" class="row customgrid">
            {currentPosts && currentPosts.map((data) => {
                return (
                    <div class="mix col-sm-2 page1 page4 margin30">
                        <div class="item-img-wrap ">
                            <img src={data.url} class="img-responsive" alt="workimg" />
                            <div class="item-img-overlay">
                                <a href="javascript:void(0);" class="show-image">
                                    <span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default memo(ImageList)