import React from 'react'

function Footer() {
  return (
    <footer className="bg-blue-600 text-white p-0">
  <div className="flex p-5 pt-2 pb-7 justify-between">
    <p className="text-justify p-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget elit sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam vestibulum finibus ornare. Quisque fringilla porttitor erat. Donec vel pulvinar nunc. Etiam quis mollis est. Nulla eget dolor nec elit sodales efficitur in luctus tellus. Nunc laoreet mattis mauris vitae gravida. Vestibulum sed nibh ullamcorper, aliquet orci a, egestas nulla. Nullam suscipit ullamcorper tellus vitae condimentum. Donec ac euismod diam, eget aliquet ligula. Nulla eu efficitur urna. In pharetra dolor sit amet nisi rutrum rutrum. Aliquam blandit metus augue, a auctor risus efficitur sit amet. Praesent dapibus interdum libero, sed fringilla eros hendrerit commodo.
    </p>
    <p className="text-justify p-2">
      Aenean ornare eleifend lectus ut aliquam. Donec interdum pharetra condimentum. Mauris dignissim eget nisi ut aliquet. Aenean id volutpat purus. Morbi tortor ipsum, scelerisque a cursus a, consectetur sit amet arcu. Ut congue viverra est faucibus suscipit. Etiam gravida est sed urna tristique maximus.
    </p>
    <p className="text-justify p-2">
      Semper lacinia eget sed odio. Nam a risus ut libero vulputate dictum vitae vel metus. Praesent eget pulvinar ligula, ut pharetra massa. Nulla aliquam, lectus sed viverra accumsan, magna sem posuere ipsum, a sodales tellus tortor id nibh. In facilisis ex dui, eget condimentum lacus pulvinar vel.
    </p>
    <div className="flex gap-2 justify-center text-justify p-2">
      <p>
        Aenean porta molestie mattis. Vestibulum iaculis dui eu interdum fringilla. Pellentesque dapibus sit amet orci eget fermentum. Nulla lacinia gravida bibendum. Quisque pellentesque diam vel lorem dapibus ultricies. Maecenas nec ante ut purus vestibulum bibendum. Nam congue imperdiet leo id rhoncus.
      </p>
      <div className="border-l border-white h-auto mx-2"></div>
    </div>
    <p className="text-justify p-2">
      Curabitur at turpis diam. Nunc tincidunt sollicitudin nisl, sed porttitor ante. Proin vulputate, justo nec laoreet iaculis, enim risus hendrerit dolor, eu placerat est massa id mauris.
    </p>
  </div>
  <hr className="border-t border-white" />
  <div className="mx-auto w-4/5 flex justify-between items-center pb-2">
    <p>Become a seller</p>
    <p>Advertise</p>
    <p>Gift Card</p>
    <p>Help Center</p>
    <p className="text-justify p-2">Copyright © {new Date().getFullYear()}</p>
    <div className="flex gap-2 justify-center items-center">
      <img
        src="https://imgs.search.brave.com/UgHikAaPbdU0CQzM6ynjkNAgjAKJyVrK_IJ64ZNAWTo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzJhL01hc3RlcmNh/cmQtbG9nby5zdmc.svg"
        className="w-8 h-5 object-contain bg-white p-2"
        alt="mastercard"
      />
      <img
        src="https://pngimg.com/uploads/visa/visa_PNG38.png"
        className="w-8 h-5 object-contain bg-white p-2"
        alt="visa"
      />
      <img
        src="https://imgs.search.brave.com/QagRLSKwQck4Gh3_sYLVkE-V1lempPoS6XWQNUa32GI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGl0ZWNodHVyZS5h/Z2VuY3kvYnJhbmQt/bG9nb3Mvd3AtY29u/dGVudC91cGxvYWRz/L3dwZG0tY2FjaGUv/UnVQYXktOTAweDAu/cG5n"
        className="w-8 h-5 object-contain bg-white p-2"
        alt="rupay"
      />
      <img
        src="https://imgs.search.brave.com/ok_XxjjTJsu16taikifw7H1Joc2NBvVAlW3q0Oa1JF4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS9wYXl0bS1p/Y29uLnBuZw"
        className="w-8 h-5 object-contain bg-white p-2"
        alt="paypal"
      />
    </div>
  </div>
</footer>

  )
}

export default Footer