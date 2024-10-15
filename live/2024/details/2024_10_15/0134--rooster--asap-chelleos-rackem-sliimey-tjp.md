### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, Rackem, sliimey, TjP<br />
Global Rank: [134](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_10_15.md)<br />
Regional Rank: [9]( ../../standings_asia_2024_10_15.md)<br />
<br />
Final Rank Value:  748.8<br />
<br />
Final Rank Value (748.8) = Starting Rank Value (747.7) + Head To Head Adjustments (1.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.378[<sup>1</sup>](#table2)
- Bounty Collected: 0.282[<sup>2</sup>](#table1)
- Opponent Network: 0.050[<sup>2</sup>](#table1)
- LAN Wins: 0.006[<sup>2</sup>](#table1)

The average of these factors is 0.179<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 747.7
- 400 + ( ( 0.179 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 747.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |       67 | 2024-10-10 | MANTRA             | W   | 1.000      | 0.333        | 0.001 (0.000)    | -                | 0 (0.000) |     9.23 | asap, chelleos, Rackem, sliimey, TjP |
|           45 |       69 | 2024-10-10 | MANTRA             | L   | 1.000      | -            | -                | -                | -         |   -22.78 | asap, chelleos, Rackem, sliimey, TjP |
|           44 |       99 | 2024-10-09 | KZG                | L   | 1.000      | -            | -                | -                | -         |   -21.96 | asap, chelleos, Rackem, sliimey, TjP |
|           43 |      102 | 2024-10-09 | KZG                | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.197 (0.066)    | 0 (0.000) |     9.09 | asap, chelleos, Rackem, sliimey, TjP |
|           42 |      216 | 2024-10-05 | BetBoom            | L   | 1.000      | -            | -                | -                | -         |    -2.30 | asap, chelleos, jhd, sliimey, TjP    |
|           41 |      253 | 2024-10-04 | SAW                | L   | 1.000      | -            | -                | -                | -         |    -0.73 | asap, chelleos, jhd, sliimey, TjP    |
|           40 |      410 | 2024-09-30 | FlyQuest           | L   | 1.000      | -            | -                | -                | -         |    -2.12 | asap, chelleos, Rackem, sliimey, TjP |
|           39 |      413 | 2024-09-30 | FlyQuest           | L   | 1.000      | -            | -                | -                | -         |    -2.17 | asap, chelleos, Rackem, sliimey, TjP |
|           38 |      616 | 2024-09-25 | Housebets          | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.156 (0.052)    | 0 (0.000) |     9.54 | asap, chelleos, Rackem, sliimey, TjP |
|           37 |      625 | 2024-09-25 | Housebets          | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.156 (0.052)    | 0 (0.000) |    10.29 | asap, chelleos, Rackem, sliimey, TjP |
|           36 |      985 | 2024-09-13 | Astralis           | L   | 0.987      | -            | -                | -                | -         |    -0.88 | asap, chelleos, dangeR, sliimey, TjP |
|           35 |     1051 | 2024-09-11 | BIG                | L   | 0.974      | -            | -                | -                | -         |    -0.98 | asap, chelleos, dangeR, sliimey, TjP |
|           34 |     1081 | 2024-09-10 | MOUZ               | L   | 0.967      | -            | -                | -                | -         |    -0.06 | asap, chelleos, dangeR, sliimey, TjP |
|           33 |     1420 | 2024-08-29 | TALON              | L   | 0.886      | -            | -                | -                | -         |   -18.50 | asap, chelleos, dangeR, sliimey, TjP |
|           32 |     1483 | 2024-08-28 | TALON              | W   | 0.879      | -            | -                | -                | 0 (0.000) |     8.53 | asap, chelleos, dangeR, sliimey, TjP |
|           31 |     1535 | 2024-08-27 | The Art of War     | W   | 0.872      | 0.143        | -                | 0.366 (0.046)    | 0 (0.000) |    11.80 | asap, chelleos, dangeR, sliimey, TjP |
|           30 |     1544 | 2024-08-27 | Vantage            | W   | 0.871      | -            | -                | -                | 0 (0.000) |     6.09 | asap, chelleos, dangeR, sliimey, TjP |
|           29 |     1718 | 2024-08-22 | The Art of War     | W   | 0.840      | 0.143        | -                | 0.366 (0.044)    | 0 (0.000) |    11.08 | asap, chelleos, dangeR, sliimey, TjP |
|           28 |     1734 | 2024-08-22 | Mindfreak          | W   | 0.838      | 0.143        | 0.002 (0.000)    | -                | 0 (0.000) |    12.56 | asap, chelleos, dangeR, sliimey, TjP |
|           27 |     1784 | 2024-08-21 | Housebets          | W   | 0.833      | -            | -                | -                | -         |    11.33 | asap, chelleos, dangeR, sliimey, TjP |
|           26 |     1811 | 2024-08-21 | Mindfreak          | L   | 0.831      | -            | -                | -                | -         |   -12.94 | asap, chelleos, dangeR, sliimey, TjP |
|           25 |     2028 | 2024-08-13 | Arcade             | W   | 0.779      | 0.333        | 0.002 (0.000)    | 0.198 (0.051)    | -         |     9.79 | asap, chelleos, dangeR, sliimey, TjP |
|           24 |     2031 | 2024-08-13 | Arcade             | L   | 0.779      | -            | -                | -                | -         |   -15.09 | asap, chelleos, dangeR, sliimey, TjP |
|           23 |     2218 | 2024-08-07 | Vantage            | W   | 0.739      | -            | -                | -                | -         |     5.90 | asap, chelleos, dangeR, sliimey, TjP |
|           22 |     2226 | 2024-08-07 | Vantage            | L   | 0.738      | -            | -                | -                | -         |   -17.80 | asap, chelleos, dangeR, sliimey, TjP |
|           21 |     2745 | 2024-07-23 | The Art of War     | L   | 0.639      | -            | -                | -                | -         |   -12.38 | asap, chelleos, dangeR, Hatz, TjP    |
|           20 |     2751 | 2024-07-23 | The Art of War     | L   | 0.639      | -            | -                | -                | -         |   -13.05 | asap, chelleos, dangeR, Hatz, TjP    |
|           19 |     2932 | 2024-07-18 | DXA                | W   | 0.605      | 0.333        | 0.002 (0.000)    | 0.225 (0.045)    | -         |     6.99 | asap, chelleos, dangeR, Hatz, TjP    |
|           18 |     2937 | 2024-07-18 | DXA                | L   | 0.605      | -            | -                | -                | -         |   -12.40 | asap, chelleos, dangeR, Hatz, TjP    |
|           17 |     3052 | 2024-07-16 | Mindfreak          | W   | 0.592      | 0.333        | 0.002 (0.000)    | 0.245 (0.048)    | -         |     6.61 | asap, chelleos, dangeR, Hatz, TjP    |
|           16 |     3055 | 2024-07-16 | Mindfreak          | W   | 0.592      | 0.333        | 0.002 (0.000)    | 0.245 (0.048)    | -         |     6.94 | asap, chelleos, dangeR, Hatz, TjP    |
|           15 |     3563 | 2024-06-09 | FlyQuest           | L   | 0.345      | -            | -                | -                | -         |    -0.67 | asap, chelleos, dangeR, nettik, TjP  |
|           14 |     3671 | 2024-06-07 | FlyQuest           | W   | 0.332      | 0.333        | 0.231 (0.026)    | 0.445 (0.049)    | -         |     9.87 | asap, chelleos, dangeR, nettik, TjP  |
|           13 |     3745 | 2024-06-06 | Housebets          | W   | 0.325      | -            | -                | -                | -         |     3.84 | asap, chelleos, dangeR, nettik, TjP  |
|           12 |     4151 | 2024-05-22 | Vantage            | W   | 0.225      | -            | -                | -                | -         |     1.49 | asap, chelleos, dangeR, nettik, TjP  |
|           11 |     4155 | 2024-05-22 | Vantage            | W   | 0.225      | -            | -                | -                | -         |     1.51 | asap, chelleos, dangeR, nettik, TjP  |
|           10 |     4411 | 2024-05-15 | Canon Event        | W   | 0.179      | -            | -                | -                | -         |     1.10 | asap, chelleos, dangeR, nettik, TjP  |
|            9 |     4414 | 2024-05-15 | Canon Event        | W   | 0.178      | -            | -                | -                | -         |     1.11 | asap, chelleos, dangeR, nettik, TjP  |
|            8 |     4601 | 2024-05-08 | KZG                | W   | 0.132      | -            | -                | -                | -         |     1.59 | asap, chelleos, dangeR, nettik, TjP  |
|            7 |     4603 | 2024-05-08 | KZG                | W   | 0.132      | -            | -                | -                | -         |     1.61 | asap, chelleos, dangeR, nettik, TjP  |
|            6 |     4834 | 2024-04-27 | MIBR               | L   | 0.058      | -            | -                | -                | -         |    -0.05 | asap, chelleos, dangeR, nettik, TjP  |
|            5 |     4855 | 2024-04-26 | KZG                | W   | 0.052      | -            | -                | -                | 1 (0.052) |     0.64 | asap, chelleos, dangeR, nettik, TjP  |
|            4 |     4858 | 2024-04-25 | Rebels             | L   | 0.051      | -            | -                | -                | -         |    -0.42 | asap, chelleos, dangeR, nettik, TjP  |
|            3 |     4989 | 2024-04-20 | Bad News Kangaroos | L   | 0.012      | -            | -                | -                | -         |    -0.26 | asap, chelleos, dangeR, nettik, TjP  |
|            2 |     5031 | 2024-04-19 | FlyQuest           | L   | 0.006      | -            | -                | -                | -         |    -0.01 | asap, chelleos, dangeR, nettik, TjP  |
|            1 |     5037 | 2024-04-19 | Bad News Kangaroos | W   | 0.005      | -            | -                | -                | -         |     0.05 | asap, chelleos, dangeR, nettik, TjP  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,986.80)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-10 |      1.000 | $600.00        | $600.00         |
| 2024-10-06 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-09-22 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-06-09 |      0.345 | $2,000.00      | $690.21         |
| 2024-04-28 |      0.066 | $3,000.00      | $196.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
