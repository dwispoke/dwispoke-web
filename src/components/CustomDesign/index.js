// https://stackoverflow.com/questions/58045542/changing-background-image-in-reactjs


import React from 'react';
import style from './index.module.scss';
import { useState } from 'react';



const CustomDesign = () => {

    const [curButton,setCurButton]=useState(0);
    const [numOfColor,setNumOfColor]=useState(0);

    const onChangeColor=()=>{
        if(curButton==0){
    
        }
    }
  return (
    <div className={style.container}>
        <div className={style.inner}>
        <div className={style.imgWrapper}>
            <img src={"https://images.samsung.com/kdp/goods/2022/03/04/9f4fe537-b4b7-428d-b768-cb2efd74e58a.png?$PD_GALLERY_L_PNG$"}></img>
            <div className={style.firstPart} onClick={()=>setCurButton(1)}>
                <div>1</div>
            </div>
            <div className={style.secondPart} onClick={()=>setCurButton(2)}>
                <div>2</div>
            </div>
            <div className={style.thirdPart} onClick={()=>setCurButton(3)}>
                <div>3</div>
            </div>
            <div className={style.fourthPart} onClick={()=>setCurButton(4)}>
                <div>4</div>
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
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_glamvanilla.png"}></img>
                                <span>글램 바닐라</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_glampeach.png"}></img>
                                <span>글램 피치</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={"https://images.samsung.com/kdp/bespoke/images/v4/color/color_glamwhite.png"}></img>
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