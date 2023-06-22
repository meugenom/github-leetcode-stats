//add bike
const footer = `

<svg height="100%" stroke-miterlimit="10" style="fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;" version="1.1" viewBox="0 0 1024 768" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<style>
#bike_wheel_backward {
    animation: bike_wheel_backward 1s linear infinite;
    transform-box: fill-box;
    transform-origin: 50% 50% 0px;
    
}
#bike_wheel_forward {
    animation: bike_wheel_backward 1s linear infinite;
    transform-box: fill-box;
    transform-origin: 50% 50% 0px;
    
}
@keyframes bike_wheel_backward {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
#right_thigh {
    animation: right_thigh 1s linear infinite;            
    transform-box: fill-box;
    transform-origin: 50% 50% 0px;
}
@keyframes right_thigh {
    0% {
        transform: translateY(-20px) rotate(-25deg);
    }
    50% {
        transform: translateY(10px) rotate(25deg);
    }
    100% {
        transform: translateY(-20px) rotate(-25deg);
    }
}

#right_shin {
    animation: right_shin 1s linear infinite;            
    transform-box: fill-box;
}
@keyframes right_shin {
    0% {
        transform: translate(0px, -30px) rotate(0deg);
    }
    50% {
        transform: translate(-5px, 40px) rotate(-30deg);
    }
    100% {
        transform: translate(0px, -30px) rotate(0deg);
    }
}

#right_foot {
    animation: right_foot 1s linear infinite;            
    transform-box: fill-box;
}

@keyframes right_foot {
    0% {
        transform: translate(0px, -25px) rotate(0deg);
    }
    50% {
        transform: translate(40px, 20px) rotate(10deg);
    }
    100% {
        transform: translate(0px, -25px) rotate(0deg);
    }
}

#left_thigh {
    animation: left_thigh 1s linear infinite;            
    transform-box: fill-box;
}

@keyframes left_thigh {
    0% {
        transform: translate(10px, -10px) rotate(50deg);
    }
    50% {
        transform: translate(0px, 0px) rotate(0deg);
    }
    100% {
        transform: translate(10px, -10px) rotate(50deg);
    }
}

#left_shin {
    animation: left_shin 1s linear infinite;            
    transform-box: fill-box;
}

@keyframes left_shin {
    0% {
        transform: translate(-15px, 40px) rotate(20deg);
    }
    50% {
        transform: translate(0px, -15px) rotate(0deg);
    }
    100% {
        transform: translate(-15px, 40px) rotate(20deg);
    }
}

#left_foot {
    animation: left_foot 1s linear infinite;            
    transform-box: fill-box;
}

@keyframes left_foot {
    0% {
        transform: translate(-20px, 30px) rotate(0deg);
    }
    50% {
        transform: translate(0px, -20px) rotate(30deg);
    }
    100% {
        transform: translate(-20px, 30px) rotate(0deg);
    }
}

#head {
    animation: head 1s linear infinite;            
    transform-box: fill-box;
}

@keyframes head {
    0% {
        transform: translate(0px, 0px) rotate(0deg);
    }
    50% {
        transform: translate(0px, 5px) rotate(5deg);
    }
    100% {
        transform: translate(0px, 0px) rotate(0deg);
    }
}

#frame_star {
    animation: frame_star 0.5s linear infinite;            
    transform-box: fill-box;
    transform-origin: center;
    transform-origin: 50% 50% 0px;
}

@keyframes frame_star {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform:rotate(-360deg);
    }
}

.legend {
    font-family: 'Roboto', sans-serif;
    font-size: 50px;
    font-weight: 700;
}

</style>

<g class="legend"> 
	<text x="300" y="60" fill="#3288bd" >Github Total Stats:</text>
</g>
<defs>
    <path d="M493.766 464.979C492.884 462.513 493.457 460.053 495.045 459.485L519.959 450.575C521.548 450.007 523.55 451.545 524.432 454.012L524.923 455.385C525.805 457.852 525.233 460.312 523.645 460.88L498.73 469.79C497.142 470.358 495.14 468.819 494.258 466.353L493.766 464.979Z" id="Fill"/>
    <linearGradient gradientTransform="matrix(1 0 0 1 0 0)" gradientUnits="userSpaceOnUse" id="LinearGradient" x1="381.035" x2="493.515" y1="324.01" y2="324.01">
        <stop offset="0" stop-color="#8f73cd"/>
        <stop offset="1" stop-color="#000000"/>
    </linearGradient>
    <linearGradient gradientTransform="matrix(1 0 0 1 0 0)" gradientUnits="userSpaceOnUse" id="LinearGradient_2" x1="443.811" x2="484.068" y1="356.059" y2="356.059">
    <stop offset="0" stop-color="#9176cd"/>
    <stop offset="1" stop-color="#000000"/>
    </linearGradient>
</defs>
<g id="left_leg">
    <path id="left_foot" d="M422.974 524.691C422.974 524.691 422.974 524.691 422.975 524.691C422.975 524.691 422.975 524.691 422.975 524.691C422.975 524.691 422.975 524.691 422.975 524.692C422.975 524.692 422.975 524.692 422.975 524.692C422.975 524.693 422.975 524.693 422.974 524.693C422.974 524.694 422.973 524.694 422.971 524.694C422.97 524.694 422.968 524.693 422.966 524.69C422.965 524.688 422.964 524.683 422.965 524.677C422.966 524.672 422.97 524.664 422.98 524.657C422.99 524.65 423.006 524.645 423.03 524.65C423.053 524.655 423.084 524.671 423.11 524.714C423.136 524.756 423.158 524.827 423.137 524.927C423.116 525.028 423.05 525.162 422.883 525.276C422.715 525.389 422.438 525.484 422.044 525.397C421.65 525.309 421.125 525.03 420.684 524.312C420.243 523.594 419.876 522.403 420.23 520.705C420.585 519.007 421.693 516.737 424.523 514.819C427.353 512.901 432.039 511.29 438.697 512.772C445.355 514.254 454.236 518.963 461.692 531.098" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="none"/>
    <path id="left_thigh" d="M364.425 449.232C362.293 442.084 366.36 434.561 373.508 432.429L428.081 416.152C435.229 414.02 442.753 418.087 444.885 425.235L444.978 425.55C447.11 432.698 443.044 440.221 435.896 442.353L381.322 458.63C374.174 460.762 366.651 456.695 364.519 449.547L364.425 449.232Z" fill="#5d2192" fill-rule="nonzero" opacity="1" stroke="none"/>
    <path id="left_shin" d="M433.046 428.227C440.596 428.233 446.711 434.36 446.704 441.91L446.653 498.53C446.646 506.08 440.52 512.195 432.97 512.189L432.97 512.189C425.42 512.182 419.305 506.056 419.311 498.505L419.363 441.885C419.37 434.335 425.496 428.22 433.046 428.227L433.046 428.227Z" fill="#5d2192" fill-rule="nonzero" opacity="1" stroke="none"/>
</g>
<g id="bike_wheel_backward">
    <path d="M221.921 547.359C221.921 504.283 258.521 469.363 303.67 469.363C348.818 469.363 385.419 504.283 385.419 547.359C385.419 590.435 348.818 625.355 303.67 625.355C258.521 625.355 221.921 590.435 221.921 547.359Z" fill="#efcf86" fill-opacity="0" fill-rule="nonzero" opacity="1" stroke="#adadad" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6"/>
    <path d="M314.268 546.937L375.834 547.359" fill="none" opacity="1" stroke="#3c3c3c" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M231.506 546.514L293.071 546.937" fill="none" opacity="1" stroke="#3c3c3c" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M303.67 536.996L302.695 476.691" fill="none" opacity="1" stroke="#3c3c3c" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M303.67 557.722L303.67 617.183" fill="none" opacity="1" stroke="#3c3c3c" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M311.506 536.996L357.37 500.039" fill="none" opacity="1" stroke="#3c3c3c" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M297.353 556.277L258.488 599.968" fill="none" opacity="1" stroke="#3c3c3c" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M256.132 496.683L297.353 543.125" fill="none" opacity="1" stroke="#3c3c3c" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M311.506 556.277L358.838 596.008" fill="none" opacity="1" stroke="#3c3c3c" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M314.268 543.125L375.834 524.129" fill="none" opacity="1" stroke="#3c3c3c" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M311.506 553.251L368.795 570.589" fill="none" opacity="1" stroke="#3c3c3c" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M307.716 557.722L333.87 609.945" fill="none" opacity="1" stroke="#3c3c3c" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M300.963 555.676L282.811 613.542" fill="none" opacity="1" stroke="#3c3c3c" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M307.716 535.322L331.108 482.069" fill="none" opacity="1" stroke="#3c3c3c" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M297.353 535.322L278.392 481.59" fill="none" opacity="1" stroke="#3c3c3c" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M293.071 543.125L235.695 518.517" fill="none" opacity="1" stroke="#3c3c3c" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M293.071 553.251L235.695 578.332" fill="none" opacity="1" stroke="#3c3c3c" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M293.071 546.522C293.071 540.336 297.816 535.322 303.67 535.322C309.523 535.322 314.268 540.336 314.268 546.522C314.268 552.707 309.523 557.722 303.67 557.722C297.816 557.722 293.071 552.707 293.071 546.522Z" fill="#ffffff" fill-rule="nonzero" opacity="1" stroke="#3c3c3c" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6"/>
    <path d="M229.556 546.937C229.556 508.141 262.301 476.691 302.695 476.691C343.088 476.691 375.834 508.141 375.834 546.937C375.834 585.732 343.088 617.183 302.695 617.183C262.301 617.183 229.556 585.732 229.556 546.937Z" fill="#efcf86" fill-opacity="0" fill-rule="nonzero" opacity="1" stroke="#f5891d" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6"/>
</g>
<g id="bike_wheel_forward">
    <path d="M462.605 548.203C462.605 505.128 499.205 470.208 544.353 470.208C589.502 470.208 626.102 505.128 626.102 548.203C626.102 591.279 589.502 626.199 544.353 626.199C499.205 626.199 462.605 591.279 462.605 548.203Z" fill="#efcf86" fill-opacity="0" fill-rule="nonzero" opacity="1" stroke="#adadad" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6"/>
    <path d="M554.952 547.781L616.518 548.203" fill="none" opacity="1" stroke="#5e5e5e" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M472.189 547.359L533.755 547.781" fill="none" opacity="1" stroke="#5e5e5e" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M544.353 537.84L543.379 477.535" fill="none" opacity="1" stroke="#5e5e5e" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M544.353 558.566L544.353 618.027" fill="none" opacity="1" stroke="#5e5e5e" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M552.19 537.84L598.054 500.883" fill="none" opacity="1" stroke="#5e5e5e" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M538.037 557.122L499.172 600.813" fill="none" opacity="1" stroke="#5e5e5e" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M496.815 497.528L538.037 543.97" fill="none" opacity="1" stroke="#5e5e5e" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M552.19 557.122L599.522 596.853" fill="none" opacity="1" stroke="#5e5e5e" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M554.952 543.97L616.518 524.973" fill="none" opacity="1" stroke="#5e5e5e" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M552.19 554.096L609.479 571.433" fill="none" opacity="1" stroke="#5e5e5e" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M548.399 558.566L574.554 610.789" fill="none" opacity="1" stroke="#5e5e5e" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M541.647 556.521L523.494 614.386" fill="none" opacity="1" stroke="#5e5e5e" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M548.399 536.166L571.792 482.914" fill="none" opacity="1" stroke="#5e5e5e" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M538.037 536.166L519.076 482.434" fill="none" opacity="1" stroke="#5e5e5e" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M533.755 543.97L476.379 519.362" fill="none" opacity="1" stroke="#5e5e5e" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M533.755 554.096L476.379 579.176" fill="none" opacity="1" stroke="#5e5e5e" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M533.755 547.366C533.755 541.181 538.5 536.166 544.353 536.166C550.207 536.166 554.952 541.181 554.952 547.366C554.952 553.552 550.207 558.566 544.353 558.566C538.5 558.566 533.755 553.552 533.755 547.366Z" fill="#ffffff" fill-rule="nonzero" opacity="1" stroke="#5e5e5e" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6"/>
    <path d="M470.239 547.781C470.239 508.985 502.985 477.535 543.379 477.535C583.772 477.535 616.518 508.985 616.518 547.781C616.518 586.577 583.772 618.027 543.379 618.027C502.985 618.027 470.239 586.577 470.239 547.781Z" fill="#efcf86" fill-opacity="0" fill-rule="nonzero" opacity="1" stroke="#fd8d33" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6"/>
</g>
<g id="hand">
    <path d="M404.861 372.13C406.74 367.272 412.154 364.838 416.952 366.694L490.296 395.064C495.094 396.92 497.461 402.364 495.582 407.222L491.914 416.703C490.035 421.561 484.621 423.995 479.823 422.139L406.479 393.769C401.681 391.913 399.314 386.47 401.193 381.611L404.861 372.13Z" fill="#5d2192" fill-rule="nonzero" opacity="1" stroke="none"/>
    <path d="M496.284 425.167C496.284 425.167 496.284 425.167 496.284 425.167C496.284 425.167 496.284 425.167 496.284 425.167C496.284 425.166 496.284 425.166 496.284 425.166C496.284 425.167 496.285 425.167 496.285 425.167C496.285 425.167 496.285 425.168 496.285 425.169C496.285 425.169 496.285 425.17 496.284 425.171C496.283 425.172 496.281 425.172 496.278 425.172C496.276 425.171 496.271 425.168 496.267 425.163C496.263 425.157 496.258 425.148 496.258 425.136C496.258 425.123 496.262 425.107 496.279 425.094C496.296 425.082 496.326 425.072 496.375 425.086C496.424 425.101 496.494 425.14 496.565 425.234C496.637 425.328 496.713 425.48 496.717 425.69C496.721 425.9 496.651 426.175 496.368 426.391C496.085 426.607 495.574 426.769 494.746 426.526C493.918 426.282 492.739 425.615 491.527 424.029C490.316 422.443 489.036 419.866 488.966 416.319C488.897 412.771 490.073 408.123 494.856 404.471C499.639 400.819 508.274 398.087 522.273 402.199" fill="#efcf86" fill-rule="nonzero" opacity="1" stroke="none"/>
</g>
<g id="bike_frame">
    <path d="M313.172 542.759L400.342 540.642" fill="none" opacity="1" stroke="#ef9f46" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="10"/>
    <path d="M370.461 470.208L512 460.499" fill="none" opacity="1" stroke="#ef9f46" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="10"/>
    <path d="M497.35 465.353L436.836 535.465" fill="none" opacity="1" stroke="#ef9f46" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="10"/>
    <path d="M400.342 542.759C400.342 531.404 409.684 522.199 421.209 522.199C432.734 522.199 442.077 531.404 442.077 542.759C442.077 554.114 432.734 563.318 421.209 563.318C409.684 563.318 400.342 554.114 400.342 542.759Z" fill="#efcf86" fill-opacity="0" fill-rule="nonzero" opacity="1" stroke="#ef9f46" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="3"/>
    <path d="M509.816 448.199C509.816 448.199 509.816 448.199 509.816 448.199C509.816 448.198 509.816 448.198 509.816 448.198C509.816 448.198 509.816 448.198 509.817 448.198C509.817 448.198 509.817 448.199 509.818 448.199C509.818 448.2 509.819 448.201 509.818 448.203C509.818 448.204 509.818 448.206 509.816 448.207C509.814 448.209 509.81 448.209 509.805 448.207C509.8 448.205 509.792 448.2 509.786 448.189C509.779 448.177 509.773 448.159 509.775 448.135C509.778 448.11 509.789 448.079 509.824 448.056C509.858 448.033 509.917 448.019 510.005 448.054C510.093 448.089 510.214 448.175 510.326 448.369C510.439 448.563 510.545 448.872 510.503 449.283C510.462 449.695 510.268 450.224 509.688 450.609C509.109 450.994 508.116 451.24 506.624 450.65C505.132 450.061 503.084 448.593 501.188 445.32C499.293 442.048 497.502 436.824 498.2 429.865C498.899 422.907 502.183 413.962 511.978 407.462C521.774 400.962 538.556 396.792 563.77 406.76" fill="#e54a4a" fill-opacity="0" fill-rule="nonzero" opacity="1" stroke="#ef9f46" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.95079"/>
    <path d="M504.442 445.021L539.507 539.047" fill="none" opacity="1" stroke="#ef9f46" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="10"/>
    <g opacity="1">
        <use fill="#ffffff" fill-rule="nonzero" stroke="none" xlink:href="#Fill"/>
        <mask height="19.4514" id="StrokeMask" maskUnits="userSpaceOnUse" width="31.9858" x="493.352" y="450.457">
            <rect fill="#000000" height="19.4514" stroke="none" width="31.9858" x="493.352" y="450.457"/>
            <use fill="#ffffff" fill-rule="evenodd" stroke="none" xlink:href="#Fill"/>
        </mask>
        <use fill="none" mask="url(#StrokeMask)" stroke="#ef9f46" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="10" xlink:href="#Fill"/>
    </g>
    <path d="M309.382 540.642L373.505 470.208" fill="none" opacity="1" stroke="#ef9f46" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="10"/>
    <path id="frame_star" d="M420.088 551.926L418.871 547.344L418.871 547.344L415.37 550.541L415.37 550.541L416.823 546.028L416.823 546.028L412.149 546.824L412.149 546.824L415.812 543.814L415.812 543.814L411.449 541.957L411.449 541.957L416.158 541.404L416.158 541.404L413.492 537.484L413.492 537.484L417.752 539.565L417.752 539.565L417.629 534.825L417.629 534.825L420.088 538.879L420.088 538.879L422.547 534.825L422.547 534.825L422.423 539.565L422.423 539.565L426.684 537.484L426.684 537.484L424.017 541.404L424.017 541.404L428.726 541.957L428.726 541.957L424.364 543.814L424.364 543.814L428.026 546.824L428.026 546.824L423.353 546.028L423.353 546.028L424.806 550.541L424.806 550.541L421.305 547.344L421.305 547.344L420.088 551.926Z" fill="#efcf86" fill-opacity="0" fill-rule="nonzero" opacity="1" stroke="#8b8b8b" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6"/>
    <path d="M404.589 461.117C404.589 461.117 404.588 461.117 404.588 461.117C404.588 461.117 404.588 461.117 404.588 461.117C404.588 461.117 404.588 461.117 404.588 461.117C404.588 461.117 404.588 461.116 404.588 461.116C404.589 461.116 404.59 461.115 404.591 461.115C404.593 461.115 404.595 461.114 404.597 461.115C404.599 461.116 404.602 461.117 404.603 461.121C404.603 461.124 404.602 461.129 404.594 461.135C404.586 461.141 404.571 461.149 404.546 461.153C404.521 461.158 404.484 461.159 404.444 461.147C404.404 461.135 404.36 461.108 404.349 461.054C404.338 461 404.361 460.917 404.494 460.813C404.627 460.709 404.876 460.58 405.303 460.503C405.729 460.426 406.349 460.399 407.026 460.606C407.702 460.813 408.455 461.266 408.641 462.177C408.828 463.088 408.436 464.496 406.191 466.256C403.945 468.017 399.726 470.191 392.52 471.495C385.314 472.799 374.826 473.245 363.396 469.747C351.966 466.249 339.237 458.59 336.086 443.198" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="none"/>
</g>
<g id="body">
    <path d="M418.673 394.313C418.673 394.313 418.673 394.313 418.673 394.313C418.673 394.313 418.673 394.313 418.672 394.313C418.672 394.313 418.672 394.313 418.672 394.313C418.671 394.313 418.671 394.313 418.671 394.313C418.671 394.312 418.671 394.311 418.671 394.31C418.672 394.31 418.673 394.308 418.675 394.307C418.678 394.306 418.682 394.305 418.687 394.306C418.691 394.307 418.697 394.31 418.701 394.317C418.705 394.324 418.706 394.336 418.697 394.352C418.687 394.368 418.666 394.39 418.624 394.408C418.582 394.426 418.517 394.441 418.435 394.425C418.354 394.409 418.252 394.362 418.191 394.243C418.129 394.124 418.106 393.928 418.266 393.651C418.425 393.375 418.777 393.008 419.488 392.704C420.199 392.401 421.3 392.154 422.683 392.42C424.065 392.686 425.777 393.487 426.82 395.497C427.862 397.508 428.245 400.82 425.549 405.492C422.853 410.164 416.91 416.369 404.895 421.5C392.88 426.631 374.267 430.803 350.897 426.31" fill="#5d2192" fill-rule="nonzero" opacity="1" stroke="none"/>
    <path d="M367.028 453.364C367.028 453.364 367.028 453.364 367.028 453.364C367.028 453.364 367.028 453.363 367.028 453.363C367.028 453.363 367.029 453.363 367.029 453.363C367.03 453.363 367.031 453.363 367.032 453.364C367.033 453.365 367.034 453.367 367.034 453.369C367.034 453.372 367.033 453.376 367.029 453.38C367.025 453.384 367.018 453.388 367.006 453.388C366.995 453.388 366.979 453.383 366.963 453.367C366.946 453.35 366.93 453.321 366.93 453.274C366.931 453.227 366.949 453.161 367.017 453.094C367.085 453.027 367.206 452.959 367.399 452.961C367.592 452.963 367.864 453.038 368.138 453.317C368.412 453.597 368.695 454.095 368.686 454.889C368.678 455.682 368.369 456.802 367.22 457.927C366.07 459.053 364.022 460.216 360.76 460.182C357.499 460.147 352.894 458.878 348.267 454.152C343.64 449.426 338.858 441.005 339 427.596C339.142 414.187 344.359 395.256 363.788 376.234C383.217 357.212 417.838 337.55 472.967 338.134" fill="#5d2192" fill-rule="nonzero" opacity="1" stroke="none"/>
</g>
<g id="right_leg">
    <path id="right_thigh" d="M350.647 439.332C354.397 432.779 362.749 430.507 369.303 434.257L418.446 462.377C424.999 466.127 427.272 474.479 423.522 481.032L423.522 481.032C419.772 487.585 411.42 489.858 404.867 486.108L355.723 457.988C349.17 454.238 346.898 445.886 350.647 439.332L350.647 439.332Z" fill="#5d2192" fill-rule="nonzero" opacity="1" stroke="none"/>
    <path id="right_foot" d="M367.617 552.635C367.617 552.635 367.617 552.635 367.617 552.635C367.617 552.635 367.617 552.635 367.617 552.635C367.617 552.635 367.617 552.635 367.617 552.635C367.617 552.635 367.617 552.635 367.617 552.636C367.617 552.636 367.617 552.636 367.616 552.637C367.616 552.637 367.615 552.637 367.613 552.637C367.612 552.637 367.61 552.636 367.609 552.633C367.607 552.63 367.606 552.626 367.608 552.62C367.609 552.614 367.613 552.607 367.624 552.6C367.634 552.594 367.65 552.589 367.674 552.596C367.697 552.602 367.727 552.62 367.751 552.664C367.775 552.707 367.793 552.779 367.767 552.878C367.742 552.977 367.67 553.108 367.497 553.214C367.324 553.319 367.043 553.401 366.654 553.294C366.264 553.188 365.753 552.884 365.347 552.146C364.941 551.408 364.631 550.201 365.067 548.521C365.503 546.842 366.718 544.628 369.637 542.848C372.557 541.068 377.314 539.684 383.893 541.484C390.473 543.284 399.117 548.415 405.982 560.894" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="none"/>
    <path id="right_shin" d="M417.504 461.159C424.294 464.156 427.265 472.325 424.141 479.405L400.708 532.503C397.583 539.583 389.546 542.894 382.756 539.897L382.756 539.897C375.966 536.901 372.994 528.732 376.119 521.651L399.552 468.554C402.676 461.473 410.714 458.163 417.504 461.159L417.504 461.159Z" fill="#5d2192" fill-rule="nonzero" opacity="1" stroke="none"/>
</g>
<g id="head">
    <path d="M413.618 345.863C413.618 328.166 429.389 313.821 448.843 313.821C468.297 313.821 484.068 328.166 484.068 345.863C484.068 363.559 468.297 377.905 448.843 377.905C429.389 377.905 413.618 363.559 413.618 345.863Z" fill="#ffcac1" fill-rule="nonzero" opacity="1" stroke="none"/>
    <path d="M387.318 334.451C387.318 334.451 387.319 334.451 387.319 334.451C387.319 334.451 387.319 334.451 387.319 334.451C387.32 334.451 387.32 334.451 387.32 334.451C387.32 334.452 387.319 334.453 387.318 334.454C387.317 334.455 387.316 334.456 387.313 334.458C387.31 334.459 387.307 334.46 387.303 334.459C387.299 334.458 387.296 334.455 387.297 334.447C387.297 334.439 387.302 334.426 387.319 334.407C387.335 334.388 387.364 334.363 387.41 334.341C387.455 334.32 387.517 334.301 387.578 334.317C387.639 334.333 387.7 334.384 387.689 334.518C387.678 334.652 387.594 334.875 387.313 335.194C387.032 335.514 386.541 335.942 385.779 336.307C385.018 336.673 383.956 336.984 382.928 336.718C381.899 336.452 380.875 335.585 381.056 333.32C381.238 331.055 382.665 327.288 387.413 321.887C392.16 316.487 400.464 309.25 413.333 303.075C426.203 296.899 444.144 291.639 461.528 296.133C478.912 300.627 496.222 315.294 493.16 353.569" fill="url(#LinearGradient)" fill-rule="nonzero" opacity="1" stroke="none"/>
    <path d="M481.755 355.551C481.755 355.551 481.755 355.551 481.755 355.551C481.754 355.551 481.754 355.551 481.754 355.551C481.754 355.551 481.754 355.551 481.754 355.551C481.754 355.55 481.754 355.55 481.754 355.55C481.755 355.55 481.755 355.549 481.756 355.549C481.757 355.549 481.758 355.548 481.759 355.549C481.76 355.549 481.762 355.55 481.762 355.553C481.763 355.555 481.763 355.559 481.759 355.565C481.755 355.57 481.748 355.577 481.735 355.582C481.722 355.588 481.702 355.591 481.68 355.584C481.658 355.577 481.632 355.559 481.622 355.517C481.612 355.475 481.617 355.407 481.68 355.316C481.742 355.224 481.865 355.105 482.086 355.016C482.307 354.926 482.636 354.864 483.013 354.984C483.39 355.103 483.827 355.413 483.999 356.124C484.172 356.835 484.076 357.979 483.02 359.526C481.964 361.073 479.889 363.08 476.153 364.594C472.417 366.107 466.863 367.157 460.491 365.137C454.119 363.117 446.722 357.878 443.811 345.863" fill="url(#LinearGradient_2)" fill-rule="nonzero" opacity="1" stroke="none"/>
    <path d="M466.229 368.368C466.229 368.368 466.229 368.368 466.229 368.368C466.229 368.368 466.229 368.368 466.229 368.368C466.228 368.368 466.228 368.368 466.228 368.368C466.228 368.368 466.228 368.368 466.228 368.367C466.228 368.367 466.228 368.367 466.229 368.367C466.229 368.367 466.229 368.367 466.23 368.367C466.23 368.367 466.231 368.367 466.231 368.368C466.231 368.369 466.232 368.37 466.231 368.372C466.231 368.374 466.23 368.376 466.227 368.378C466.224 368.38 466.219 368.382 466.212 368.38C466.205 368.378 466.196 368.373 466.188 368.36C466.18 368.347 466.174 368.326 466.18 368.296C466.187 368.266 466.207 368.225 466.258 368.192C466.308 368.158 466.392 368.131 466.511 368.159C466.63 368.188 466.787 368.274 466.919 368.493C467.05 368.711 467.158 369.072 467.047 369.583C466.936 370.094 466.596 370.773 465.738 371.339C464.879 371.904 463.462 372.368 461.457 371.89C459.452 371.412 456.784 369.95 454.564 366.255" fill="#ce2e59" fill-opacity="0.75414" fill-rule="nonzero" opacity="1" stroke="none"/>
</g>
</svg>

</svg>`

exports.footer = footer;