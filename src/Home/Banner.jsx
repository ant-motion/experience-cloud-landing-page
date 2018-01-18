import 'rc-banner-anim/assets/index.css';
import React from 'react';
import QueueAnim from 'rc-queue-anim';
import BannerAnim from 'rc-banner-anim';
import { Button } from 'antd';
import { banner } from './data';

const { Element } = BannerAnim;
const { BgElement } = Element;

class Banner extends React.PureComponent {
  getDuration = (e) => {
    if (e.key === 'map') {
      return 800;
    }
    return 1000;
  };
  render() {
    const { isMobile } = this.props;
    const bannerChildren = banner.map((item, i) => {
      const children = item.children.map((child, ii) => {
        const tag = child.tag === 'button' ? 'div' : child.tag || 'p';
        const childrenToRender = child.tag === 'button' ?
          <Button><a href={child.link} target="_blank">{child.children}</a></Button> :
          child.children;
        return React.createElement(tag, {
          key: ii.toString(),
          className: child.className,
          style: child.style || {},
        }, childrenToRender);
      });
      return (
        <Element key={i.toString()}>
          <BgElement
            key="bg"
            className="banner-bg"
            style={{ backgroundImage: `url(${isMobile ? item.imgMobile : item.img})` }}
          />
          <QueueAnim
            key="text"
            className={item.className}
            ease={['easeOutCubic', 'easeInQuad']}
            type={item.queueAnim || 'bottom'}
          >
            {children}
          </QueueAnim>
        </Element >);
    });
    return (
      <div className="banner page-wrapper" >
        <div className="page">
          <div className="logo" />
          <BannerAnim type="across" duration={550} ease="easeInOutQuint">
            {bannerChildren}
          </BannerAnim>
        </div>
      </div>
    );
  }
}

export default Banner;
