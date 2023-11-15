import React from 'react';
import './App.css';
import inlog from './assests/inlogo.png'
import github from './assests/newgithublogo.png'
import gmail from './assests/gmaillogo.png'
// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="footer-content">
//           <div className="footer-left">
//             <p>&copy; 2023 Gitonga Nyaga</p>
//           </div>
//           <div className="footer-right">
//             <ul className="social-links">
//             <li><a href="https://linkedin.com/in/gitonga-nyaga-7ba5a126b/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
//               <li><a href="https://github.com/Richierichman15" target="_blank" rel="noopener noreferrer">GitHub</a></li>
//               <li><p>Gmail: gitonga.r.nyaga@gmail.com</p></li>
//               <li><a href="https://drive.google.com/file/d/1aPzMHwFEF7Lr9NH_f8adW0PjCR8ADZ8Y/view?usp=sharing" target="_blank" rel="noreferrer">Certification</a></li>
//             </ul>
//           </div>
//         </div>
//         <div className="back-to-top">
//           <a href="#top">Back to Top</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

const Footer = () => {
  return(
    <div class="bg-gray-800 text-white py-10 w-full h-auto">
      <div  class="container mx-auto text-center">
        <ul>
          <li><a href="https://linkedin.com/in/gitonga-nyaga-7ba5a126b/" target="_blank" rel="noopener noreferrer"><img src={inlog} alt='Linkedin'/></a></li>
          <li><a href="https://github.com/Richierichman15" target="_blank" rel="noopener noreferrer"><img src={github} alt='Github logo'/></a></li>
          <li><a href='https://gitonga.r.nyaga@gmail.com' target="_blank" rel="noopener noreferrer"><img src={gmail} alt='Gmail' className='w-20 h-10'/></a></li>
          {/* <li><a href="https://drive.google.com/file/d/1aPzMHwFEF7Lr9NH_f8adW0PjCR8ADZ8Y/view?usp=sharing" target="_blank" rel="noreferrer">Certification</a></li> */}
        </ul>
      </div>
    </div>
  )
}

export default Footer;
