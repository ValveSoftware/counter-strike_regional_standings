### Roster Details<br />
Team Name: INFINITE<br />
Roster: CHANKY, d1maje, mhN1, starplajerz, zewts<br />
Global Rank: [197](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_04.md)<br />
Regional Rank: [124]( ../../standings_europe_2024_09_04.md)<br />
<br />
Final Rank Value:  588.5<br />
<br />
Final Rank Value (588.5) = Starting Rank Value (536.0) + Head To Head Adjustments (52.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.069<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 536.0
- 400 + ( ( 0.069 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 536.0


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
|           14 |      914 | 2024-08-08 | Meteor          | L   | 1.000      | -            | -                | -                | -         |   -10.03 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           13 |     1040 | 2024-08-05 | kONO            | L   | 0.998      | -            | -                | -                | -         |    -6.63 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           12 |     1270 | 2024-07-30 | Lilmix          | W   | 0.959      | 0.143        | 0.018 (0.002)    | 0.074 (0.010)    | 0 (0.000) |    22.77 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           11 |     1520 | 2024-07-22 | Into the Breach | L   | 0.906      | -            | -                | -                | -         |    -5.17 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           10 |     1525 | 2024-07-22 | Sampi           | L   | 0.905      | -            | -                | -                | -         |    -4.37 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            9 |     1545 | 2024-07-21 | Heimo           | W   | 0.899      | 0.143        | 0.004 (0.001)    | 0.076 (0.010)    | 0 (0.000) |    16.11 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            8 |     1563 | 2024-07-20 | CPH Wolves      | L   | 0.895      | -            | -                | -                | -         |    -5.58 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            7 |     1597 | 2024-07-19 | 777             | W   | 0.888      | 0.143        | 0.010 (0.001)    | 0.119 (0.015)    | 0 (0.000) |    17.84 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            6 |     1672 | 2024-07-18 | Permitta        | W   | 0.879      | 0.143        | 0.032 (0.004)    | 0.988 (0.124)    | 0 (0.000) |    24.73 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            5 |     2141 | 2024-06-14 | TÓR             | L   | 0.652      | -            | -                | -                | -         |    -3.61 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            4 |     2169 | 2024-06-13 | CPH Wolves      | L   | 0.646      | -            | -                | -                | -         |    -4.24 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            3 |     2568 | 2024-06-04 | Sampi           | L   | 0.587      | -            | -                | -                | -         |    -2.06 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            2 |     2733 | 2024-05-29 | Illuminar       | W   | 0.548      | 0.379        | 0.010 (0.002)    | 0.394 (0.082)    | 0 (0.000) |    14.48 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            1 |     2922 | 2024-05-21 | Permitta        | L   | 0.495      | -            | -                | -                | -         |    -1.75 | d1maje, mhN1, starplajerz, waZz, zewts   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
