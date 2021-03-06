import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import Icon1 from "../../images/google-play.svg";
import Icon2 from "../../images/apple-store.svg";
import {
    FaFacebook,
    FaInstagram,
    // FaYoutube,
    // FaTwitter,
    // FaLinkedin,
    // FaGooglePlay,
    // FaApple
} from 'react-icons/fa';
import {
    FooterConatiner,
    FooterWrap,
    FooterLinksConatiner,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLinlk,
    FooterLinkWrapper,
    SocialIconLink,
    SocialIcons,
    SocialMedia,
    SocialLogo,
    SocialMediaWrap,
    WebsiteRIghts,
    Icon


} from './FooterElement';
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <>
         <FooterConatiner>
            <FooterWrap>
              <FooterLinksConatiner>
                 <FooterLinkWrapper>
                     <FooterLinkItems>
                         <FooterLinkTitle>About us </FooterLinkTitle>
                             
                             <FooterLinlk to="/signin">
                                 HoW it works
                             </FooterLinlk>
                             <FooterLinlk to="/signin">
                                 Testinomials
                             </FooterLinlk>
                             <FooterLinlk to="/signin">
                                 Carrers
                             </FooterLinlk>
                             <FooterLinlk to="/signin">
                                 Investors
                             </FooterLinlk>
                             <FooterLinlk to="/signin">
                                 Terms of Services
                             </FooterLinlk>
                         
                     </FooterLinkItems>
                     <FooterLinkItems>
                         <FooterLinkTitle>About us </FooterLinkTitle>
                             
                             <FooterLinlk to="/signin">
                                 HoW it works
                             </FooterLinlk>
                             <FooterLinlk to="/signin">
                                 Testinomials
                             </FooterLinlk>
                             <FooterLinlk to="/signin">
                                 Carrers
                             </FooterLinlk>
                             <FooterLinlk to="/signin">
                                 Investors
                             </FooterLinlk>
                             <FooterLinlk to="/signin">
                                 Terms of Services
                             </FooterLinlk>
                         
                     </FooterLinkItems>
                 </FooterLinkWrapper> 
                 <FooterLinkWrapper>
                     <FooterLinkItems>
                         <FooterLinkTitle>About us </FooterLinkTitle>
                             
                             <FooterLinlk to="/signin">
                                 HoW it works
                             </FooterLinlk>
                             <FooterLinlk to="/signin">
                                 Testinomials
                             </FooterLinlk>
                             <FooterLinlk to="/signin">
                                 Carrers
                             </FooterLinlk>
                             <FooterLinlk to="/signin">
                                 Investors
                             </FooterLinlk>
                             <FooterLinlk to="/signin">
                                 Terms of Services
                             </FooterLinlk>
                         
                     </FooterLinkItems>
                     <FooterLinkItems>
                         <FooterLinkTitle>About us </FooterLinkTitle>
                             
                             <FooterLinlk to="/signin">
                                 HoW it works
                             </FooterLinlk>
                             <FooterLinlk to="/signin">
                                 Testinomials
                             </FooterLinlk>
                             <FooterLinlk to="/signin">
                                 Carrers
                             </FooterLinlk>
                             <FooterLinlk to="/signin">
                                 Investors
                             </FooterLinlk>
                             <FooterLinlk to="/signin">
                                 Terms of Services
                             </FooterLinlk>
                         
                     </FooterLinkItems>
                 </FooterLinkWrapper> 
              </FooterLinksConatiner> 
              <SocialMedia>
                  <SocialMediaWrap>
                      <SocialLogo to= '/' onClick={toggleHome}>
                          Multitasker
                      </SocialLogo>
                      <WebsiteRIghts>Multitasker  ??  {new Date().getFullYear()} 
                      All rights reserved </WebsiteRIghts>
                    <SocialIcons>
                      <SocialIconLink href="/" target= "_blank"
                      aria-label="Play Store">
                        <Icon src={Icon1}/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target= "_blank"
                      aria-label="Play Store">
                        <Icon src={Icon2}/>
                        </SocialIconLink>
                      <SocialIconLink href="/" target= "_blank"
                      aria-label="Facebook">
                        <FaFacebook/>
                      </SocialIconLink>
                      <SocialIconLink href="/" target= "_blank"
                      aria-label="Instagram">
                        <FaInstagram/>
                      </SocialIconLink>
                      {/* <SocialIconLink href="/" target= "_blank"
                      aria-label="Youtube">
                        <FaYoutube/>
                      </SocialIconLink>
                       <SocialIconLink href="/" target= "_blank"
                      aria-label="Twitter">
                        <FaTwitter/>
                      </SocialIconLink>
                      <SocialIconLink href="/" target= "_blank"
                      aria-label="Linkedin">
                        <FaLinkedin/>
                       </SocialIconLink> */}
                    </SocialIcons> 
                      
                  </SocialMediaWrap>
                  
              </SocialMedia> 
              
            </FooterWrap> 
            {/* <WebsiteRIghts>Multitasker  ??  {new Date().getFullYear()} All rights reserved </WebsiteRIghts> */}
          </FooterConatiner>   
        </>
    )
}

export default Footer;
