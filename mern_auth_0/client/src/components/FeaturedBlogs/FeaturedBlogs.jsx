import React from 'react'
import mountainImg1 from '../../assets/mountain1.jpg';
import mountainImg2 from '../../assets/mountain2.jpg';
import './FeaturedBlogs.css'
import { MdOutlinePreview } from 'react-icons/md'
import { AiFillLike } from 'react-icons/ai'

const FeaturedBlogs = () => {
  return (
    <div>
      <div className="f-container">
        <div className="f-wrapper">
          <h3>Featured Blogs</h3>
          <div className="f-blogs">
            <div className="f-left">
              <div className="f-mainBlog">
                <img src={mountainImg1} alt="" />

                <div className="f-mainBlogData">
                  <div className="f-categoryAndMetaData">
                    <span className='f-category'>Nature</span>
                    <div className='f-metaData'>
                      <MdOutlinePreview /> 33 views
                    </div>
                    <div className="f-metaData">
                      <AiFillLike />100 likes
                    </div>
                  </div>
                  <h4>Blog 1 Title</h4>
                  <p className='f-desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem totam officia veniam expedita? Deserunt mollitia obcaecati, aliquam ad, optio commodi nobis voluptate eos magnam voluptatum similique debitis alias, quidem ducimus!
                  </p>
                  <div className="f-authorAndCreateAt">
                    <span><span>Author : Sahil</span></span>
                    <span><span>Create At : 02-02-2023  </span></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="f-right">

              <div className="f-secondaryBlog">
                <img src={mountainImg2} alt="" />
                <div className="f-secondaryBlogData">
                  <h4>Blog 2 title</h4>
                  <p className='f-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum pariatur optio eaque?</p>
                  <div className="f-authorAndCreateAt">
                    <span><span>Author : </span>Villy</span>
                    <span><span>Create At : </span>02 - 02 - 2023</span>
                  </div>
                </div>
              </div>

              <div className="f-secondaryBlog">
                <img src={mountainImg2} alt="" />
                <div className="f-secondaryBlogData">
                  <h4>Blog 2 title</h4>
                  <p className='f-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum pariatur optio eaque?</p>
                  <div className="f-authorAndCreateAt">
                    <span><span>Author : </span>Villy</span>
                    <span><span>Create At : </span>02 - 02 - 2023</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlogs