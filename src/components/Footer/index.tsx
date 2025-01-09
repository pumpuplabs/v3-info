import React from 'react'
import Row, { RowGrid } from 'components/Row'
import styled from 'styled-components'
import { ReactComponent as Logo } from 'assets/svg/logo.svg'
import { ReactComponent as Discord } from 'assets/images/footer/icon_Discord.svg'
import { ReactComponent as Twitter } from 'assets/images/footer/icon_X.svg'
import { ReactComponent as Telegram } from 'assets/images/footer/icon_Telegram.svg'
import { useActiveNetworkVersion } from 'state/application/hooks'
import { INTERFACE_SITE } from 'constants/index'

const FooterWrapper = styled(Row)`
  width: 100%;
  background-color: #131217;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  padding: 40px 0;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding-bottom: 0;
  `};
  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding-bottom: 30px;
  `};
`

const FooterContent = styled(Row)`
  width: 98%;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 2.5rem;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
  `};
`
const LeftBox = styled(Row)`
  flex-direction: column;
  width: 50%;
  align-items: start;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    justify-content: center;
  `};
`
const MediaBox = styled(RowGrid)`
  grid-template-columns: repeat(3, 24px);
  gap: 2rem;
  margin-top: 2.5rem;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-top: 0;
    margin-left: 1rem;
  `};
`
const RightBox = styled(Row)`
  width: 50%;
  align-items: start;
  justify-content: end;
  gap: 5rem;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
    gap: 2rem;
    justify-content: center;
  `};
`

const FooterLinkBox = styled(RowGrid)`
  grid-column: 1;
  gap: 8px 0;
`

const FooterTitle = styled.h4`
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 600;
  margin: 0 0 1.5rem;
`

const StyledAct = styled.a`
  ${({ theme }) => theme.flexRowNoWrap}
  line-height: 20px;
  font-family: 'Poppins';
  font-size: 14px;
  font-weight: 400;
  color: #87868c;
  text-decoration: none;
`

const FooterCopy = styled.p`
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 400;
  color: #87868c;
  margin: 0;
  height: 60px;
  line-height: 60px;
  width: 100%;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

export const Footer = () => {
  const [activeNetwork] = useActiveNetworkVersion()
  console.log(activeNetwork.name, 'name')

  return (
    <FooterWrapper>
      <FooterContent>
        <LeftBox>
          <Logo width={50} height={50} />
          <MediaBox>
            <Discord />
            <Twitter />
            <Telegram />
          </MediaBox>
        </LeftBox>
        <RightBox>
          <FooterLinkBox>
            <FooterTitle>App</FooterTitle>
            <StyledAct id={`swap-nav-link`} href={`${INTERFACE_SITE}/#/swap?chain=${activeNetwork.route}`}>
              Swap
            </StyledAct>
            <StyledAct id={`swap-nav-link`} href={`${INTERFACE_SITE}/#/pool?chain=${activeNetwork.route}`}>
              Pool
            </StyledAct>
            <StyledAct id={`swap-nav-link`} href={`${INTERFACE_SITE}/#/pump?chain=${activeNetwork.route}`}>
              Pump
            </StyledAct>
            <StyledAct id={`swap-nav-link`} href={`${INTERFACE_SITE}/#/launchpad?chain=${activeNetwork.route}`}>
              Launchpad
            </StyledAct>
            <StyledAct id={`swap-nav-link`} href={`${INTERFACE_SITE}/#/stake?chain=${activeNetwork.route}`}>
              Stake
            </StyledAct>
            <StyledAct href={`http://142.171.201.201:3001/#/${activeNetwork.route}`}>Explore</StyledAct>
          </FooterLinkBox>

          <FooterLinkBox>
            <FooterTitle>Community</FooterTitle>
            <StyledAct href={`https://t.me/pumpup_community`}>Telegram</StyledAct>
            <StyledAct href={`https://twitter.com/pumpup_io`}>X</StyledAct>
            <StyledAct href={`https://github.com/pumpup-io`}>Github</StyledAct>
          </FooterLinkBox>

          <FooterLinkBox>
            <FooterTitle>Governance</FooterTitle>
            <StyledAct href={'#'}>Docs</StyledAct>
            <StyledAct href={'#'}>Privacy Policy</StyledAct>
            <StyledAct href={'#'}>Contact Us</StyledAct>
            <StyledAct href={'#'}>FAQs</StyledAct>
          </FooterLinkBox>
        </RightBox>
      </FooterContent>
      <FooterCopy>Proudly Made in Canada© Phoenix.xyz All rights reserved.</FooterCopy>
    </FooterWrapper>
  )
}
