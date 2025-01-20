### Roster Details<br />
Team Name: 2070<br />
Roster: bountt, Demonos, Floki, swarmyzz, voltera<br />
Global Rank: [176](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_16.md)<br />
Regional Rank: [48]( ../../standings_americas_2025_01_16.md)<br />
<br />
Final Rank Value:  660.4<br />
<br />
Final Rank Value (660.4) = Starting Rank Value (678.9) + Head To Head Adjustments (-18.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.265[<sup>1</sup>](#table2)
- Bounty Collected: 0.253[<sup>2</sup>](#table1)
- Opponent Network: 0.045[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.141<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 678.9
- 400 + ( ( 0.141 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 678.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |       11 | 2025-01-15 | Players           | W   | 1.000      | 0.371        | 0.014 (0.005)    | 0.403 (0.149)    | 0 (0.000) |    18.92 | bountt, Demonos, Floki, swarmyzz, voltera  |
|           12 |      153 | 2024-12-19 | 9z Academy        | L   | 1.000      | -            | -                | -                | -         |   -21.02 | Demonos, lealziNho, roz, swarmyzz, voltera |
|           11 |      180 | 2024-12-17 | GameHunters       | L   | 0.998      | -            | -                | -                | -         |   -13.00 | Demonos, lealziNho, roz, swarmyzz, voltera |
|           10 |      183 | 2024-12-16 | LaChampionsLiga   | L   | 0.994      | -            | -                | -                | -         |   -19.06 | Demonos, lealziNho, roz, swarmyzz, voltera |
|            9 |      247 | 2024-12-13 | Players           | L   | 0.973      | -            | -                | -                | -         |   -12.57 | Demonos, lealziNho, roz, swarmyzz, voltera |
|            8 |      252 | 2024-12-13 | BeBold            | W   | 0.972      | 0.143        | 0.000 (0.000)    | 0.049 (0.007)    | 0 (0.000) |     6.92 | Demonos, lealziNho, roz, swarmyzz, voltera |
|            7 |      266 | 2024-12-12 | 9z Academy        | W   | 0.966      | 0.270        | 0.000 (0.000)    | 0.263 (0.069)    | 0 (0.000) |     8.17 | Demonos, lealziNho, roz, swarmyzz, voltera |
|            6 |      561 | 2024-11-28 | Sharks            | L   | 0.872      | -            | -                | -                | -         |    -1.86 | Demonos, lealziNho, roz, swarmyzz, voltera |
|            5 |      590 | 2024-11-26 | Patins da Ferrari | W   | 0.859      | 0.371        | 0.002 (0.001)    | 0.220 (0.070)    | 0 (0.000) |    12.03 | Demonos, lealziNho, roz, swarmyzz, voltera |
|            4 |      602 | 2024-11-25 | ShindeN           | W   | 0.852      | 0.371        | 0.016 (0.005)    | 0.353 (0.111)    | 0 (0.000) |    15.36 | Demonos, lealziNho, roz, swarmyzz, voltera |
|            3 |      644 | 2024-11-23 | Players           | L   | 0.838      | -            | -                | -                | -         |   -11.18 | Demonos, lealziNho, roz, swarmyzz, voltera |
|            2 |      695 | 2024-11-21 | GameHunters       | L   | 0.825      | -            | -                | -                | -         |   -10.94 | Demonos, lealziNho, roz, swarmyzz, voltera |
|            1 |      729 | 2024-11-19 | JOGA DE TERNO     | W   | 0.814      | 0.371        | 0.000 (0.000)    | 0.148 (0.045)    | 0 (0.000) |     9.71 | Demonos, lealziNho, roz, swarmyzz, voltera |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($389.18)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
