### Roster Details<br />
Team Name: Procyon<br />
Roster: AGL, lenci, MaxOff, next, pavv<br />
Global Rank: [208](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_05_04.md)<br />
Regional Rank: [49]( ../../standings_americas_2026_05_04.md)<br />
<br />
Final Rank Value:  746.2<br />
<br />
Final Rank Value (746.2) = Starting Rank Value (838.0) + Head To Head Adjustments (-91.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.339[<sup>1</sup>](#table2)
- Bounty Collected: 0.302[<sup>2</sup>](#table1)
- Opponent Network: 0.089[<sup>2</sup>](#table1)
- LAN Wins: 0.214[<sup>2</sup>](#table1)

The average of these factors is 0.236<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 838.0
- 400 + ( ( 0.236 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 838.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |      186 | 2026-04-27 | Bounty Hunters  | L   | 1.000      | -            | -                | -                | -         |    -4.66 | AGL, lenci, MaxOff, next, pavv |
|           42 |      234 | 2026-04-26 | ShindeN         | L   | 1.000      | -            | -                | -                | -         |    -1.83 | AGL, lenci, MaxOff, next, pavv |
|           41 |      508 | 2026-04-18 | UNO MILLE       | L   | 1.000      | -            | -                | -                | -         |    -9.42 | AGL, lenci, MaxOff, next, pavv |
|           40 |      529 | 2026-04-17 | paiN Academy    | W   | 1.000      | 0.278        | 0.005 (0.001)    | 0.359 (0.100)    | 0 (0.000) |    15.93 | AGL, lenci, MaxOff, next, pavv |
|           39 |      537 | 2026-04-16 | Vasco           | L   | 1.000      | -            | -                | -                | -         |   -13.67 | AGL, lenci, MaxOff, next, pavv |
|           38 |      832 | 2026-04-05 | BESTIA Academy  | L   | 1.000      | -            | -                | -                | -         |   -18.68 | AGL, lenci, MaxOff, next, pavv |
|           37 |      877 | 2026-04-04 | Isurus          | L   | 1.000      | -            | -                | -                | -         |   -11.90 | AGL, lenci, MaxOff, next, pavv |
|           36 |     1825 | 2026-03-22 | UNO MILLE       | L   | 0.916      | -            | -                | -                | -         |   -13.54 | AGL, lenci, MaxOff, next, pavv |
|           35 |     1834 | 2026-03-22 | GameHunters     | L   | 0.914      | -            | -                | -                | -         |   -11.65 | AGL, lenci, MaxOff, next, pavv |
|           34 |     1870 | 2026-03-21 | METANOIA Wolves | L   | 0.909      | -            | -                | -                | -         |   -14.84 | AGL, lenci, MaxOff, next, pavv |
|           33 |     1936 | 2026-03-20 | FURIA fe        | W   | 0.902      | 0.363        | 0.002 (0.001)    | 0.079 (0.026)    | 0 (0.000) |     7.07 | AGL, lenci, MaxOff, next, pavv |
|           32 |     2224 | 2026-03-14 | ShindeN         | L   | 0.860      | -            | -                | -                | -         |    -2.53 | AGL, lenci, MaxOff, next, pavv |
|           31 |     2302 | 2026-03-12 | LUNA            | W   | 0.848      | -            | -                | -                | 0 (0.000) |     2.40 | AGL, lenci, MaxOff, next, pavv |
|           30 |     2388 | 2026-03-10 | Isurus          | L   | 0.835      | -            | -                | -                | -         |    -8.27 | AGL, lenci, MaxOff, next, pavv |
|           29 |     2391 | 2026-03-10 | UNO MILLE       | L   | 0.835      | -            | -                | -                | -         |   -13.61 | AGL, lenci, MaxOff, next, pavv |
|           28 |     2400 | 2026-03-10 | Hacha           | W   | 0.834      | -            | -                | -                | 0 (0.000) |     2.01 | AGL, lenci, MaxOff, next, pavv |
|           27 |     2549 | 2026-03-08 | Pugdesonesto    | W   | 0.820      | 0.333        | -                | 0.103 (0.028)    | 0 (0.000) |     4.07 | AGL, lenci, MaxOff, next, pavv |
|           26 |     2601 | 2026-03-07 | paiN Academy    | W   | 0.813      | 0.333        | 0.005 (0.001)    | 0.359 (0.097)    | 0 (0.000) |     8.74 | AGL, lenci, MaxOff, next, pavv |
|           25 |     2660 | 2026-03-05 | R2              | W   | 0.802      | 0.333        | 0.003 (0.001)    | 0.430 (0.115)    | 0 (0.000) |     9.06 | AGL, lenci, MaxOff, next, pavv |
|           24 |     2791 | 2026-03-03 | UNO MILLE       | L   | 0.786      | -            | -                | -                | -         |   -13.96 | AGL, lenci, MaxOff, next, pavv |
|           23 |     2811 | 2026-03-02 | FOLHA AMARELA   | L   | 0.782      | -            | -                | -                | -         |   -11.92 | AGL, lenci, MaxOff, next, pavv |
|           22 |     2854 | 2026-03-01 | ShindeN         | L   | 0.775      | -            | -                | -                | -         |    -2.30 | AGL, lenci, MaxOff, next, pavv |
|           21 |     2870 | 2026-03-01 | Isurus          | W   | 0.774      | 0.362        | 0.052 (0.015)    | 0.491 (0.138)    | 1 (0.774) |    18.01 | AGL, lenci, MaxOff, next, pavv |
|           20 |     2880 | 2026-03-01 | ShindeN         | L   | 0.773      | -            | -                | -                | -         |    -2.14 | AGL, lenci, MaxOff, next, pavv |
|           19 |     2907 | 2026-02-28 | Isurus          | W   | 0.767      | 0.362        | 0.052 (0.014)    | 0.491 (0.136)    | 1 (0.767) |    18.39 | AGL, lenci, MaxOff, next, pavv |
|           18 |     3373 | 2026-02-19 | Sharks          | L   | 0.709      | -            | -                | -                | -         |    -1.66 | AGL, lenci, MaxOff, next, pavv |
|           17 |     3421 | 2026-02-18 | ex-KRÜ          | W   | 0.702      | 0.363        | 0.014 (0.004)    | 0.135 (0.034)    | -         |    10.39 | AGL, lenci, MaxOff, next, pavv |
|           16 |     3487 | 2026-02-17 | ODDIK           | L   | 0.695      | -            | -                | -                | -         |    -1.76 | AGL, lenci, MaxOff, next, pavv |
|           15 |     3582 | 2026-02-15 | Galorys         | L   | 0.682      | -            | -                | -                | -         |    -5.91 | AGL, lenci, MaxOff, next, pavv |
|           14 |     3865 | 2026-02-09 | BESTIA Academy  | L   | 0.642      | -            | -                | -                | -         |   -11.67 | AGL, lenci, MaxOff, next, pavv |
|           13 |     3905 | 2026-02-08 | FOLHA AMARELA   | L   | 0.633      | -            | -                | -                | -         |   -11.66 | AGL, lenci, MaxOff, next, pavv |
|           12 |     3968 | 2026-02-06 | LP              | L   | 0.619      | -            | -                | -                | -         |    -6.37 | AGL, lenci, MaxOff, next, pavv |
|           11 |     4014 | 2026-02-04 | Crashers        | W   | 0.606      | 0.371        | 0.003 (0.001)    | 0.500 (0.112)    | -         |     7.52 | AGL, lenci, MaxOff, next, pavv |
|           10 |     4125 | 2026-01-31 | Marsborne       | L   | 0.582      | -            | -                | -                | -         |    -2.56 | AGL, lenci, MaxOff, next, pavv |
|            9 |     4170 | 2026-01-30 | Isurus          | W   | 0.574      | 0.371        | 0.052 (0.011)    | 0.491 (0.104)    | 1 (0.574) |    14.01 | AGL, lenci, MaxOff, next, pavv |
|            8 |     4178 | 2026-01-30 | Marsborne       | L   | 0.573      | -            | -                | -                | -         |    -2.36 | AGL, lenci, MaxOff, next, pavv |
|            7 |     4367 | 2026-01-23 | Vasco           | L   | 0.527      | -            | -                | -                | -         |    -6.58 | AGL, lenci, MaxOff, next, pavv |
|            6 |     4551 | 2026-01-17 | Galorys         | L   | 0.488      | -            | -                | -                | -         |    -4.20 | AGL, lenci, MaxOff, next, pavv |
|            5 |     5677 | 2025-11-13 | BESTIA          | L   | 0.056      | -            | -                | -                | -         |    -0.10 | AGL, dott1, Hezz, lenci, pavv  |
|            4 |     5756 | 2025-11-11 | FURIA fe        | W   | 0.040      | -            | -                | -                | -         |     0.33 | AGL, dott1, Hezz, lenci, pavv  |
|            3 |     5813 | 2025-11-09 | Vasco           | W   | 0.026      | 0.371        | 0.016 (0.000)    | -                | -         |     0.49 | AGL, dott1, Hezz, lenci, pavv  |
|            2 |     5896 | 2025-11-07 | Prison Breakers | L   | 0.014      | -            | -                | -                | -         |    -0.39 | AGL, dott1, Hezz, lenci, pavv  |
|            1 |     6018 | 2025-11-05 | Bounty Hunters  | L   | 0.001      | -            | -                | -                | -         |    -0.01 | AGL, dott1, Hezz, lenci, pavv  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,279.19)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-05 |      1.000 | $1,000.00      | $1,000.00       |
| 2026-03-13 |      0.856 | $375.00        | $320.82         |
| 2026-03-01 |      0.775 | $4,500.00      | $3,486.85       |
| 2026-02-01 |      0.589 | $800.00        | $471.51         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
