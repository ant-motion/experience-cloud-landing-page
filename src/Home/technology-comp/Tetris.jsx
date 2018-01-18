import React from 'react';
import TweenOne from 'rc-tween-one';

const fall = [
  { y: 20, opacity: 1, duration: 0 },
  { delay: 200, y: 40, duration: 0 },
  { delay: 200, y: 63, duration: 0 },
  { delay: 600, y: 86, duration: 1 },
];
const removeAnim = [
  { delay: 600, opacity: 0, duration: 0 },
  { delay: 100, opacity: 1, duration: 0 },
  { delay: 100, opacity: 0, duration: 0 },
  { delay: 100, opacity: 1, duration: 0 },
  { delay: 100, opacity: 0, duration: 0 },
];
export default class Tetris extends React.PureComponent {
  componentDidMount() {
    this.oneEnter = true;
  }
  oneEnter = false;

  render() {
    const { hover } = this.props;
    const fallRe = this.oneEnter ? [{ opacity: 0 }, { y: 0, duration: 0 }, { opacity: 1 }] : {};
    return (
      <svg width="328px" height="147px" viewBox="0 0 328 147">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <TweenOne component="g" animation={hover ? fall : fallRe}>
            <g id="Group" transform="translate(132.000000, 0.000000)">
              <g id="Group-84">
                <rect id="Rectangle-6" fillOpacity="0.55" fill="#40A9FF" x="22" y="0" width="20" height="20" />
                <rect id="Rectangle-8" fill="#A23AFF" x="22" y="20" width="20" height="1.5" />
                <rect id="Rectangle-8" fill="#FADB14" x="44" y="20" width="20" height="1.5" />
                <rect id="Rectangle-8" fill="#26ADFF" x="0" y="20" width="20" height="1.5" />
                <rect id="Rectangle-6" fillOpacity="0.55" fill="#40A9FF" x="44" y="0" width="20" height="20" />
                <rect id="Rectangle-6" fillOpacity="0.55" fill="#40A9FF" x="0" y="0" width="20" height="20" />
              </g>
              <TweenOne component="g" animation={hover ? removeAnim : { opacity: 1 }} >
                <g id="Group-83" transform="translate(22.000000, 23.000000)">
                  <rect id="Rectangle-6" fillOpacity="0.6" fill="#40A9FF" x="0" y="0.5" width="20" height="20" />
                  <rect id="Rectangle-8" fill="#EB2F96" x="0" y="20.5" width="20" height="1.5" />
                </g>
              </TweenOne>
            </g>
          </TweenOne>
          <TweenOne component="g" animation={hover ? { y: 24, duration: 1, delay: 1000 } : { y: 0, duration: 0 }}>
            <g id="Group-82" transform="translate(110.000000, 61.000000)">
              <rect id="Rectangle-6" fill="#1890FF" opacity="0.4" x="0" y="2.5" width="20" height="20" />
              <rect id="Rectangle-8" fill="#A7E213" opacity="0.9" x="0" y="0.5" width="20" height="1.5" />
            </g>
            <g id="Group-81" transform="translate(198.000000, 61.000000)">
              <rect id="Rectangle-6" fill="#1890FF" opacity="0.4" x="0" y="2.5" width="20" height="20" />
              <rect id="Rectangle-8" fill="#13C2C2" opacity="0.9" x="0" y="0.5" width="20" height="1.5" />
            </g>
          </TweenOne>
          <g id="Group-85" transform="translate(0.000000, 109.000000)">
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.2" x="110" y="1" width="20" height="20" />
            <rect id="Rectangle-8" fill="#FA8C16" opacity="0.2" x="110" y="0" width="20" height="1.5" />
            <rect id="Rectangle-8" fill="#FADB14" opacity="0.35" x="132" y="0" width="20" height="1.5" />
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.2" x="132" y="1" width="20" height="20" />
            <rect id="Rectangle-8" fill="#EB2F96" opacity="0.8" x="154" y="0" width="20" height="1.5" />
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.3" x="154" y="1" width="20" height="20" />
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.15" x="88" y="1" width="20" height="20" />
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.1" x="44" y="1" width="20" height="20" />
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.15" x="66" y="1" width="20" height="20" />
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.1" x="22" y="1" width="20" height="20" />
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.2" x="198" y="1" width="20" height="20" />
            <rect id="Rectangle-8" fill="#FA8C16" opacity="0.2" x="198" y="0" width="20" height="1.5" />
            <rect id="Rectangle-8" fill="#13C2C2" opacity="0.35" x="176" y="0" width="20" height="1.5" />
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.15" x="220" y="1" width="20" height="20" />
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.2" x="176" y="1" width="20" height="20" />
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.1" x="264" y="1" width="20" height="20" />
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.1" x="286" y="1" width="20" height="20" />
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.15" x="242" y="1" width="20" height="20" />
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.08" x="110" y="23" width="20" height="20" />
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.1" x="132" y="23" width="20" height="20" />
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.08" x="88" y="23" width="20" height="20" />
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.05" x="44" y="23" width="20" height="20" />
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.08" x="66" y="23" width="20" height="20" />
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.05" x="22" y="23" width="20" height="20" />
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.05" x="0" y="23" width="20" height="20" />
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.08" x="198" y="23" width="20" height="20" />
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.1" x="176" y="23" width="20" height="20" />
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.05" x="264" y="23" width="20" height="20" />
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.05" x="286" y="23" width="20" height="20" />
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.05" x="308" y="23" width="20" height="20" />
            <rect id="Rectangle-6" fill="#1890FF" opacity="0.08" x="242" y="23" width="20" height="20" />
          </g>
          <TweenOne component="g" animation={hover ? removeAnim : { opacity: 1 }} >
            <g id="Group-80" transform="translate(0.000000, 86.000000)">
              <g id="Group-72" transform="translate(110.000000, 0.000000)">
                <rect id="Rectangle-6" fill="#1890FF" opacity="0.35" x="0" y="1" width="20" height="20" />
                <rect id="Rectangle-8" fill="#FA8C16" opacity="0.45" x="0" y="0" width="20" height="1.5" />
              </g>
              <g id="Group-63" transform="translate(132.000000, 0.000000)">
                <rect id="Rectangle-8" fill="#26ADFF" opacity="0.9" x="0" y="0" width="20" height="1.5" />
                <rect id="Rectangle-6" fill="#1890FF" opacity="0.35" x="0" y="1" width="20" height="20" />
              </g>
              <g id="Group-73" transform="translate(88.000000, 0.000000)">
                <rect id="Rectangle-8" fill="#13C2C2" opacity="0.45" x="0" y="0" width="20" height="1.5" />
                <rect id="Rectangle-6" fill="#1890FF" opacity="0.3" x="0" y="1" width="20" height="20" />
              </g>
              <rect id="Rectangle-6" fill="#1890FF" opacity="0.25" x="44" y="1" width="20" height="20" />
              <rect id="Rectangle-6" fill="#1890FF" opacity="0.3" x="66" y="1" width="20" height="20" />
              <g id="Group-75" transform="translate(198.000000, 0.000000)">
                <rect id="Rectangle-6" fill="#1890FF" opacity="0.35" x="0" y="1" width="20" height="20" />
                <rect id="Rectangle-8" fill="#FA8C16" opacity="0.45" x="0" y="0" width="20" height="1.5" />
              </g>
              <g id="Group-76" transform="translate(220.000000, 0.000000)">
                <rect id="Rectangle-8" fill="#FADB14" opacity="0.45" x="0" y="0" width="20" height="1.5" />
                <rect id="Rectangle-6" fill="#1890FF" opacity="0.3" x="0" y="1" width="20" height="20" />
              </g>
              <g id="Group-74" transform="translate(176.000000, 0.000000)">
                <rect id="Rectangle-8" fill="#FADB14" opacity="0.9" x="0" y="0" width="20" height="1.5" />
                <rect id="Rectangle-6" fill="#1890FF" opacity="0.35" x="0" y="1" width="20" height="20" />
              </g>
              <rect id="Rectangle-6" fill="#1890FF" opacity="0.3" x="242" y="1" width="20" height="20" />
              <rect id="Rectangle-6" fill="#1890FF" opacity="0.1" x="264" y="2" width="20" height="20" />
              <rect id="Rectangle-6" fill="#1890FF" opacity="0.1" x="286" y="2" width="20" height="20" />
              <rect id="Rectangle-6" fill="#1890FF" opacity="0.05" x="308" y="2" width="20" height="20" />
              <rect id="Rectangle-6" fill="#1890FF" opacity="0.1" x="22" y="2" width="20" height="20" />
              <rect id="Rectangle-6" fill="#1890FF" opacity="0.05" x="0" y="2" width="20" height="20" />
            </g>
          </TweenOne>
        </g>
      </svg>
    );
  }
}
