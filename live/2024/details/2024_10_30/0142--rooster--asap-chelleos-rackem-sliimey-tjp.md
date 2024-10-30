### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, Rackem, sliimey, TjP<br />
Global Rank: [142](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_10_30.md)<br />
Regional Rank: [11]( ../../standings_asia_2024_10_30.md)<br />
<br />
Final Rank Value:  763.1<br />
<br />
Final Rank Value (763.1) = Starting Rank Value (755.9) + Head To Head Adjustments (7.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.388[<sup>1</sup>](#table2)
- Bounty Collected: 0.288[<sup>2</sup>](#table1)
- Opponent Network: 0.042[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.179<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 755.9
- 400 + ( ( 0.179 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 755.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      375 | 2024-10-10 | MANTRA         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.43 | asap, chelleos, Rackem, sliimey, TjP |
|           39 |      377 | 2024-10-10 | MANTRA         | L   | 1.000      | -            | -                | -                | -         |   -22.57 | asap, chelleos, Rackem, sliimey, TjP |
|           38 |      407 | 2024-10-09 | KZG            | L   | 1.000      | -            | -                | -                | -         |   -21.37 | asap, chelleos, Rackem, sliimey, TjP |
|           37 |      410 | 2024-10-09 | KZG            | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.184 (0.061)    | 0 (0.000) |     9.70 | asap, chelleos, Rackem, sliimey, TjP |
|           36 |      524 | 2024-10-05 | BetBoom        | L   | 1.000      | -            | -                | -                | -         |    -2.33 | asap, chelleos, jhd, sliimey, TjP    |
|           35 |      561 | 2024-10-04 | SAW            | L   | 1.000      | -            | -                | -                | -         |    -0.21 | asap, chelleos, jhd, sliimey, TjP    |
|           34 |      718 | 2024-09-30 | FlyQuest       | L   | 0.998      | -            | -                | -                | -         |    -1.77 | asap, chelleos, Rackem, sliimey, TjP |
|           33 |      721 | 2024-09-30 | FlyQuest       | L   | 0.998      | -            | -                | -                | -         |    -1.81 | asap, chelleos, Rackem, sliimey, TjP |
|           32 |      924 | 2024-09-25 | Housebets      | W   | 0.965      | 0.333        | 0.007 (0.002)    | 0.153 (0.049)    | 0 (0.000) |    10.33 | asap, chelleos, Rackem, sliimey, TjP |
|           31 |      933 | 2024-09-25 | Housebets      | W   | 0.965      | 0.333        | 0.007 (0.002)    | 0.153 (0.049)    | 0 (0.000) |    11.16 | asap, chelleos, Rackem, sliimey, TjP |
|           30 |     1293 | 2024-09-13 | Astralis       | L   | 0.886      | -            | -                | -                | -         |    -0.60 | asap, chelleos, dangeR, sliimey, TjP |
|           29 |     1359 | 2024-09-11 | BIG            | L   | 0.873      | -            | -                | -                | -         |    -0.60 | asap, chelleos, dangeR, sliimey, TjP |
|           28 |     1389 | 2024-09-10 | MOUZ           | L   | 0.866      | -            | -                | -                | -         |    -0.05 | asap, chelleos, dangeR, sliimey, TjP |
|           27 |     1728 | 2024-08-29 | TALON          | L   | 0.785      | -            | -                | -                | -         |   -16.77 | asap, chelleos, dangeR, sliimey, TjP |
|           26 |     1791 | 2024-08-28 | TALON          | W   | 0.778      | -            | -                | -                | 0 (0.000) |     7.30 | asap, chelleos, dangeR, sliimey, TjP |
|           25 |     1843 | 2024-08-27 | The Art of War | W   | 0.771      | 0.143        | 0.005 (0.001)    | 0.350 (0.039)    | 0 (0.000) |    11.17 | asap, chelleos, dangeR, sliimey, TjP |
|           24 |     1852 | 2024-08-27 | Vantage        | W   | 0.770      | -            | -                | -                | 0 (0.000) |     5.31 | asap, chelleos, dangeR, sliimey, TjP |
|           23 |     2026 | 2024-08-22 | The Art of War | W   | 0.739      | 0.143        | -                | 0.350 (0.037)    | 0 (0.000) |    10.59 | asap, chelleos, dangeR, sliimey, TjP |
|           22 |     2042 | 2024-08-22 | Mindfreak      | W   | 0.737      | 0.143        | 0.010 (0.001)    | -                | 0 (0.000) |    11.81 | asap, chelleos, dangeR, sliimey, TjP |
|           21 |     2092 | 2024-08-21 | Housebets      | W   | 0.732      | 0.143        | 0.007 (0.001)    | -                | 0 (0.000) |    10.95 | asap, chelleos, dangeR, sliimey, TjP |
|           20 |     2119 | 2024-08-21 | Mindfreak      | L   | 0.731      | -            | -                | -                | -         |   -10.70 | asap, chelleos, dangeR, sliimey, TjP |
|           19 |     2336 | 2024-08-13 | Arcade         | W   | 0.678      | 0.333        | -                | 0.181 (0.041)    | -         |     8.90 | asap, chelleos, dangeR, sliimey, TjP |
|           18 |     2339 | 2024-08-13 | Arcade         | L   | 0.678      | -            | -                | -                | -         |   -12.77 | asap, chelleos, dangeR, sliimey, TjP |
|           17 |     2526 | 2024-08-07 | Vantage        | W   | 0.638      | -            | -                | -                | -         |     4.93 | asap, chelleos, dangeR, sliimey, TjP |
|           16 |     2534 | 2024-08-07 | Vantage        | L   | 0.638      | -            | -                | -                | -         |   -15.53 | asap, chelleos, dangeR, sliimey, TjP |
|           15 |     3053 | 2024-07-23 | The Art of War | L   | 0.538      | -            | -                | -                | -         |    -9.61 | asap, chelleos, dangeR, Hatz, TjP    |
|           14 |     3059 | 2024-07-23 | The Art of War | L   | 0.538      | -            | -                | -                | -         |   -10.06 | asap, chelleos, dangeR, Hatz, TjP    |
|           13 |     3240 | 2024-07-18 | DXA            | W   | 0.505      | 0.333        | -                | 0.208 (0.035)    | -         |     6.06 | asap, chelleos, dangeR, Hatz, TjP    |
|           12 |     3245 | 2024-07-18 | DXA            | L   | 0.504      | -            | -                | -                | -         |   -10.09 | asap, chelleos, dangeR, Hatz, TjP    |
|           11 |     3360 | 2024-07-16 | Mindfreak      | W   | 0.491      | 0.333        | 0.010 (0.002)    | 0.229 (0.037)    | -         |     6.50 | asap, chelleos, dangeR, Hatz, TjP    |
|           10 |     3363 | 2024-07-16 | Mindfreak      | W   | 0.491      | 0.333        | 0.010 (0.002)    | 0.229 (0.037)    | -         |     6.79 | asap, chelleos, dangeR, Hatz, TjP    |
|            9 |     3871 | 2024-06-09 | FlyQuest       | L   | 0.244      | -            | -                | -                | -         |    -0.38 | asap, chelleos, dangeR, nettik, TjP  |
|            8 |     3979 | 2024-06-07 | FlyQuest       | W   | 0.231      | 0.333        | 0.287 (0.022)    | 0.443 (0.034)    | -         |     6.95 | asap, chelleos, dangeR, nettik, TjP  |
|            7 |     4053 | 2024-06-06 | Housebets      | W   | 0.224      | 0.333        | 0.007 (0.001)    | -                | -         |     3.09 | asap, chelleos, dangeR, nettik, TjP  |
|            6 |     4459 | 2024-05-22 | Vantage        | W   | 0.125      | -            | -                | -                | -         |     0.82 | asap, chelleos, dangeR, nettik, TjP  |
|            5 |     4463 | 2024-05-22 | Vantage        | W   | 0.124      | -            | -                | -                | -         |     0.82 | asap, chelleos, dangeR, nettik, TjP  |
|            4 |     4719 | 2024-05-15 | Canon Event    | W   | 0.078      | -            | -                | -                | -         |     0.47 | asap, chelleos, dangeR, nettik, TjP  |
|            3 |     4722 | 2024-05-15 | Canon Event    | W   | 0.078      | -            | -                | -                | -         |     0.48 | asap, chelleos, dangeR, nettik, TjP  |
|            2 |     4909 | 2024-05-08 | KZG            | W   | 0.031      | -            | -                | -                | -         |     0.41 | asap, chelleos, dangeR, nettik, TjP  |
|            1 |     4911 | 2024-05-08 | KZG            | W   | 0.031      | -            | -                | -                | -         |     0.41 | asap, chelleos, dangeR, nettik, TjP  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,404.78)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      1.000 | $600.00        | $600.00         |
| 2024-10-06 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-09-22 |      0.947 | $3,500.00      | $3,316.11       |
| 2024-06-09 |      0.244 | $2,000.00      | $488.67         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
