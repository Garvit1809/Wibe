import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #5d3800;

    .face{
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: #ffcd00;
    display: flex;
    justify-content: center;
    align-items: center;
}

.face:before{
    content: '';
    position: absolute;
    top: 180px;
    width: 150px;
    height: 70px;
    background-color: #b57700;
    border-bottom-right-radius: 70px;
    border-bottom-left-radius: 70px;
    transition: 0.5s;
}

.face:hover::before{
    top: 210px;
    width: 150px;
    height: 20px;
    background-color: #b57700;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
}

.eyes{
    position: relative;
    top: -40px;
    display: flex;
}

.eyes .eye{
    position: relative;
    width: 80px;
    height: 80px;
    display: block;
    background-color: #fff;
    margin: 0 15px;
    border-radius: 50%;
}

.eyes .eye::before{
    content: '';
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translate(-50%,-50%);
    width: 40px;
    height: 40px;
    background-color: #333;
    border-radius: 50%;
}
`

const EyeTracker = () => {
    const ref = useRef(null)
    let rot;
    
    useEffect(() => {
        const section = ref.current;
        function eyeball(){
            var eye = document.querySelectorAll('.eye');
            eye.forEach(function(eye){
                let x =(eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
                let y =(eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
                // eslint-disable-next-line no-restricted-globals
                let radian = Math.atan2(event.pageX - x, event.pageY - y);
                // eslint-disable-next-line react-hooks/exhaustive-deps
                rot = (radian * (180/Math.PI) * -1) + 270;
                eye.style.transform = "rotate(" + rot + "deg)" ;
            })
        }
        
      console.log('wx');
      section.addEventListener('mousemove', eyeball)
      console.log(ref.current);
    }, [rot])
    
    
  return (
    <Section ref={ref} data-scroll >
      <div class="face">
        <div class="eyes">
          <div class="eye"></div>
          <div class="eye"></div>
        </div>
      </div>
    </Section>
  );
};

export default EyeTracker;
