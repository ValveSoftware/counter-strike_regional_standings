### Roster Details<br />
Team Name: INFINITE<br />
Roster: CHANKY, d1maje, mhN1, starplajerz, zewts<br />
Global Rank: [195](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [122]( ../standings_europe.md)<br />
<br />
Final Rank Value:  599.9<br />
<br />
Final Rank Value (599.9) = Starting Rank Value (542.3) + Head To Head Adjustments (57.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.259[<sup>2</sup>](#table1)
- Opponent Network: 0.029[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.072<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 542.3
- 400 + ( ( 0.072 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 542.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      191 | 2024-08-08 | Meteor          | L   | 1.000      | -            | -                | -                | -         |    -9.47 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           13 |      317 | 2024-08-05 | kONO            | L   | 1.000      | -            | -                | -                | -         |    -6.74 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           12 |      547 | 2024-07-30 | Lilmix          | W   | 1.000      | 0.143        | 0.021 (0.003)    | 0.091 (0.013)    | 0 (0.000) |    24.41 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           11 |      797 | 2024-07-22 | Into the Breach | L   | 1.000      | -            | -                | -                | -         |    -7.05 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           10 |      802 | 2024-07-22 | Sampi           | L   | 1.000      | -            | -                | -                | -         |    -5.56 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            9 |      822 | 2024-07-21 | Heimo           | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.097 (0.014)    | 0 (0.000) |    17.68 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            8 |      840 | 2024-07-20 | CPH Wolves      | L   | 1.000      | -            | -                | -                | -         |    -6.55 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            7 |      874 | 2024-07-19 | 777             | W   | 1.000      | 0.143        | 0.014 (0.002)    | 0.158 (0.023)    | 0 (0.000) |    19.96 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            6 |      949 | 2024-07-18 | Permitta        | W   | 1.000      | 0.143        | 0.036 (0.005)    | 0.957 (0.137)    | 0 (0.000) |    27.74 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            5 |     1418 | 2024-06-14 | TÓR             | L   | 0.791      | -            | -                | -                | -         |    -3.64 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            4 |     1446 | 2024-06-13 | CPH Wolves      | L   | 0.785      | -            | -                | -                | -         |    -5.48 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            3 |     1845 | 2024-06-04 | Sampi           | L   | 0.726      | -            | -                | -                | -         |    -2.97 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            2 |     2010 | 2024-05-29 | Illuminar       | W   | 0.687      | 0.379        | 0.011 (0.003)    | 0.405 (0.105)    | 0 (0.000) |    17.89 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            1 |     2199 | 2024-05-21 | Permitta        | L   | 0.634      | -            | -                | -                | -         |    -2.60 | d1maje, mhN1, starplajerz, waZz, zewts   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
