# flx-darkportfolio
<!-- ![flx-darkportfolio](https://github.com/fritssasia/flx-darkportfolio/blob/master/screenshot-preview.png?raw=true) -->

Simple and responsive static portfolio website with a dark theme,
you can use it as you wish and it's free for everyone :)

Demo : https://flx-darkportfolio.netlify.app/

## Tech
```
HTML5 | CSS3 | Bootstrap 4.5 | jQuery 3.2.1
```
## Installation
1. Clone this repository.
```bash
git clone https://github.com/fritssasia/flx-darkportfolio.git
```
2. Open ```index.html``` in browser.
   or upload this file on web hosting

## Customization
1. Structure
   ```
   
   ```

2. Color
   ```
   #232629 => bg-color          : body & .modal-body
   #25262a => bg-color          : navbar
   #dc143c => bg-color & color  : .nav-active | heading-text | .nav-pils(.nav-pils bg-color when .active)
   #ffffff => color             : text
   #4d4949 => shadow            : box-shadow
   ```
   

3. File ```modal-standart-template.txt```<br>
   Empty template for ```modal``` section
   ```html
   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
        <div class="container">
            <div class="modal-content">
                <div class="modal-body text-dark">

                    <!-- ================= Close button ================= -->
                    <div class="d-flex justify-content-end">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <!-- ================= Modal project content ================= -->
                    <div class="row">

                        <!-- ================= Modal project content description ================= -->
                        <div class="col-lg-6">
                            <h2 class="modal-project-name">Greychair</h2>
                            <p class="modal-project-description">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Earum, alias tenetur enim ducimus quod expedita sequi, nesciunt necessitatibus
                                sunt placeat pariatur ipsam voluptatem, rem totam corporis et dolor tempore
                                adipisci.</p>
                            <p class="modal-project stack"><span class="project-stack">HTML</span> <span
                                    class="project-stack">CSS</span> <span class="project-stack">Bootstrap</span>
                            </p>

                            <div class="modal-btn-in-modal">
                                <a href="" class="btn btn-outline-danger">Demo</a>
                                <a href="" class="btn btn-danger ml-1">Github</a>
                            </div>

                        </div>

                        <!-- ================= Modal project content images ================= -->
                        <div class="col-lg-6">
                            <img src="images/project-img/testgreyChair.png" alt="" class="img-fluid">
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
   ```

## Author
* [Rivas Frits Sasia](https://www.facebook.com/fritslx)

## Support
Want buy me a coffee?