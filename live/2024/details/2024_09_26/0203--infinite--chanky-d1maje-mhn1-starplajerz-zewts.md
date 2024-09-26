### Roster Details<br />
Team Name: INFINITE<br />
Roster: CHANKY, d1maje, mhN1, starplajerz, zewts<br />
Global Rank: [203](../../standings_global_2024_09_26.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_26.md)<br />
Regional Rank: [124]( ../../standings_europe_2024_09_26.md)<br />
<br />
Final Rank Value:  568.0<br />
<br />
Final Rank Value (568.0) = Starting Rank Value (520.4) + Head To Head Adjustments (47.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 520.4
- 400 + ( ( 0.064 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 520.4


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
|           14 |     1614 | 2024-08-08 | Meteor          | L   | 0.872      | -            | -                | -                | -         |    -8.64 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           13 |     1740 | 2024-08-05 | kONO            | L   | 0.852      | -            | -                | -                | -         |    -5.63 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           12 |     1970 | 2024-07-30 | Lilmix          | W   | 0.812      | 0.143        | 0.013 (0.001)    | 0.058 (0.007)    | 0 (0.000) |    18.51 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           11 |     2220 | 2024-07-22 | Into the Breach | L   | 0.759      | -            | -                | -                | -         |    -2.67 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           10 |     2225 | 2024-07-22 | Sampi           | L   | 0.758      | -            | -                | -                | -         |    -3.14 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            9 |     2245 | 2024-07-21 | Heimo           | W   | 0.752      | 0.143        | 0.002 (0.000)    | 0.054 (0.006)    | 0 (0.000) |    13.58 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            8 |     2263 | 2024-07-20 | CPH Wolves      | L   | 0.748      | -            | -                | -                | -         |    -2.92 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            7 |     2297 | 2024-07-19 | 777             | W   | 0.741      | 0.143        | 0.006 (0.001)    | 0.084 (0.009)    | 0 (0.000) |    14.71 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            6 |     2372 | 2024-07-18 | Permitta        | W   | 0.732      | 0.143        | 0.023 (0.002)    | 1.000 (0.105)    | 0 (0.000) |    20.48 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            5 |     2841 | 2024-06-14 | Lewandownskie   | L   | 0.505      | -            | -                | -                | -         |    -2.52 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            4 |     2869 | 2024-06-13 | CPH Wolves      | L   | 0.499      | -            | -                | -                | -         |    -1.94 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            3 |     3268 | 2024-06-04 | Sampi           | L   | 0.441      | -            | -                | -                | -         |    -1.26 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            2 |     3433 | 2024-05-29 | Illuminar       | W   | 0.401      | 0.379        | 0.007 (0.001)    | 0.371 (0.056)    | 0 (0.000) |    10.38 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            1 |     3622 | 2024-05-21 | Permitta        | L   | 0.348      | -            | -                | -                | -         |    -1.31 | d1maje, mhN1, starplajerz, waZz, zewts   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($332,851.90)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
