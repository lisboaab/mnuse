function footerView() {
  
  let result = `<div class="container">
  <div class="row">
    <div class="col-lg-3 ">
      <h4 class="text my-5">MNUSE</h4>
      <ul>
        <li><a href="">Rules</a></li>
        <li><a href="">About Us</a></li>
      </ul>
    </div>
    <div class="col-lg-3">
      <h4 class="text my-5">Find Help</h4>
      <ul>
        <li><a href="https://www.nimh.nih.gov/health/find-help">National Institute of Mental Health</a></li>
        <li><a href="https://bestonlinetherapyservices.com/?externalcreative=647384860012&p=&utm_content=&externalcampaign=19576005750&matchtype=b&ts=money&locphysicalms=1011762&from_ad=1&dev=c&devmod=&mobval=0&network=g&interest=&feedid=&topic=free&t=search&tt=">Online Therapy Sessions</a></li>
        <li><a href="https://www.mhe-sme.org/">Mental Health Europe</a></li>
      </ul>
    </div>
    <div class="col-lg-3">
      <h4 class="text my-5">Get Updates</h4>
      <form class="text">
        <input type="text" placeholder="enter your email" id="subscribeBtn"><br/>
        <button role="button" class="subscribeBtn">Subscribe</button>
      </form>
    </div>
    <div class="col-lg-3 col-12">
      <h4 class="text my-5">Socials</h4>
      <div class="social-links">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
      </div>
    </div>
  </div>
</div>`;

  document.getElementById("footer").innerHTML = result;
}

footerView()