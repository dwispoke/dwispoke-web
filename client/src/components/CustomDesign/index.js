import React from 'react';
import style from './index.module.scss';
import { useState } from 'react';
import monitor from '../../monitor.png';
import lightBrownShelf from '../../lightBrownShelf.png';
import redBrown from '../../redbrown.png';
import whiteshelf from '../../whiteshelf.png'
import darkbrown from '../../darkbrown.png'

const bgImage=[
    "",
    "https://images.samsung.com/kdp/bespoke/images/v3/door/ra-f18duu18_left.png?$ORIGIN_PNG$",//글램바닐라
    "https://images.samsung.com/kdp/bespoke/images/v3/door/ra-f18duu17_left.png?$ORIGIN_PNG$",//글램피치
    "https://images.samsung.com/kdp/bespoke/images/v3/door/ra-f18duu35_left.png?$ORIGIN_PNG$",//글램 화이트,
    "https://images.samsung.com/kdp/bespoke/images/v3/door/ra-f18duu32_left.png?$ORIGIN_PNG$",//글램 핑크,
    "https://images.samsung.com/kdp/bespoke/images/v3/door/ra-f18duu41_left.png?$ORIGIN_PNG$",//글램 네이비,
    "https://images.samsung.com/kdp/bespoke/images/v3/door/ra-f18duu93_left.png?$ORIGIN_PNG$",//새틴토프,
    "https://images.samsung.com/kdp/bespoke/images/v3/door/ra-f18duu39_left.png?$ORIGIN_PNG$",//새틴베이지,
    "https://images.samsung.com/kdp/bespoke/images/v3/door/ra-f18duu31_left.png?$ORIGIN_PNG$",//새틴그레이,
    "https://images.samsung.com/kdp/bespoke/images/v3/door/ra-f18duuw6_left.png?$ORIGIN_PNG$",//새틴 화이트,
    "https://images.samsung.com/kdp/bespoke/images/v3/door/ra-f18duu01_left.png?$ORIGIN_PNG$",//코타 화이트,
    "https://images.samsung.com/kdp/bespoke/images/v3/door/ra-f18duu05_left.png?$ORIGIN_PNG$",//코타 차콜,
    "https://images.samsung.com/kdp/bespoke/images/v3/door/ra-f18duu3b_left.png?$ORIGIN_PNG$",//코타 모닝블루,
    "https://images.samsung.com/kdp/bespoke/images/v3/door/ra-f18duu3c_left.png?$ORIGIN_PNG$",//코타 이브닝 코랄,
    "https://images.samsung.com/kdp/bespoke/images/v3/door/ra-f18duut1_left.png?$ORIGIN_PNG$",//브라우니 실버,
    "https://images.samsung.com/kdp/bespoke/images/v3/door/ra-f18duu3d_left.png?$ORIGIN_PNG$",//쉬머 바이올렛,
    "https://images.samsung.com/kdp/bespoke/images/v3/door/ra-f18duu3g_left.png?$ORIGIN_PNG$",//쉬머 차콜
    lightBrownShelf,
    darkbrown,
    whiteshelf,
    redBrown
]

const frame=["none","#C6AC89","#96634A","#fff"];

