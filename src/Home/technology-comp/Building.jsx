import React from 'react';
import TweenOne from 'rc-tween-one';

let dataArray = [
  [
    <rect id="Rectangle-13" x="484" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="506" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="528" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="0" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="22" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="44" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="66" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="88" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="110" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="132" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="154" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="176" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="198" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="220" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="242" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="264" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="286" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="308" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="330" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="352" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="374" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="396" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="418" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="440" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="462" y="0" width="20" height="20" />,
  ],
  [
    <rect id="Rectangle-13" opacity="0.15" x="506" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.1" x="528" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.1" x="0" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.15" x="22" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.2" x="44" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="66" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="88" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="110" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="132" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="154" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="176" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="198" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="220" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.4" x="242" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.4" x="264" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.4" x="286" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="308" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="330" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="352" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="374" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="396" y="0" width="20" height="20" />,
  ],
  [
    <rect id="Rectangle-13" opacity="0.15" x="506" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.1" x="528" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.1" x="0" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.15" x="22" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.2" x="44" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="66" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="88" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="110" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="132" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="154" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="176" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="198" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="220" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.4" x="242" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.45" x="264" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.4" x="286" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="308" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="330" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="352" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="374" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="396" y="0" width="20" height="20" />,
  ],
  [
    <rect id="Rectangle-13" opacity="0.15" x="506" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.1" x="528" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.1" x="0" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.15" x="22" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.2" x="44" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="66" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="88" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="110" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="132" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="154" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="176" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="198" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="220" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.4" x="242" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.5" x="264" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.4" x="286" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="308" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="330" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="352" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="374" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="396" y="0" width="20" height="20" />,
  ],
  [
    <rect id="Rectangle-13" opacity="0.2" x="484" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.15" x="506" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.1" x="528" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.1" x="0" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.15" x="22" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.2" x="44" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="66" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="88" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="110" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="132" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="154" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="176" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="198" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="220" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.4" x="242" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.5" x="264" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.4" x="286" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="308" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="330" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="352" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="374" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="396" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="418" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="440" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="462" y="0" width="20" height="20" />,
  ],
  [
    <rect id="Rectangle-13" opacity="0.2" x="484" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.15" x="506" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.1" x="528" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.1" x="0" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.15" x="22" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.2" x="44" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="66" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="88" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="110" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="132" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="154" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="176" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="198" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="220" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.4" x="242" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.5" x="264" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.4" x="286" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="308" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="330" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="352" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="374" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="396" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="418" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="440" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="462" y="0" width="20" height="20" />,
  ],
  [
    <rect id="Rectangle-13" opacity="0.2" x="484" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.15" x="506" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.1" x="528" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.1" x="0" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.15" x="22" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.2" x="44" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="66" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="88" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="110" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="132" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="154" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="176" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="198" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="220" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.4" x="242" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.5" x="264" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.4" x="286" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="308" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="330" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="352" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="374" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="396" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="418" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="440" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="462" y="0" width="20" height="20" />,
  ],
  [
    <rect id="Rectangle-13" opacity="0.2" x="484" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.15" x="506" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.1" x="528" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.1" x="0" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.15" x="22" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.2" x="44" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="66" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="88" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="110" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="132" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="154" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="176" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="198" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="220" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.4" x="242" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.45" x="264" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.4" x="286" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="308" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="330" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="352" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="374" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="396" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="418" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="440" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="462" y="0" width="20" height="20" />,
  ],
  [
    <rect id="Rectangle-13" opacity="0.2" x="610" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.15" x="632" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.1" x="654" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.1" x="126" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.15" x="148" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.2" x="170" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="192" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="44" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.15" x="0" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.2" x="22" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="44" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="66" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="214" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="236" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="258" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="280" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="302" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="324" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="346" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.4" x="368" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.4" x="390" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.4" x="412" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="434" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="456" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="478" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="500" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="522" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="544" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="566" y="22" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="588" y="22" width="20" height="20" />,
  ],
  [
    <rect id="Rectangle-26" fill="#1890FF" opacity="0.25" x="2" y="30" width="20" height="20" />,
    <rect id="Rectangle-26" fill="#1890FF" opacity="0.25" x="24" y="30" width="20" height="20" />,
    <rect id="Rectangle-26" fill="#1890FF" opacity="0.25" x="46" y="30" width="20" height="20" />,
    <rect id="Rectangle-26" fill="#1890FF" opacity="0.25" x="68" y="30" width="20" height="20" />,
    <rect id="Rectangle-26" fill="#1890FF" opacity="0.35" x="2" y="52" width="20" height="20" />,
    <rect id="Rectangle-26" fill="#1890FF" opacity="0.35" x="24" y="52" width="20" height="20" />,
    <rect id="Rectangle-26" fill="#1890FF" opacity="0.35" x="46" y="52" width="20" height="20" />,
    <rect id="Rectangle-26" fill="#1890FF" opacity="0.35" x="68" y="52" width="20" height="20" />,
    <rect id="Rectangle-26" fill="#1890FF" opacity="0.45" x="2" y="74" width="20" height="20" />,
    <rect id="Rectangle-26" fill="#1890FF" opacity="0.45" x="24" y="74" width="20" height="20" />,
    <rect id="Rectangle-26" fill="#1890FF" opacity="0.45" x="46" y="74" width="20" height="20" />,
    <rect id="Rectangle-26" fill="#1890FF" opacity="0.45" x="68" y="74" width="20" height="20" />,
  ],
];
function setTweenOne(item, i) {
  if (Math.random() <= 0.8) {
    return (
      <TweenOne component="g" key={i.toString()}>
        {item}
      </TweenOne>);
  }
  return React.cloneElement(item, { key: i.toString() });
}
dataArray = dataArray.map(item => item.map(setTweenOne));
export default class Building extends React.PureComponent {
  setAnimToTweenOne = (hover) => {
    const setAnim = (item) => {
      if (item.type.isTweenOne) {
        return React.cloneElement(item, {
          animation: hover ?
            {
              opacity: Math.random() * 0.5,
              yoyo: true,
              repeat: -1,
              duration: Math.random() * 2000 + 1000,
              delay: Math.random() * 300,
            } :
            { opacity: 1 },
        });
      }
      return item;
    };
    return dataArray.map(item => item.map(setAnim));
  }
  render() {
    const { hover, isMobile } = this.props;
    if (isMobile) {
      return <img src="https://gw.alipayobjects.com/zos/rmsportal/QerApYYMoRquqsSEbxeH.svg" alt="img" />;
    }
    const children = this.setAnimToTweenOne(hover);
    return (
      <svg width="796px" height="282px" viewBox="0 0 796 282" preserveAspectRatio="xMaxYMax slice">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Group-7" transform="translate(126.000000, 84.000000)">
            <rect id="Rectangle-13" fill="#13C2C2" x="66" y="44.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#EB2F96" opacity="0.4" x="0" y="0.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#FADB14" opacity="0.4" x="22" y="0.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#1AC44D" opacity="0.4" x="44" y="0.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#13C2C2" x="64.5" y="178" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#13C2C2" x="86.5" y="156" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#1AC44D" x="88" y="176" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#13C2C2" x="86.5" y="68" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#1AC44D" x="174.5" y="112" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#13C2C2" x="64.5" y="112" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#13C2C2" x="174.5" y="178" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#1AC44D" x="88" y="66.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#1AC44D" x="88" y="132.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#1AC44D" x="110" y="110.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#1AC44D" x="132" y="132.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#1AC44D" x="154" y="110.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#1AC44D" x="110" y="44.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#1AC44D" x="132" y="66.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#13C2C2" x="154" y="44.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#1AC44D" x="220" y="44.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#1AC44D" x="218.5" y="178" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#1AC44D" opacity="0.5" x="218.5" y="112" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#1AC44D" opacity="0.5" x="328.5" y="68" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#1AC44D" x="328.5" y="112" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#1AC44D" opacity="0.5" x="328.5" y="134" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#1AC44D" opacity="0.5" x="328.5" y="156" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#1AC44D" x="328.5" y="178" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#FADB14" opacity="0.5" x="306.5" y="68" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#FADB14" opacity="0.5" x="240.5" y="68" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#FADB14" opacity="0.5" x="240.5" y="156" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#FADB14" opacity="0.5" x="262.5" y="112" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#FADB14" opacity="0.5" x="240.5" y="112" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#FADB14" opacity="0.5" x="264" y="44.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#FADB14" opacity="0.5" x="286" y="66.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#FADB14" opacity="0.5" x="264" y="110.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#1AC44D" x="308" y="110.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#FADB14" x="306.5" y="134" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#FADB14" opacity="0.5" x="306.5" y="156" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#FADB14" x="286" y="132.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#1AC44D" x="308" y="44.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#FADB14" opacity="0.5" x="242" y="176.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#FADB14" opacity="0.5" x="286" y="176.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#FADB14" opacity="0.5" x="242" y="66.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#FADB14" opacity="0.6" x="374" y="44.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#FADB14" opacity="0.6" x="372.5" y="178" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#FADB14" opacity="0.6" x="372.5" y="112" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#FADB14" opacity="0.6" x="482.5" y="112" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#FADB14" opacity="0.6" x="482.5" y="134" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#FADB14" opacity="0.6" x="482.5" y="156" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#FADB14" opacity="0.6" x="482.5" y="178" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#26ADFF" opacity="0.6" x="394.5" y="68" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#26ADFF" opacity="0.6" x="416.5" y="112" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#26ADFF" opacity="0.6" x="394.5" y="112" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#26ADFF" opacity="0.6" x="394.5" y="156" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#26ADFF" opacity="0.6" x="418" y="110.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#FADB14" opacity="0.6" x="462" y="110.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#26ADFF" opacity="0.6" x="460.5" y="134" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#26ADFF" opacity="0.6" x="460.5" y="156" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#26ADFF" opacity="0.6" x="440" y="132.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#26ADFF" opacity="0.6" x="396" y="176.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#26ADFF" opacity="0.6" x="440" y="176.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#26ADFF" opacity="0.6" x="396" y="66.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#1AC44D" x="132" y="176.5" width="20" height="1.5" />
            <rect id="Rectangle-13" fill="#13C2C2" x="64.5" y="46" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#13C2C2" x="174.5" y="46" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#1AC44D" x="218.5" y="46" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#1AC44D" x="328.5" y="46" width="1.5" height="20" />
            <rect id="Rectangle-13" fill="#FADB14" opacity="0.6" x="372.5" y="46" width="1.5" height="20" />
          </g>
          <g id="Group-22" transform="translate(126.000000, 86.000000)" fill="#1890FF" opacity="0.05">
            {children[0]}
          </g>
          <g id="Group-23" transform="translate(0.000000, 108.000000)" fill="#1890FF">
            <g id="Group-10" opacity="0.8" transform="translate(126.000000, 0.000000)">
              <g id="Group-15" opacity="0.5">
                {children[1]}
              </g>
              <g id="Group-16" opacity="0.6" transform="translate(0.000000, 22.000000)">
                {children[2]}
              </g>
            </g>
            <g id="Group-13" opacity="0.9" transform="translate(126.000000, 44.000000)">
              <g id="Group-21" opacity="0.7">
                {children[3]}
              </g>
              <g id="Group-20" opacity="0.8" transform="translate(0.000000, 22.000000)">
                {children[4]}
              </g>
            </g>
            <g id="Group-14" opacity="0.9" transform="translate(126.000000, 88.000000)">
              <g id="Group-19" opacity="0.8">
                {children[5]}
              </g>
              <g id="Group-4" opacity="0.7" transform="translate(0.000000, 22.000000)">
                {children[6]}
              </g>
            </g>
            <g id="Group-12" opacity="0.8" transform="translate(0.000000, 132.000000)">
              <g id="Group-18" opacity="0.6" transform="translate(126.000000, 0.000000)">
                {children[7]}
              </g>
              <g id="Group-17" opacity="0.5">
                {children[8]}
              </g>
            </g>
          </g>
          <g id="Group-24" opacity="0.129999995" transform="translate(511.000000, 0.000000)">
            <rect id="Rectangle-18" stroke="#FFFFFF" x="0.5" y="21.5" width="284" height="29" rx="1" />
            <rect id="Rectangle-18" stroke="#FFFFFF" x="194.5" y="62.5" width="36" height="190" rx="1" />
            <rect id="Rectangle-19" fill="#FFFFFF" transform="translate(165.500000, 36.500000) rotate(45.000000) translate(-165.500000, -36.500000) " x="165" y="17" width="1" height="39" rx="0.5" />
            <rect id="Rectangle-19" fill="#FFFFFF" transform="translate(164.500000, 35.500000) scale(-1, 1) rotate(45.000000) translate(-164.500000, -35.500000) " x="164" y="16" width="1" height="39" rx="0.5" />
            <rect id="Rectangle-19" fill="#FFFFFF" transform="translate(135.500000, 36.500000) rotate(45.000000) translate(-135.500000, -36.500000) " x="135" y="17" width="1" height="39" rx="0.5" />
            <rect id="Rectangle-19" fill="#FFFFFF" transform="translate(134.500000, 35.500000) scale(-1, 1) rotate(45.000000) translate(-134.500000, -35.500000) " x="134" y="16" width="1" height="39" rx="0.5" />
            <rect id="Rectangle-19" fill="#FFFFFF" transform="translate(259.500000, 36.000000) rotate(45.000000) translate(-259.500000, -36.000000) " x="259" y="15" width="1" height="42" rx="0.5" />
            <rect id="Rectangle-22" fill="#FFFFFF" x="120" y="22" width="1" height="28" />
            <rect id="Rectangle-22" fill="#FFFFFF" x="150" y="22" width="1" height="28" />
            <rect id="Rectangle-22" fill="#FFFFFF" x="274" y="22" width="1" height="28" />
            <rect id="Rectangle-22" fill="#FFFFFF" x="31" y="22" width="1" height="28" />
            <rect id="Rectangle-19" fill="#FFFFFF" transform="translate(258.500000, 35.000000) scale(-1, 1) rotate(45.000000) translate(-258.500000, -35.000000) " x="258" y="14" width="1" height="42" rx="0.5" />
            <rect id="Rectangle-19" fill="#FFFFFF" transform="translate(105.500000, 36.500000) rotate(45.000000) translate(-105.500000, -36.500000) " x="105" y="17" width="1" height="39" rx="0.5" />
            <rect id="Rectangle-19" fill="#FFFFFF" transform="translate(105.500000, 35.500000) scale(-1, 1) rotate(45.000000) translate(-105.500000, -35.500000) " x="105" y="16" width="1" height="39" rx="0.5" />
            <rect id="Rectangle-19" fill="#FFFFFF" transform="translate(76.500000, 36.500000) rotate(45.000000) translate(-76.500000, -36.500000) " x="76" y="17" width="1" height="39" rx="0.5" />
            <rect id="Rectangle-19" fill="#FFFFFF" transform="translate(75.500000, 35.500000) scale(-1, 1) rotate(45.000000) translate(-75.500000, -35.500000) " x="75" y="16" width="1" height="39" rx="0.5" />
            <rect id="Rectangle-19" fill="#FFFFFF" transform="translate(46.500000, 36.500000) rotate(45.000000) translate(-46.500000, -36.500000) " x="46" y="17" width="1" height="39" rx="0.5" />
            <rect id="Rectangle-19" fill="#FFFFFF" transform="translate(45.500000, 35.500000) scale(-1, 1) rotate(45.000000) translate(-45.500000, -35.500000) " x="45" y="16" width="1" height="39" rx="0.5" />
            <rect id="Rectangle-19" fill="#FFFFFF" transform="translate(16.500000, 36.500000) rotate(45.000000) translate(-16.500000, -36.500000) " x="16" y="17" width="1" height="39" rx="0.5" />
            <rect id="Rectangle-19" fill="#FFFFFF" transform="translate(16.500000, 35.500000) scale(-1, 1) rotate(45.000000) translate(-16.500000, -35.500000) " x="16" y="16" width="1" height="39" rx="0.5" />
            <rect id="Rectangle-18" stroke="#FFFFFF" x="183.5" y="258.5" width="58" height="22" rx="1" />
            <rect id="Rectangle-18" stroke="#FFFFFF" x="191.5" y="252.5" width="43" height="6" rx="1" />
            <rect id="Rectangle-18" stroke="#FFFFFF" x="189.5" y="174.5" width="45" height="8" rx="1" />
            <rect id="Rectangle-18" stroke="#FFFFFF" x="189.5" y="131.5" width="45" height="8" rx="1" />
            <rect id="Rectangle-18" stroke="#FFFFFF" x="189.5" y="54.5" width="45" height="8" rx="1" />
            <rect id="Rectangle-18" stroke="#FFFFFF" x="189.5" y="8.5" width="45" height="8" rx="1" />
            <rect id="Rectangle-18" stroke="#FFFFFF" x="194.5" y="0.5" width="36" height="8" rx="1" />
            <rect id="Rectangle-18" stroke="#FFFFFF" x="180.5" y="16.5" width="64" height="8" rx="1" />
            <rect id="Rectangle-18" stroke="#FFFFFF" x="180.5" y="48.5" width="64" height="8" rx="1" />
            <rect id="Rectangle-18" stroke="#FFFFFF" x="180.5" y="21.5" width="64" height="29" rx="1" />
            <rect id="Rectangle-19" fill="#FFFFFF" transform="translate(212.500000, 235.000000) rotate(45.000000) translate(-212.500000, -235.000000) " x="212" y="210" width="1" height="50" rx="0.5" />
            <rect id="Rectangle-19" fill="#FFFFFF" transform="translate(212.500000, 235.000000) scale(-1, 1) rotate(45.000000) translate(-212.500000, -235.000000) " x="212" y="210" width="1" height="50" rx="0.5" />
            <rect id="Rectangle-19" fill="#FFFFFF" transform="translate(212.500000, 200.000000) rotate(45.000000) translate(-212.500000, -200.000000) " x="212" y="175" width="1" height="50" rx="0.5" />
            <rect id="Rectangle-19" fill="#FFFFFF" transform="translate(212.500000, 200.000000) scale(-1, 1) rotate(45.000000) translate(-212.500000, -200.000000) " x="212" y="175" width="1" height="50" rx="0.5" />
            <rect id="Rectangle-19" fill="#FFFFFF" transform="translate(212.500000, 157.000000) rotate(45.000000) translate(-212.500000, -157.000000) " x="212" y="132" width="1" height="50" rx="0.5" />
            <rect id="Rectangle-19" fill="#FFFFFF" transform="translate(212.500000, 157.000000) scale(-1, 1) rotate(45.000000) translate(-212.500000, -157.000000) " x="212" y="132" width="1" height="50" rx="0.5" />
            <rect id="Rectangle-19" fill="#FFFFFF" transform="translate(212.500000, 114.000000) rotate(45.000000) translate(-212.500000, -114.000000) " x="212" y="89" width="1" height="50" rx="0.5" />
            <rect id="Rectangle-19" fill="#FFFFFF" transform="translate(212.500000, 114.000000) scale(-1, 1) rotate(45.000000) translate(-212.500000, -114.000000) " x="212" y="89" width="1" height="50" rx="0.5" />
            <rect id="Rectangle-19" fill="#FFFFFF" transform="translate(212.500000, 80.000000) rotate(45.000000) translate(-212.500000, -80.000000) " x="212" y="55" width="1" height="50" rx="0.5" />
            <rect id="Rectangle-19" fill="#FFFFFF" transform="translate(212.500000, 80.000000) scale(-1, 1) rotate(45.000000) translate(-212.500000, -80.000000) " x="212" y="55" width="1" height="50" rx="0.5" />
            <rect id="Rectangle-24" fill="#FFFFFF" x="194" y="96" width="37" height="1" rx="0.5" />
            <rect id="Rectangle-24" fill="#FFFFFF" x="194" y="217" width="37" height="1" rx="0.5" />
            <rect id="Rectangle-22" fill="#FFFFFF" x="90" y="22" width="1" height="28" />
            <rect id="Rectangle-22" fill="#FFFFFF" x="61" y="22" width="1" height="28" />
          </g>
          <g id="Group-25" transform="translate(542.000000, 51.000000)">
            <TweenOne
              component="g"
              animation={hover ? [{ y: 28 }, { opacity: 0.5 }] : { y: 0 }}
            >
              <g>
                {children[9]}
              </g>
              <g id="Group-9" transform="translate(2.000000, 50.000000)">
                <rect id="Rectangle-13" fill="#FADB14" x="64" y="24" width="1.5" height="20" />
                <rect id="Rectangle-13" fill="#26ADFF" x="42" y="24" width="1.5" height="20" />
                <rect id="Rectangle-13" fill="#26ADFF" x="0" y="0.5" width="20" height="1.5" />
                <rect id="Rectangle-13" fill="#26ADFF" x="22" y="22.5" width="20" height="1.5" />
                <rect id="Rectangle-13" fill="#FADB14" x="44" y="0.5" width="20" height="1.5" />
                <rect id="Rectangle-13" fill="#FADB14" x="64" y="2" width="1.5" height="20" />
              </g>
              <TweenOne
                component="g"
                animation={hover ? { delay: 450, opacity: 0 } : { opacity: 1 }}
                id="Group-8"
                transform="translate(0.000000, 28.000000)"
                fill="#FFFFFF"
              >
                <rect id="Rectangle-13" opacity="0.2" x="2" y="0" width="20" height="2" />
                <rect id="Rectangle-13" opacity="0.2" x="24" y="0" width="20" height="2" />
                <rect id="Rectangle-13" opacity="0.2" x="46" y="0" width="20" height="2" />
                <rect id="Rectangle-13" opacity="0.2" x="68" y="0" width="20" height="2" />
                <rect id="Rectangle-13" opacity="0.3" x="46" y="44" width="20" height="2" />
                <rect id="Rectangle-13" opacity="0.3" x="68" y="44" width="20" height="2" />
                <rect id="Rectangle-13" opacity="0.25" x="24" y="22" width="20" height="2" />
                <rect id="Rectangle-13" opacity="0.25" x="68" y="22" width="20" height="2" />
                <rect id="Rectangle-13" opacity="0.35" x="2" y="66" width="20" height="2" />
                <rect id="Rectangle-13" opacity="0.3" x="2" y="44" width="20" height="2" />
                <rect id="Rectangle-13" opacity="0.35" x="24" y="66" width="20" height="2" />
                <rect id="Rectangle-13" opacity="0.35" x="46" y="66" width="20" height="2" />
                <rect id="Rectangle-13" opacity="0.35" x="68" y="66" width="20" height="2" />
                <rect id="Rectangle-13" opacity="0.35" x="88" y="46" width="2" height="20" />
                <rect id="Rectangle-13" opacity="0.3" x="88" y="24" width="2" height="20" />
                <rect id="Rectangle-13" opacity="0.25" x="88" y="2" width="2" height="20" />
                <rect id="Rectangle-13" opacity="0.3" x="44" y="24" width="2" height="20" />
                <rect id="Rectangle-13" opacity="0.25" x="44" y="2" width="2" height="20" />
                <rect id="Rectangle-13" opacity="0.25" x="66" y="2" width="2" height="20" />
                <rect id="Rectangle-13" opacity="0.35" x="0" y="46" width="2" height="20" />
                <rect id="Rectangle-13" opacity="0.3" x="0" y="24" width="2" height="20" />
                <rect id="Rectangle-13" opacity="0.25" x="0" y="2" width="2" height="20" />
                <rect id="Rectangle-13" opacity="0.35" x="22" y="46" width="2" height="20" />
                <rect id="Rectangle-13" opacity="0.3" x="22" y="24" width="2" height="20" />
                <rect id="Rectangle-13" opacity="0.25" x="22" y="2" width="2" height="20" />
              </TweenOne>
            </TweenOne>
            <g id="Group-11" transform="translate(30.000000, 0.000000)" fill="#FFFFFF" opacity="0.13">
              <TweenOne
                component="rect"
                attr="attr"
                animation={hover ? { height: 56 } : { height: 28 }}
                id="Rectangle-22"
                x="29"
                y="0"
                width="1"
                height="28"
              />
              <TweenOne
                component="rect"
                attr="attr"
                animation={hover ? { height: 56 } : { height: 28 }}
                id="Rectangle-22"
                x="0"
                y="0"
                width="1"
                height="28"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  }
}
