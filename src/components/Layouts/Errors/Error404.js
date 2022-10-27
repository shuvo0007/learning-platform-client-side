import React from "react";
import "./Error404.css";

const Error404 = () => {
  return (
    <div className="h-full">
      <section class="page_404">
        <div class="container">
          <div class="">
            <div class="col-sm-12 ">
              <div class="col-sm-10 col-sm-offset-1 justify-center align-middle items-center text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>

                <div class="contant_box_404">
                  <a href="/" className="link_404">
                    Go to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error404;
