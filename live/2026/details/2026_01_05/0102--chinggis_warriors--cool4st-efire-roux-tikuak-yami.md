### Roster Details<br />
Team Name: Chinggis Warriors<br />
Roster: cool4st, Efire, ROUX, tikuak, yAmi<br />
Global Rank: [102](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_01_05.md)<br />
Regional Rank: [9]( ../../standings_asia_2026_01_05.md)<br />
<br />
Final Rank Value:  938.5<br />
<br />
Final Rank Value (938.5) = Starting Rank Value (892.9) + Head To Head Adjustments (45.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.374[<sup>1</sup>](#table2)
- Bounty Collected: 0.293[<sup>2</sup>](#table1)
- Opponent Network: 0.053[<sup>2</sup>](#table1)
- LAN Wins: 0.273[<sup>2</sup>](#table1)

The average of these factors is 0.249<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 892.9
- 400 + ( ( 0.249 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 892.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |      803 | 2025-11-19 | Lynn Vision  | L   | 0.886      | -            | -                | -                | -         |    -3.49 | cool4st, Efire, ROUX, tikuak, yAmi      |
|           28 |      913 | 2025-11-13 | Morningstar  | W   | 0.847      | 0.333        | 0.026 (0.007)    | 0.352 (0.099)    | 0 (0.000) |    18.15 | cool4st, Efire, ROUX, tikuak, yAmi      |
|           27 |      980 | 2025-11-11 | Morningstar  | W   | 0.833      | 0.333        | 0.026 (0.007)    | 0.352 (0.098)    | 0 (0.000) |    19.02 | cool4st, Efire, ROUX, tikuak, yAmi      |
|           26 |     1561 | 2025-10-26 | FengDa       | W   | 0.726      | 0.333        | 0.026 (0.006)    | 0.363 (0.088)    | 0 (0.000) |    14.58 | cool4st, Efire, ROUX, tikuak, yAmi      |
|           25 |     1677 | 2025-10-24 | IHC          | W   | 0.713      | -            | -                | -                | 0 (0.000) |     3.90 | cool4st, Efire, ROUX, tikuak, yAmi      |
|           24 |     1723 | 2025-10-23 | DQZS         | W   | 0.706      | -            | -                | -                | -         |     1.37 | cool4st, Efire, ROUX, tikuak, yAmi      |
|           23 |     2139 | 2025-10-08 | Just Swing   | L   | 0.606      | -            | -                | -                | -         |   -12.90 | controlez, cool4st, Efire, ROUX, yAmi   |
|           22 |     2191 | 2025-10-07 | GATERON      | W   | 0.599      | 0.333        | -                | 0.108 (0.022)    | -         |     4.51 | controlez, cool4st, Efire, ROUX, yAmi   |
|           21 |     2254 | 2025-10-06 | DEPO         | L   | 0.592      | -            | -                | -                | -         |   -10.23 | ariucle, controlez, cool4st, ROUX, yAmi |
|           20 |     2315 | 2025-10-05 | True Thunder | W   | 0.586      | -            | -                | -                | -         |     0.99 | ariucle, controlez, cool4st, ROUX, yAmi |
|           19 |     2434 | 2025-10-02 | The Huns     | L   | 0.566      | -            | -                | -                | -         |    -4.03 | ariucle, cool4st, Efire, ROUX, yAmi     |
|           18 |     2439 | 2025-10-02 | NomadS       | W   | 0.565      | 0.333        | 0.004 (0.001)    | 0.128 (0.024)    | 1 (0.565) |     4.73 | ariucle, cool4st, Efire, ROUX, yAmi     |
|           17 |     2447 | 2025-10-01 | The QUBE     | W   | 0.563      | -            | -                | -                | 1 (0.563) |     4.26 | ariucle, cool4st, Efire, ROUX, yAmi     |
|           16 |     2593 | 2025-09-28 | The QUBE     | L   | 0.538      | -            | -                | -                | -         |   -13.17 | ariucle, controlez, cool4st, ROUX, yAmi |
|           15 |     2608 | 2025-09-27 | Paranoid     | L   | 0.537      | -            | -                | -                | -         |   -13.29 | ariucle, controlez, cool4st, ROUX, yAmi |
|           14 |     2856 | 2025-09-20 | Rare Atom    | L   | 0.486      | -            | -                | -                | -         |    -3.00 | ariucle, controlez, cool4st, ROUX, yAmi |
|           13 |     2925 | 2025-09-18 | Rare Atom    | W   | 0.473      | 0.333        | 0.062 (0.010)    | 0.339 (0.053)    | -         |    12.11 | ariucle, controlez, cool4st, ROUX, yAmi |
|           12 |     3064 | 2025-09-14 | The Huns     | L   | 0.445      | -            | -                | -                | -         |    -3.35 | ariucle, controlez, cool4st, ROUX, yAmi |
|           11 |     3116 | 2025-09-13 | NomadS       | W   | 0.439      | 0.624        | 0.004 (0.001)    | 0.128 (0.035)    | -         |     3.58 | ariucle, controlez, cool4st, ROUX, yAmi |
|           10 |     3206 | 2025-09-11 | Last Bullet  | W   | 0.426      | 0.333        | -                | 0.173 (0.025)    | -         |     4.44 | ariucle, controlez, cool4st, ROUX, yAmi |
|            9 |     3298 | 2025-09-09 | Just Swing   | W   | 0.413      | 0.333        | 0.005 (0.001)    | 0.219 (0.030)    | -         |     3.93 | ariucle, controlez, cool4st, ROUX, yAmi |
|            8 |     3353 | 2025-09-08 | MAXXPOWER    | W   | 0.406      | -            | -                | -                | -         |     0.71 | ariucle, controlez, cool4st, ROUX, yAmi |
|            7 |     3417 | 2025-09-06 | The Huns     | L   | 0.391      | -            | -                | -                | -         |    -2.80 | ariucle, controlez, cool4st, ROUX, yAmi |
|            6 |     3436 | 2025-09-05 | The Huns     | W   | 0.385      | 0.333        | 0.030 (0.004)    | 0.459 (0.059)    | 1 (0.385) |     9.52 | ariucle, controlez, cool4st, ROUX, yAmi |
|            5 |     3441 | 2025-09-04 | NomadS       | W   | 0.383      | -            | -                | -                | 1 (0.383) |     3.39 | ariucle, controlez, cool4st, ROUX, yAmi |
|            4 |     3521 | 2025-08-30 | The Huns     | L   | 0.346      | -            | -                | -                | -         |    -2.31 | ariucle, controlez, cool4st, ROUX, yAmi |
|            3 |     3532 | 2025-08-30 | Eruption     | W   | 0.345      | 0.333        | 0.008 (0.001)    | -                | 1 (0.345) |     3.69 | ariucle, controlez, cool4st, ROUX, yAmi |
|            2 |     3535 | 2025-08-30 | The Huns     | L   | 0.344      | -            | -                | -                | -         |    -2.31 | ariucle, controlez, cool4st, ROUX, yAmi |
|            1 |     3576 | 2025-08-29 | Eruption     | W   | 0.337      | 0.333        | 0.008 (0.001)    | -                | 1 (0.337) |     3.62 | ariucle, controlez, cool4st, ROUX, yAmi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,111.86)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-13 |      0.847 | $5,000.00      | $4,233.44       |
| 2025-10-02 |      0.566 | $2,500.00      | $1,415.22       |
| 2025-09-28 |      0.539 | $750.00        | $404.56         |
| 2025-09-20 |      0.486 | $2,500.00      | $1,215.98       |
| 2025-09-06 |      0.391 | $2,500.00      | $978.24         |
| 2025-08-30 |      0.346 | $2,500.00      | $864.42         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
