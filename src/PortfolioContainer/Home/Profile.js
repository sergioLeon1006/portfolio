import React from 'react'
import Typical from 'react-typical'

export default function Profile() {
  return (
    <div className="profile-container">
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">
                    <a href="https://www.facebook.com/sergio.saldarriaga.100">
                        <i class="fa fa-facebook-square" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.instagram.com/sergio.leon1006/">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.instagram.com/sergio.leon1006/">
                        <i class="fa fa-git-square" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div className="profile-details-name">
                <span className="primary-text">
                    Hello I'm <span className="higlighted-text">Sergio</span>
                </span>
            </div>
            <div className="profile-details-role">
                <span className="primary-text">
                    <h1>
                        <Typical loop={Infinity}  steps={[
                            "Ethusiastic Dev ",
                            1000,
                            "Full Stack Dev",
                            1000,
                            "Junior Dev",
                            1000,
                        ]}/>
                    </h1>
                    <span className="profile-role-tagline"> lorem ipsum dolor sit amet</span>
                </span>
            </div>
            <div className="profile-options">
                <button type="button" class="btn btn-primary">Primary</button>

            </div>
        </div>
    </div>
  )
}
