### Roster Details<br />
Team Name: ex-GUILD fe<br />
Roster: Ann4, D7, KiTKaT, Nea, pullox<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [160](../standings_global.md)<br />
Regional Rank: [104]( ../standings_europe.md)<br />
Final Rank Value:  700.4<br />
<br />
Final Rank Value (700.4) = Starting Rank Value (692.4) + Head To Head Adjustments (8.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.295[<sup>1</sup>](#table2)
- Bounty Collected: 0.241[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 692.4
- 400 + ( ( 0.136 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 692.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1288 | 2024-05-18 | NIP Impact        | L   | 0.800      | -            | -                | -                | -         |   -10.36 | Ann4, D7, KiTKaT, Nea, pullox   |
|           11 |     1959 | 2024-04-21 | Fearless Cheetahs | W   | 0.621      | 0.331        | 0.005 (0.001)    | 0.088 (0.018)    | 0 (0.000) |    10.90 | Ann4, D7, KiTKaT, Nea, pullox   |
|           10 |     1989 | 2024-04-20 | Let Her Cook      | L   | 0.614      | -            | -                | -                | -         |    -3.44 | Ann4, D7, KiTKaT, Nea, pullox   |
|            9 |     2032 | 2024-04-19 | Imperial fe       | L   | 0.607      | -            | -                | -                | -         |    -1.53 | Ann4, D7, KiTKaT, Nea, pullox   |
|            8 |     2289 | 2024-04-10 | NIP Impact        | W   | 0.548      | 0.331        | 0.008 (0.002)    | 0.191 (0.035)    | 0 (0.000) |    10.26 | Ann4, D7, KiTKaT, Nea, pullox   |
|            7 |     2427 | 2024-04-06 | NIP Impact        | L   | 0.519      | -            | -                | -                | -         |    -7.13 | Ann4, D7, KiTKaT, Nea, pullox   |
|            6 |     2611 | 2024-03-28 | BIG EQUIPA        | W   | 0.461      | 0.331        | 0.027 (0.004)    | 0.210 (0.032)    | 0 (0.000) |     9.86 | Ann4, D7, KiTKaT, Nea, pullox   |
|            5 |     2737 | 2024-03-21 | Astralis W        | W   | 0.414      | 0.331        | 0.002 (0.000)    | 0.031 (0.004)    | 0 (0.000) |     5.58 | Ann4, D7, KiTKaT, Nea, pullox   |
|            4 |     2918 | 2024-03-13 | ENCE Athena       | L   | 0.361      | -            | -                | -                | -         |    -5.98 | Ann4, D7, KiTKaT, Nea, pullox   |
|            3 |     3348 | 2024-02-24 | BIG EQUIPA        | L   | 0.240      | -            | -                | -                | -         |    -2.48 | Ann4, D7, KiTKaT, Nea, pullox   |
|            2 |     3586 | 2024-02-14 | Spirit fe         | W   | 0.175      | 0.143        | 0.004 (0.000)    | 0.038 (0.001)    | 0 (0.000) |     2.59 | Ann4, D7, KiTKaT, Nea, pullox   |
|            1 |     4024 | 2024-01-21 | Nemesis fe        | L   | 0.014      | -            | -                | -                | -         |    -0.28 | Ann4, D7, KiTKaT, kr4sy, pullox |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($996.84)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      0.621 | $1,600.00      | $993.40         |
| 2024-01-21 |      0.014 | $250.00        | $3.45           |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
