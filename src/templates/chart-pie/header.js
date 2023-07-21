header = `
<svg height="350px" width="350px" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
<style> 
        .label {
                font: bold 20px sans-serif;
                color: #404040;
                -webkit-text-stroke: 1px white;
        }

        path {
                stroke: #E6E2E1;
                stroke-width: 1px;
                transform: translate(60px, 100px);
        }

        .path_1 {
                animation: fadeIn 5s linear forwards;
        }

        .path_2 {
                transform: scale(0);
                animation: fadeIn 5s linear forwards 5s;
        }


        
        .path_3 {
                transform: scale(0);
                animation: fadeIn 5s linear forwards 10s;
        }


        .path_4 {
                transform: scale(0);
                animation: fadeIn 5s linear forwards 15s;
        }

        .path_5 {
                transform: scale(0);
                animation: fadeIn 5s linear forwards 20s;
        }

        .path_6 {
                transform: scale(0);
                animation: fadeIn 5s linear forwards 25s;
        }

        .path_7 {
                transform: scale(0);
                animation: fadeIn 5s linear forwards 30s;
        }

        .path_8 {
                transform: scale(0);
                animation: fadeIn 5s linear forwards 35s;
        }

        .path_9 {
                transform: scale(0);
                animation: fadeIn 5s linear forwards 40s;
        }

        .path_10 {
                transform: scale(0);
                animation: fadeIn 5s linear forwards 45s;
        }

        @keyframes fadeIn {
                0% {                        
                        transform: translate(250px, 300px) rotate(0deg) scale(0);
                        
                }
                50% {
                        transform: translate(150px, 220px) rotate(180deg) scale(0.5);
                        
                }
                
                100% {
                        transform: translate(60px, 120px) rotate(360deg) scale(1);
                        
                }
        }
        .txt_1 {
                opacity: 0;
                animation: txtShow 5s linear forwards 0s;
        }

        .txt_2 {
                opacity: 0;
                animation: txtShow 5s linear forwards 5s;
        }

        .txt_3 {
                opacity: 0;
                animation: txtShow 5s linear forwards 10s;
        }

        .txt_4 {
                opacity: 0;
                animation: txtShow 5s linear forwards 15s;
        }

        .txt_5 {
                opacity: 0;
                animation: txtShow 5s linear forwards 20s;
        }

        .txt_6 {
                opacity: 0;
                animation: txtShow 5s linear forwards 25s;
        }

        .txt_7 {
                opacity: 0;
                animation: txtShow 5s linear forwards 30s;
        }

        .txt_8 {
                opacity: 0;
                animation: txtShow 5s linear forwards 35s;
        }

        .txt_9 {
                opacity: 0;
                animation: txtShow 5s linear forwards 40s;
        }

        .txt_10 {
                opacity: 0;
                animation: txtShow 5s linear forwards 45s;
        }

        @keyframes txtShow {
                0% {                        
                        opacity: 0;
                        transform: translate(0px, 0px) scale(0);
                }
                100% {
                        opacity: 1;
                        transform: translate(0px, 0px) scale(1);
                        
                }
        }
</style>
`
exports.header = header;