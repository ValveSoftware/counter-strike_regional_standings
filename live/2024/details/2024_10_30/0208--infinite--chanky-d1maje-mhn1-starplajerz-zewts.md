### Roster Details<br />
Team Name: INFINITE<br />
Roster: CHANKY, d1maje, mhN1, starplajerz, zewts<br />
Global Rank: [208](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_30.md)<br />
Regional Rank: [124]( ../../standings_europe_2024_10_30.md)<br />
<br />
Final Rank Value:  561.7<br />
<br />
Final Rank Value (561.7) = Starting Rank Value (525.9) + Head To Head Adjustments (35.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.241[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 525.9
- 400 + ( ( 0.064 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 525.9


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
|           14 |     2472 | 2024-08-08 | Meteor          | L   | 0.646      | -            | -                | -                | -         |    -6.10 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           13 |     2598 | 2024-08-05 | kONO            | L   | 0.625      | -            | -                | -                | -         |    -3.08 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           12 |     2828 | 2024-07-30 | Lilmix          | W   | 0.585      | 0.143        | 0.009 (0.001)    | 0.029 (0.002)    | 0 (0.000) |    12.94 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           11 |     3078 | 2024-07-22 | Into the Breach | L   | 0.532      | -            | -                | -                | -         |    -1.59 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           10 |     3083 | 2024-07-22 | Sampi           | L   | 0.531      | -            | -                | -                | -         |    -1.31 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            9 |     3103 | 2024-07-21 | Heimo           | W   | 0.526      | 0.143        | 0.002 (0.000)    | 0.156 (0.012)    | 0 (0.000) |    10.64 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            8 |     3121 | 2024-07-20 | CPH Wolves      | L   | 0.521      | -            | -                | -                | -         |    -2.77 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            7 |     3155 | 2024-07-19 | 777             | W   | 0.514      | 0.143        | 0.002 (0.000)    | 0.030 (0.002)    | 0 (0.000) |    10.01 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            6 |     3230 | 2024-07-18 | Permitta        | W   | 0.505      | 0.143        | 0.060 (0.004)    | 1.000 (0.072)    | 0 (0.000) |    15.37 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            5 |     3699 | 2024-06-14 | Lewandownskie   | L   | 0.278      | -            | -                | -                | -         |    -1.69 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            4 |     3727 | 2024-06-13 | CPH Wolves      | L   | 0.272      | -            | -                | -                | -         |    -1.46 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            3 |     4126 | 2024-06-04 | Sampi           | L   | 0.214      | -            | -                | -                | -         |    -0.38 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            2 |     4291 | 2024-05-29 | Illuminar       | W   | 0.174      | 0.379        | 0.026 (0.002)    | 0.578 (0.038)    | 0 (0.000) |     5.26 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            1 |     4480 | 2024-05-21 | Permitta        | L   | 0.121      | -            | -                | -                | -         |    -0.11 | d1maje, mhN1, starplajerz, waZz, zewts   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
