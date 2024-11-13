### Roster Details<br />
Team Name: Limitless<br />
Roster: Cyrix, DJF, Sandman, Seb, Tender<br />
Global Rank: [128](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_11_13.md)<br />
Regional Rank: [31]( ../../standings_americas_2024_11_13.md)<br />
<br />
Final Rank Value:  755.7<br />
<br />
Final Rank Value (755.7) = Starting Rank Value (819.6) + Head To Head Adjustments (-64.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.298[<sup>1</sup>](#table2)
- Bounty Collected: 0.283[<sup>2</sup>](#table1)
- Opponent Network: 0.089[<sup>2</sup>](#table1)
- LAN Wins: 0.171[<sup>2</sup>](#table1)

The average of these factors is 0.210<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 819.6
- 400 + ( ( 0.210 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 819.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |      690 | 2024-10-09 | timbermen        | L   | 0.969      | -            | -                | -                | -         |   -10.64 | Cyrix, DJF, Sandman, Seb, Tender |
|           35 |      696 | 2024-10-09 | timbermen        | W   | 0.969      | 0.477        | 0.017 (0.008)    | 0.405 (0.187)    | 0 (0.000) |    20.30 | Cyrix, DJF, Sandman, Seb, Tender |
|           34 |      725 | 2024-10-08 | Mythic           | W   | 0.962      | 0.477        | 0.001 (0.001)    | 0.190 (0.087)    | 0 (0.000) |    12.42 | Cyrix, DJF, Sandman, Seb, Tender |
|           33 |      731 | 2024-10-08 | Mythic           | W   | 0.962      | 0.477        | 0.001 (0.001)    | 0.190 (0.087)    | 0 (0.000) |    13.50 | Cyrix, DJF, Sandman, Seb, Tender |
|           32 |      888 | 2024-10-03 | Legacy           | L   | 0.929      | -            | -                | -                | -         |    -1.92 | Cyrix, DJF, Sandman, Seb, Tender |
|           31 |      894 | 2024-10-03 | Legacy           | L   | 0.929      | -            | -                | -                | -         |    -1.96 | Cyrix, DJF, Sandman, Seb, Tender |
|           30 |      965 | 2024-10-01 | Take Flyte       | W   | 0.916      | 0.477        | 0.003 (0.001)    | 0.215 (0.094)    | 0 (0.000) |    15.19 | Cyrix, DJF, Sandman, Seb, Tender |
|           29 |      970 | 2024-10-01 | Take Flyte       | L   | 0.915      | -            | -                | -                | -         |   -13.69 | Cyrix, DJF, Sandman, Seb, Tender |
|           28 |     1195 | 2024-09-25 | BOSS             | L   | 0.876      | -            | -                | -                | -         |    -7.75 | Andrew, Cyrix, DJF, Sandman, Seb |
|           27 |     1199 | 2024-09-25 | BOSS             | W   | 0.875      | 0.477        | 0.030 (0.012)    | 0.342 (0.143)    | 0 (0.000) |    20.33 | Andrew, Cyrix, DJF, Sandman, Seb |
|           26 |     1329 | 2024-09-22 | jahsdnmasjdm     | L   | 0.855      | -            | -                | -                | -         |   -19.71 | Andrew, Cyrix, DJF, Sandman, Seb |
|           25 |     1405 | 2024-09-19 | Revenge Nation   | L   | 0.835      | -            | -                | -                | -         |   -14.70 | Andrew, Cyrix, DJF, Sandman, Seb |
|           24 |     1523 | 2024-09-15 | Aether           | W   | 0.808      | 0.371        | 0.000 (0.000)    | 0.090 (0.027)    | 0 (0.000) |     4.72 | Andrew, Cyrix, DJF, Sandman, Seb |
|           23 |     1729 | 2024-09-08 | Nouns            | L   | 0.761      | -            | -                | -                | -         |    -3.38 | Cyrix, DJF, Sandman, Seb, Wolffe |
|           22 |     1745 | 2024-09-07 | LAG              | W   | 0.756      | 0.333        | 0.003 (0.001)    | 0.220 (0.055)    | 1 (0.756) |    11.22 | Cyrix, DJF, Sandman, Seb, Wolffe |
|           21 |     1762 | 2024-09-07 | Kraken           | W   | 0.754      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.754) |     3.22 | Cyrix, DJF, Sandman, Seb, Wolffe |
|           20 |     1851 | 2024-09-04 | Revenge Nation   | W   | 0.736      | 0.477        | 0.004 (0.001)    | 0.224 (0.079)    | 0 (0.000) |    11.65 | Cyrix, DJF, Sandman, Seb, Wolffe |
|           19 |     1858 | 2024-09-04 | Revenge Nation   | L   | 0.735      | -            | -                | -                | -         |   -11.72 | Cyrix, DJF, Sandman, Seb, Wolffe |
|           18 |     2164 | 2024-08-26 | Akimbo           | L   | 0.676      | -            | -                | -                | -         |   -16.53 | Cyrix, DJF, Sandman, Seb, Wolffe |
|           17 |     2179 | 2024-08-26 | timbermen        | L   | 0.674      | -            | -                | -                | -         |    -5.17 | Cyrix, DJF, Sandman, Seb, Wolffe |
|           16 |     2454 | 2024-08-19 | Priority         | L   | 0.628      | -            | -                | -                | -         |   -16.09 | Aureo, DJF, Sandman, Seb, Wolffe |
|           15 |     2588 | 2024-08-14 | undefined        | L   | 0.596      | -            | -                | -                | -         |   -10.66 | DJF, Seb, Tender, wiz, Wolffe    |
|           14 |     2603 | 2024-08-13 | FLUFFY AIMERS    | W   | 0.589      | 0.477        | 0.014 (0.004)    | 0.456 (0.128)    | 0 (0.000) |     9.73 | DJF, Seb, Tender, wiz, Wolffe    |
|           13 |     2606 | 2024-08-13 | FLUFFY AIMERS    | L   | 0.589      | -            | -                | -                | -         |    -9.00 | DJF, Seb, Tender, wiz, Wolffe    |
|           12 |     3054 | 2024-07-31 | M80              | L   | 0.502      | -            | -                | -                | -         |    -0.56 | DJF, Seb, Tender, wiz, Wolffe    |
|           11 |     3060 | 2024-07-31 | M80              | L   | 0.502      | -            | -                | -                | -         |    -0.57 | DJF, Seb, Tender, wiz, Wolffe    |
|           10 |     3301 | 2024-07-24 | LAG              | L   | 0.456      | -            | -                | -                | -         |    -7.19 | DJF, Seb, Tender, wiz, Wolffe    |
|            9 |     3305 | 2024-07-24 | LAG              | L   | 0.455      | -            | -                | -                | -         |    -7.49 | DJF, Seb, Tender, wiz, Wolffe    |
|            8 |     3333 | 2024-07-23 | Nouns            | L   | 0.449      | -            | -                | -                | -         |    -2.95 | DJF, Seb, Tender, wiz, Wolffe    |
|            7 |     3335 | 2024-07-23 | Nouns            | L   | 0.449      | -            | -                | -                | -         |    -3.02 | DJF, Seb, Tender, wiz, Wolffe    |
|            6 |     3567 | 2024-07-17 | Wildcard         | L   | 0.409      | -            | -                | -                | -         |    -1.15 | DJF, Seb, Tender, wiz, Wolffe    |
|            5 |     3570 | 2024-07-17 | Wildcard         | L   | 0.408      | -            | -                | -                | -         |    -1.16 | DJF, Seb, Tender, wiz, Wolffe    |
|            4 |     3626 | 2024-07-16 | Party Astronauts | L   | 0.402      | -            | -                | -                | -         |    -5.10 | DJF, Seb, Tender, wiz, Wolffe    |
|            3 |     3630 | 2024-07-16 | Party Astronauts | L   | 0.402      | -            | -                | -                | -         |    -5.27 | DJF, Seb, Tender, wiz, Wolffe    |
|            2 |     3677 | 2024-07-15 | NRG              | L   | 0.396      | -            | -                | -                | -         |    -4.36 | DJF, Seb, Tender, wiz, Wolffe    |
|            1 |     3680 | 2024-07-15 | NRG              | L   | 0.395      | -            | -                | -                | -         |    -4.50 | DJF, Seb, Tender, wiz, Wolffe    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,962.48)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $1,200.00      | $1,200.00       |
| 2024-09-08 |      0.762 | $1,000.00      | $762.48         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
