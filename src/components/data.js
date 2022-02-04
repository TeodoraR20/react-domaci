import img2 from '../galerija/cokoladajagoda2.jpg';
import img1 from '../galerija/smoothiecokolada.jpg';
import img3 from '../galerija/cokoladamalina.jpg';

import img4 from '../galerija/jagodabanana.jpg';
import img5 from '../galerija/banana.jpg';
import img6 from '../galerija/borovnica.jpg';
import img7 from '../galerija/kivi.jpg';
import img8 from '../galerija/pomorandza.jpg';

import React from "react";

export const data = [



    {

        id:1,
        img: img1,
        
        title: 'Smoothie - cokoloada i banana',
        
        desc: 'Smoothie sa cokoladom i bananom. Idealan za dorucak.',
        price: 350
        
        },


        {

            id:2,
            img: img2,
            title: 'Smoothie - cokolada i jagoda',
           
            desc: 'Sastojci: 1 zrela banana(zaledena) 5 vecih jagoda(zaledenih), 2dl mljeka ili bademovo mljeko,  1kasikica vanilija secera 2kasike kakaa, po potrebi agava sirupa  ili meda',
            price: 400
            
            },

            {

                id:3,
                img: img3,
                title: 'Smoothie - cokolada i malina',
                
                desc: <p>Sastojci: 400 g malina 
                ,150 g tečne pavlake
                 35% masti,
                650 g punomasnog mleka,
                300 g mlečne čokolade,
                Sveže maline za ukras.</p>,
                

                price: 380
                
                },

                
            {

                id:4,
                img: img4,
                title: 'Smoothie - jagoda i banana',
                
                desc: <p> Sastojci: 1 casa = 250 ml.
                1 1/2 case jagoda
                1/2 banana
                2 kasike lanenog semena, mljevenog
                2 kasicice meda
                1/2 case mleka
                1 casa led-opcionalno</p>,
                price: 350
                
                },

                
            {

                id:5,
                img: img5,
                title: 'Smoothie -  banana i vanila',
                
                desc: 'Sastojci: 2 banane, 2 kašike meda, 400ml hladnog mleka, 5 kašika mlevene plazme, 1 kašika mlevene vanile.',
                price: 300
                
                },

                {

                    id:6,
                    img: img6,
                    title: 'Smoothie -  borovnica',
                    
                    desc: <p>
                    
                    
                    Sastojci:
                    
                    250 ml mleka (najbolje je opredeliti se za biljno mleko poput bademovog ili pirinčanog)
                    
                    1/2 šolje naseckane banane
                    
                    1/2 šolje borovnica
                    
                    Opcioni oplemenjivači (jedan ili više)
                    
                    Cimet ili med za pojačavanje ukusa
                    
                    Kašika lanenih semenki
                    
                    1/4 šolje ovsenih pahuljica</p>,
                    price: 500
                    
                    },

                    {

                        id:7,
                        img: img7,
                        title: 'Smoothie -  kivi',
                        
                        desc: <p>Sastojci:

                        – 1 velika banana
                        
                        – 4 kivija
                        
                        – komadić đumbira
                        
                        – 1-2 kašičice smeđeg šećera (ili meda ili neki slad po želji)
                        
                        – 1 manja šoljica sveže isceđenog soka narandže (vode ili sojinog mleka)</p>,
                        price: 300
                        
                        },
                        {

                            id:8,
                            img: img8,
                            title: 'Smoothie -  pomorandza',
                            
                            desc: <p>Sastojci:
    
                          1 pomorandža

–                         1 banana

–                         2 dl jogurta

–                         1 cm svežeg đumbira

–                         med po želji</p>,
                            price: 350
                            
                            }





];

export default data;
