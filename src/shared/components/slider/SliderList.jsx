import React from 'react'

export const SliderList = ({ img, info }) => {

    return (
        <li
        data-index="rs-903"
        data-transition="fade"
        data-slotamount="default"
        data-hideafterloop={0}
        data-hideslideonmobile="off"
        data-easein="default"
        data-easeout="default"
        data-masterspeed="default"
        data-thumb={img}
        data-rotate={0}
        data-fstransition="fade"
        data-fsmasterspeed={300}
        data-fsslotamount={7}
        data-saveperformance="off"
        data-title
        data-param1
        data-param2
        data-param3
        data-param4
        data-param5
        data-param6
        data-param7
        data-param8
        data-param9
        data-param10
        data-description
    >


        {/* MAIN IMAGE */}
        <img
            src={img}
            alt=""
            className="rev-slidebg"
            data-bgfit="cover"
            data-bgparallax={10}
            data-bgposition="center center"
            data-bgrepeat="no-repeat"
            data-no-retina
        />
        {/* LAYERS */}
        {/* LAYER NR. 1 [ for overlay ] */}
        <div
            className="tp-caption tp-shape tp-shapewrapper "
            id="slide-903-layer-0"
            data-x="['center','center','center','center']"
            data-hoffset="['0','0','0','0']"
            data-y="['middle','middle','middle','middle']"
            data-voffset="['0','0','0','0']"
            data-width="full"
            data-height="full"
            data-whitespace="nowrap"
            data-type="shape"
            data-basealign="slide"
            data-responsive_offset="off"
            data-responsive="off"
            data-frames="[
                {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
            ]"
            data-textalign="['left','left','left','left']"
            data-paddingtop="[0,0,0,0]"
            data-paddingright="[0,0,0,0]"
            data-paddingbottom="[0,0,0,0]"
            data-paddingleft="[0,0,0,0]"
            style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0.0)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 }}
        >
        </div>
        {/* LAYER NR. 4 [ for title ] */}
        <div
            className="tp-caption   tp-resizeme"
            id="slide-903-layer-2"
            data-x="['left','left','left','left']"
            data-hoffset="['50','130','130','130']"
            data-y="['middle','middle','middle','middle']"
            data-voffset="['-120','-120','-120','-120']"
            data-lineheight="['82','82','72','62']"
            data-width="['700','700','700','500']"
            data-height="['none','none','none','none']"
            data-whitespace="['normal','normal','normal','normal']"
            data-type="text"
            data-responsive_offset="on"
            data-frames="[
                {&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 700, color: '#fff', borderWidth: 0, fontFamily: '"Poppins", sans-serif', textTransform: 'uppercase', fontSize: '50px' }}
        >
            <div>{info}</div>
        </div>
    </li>
    )
}
