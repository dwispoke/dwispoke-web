// https://stackoverflow.com/questions/58045542/changing-background-image-in-reactjs


import React from 'react';
import style from './index.module.scss';
import { useState } from 'react';

const bgImage=[
    "https://images.samsung.com/kdp/bespoke/images/v3/door/ra-f18duu18_left.png?$ORIGIN_PNG$",//글램바닐라
    "https://images.samsung.com/kdp/bespoke/images/v3/door/ra-f18duu17_left.png?$ORIGIN_PNG$",//글램피치
    "https://images.samsung.com/kdp/bespoke/images/v3/door/ra-f18duu35_left.png?$ORIGIN_PNG$",//글램 화이트
]

const CustomDesign = () => {

    const [curButton,setCurButton]=useState(0);
    const [numOfColor,setNumOfColor]=useState(0);
    const [imgUrl,setImageUrl]=useState([0,0,0,0,0]);

    const changeBackgroundStyle=(colorNum)=>{
        setNumOfColor(colorNum);
        console.log(imgUrl);
        setImageUrl(imgUrl.map((val,idx)=>{
            console.log(idx,val,colorNum,curButton);
            return idx===curButton?colorNum:val;
        }))
        // setImageUrl({...imgUrl,[key]:colorNum});
        console.log(imgUrl);
    }

    const hideStyle={
        display:'none'
    }

  
  return (
    <div className={style.container}>
        <div>선택된 버튼:{curButton}</div>
        <div>선택된 색깔:{numOfColor}</div>
        <div>이미지 주소:{bgImage[imgUrl[1]]}</div>
        <div>{}</div>
        <div className={style.inner}>
        <div className={style.imgWrapper}>
            <img src={"https://images.samsung.com/kdp/goods/2022/03/04/9f4fe537-b4b7-428d-b768-cb2efd74e58a.png?$PD_GALLERY_L_PNG$"}></img>
            <div className={style.firstPart} onClick={()=>setCurButton(1)} style={{backgroundImage:`url(${bgImage[imgUrl[1]]})`}}>
                <div style={curButton===1?hideStyle:null}>1</div>
            </div>
            <div className={style.secondPart} onClick={()=>setCurButton(2)} style={{backgroundImage:`url(${bgImage[imgUrl[2]]})`}}>
                <div style={curButton===2?hideStyle:null}>2</div>
            </div>
            <div className={style.thirdPart} onClick={()=>setCurButton(3)} style={{backgroundImage:`url(${bgImage[imgUrl[3]]})`}}>
                <div style={curButton===3?hideStyle:null}>3</div>
            </div>
            <div className={style.fourthPart} onClick={()=>setCurButton(4)} style={{backgroundImage:`url(${bgImage[imgUrl[4]]})`}}>
                <div style={curButton===4?hideStyle:null}>4</div>
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
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_glamvanilla.png"} onClick={()=>changeBackgroundStyle(0)}></img>
                                <span>글램 바닐라</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_glampeach.png"} onClick={()=>changeBackgroundStyle(1)}></img>
                                <span>글램 피치</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_glamwhite.png"} onClick={()=>changeBackgroundStyle(2)}></img>
                                <span>글램 화이트</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_glampink.png"}></img>
                                <span>글램 핑크</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_glamnavy.png"}></img>
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
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_satintaupe.png"}></img>
                                <span>새틴 토프</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_satinbeige.png"}></img>
                                <span>새틴 베이지</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_satingray.png"}></img>
                                <span>새틴 그레이</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_satinwhite.png"}></img>
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
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_cottawhite.png"}></img>
                                <span>코타 화이트</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_cottacharcoal.png"}></img>
                                <span>코타 차콜</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_cottamorningblue.png"}></img>
                                <span>코타 모닝 블루</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_cottaeveningcoral.png"}></img>
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
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_browniesilver.png"}></img>
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
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_shimmerviolet.png"}></img>
                                <span>쉬머 바이올렛</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_shimmercharcoal.png"}></img>
                                <span>쉬머 차콜</span>
                            </button>
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