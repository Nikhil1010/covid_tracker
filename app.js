let btn = document.getElementById("btn");
        
        btn.addEventListener("click",()=>{
        const text = document.getElementById("getText").value;

            fetch('https://api.covid19api.com/summary')
            .then((covidData)=>{
                return covidData.json();
            })
            .then((getData)=>{
                console.log(getData);
                let content = document.querySelector(".data"); 

                let box = content.lastElementChild;  
                while (box) { 
                    content.removeChild(box); 
                    box = content.lastElementChild; 
                } 

                let index = 0;
                for(var i=0;i<185;i++){
                    if(getData.Countries[i].Country.toLowerCase() == text.toLowerCase()){
                        index = i;
                        break;
                    }
                }
                let data = document.querySelector(".data");
                data.innerHTML = `<div class="box">
                                <div class="head">
                                    <span>Covid-19 Cases in ${getData.Countries[index].Country}</span>
                                </div>
                                <div class="total">
                                    <div><p>Total Confirmed</p> ${getData.Countries[index].TotalConfirmed}</div>
                                    <div><p>Total Recovered</p> ${getData.Countries[index].TotalRecovered}</div>
                                    <div><p>Total Deaths</p> ${getData.Countries[index].TotalDeaths}</div>
                                </div>
                                <div class="new">
                                    <div><p>New Confirmed</p> ${getData.Countries[index].NewConfirmed}</div>
                                    <div><p>New Recovered</p> ${getData.Countries[index].NewRecovered}</div>
                                    <div><p>New Deaths</p> ${getData.Countries[index].NewDeaths}</div>
                                    </div>
                                </div>`;
            })
        })