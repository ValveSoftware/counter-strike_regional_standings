### Roster Details<br />
Team Name: Chicken Coop<br />
Roster: Crisp, Drop, jared, mds, REKMEISTER<br />
Global Rank: [87](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_06.md)<br />
Regional Rank: [19]( ../../standings_americas_2026_07_06.md)<br />
<br />
Final Rank Value:  1022.9<br />
<br />
Final Rank Value (1022.9) = Starting Rank Value (1020.6) + Head To Head Adjustments (2.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.414[<sup>1</sup>](#table2)
- Bounty Collected: 0.279[<sup>2</sup>](#table1)
- Opponent Network: 0.073[<sup>2</sup>](#table1)
- LAN Wins: 0.551[<sup>2</sup>](#table1)

The average of these factors is 0.329<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1020.6
- 400 + ( ( 0.329 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 1020.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      169 | 2026-06-21 | Club 333        | W   | 1.000      | 0.398        | 0.013 (0.005)    | 0.190 (0.076)    | 0 (0.000) |     4.23 | Crisp, Drop, jared, mds, REKMEISTER    |
|           32 |      181 | 2026-06-20 | Overtake Sector | W   | 1.000      | 0.398        | 0.004 (0.002)    | -                | 0 (0.000) |     3.34 | Crisp, Drop, jared, mds, REKMEISTER    |
|           31 |      199 | 2026-06-19 | dice            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.91 | Crisp, Drop, jared, mds, REKMEISTER    |
|           30 |      429 | 2026-06-08 | Club 333        | W   | 1.000      | 0.143        | 0.013 (0.002)    | -                | 0 (0.000) |     4.33 | Crisp, Drop, jared, mds, REKMEISTER    |
|           29 |      453 | 2026-06-07 | Third Prime     | W   | 1.000      | -            | -                | -                | -         |     1.01 | Crisp, Drop, jared, mds, REKMEISTER    |
|           28 |      616 | 2026-05-31 | Marsborne       | W   | 0.962      | 0.294        | 0.010 (0.003)    | 0.333 (0.094)    | 1 (0.962) |    14.36 | Crisp, Drop, Fessor, jared, REKMEISTER |
|           27 |      632 | 2026-05-31 | Marsborne       | W   | 0.960      | 0.294        | 0.010 (0.003)    | 0.333 (0.094)    | 1 (0.960) |    15.16 | Crisp, Drop, Fessor, jared, REKMEISTER |
|           26 |      650 | 2026-05-30 | SportsBetExpert | W   | 0.955      | 0.294        | -                | 0.173 (0.049)    | 1 (0.955) |     9.60 | Crisp, Drop, Fessor, jared, REKMEISTER |
|           25 |      665 | 2026-05-30 | F5              | W   | 0.954      | 0.294        | 0.005 (0.001)    | 0.281 (0.079)    | 1 (0.954) |     9.57 | Crisp, Drop, Fessor, jared, REKMEISTER |
|           24 |      785 | 2026-05-27 | Voca            | L   | 0.936      | -            | -                | -                | -         |    -8.85 | Crisp, Drop, jared, mds, REKMEISTER    |
|           23 |     1721 | 2026-04-29 | regain          | L   | 0.750      | -            | -                | -                | -         |   -17.34 | Crisp, Drop, jared, mds, REKMEISTER    |
|           22 |     1774 | 2026-04-28 | Marsborne       | W   | 0.741      | 0.363        | 0.014 (0.004)    | 0.235 (0.063)    | -         |    10.25 | Crisp, Drop, jared, mds, REKMEISTER    |
|           21 |     1808 | 2026-04-27 | Voca            | L   | 0.736      | -            | -                | -                | -         |    -8.24 | Crisp, Drop, jared, mds, REKMEISTER    |
|           20 |     1846 | 2026-04-26 | F5              | W   | 0.730      | 0.363        | 0.005 (0.001)    | 0.281 (0.074)    | -         |     7.50 | Crisp, Drop, jared, mds, REKMEISTER    |
|           19 |     1918 | 2026-04-25 | Wildcard        | L   | 0.723      | -            | -                | -                | -         |    -3.39 | Crisp, Drop, jared, mds, REKMEISTER    |
|           18 |     1922 | 2026-04-25 | Iowa Stormboar  | W   | 0.723      | 0.371        | 0.012 (0.003)    | 0.432 (0.116)    | 1 (0.723) |     6.15 | Crisp, Drop, jared, mds, REKMEISTER    |
|           17 |     1928 | 2026-04-25 | It's a Secret   | W   | 0.722      | -            | -                | -                | 1 (0.722) |     0.88 | Crisp, Drop, jared, mds, REKMEISTER    |
|           16 |     1948 | 2026-04-25 | Iowa Stormboar  | L   | 0.721      | -            | -                | -                | -         |   -16.96 | Crisp, Drop, jared, mds, REKMEISTER    |
|           15 |     3192 | 2026-03-27 | insane players  | W   | 0.530      | 0.363        | 0.011 (0.002)    | 0.274 (0.053)    | -         |     3.28 | colin, Crisp, Drop, jared, REKMEISTER  |
|           14 |     3237 | 2026-03-26 | Aether          | W   | 0.524      | 0.363        | -                | 0.170 (0.032)    | -         |     3.13 | colin, Crisp, Drop, jared, REKMEISTER  |
|           13 |     3280 | 2026-03-25 | insane players  | L   | 0.517      | -            | -                | -                | -         |   -13.29 | colin, Crisp, Drop, jared, REKMEISTER  |
|           12 |     3388 | 2026-03-23 | Aether          | W   | 0.504      | -            | -                | -                | -         |     2.63 | colin, Crisp, Drop, jared, REKMEISTER  |
|           11 |     3394 | 2026-03-23 | Fisher College  | L   | 0.503      | -            | -                | -                | -         |    -7.17 | colin, Crisp, Drop, jared, REKMEISTER  |
|           10 |     3509 | 2026-03-21 | OverKnight      | W   | 0.490      | -            | -                | -                | -         |     0.81 | colin, Crisp, Drop, jared, REKMEISTER  |
|            9 |     3575 | 2026-03-20 | 900FPSvsECO     | W   | 0.483      | -            | -                | -                | -         |     2.05 | colin, Crisp, Drop, jared, REKMEISTER  |
|            8 |     3674 | 2026-03-18 | Fisher College  | L   | 0.470      | -            | -                | -                | -         |    -6.93 | colin, Crisp, Drop, jared, REKMEISTER  |
|            7 |     4033 | 2026-03-10 | LAG             | L   | 0.416      | -            | -                | -                | -         |    -5.91 | colin, Crisp, Drop, jared, REKMEISTER  |
|            6 |     4149 | 2026-03-08 | insane players  | W   | 0.403      | -            | -                | -                | -         |     1.96 | colin, Crisp, Drop, jared, REKMEISTER  |
|            5 |     5220 | 2026-02-15 | FarmVille       | L   | 0.264      | -            | -                | -                | -         |    -7.00 | CoJoMo, Crisp, Drop, jared, REKMEISTER |
|            4 |     5392 | 2026-02-12 | F5              | W   | 0.243      | -            | -                | -                | -         |     2.20 | Crisp, Drop, jared, Panic, REKMEISTER  |
|            3 |     5467 | 2026-02-10 | LAG             | L   | 0.230      | -            | -                | -                | -         |    -3.44 | Crisp, Drop, jared, Panic, REKMEISTER  |
|            2 |     5586 | 2026-02-06 | Iowa Stormboar  | W   | 0.203      | -            | -                | -                | -         |     1.26 | Crisp, Drop, jared, Panic, REKMEISTER  |
|            1 |     5701 | 2026-02-02 | insane players  | L   | 0.177      | -            | -                | -                | -         |    -4.72 | Crisp, Drop, jared, Panic, REKMEISTER  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,549.02)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-21 |      1.000 | $15,000.00     | $15,000.00      |
| 2026-05-31 |      0.962 | $2,400.00      | $2,308.88       |
| 2026-03-27 |      0.530 | $8,000.00      | $4,240.15       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
