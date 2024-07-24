### Roster Details<br />
Team Name: INFINITE<br />
Roster: CHANKY, d1maje, mhN1, starplajerz, zewts<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [182](../standings_global.md)<br />
Regional Rank: [115]( ../standings_europe.md)<br />
Final Rank Value:  589.8<br />
<br />
Final Rank Value (589.8) = Starting Rank Value (544.5) + Head To Head Adjustments (45.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.258[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.071<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 544.5
- 400 + ( ( 0.071 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 544.5


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
|           11 |       74 | 2024-07-22 | Into the Breach | L   | 1.000      | -            | -                | -                | -         |   -16.01 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           10 |       79 | 2024-07-22 | Sampi           | L   | 1.000      | -            | -                | -                | -         |    -5.28 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            9 |       99 | 2024-07-21 | Heimo           | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.095 (0.014)    | 0 (0.000) |    18.16 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            8 |      117 | 2024-07-20 | CPH Wolves      | L   | 1.000      | -            | -                | -                | -         |    -6.12 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            7 |      151 | 2024-07-19 | 777             | W   | 1.000      | 0.143        | 0.020 (0.003)    | 0.208 (0.030)    | 0 (0.000) |    20.73 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            6 |      226 | 2024-07-18 | Permitta        | W   | 1.000      | 0.143        | 0.032 (0.005)    | 0.790 (0.113)    | 0 (0.000) |    27.85 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            5 |      695 | 2024-06-14 | TÓR             | L   | 0.931      | -            | -                | -                | -         |    -3.19 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            4 |      723 | 2024-06-13 | CPH Wolves      | L   | 0.926      | -            | -                | -                | -         |    -5.98 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            3 |     1122 | 2024-06-04 | Sampi           | L   | 0.867      | -            | -                | -                | -         |    -3.22 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            2 |     1287 | 2024-05-29 | Illuminar       | W   | 0.827      | 0.379        | 0.015 (0.005)    | 0.378 (0.118)    | 0 (0.000) |    21.67 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            1 |     1476 | 2024-05-21 | Permitta        | L   | 0.774      | -            | -                | -                | -         |    -3.24 | d1maje, mhN1, starplajerz, waZz, zewts   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
