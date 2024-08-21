let title = "Elzero";
                desc = "Elzero Web School";
                date = "25/10";
                
            let markUp = `
                <div>
                    <h3>${title}</h3>
                    <p>${desc}</p>
                    <span>${date}</span>
                </div>
            `;
            
            let taskLoop = markUp.repeat(4);
            
            document.write(taskLoop);