const CustomDesign = () => {

    const [curButton,setCurButton]=useState(0);
    const [frameColor,setFrameColor]=useState(0);
    const [imgUrl,setImageUrl]=useState([0,0,0,0,0]);

    const changeBackgroundStyle=(colorNum)=>{
        setImageUrl(imgUrl.map((val,idx)=>{
            return idx===curButton?colorNum:val;
        }))
    }

    const changeFrameStyle=(frameNum)=>{
        return frame[frameNum];
    }

    const hideStyle={
        display:'none'
    }

  
  return (
    <div className={style.container}>
        <div className={style.inner}>
        <div className={style.imgWrapper}>
            <img src={monitor}></img>
            <div className={style.firstPart} onClick={()=>setCurButton(1)} style={{backgroundImage:`url(${bgImage[imgUrl[1]]})`,borderTop:`8px solid ${frame[frameColor]}`,borderLeft:`8px solid ${frame[frameColor]}`}}>
                <div style={imgUrl[1]!==0?hideStyle:null}>1</div>
            </div>
            <div className={style.secondPart} onClick={()=>setCurButton(2)} style={{backgroundImage:`url(${bgImage[imgUrl[2]]})`, borderTop:`8px solid ${frame[frameColor]}`,borderRight:`8px solid ${frame[frameColor]}`}}>
                <div style={imgUrl[2]!==0?hideStyle:null}>2</div>
            </div>
            <div className={style.thirdPart} onClick={()=>setCurButton(3)} style={{backgroundImage:`url(${bgImage[imgUrl[3]]})`,borderBottom:`8px solid ${frame[frameColor]}`,borderLeft:`8px solid ${frame[frameColor]}`}}>
                <div style={imgUrl[3]!==0?hideStyle:null}>3</div>
            </div>
            <div className={style.fourthPart} onClick={()=>setCurButton(4)} style={{backgroundImage:`url(${bgImage[imgUrl[4]]})`,borderBottom:`8px solid ${frame[frameColor]}`,borderRight:`8px solid ${frame[frameColor]}`}}>
                <div style={imgUrl[4]!==0?hideStyle:null}>4</div>
            </div>
          
        </div>
        <div className={style.colorWrapper}>
        <div className={style.colorTitle}>내 스마트 모니터와 어울리는 컬러와 소재 입히기</div>
            <div className={style.colorPalette}>
                <div className={style.colorlist}>
                    <span>글램 글래스</span>
                    <ul className={style.myEditionColorList}>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_glamvanilla.png"} onClick={()=>changeBackgroundStyle(1)}></img>
                                <span>글램 바닐라</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_glampeach.png"} onClick={()=>changeBackgroundStyle(2)}></img>
                                <span>글램 피치</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_glamwhite.png"} onClick={()=>changeBackgroundStyle(3)}></img>
                                <span>글램 화이트</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_glampink.png"} onClick={()=>changeBackgroundStyle(4)}></img>
                                <span>글램 핑크</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_glamnavy.png"} onClick={()=>changeBackgroundStyle(5)}></img>
                                <span>글램 네이비</span>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className={style.colorlist}>
                    <span>새틴 글래스</span>
                    <ul className={style.myEditionColorList}>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_satintaupe.png"} onClick={()=>changeBackgroundStyle(6)}></img>
                                <span>새틴 토프</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_satinbeige.png"} onClick={()=>changeBackgroundStyle(7)}></img>
                                <span>새틴 베이지</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_satingray.png"} onClick={()=>changeBackgroundStyle(8)}></img>
                                <span>새틴 그레이</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_satinwhite.png"} onClick={()=>changeBackgroundStyle(9)}></img>
                                <span>새틴 화이트</span>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className={style.colorlist}>
                    <span>코타 메탈</span>
                    <ul className={style.myEditionColorList}>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_cottawhite.png"} onClick={()=>changeBackgroundStyle(10)}></img>
                                <span>코타 화이트</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_cottacharcoal.png"} onClick={()=>changeBackgroundStyle(11)}></img>
                                <span>코타 차콜</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_cottamorningblue.png"} onClick={()=>changeBackgroundStyle(12)}></img>
                                <span>코타 모닝 블루</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_cottaeveningcoral.png"} onClick={()=>changeBackgroundStyle(13)}></img>
                                <span>코타 이브닝 코랄</span>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className={style.colorlist}>
                    <span>VCM</span>
                    <ul className={style.myEditionColorList}>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_browniesilver.png"} onClick={()=>changeBackgroundStyle(14)}></img>
                                <span>브라우니 실버</span>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className={style.colorlist}>
                    <span>쉬머 글래스</span>
                    <ul className={style.myEditionColorList}>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_shimmerviolet.png"} onClick={()=>changeBackgroundStyle(15)}></img>
                                <span>쉬머 바이올렛</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_shimmercharcoal.png"} onClick={()=>changeBackgroundStyle(16)}></img>
                                <span>쉬머 차콜</span>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className={style.colorlist}>
                    <span>선반</span>
                    <ul className={style.myEditionColorList}>
                        <li>
                            <button>
                                <img src={lightBrownShelf} onClick={()=>changeBackgroundStyle(17)} className={style.shelf}></img>
                                <span>라이트 브라운</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={darkbrown} onClick={()=>changeBackgroundStyle(18)} className={style.shelf}></img>
                                <span>다크 브라운</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={whiteshelf} onClick={()=>changeBackgroundStyle(19)} className={style.shelf}></img>
                                <span>화이트</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={redBrown} onClick={()=>changeBackgroundStyle(20)}></img>
                                <span>레드 브라운</span>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className={style.colorlist}>
                    <span>프레임 색상</span>
                    <ul className={style.myEditionColorList}>
                        <li>
                            <div>
                                <button onClick={()=>setFrameColor(1)} className={style.colorBtn} style={{background:`${frame[1]}`}}>
                                </button>
                            </div>
                        </li>
                        <li>
                            <div>
                            <button onClick={()=>setFrameColor(2)} className={style.colorBtn} style={{background:`${frame[2]}`}}>
                            </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export {CustomDesign};