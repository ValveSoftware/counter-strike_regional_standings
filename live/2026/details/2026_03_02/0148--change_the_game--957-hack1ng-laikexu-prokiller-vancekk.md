### Roster Details<br />
Team Name: Change The Game<br />
Roster: 957, Hack1ng, LaiKeXu, ProKiller, VanceKK<br />
Global Rank: [148](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_02.md)<br />
Regional Rank: [13]( ../../standings_asia_2026_03_02.md)<br />
<br />
Final Rank Value:  801.2<br />
<br />
Final Rank Value (801.2) = Starting Rank Value (746.8) + Head To Head Adjustments (54.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.339[<sup>1</sup>](#table2)
- Bounty Collected: 0.263[<sup>2</sup>](#table1)
- Opponent Network: 0.044[<sup>2</sup>](#table1)
- LAN Wins: 0.088[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 746.8
- 400 + ( ( 0.183 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 746.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |      203 | 2026-02-24 | Morningstar       | L   | 1.000      | -            | -                | -                | -         |    -7.87 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           19 |      241 | 2026-02-23 | Last Bullet       | W   | 1.000      | 0.333        | 0.008 (0.003)    | 0.171 (0.057)    | 0 (0.000) |    13.14 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           18 |      293 | 2026-02-22 | The QUBE          | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.147 (0.049)    | 0 (0.000) |    11.26 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           17 |      343 | 2026-02-21 | Chinggis Warriors | W   | 1.000      | 0.333        | 0.015 (0.005)    | 0.222 (0.074)    | 0 (0.000) |    18.34 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           16 |      386 | 2026-02-20 | Legion            | W   | 1.000      | 0.333        | 0.006 (0.002)    | 0.317 (0.106)    | 0 (0.000) |    13.23 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           15 |      442 | 2026-02-19 | IHC               | W   | 1.000      | 0.333        | -                | 0.014 (0.005)    | 0 (0.000) |     8.09 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           14 |      495 | 2026-02-18 | BORING PLAYERS    | L   | 1.000      | -            | -                | -                | -         |   -17.23 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           13 |      550 | 2026-02-17 | Arise             | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.168 (0.056)    | 0 (0.000) |    10.48 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           12 |     1611 | 2026-01-17 | Chinggis Warriors | L   | 0.904      | -            | -                | -                | -         |   -10.47 | 957, Hack1ng, LaiKeXu, lyrics3, VanceKK   |
|           11 |     2707 | 2025-11-12 | Gentle Mates      | L   | 0.470      | -            | -                | -                | -         |    -0.28 | 957, Hack1ng, LaiKeXu, VanceKK, Zero      |
|           10 |     2785 | 2025-11-10 | FengDa            | L   | 0.453      | -            | -                | -                | -         |    -6.40 | 957, Hack1ng, LaiKeXu, VanceKK, Zero      |
|            9 |     2872 | 2025-11-08 | FengDa            | W   | 0.439      | 0.379        | 0.012 (0.002)    | 0.168 (0.028)    | 1 (0.439) |     7.98 | 957, Hack1ng, LaiKeXu, VanceKK, Zero      |
|            8 |     3017 | 2025-11-06 | GATERON           | W   | 0.424      | 0.379        | 0.000 (0.000)    | -                | 1 (0.424) |     3.99 | 957, Hack1ng, LaiKeXu, VanceKK, Zero      |
|            7 |     3282 | 2025-10-27 | BMZ               | W   | 0.360      | 0.333        | 0.006 (0.001)    | 0.137 (0.016)    | 0 (0.000) |     5.92 | 957, Hack1ng, LaiKeXu, VanceKK, Zero      |
|            6 |     3342 | 2025-10-26 | Just Swing        | W   | 0.353      | 0.333        | 0.003 (0.000)    | 0.082 (0.010)    | 0 (0.000) |     4.70 | 957, Hack1ng, LaiKeXu, VanceKK, Zero      |
|            5 |     3392 | 2025-10-25 | IHC               | W   | 0.346      | -            | -                | -                | -         |     3.06 | 957, Hack1ng, LaiKeXu, VanceKK, Zero      |
|            4 |     3455 | 2025-10-24 | Legion            | W   | 0.339      | 0.333        | 0.006 (0.001)    | 0.317 (0.036)    | -         |     4.22 | 957, Hack1ng, LaiKeXu, VanceKK, Zero      |
|            3 |     3505 | 2025-10-23 | BMZ               | L   | 0.332      | -            | -                | -                | -         |    -4.91 | 957, Hack1ng, LaiKeXu, VanceKK, Zero      |
|            2 |     4175 | 2025-10-03 | Morningstar       | L   | 0.199      | -            | -                | -                | -         |    -1.44 | 957, Hack1ng, LaiKeXu, VanceKK, Zero      |
|            1 |     4220 | 2025-10-02 | Rare Atom         | L   | 0.192      | -            | -                | -                | -         |    -1.39 | 957, Hack1ng, LaiKeXu, VanceKK, Zero      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,745.14)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-24 |      1.000 | $2,500.00      | $2,500.00       |
| 2025-11-16 |      0.491 | $1,404.00      | $689.47         |
| 2025-11-13 |      0.473 | $1,000.00      | $473.24         |
| 2025-10-04 |      0.206 | $400.00        | $82.42          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
