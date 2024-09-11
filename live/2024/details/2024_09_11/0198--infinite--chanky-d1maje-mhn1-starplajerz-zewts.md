### Roster Details<br />
Team Name: INFINITE<br />
Roster: CHANKY, d1maje, mhN1, starplajerz, zewts<br />
Global Rank: [198](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_11.md)<br />
Regional Rank: [125]( ../../standings_europe_2024_09_11.md)<br />
<br />
Final Rank Value:  580.5<br />
<br />
Final Rank Value (580.5) = Starting Rank Value (530.9) + Head To Head Adjustments (49.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.248[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.067<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 530.9
- 400 + ( ( 0.067 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 530.9


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
|           14 |     1119 | 2024-08-08 | Meteor          | L   | 0.972      | -            | -                | -                | -         |    -9.82 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           13 |     1245 | 2024-08-05 | kONO            | L   | 0.951      | -            | -                | -                | -         |    -6.49 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           12 |     1475 | 2024-07-30 | Lilmix          | W   | 0.912      | 0.143        | 0.017 (0.002)    | 0.068 (0.009)    | 0 (0.000) |    21.39 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           11 |     1725 | 2024-07-22 | Into the Breach | L   | 0.859      | -            | -                | -                | -         |    -4.42 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           10 |     1730 | 2024-07-22 | Sampi           | L   | 0.858      | -            | -                | -                | -         |    -4.15 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            9 |     1750 | 2024-07-21 | Heimo           | W   | 0.852      | 0.143        | 0.004 (0.000)    | 0.067 (0.008)    | 0 (0.000) |    15.34 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            8 |     1768 | 2024-07-20 | CPH Wolves      | L   | 0.848      | -            | -                | -                | -         |    -4.93 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            7 |     1802 | 2024-07-19 | 777             | W   | 0.841      | 0.143        | 0.010 (0.001)    | 0.105 (0.013)    | 0 (0.000) |    16.89 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            6 |     1877 | 2024-07-18 | Permitta        | W   | 0.832      | 0.143        | 0.032 (0.004)    | 0.936 (0.111)    | 0 (0.000) |    23.34 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            5 |     2346 | 2024-06-14 | TÓR             | L   | 0.605      | -            | -                | -                | -         |    -3.59 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            4 |     2374 | 2024-06-13 | CPH Wolves      | L   | 0.599      | -            | -                | -                | -         |    -3.58 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            3 |     2773 | 2024-06-04 | Sampi           | L   | 0.540      | -            | -                | -                | -         |    -1.92 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            2 |     2938 | 2024-05-29 | Illuminar       | W   | 0.501      | 0.379        | 0.010 (0.002)    | 0.371 (0.070)    | 0 (0.000) |    13.16 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            1 |     3127 | 2024-05-21 | Permitta        | L   | 0.448      | -            | -                | -                | -         |    -1.64 | d1maje, mhN1, starplajerz, waZz, zewts   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
