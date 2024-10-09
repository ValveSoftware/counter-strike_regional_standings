### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, Rackem, sliimey, TjP<br />
Global Rank: [128](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_10_09.md)<br />
Regional Rank: [9]( ../../standings_asia_2024_10_09.md)<br />
<br />
Final Rank Value:  763.7<br />
<br />
Final Rank Value (763.7) = Starting Rank Value (750.4) + Head To Head Adjustments (13.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.375[<sup>1</sup>](#table2)
- Bounty Collected: 0.287[<sup>2</sup>](#table1)
- Opponent Network: 0.053[<sup>2</sup>](#table1)
- LAN Wins: 0.010[<sup>2</sup>](#table1)

The average of these factors is 0.181<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 750.4
- 400 + ( ( 0.181 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 750.4


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
|           46 |        2 | 2024-10-09 | KZG                | L   | 1.000      | -            | -                | -                | -         |   -22.31 | asap, chelleos, Rackem, sliimey, TjP |
|           45 |        5 | 2024-10-09 | KZG                | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.200 (0.067)    | 0 (0.000) |     8.72 | asap, chelleos, Rackem, sliimey, TjP |
|           44 |      119 | 2024-10-05 | BetBoom            | L   | 1.000      | -            | -                | -                | -         |    -2.10 | asap, chelleos, jhd, sliimey, TjP    |
|           43 |      156 | 2024-10-04 | SAW                | L   | 1.000      | -            | -                | -                | -         |    -0.68 | asap, chelleos, jhd, sliimey, TjP    |
|           42 |      313 | 2024-09-30 | FlyQuest           | L   | 1.000      | -            | -                | -                | -         |    -2.09 | asap, chelleos, Rackem, sliimey, TjP |
|           41 |      316 | 2024-09-30 | FlyQuest           | L   | 1.000      | -            | -                | -                | -         |    -2.14 | asap, chelleos, Rackem, sliimey, TjP |
|           40 |      519 | 2024-09-25 | Housebets          | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.159 (0.053)    | 0 (0.000) |     9.25 | asap, chelleos, Rackem, sliimey, TjP |
|           39 |      528 | 2024-09-25 | Housebets          | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.159 (0.053)    | 0 (0.000) |     9.97 | asap, chelleos, Rackem, sliimey, TjP |
|           38 |      888 | 2024-09-13 | Astralis           | L   | 1.000      | -            | -                | -                | -         |    -0.77 | asap, chelleos, dangeR, sliimey, TjP |
|           37 |      954 | 2024-09-11 | BIG                | L   | 1.000      | -            | -                | -                | -         |    -1.03 | asap, chelleos, dangeR, sliimey, TjP |
|           36 |      984 | 2024-09-10 | MOUZ               | L   | 1.000      | -            | -                | -                | -         |    -0.08 | asap, chelleos, dangeR, sliimey, TjP |
|           35 |     1323 | 2024-08-29 | TALON              | L   | 0.925      | -            | -                | -                | -         |   -19.21 | asap, chelleos, dangeR, sliimey, TjP |
|           34 |     1386 | 2024-08-28 | TALON              | W   | 0.918      | -            | -                | -                | 0 (0.000) |     8.98 | asap, chelleos, dangeR, sliimey, TjP |
|           33 |     1438 | 2024-08-27 | The Art of War     | W   | 0.911      | 0.143        | -                | 0.369 (0.048)    | 0 (0.000) |    12.25 | asap, chelleos, dangeR, sliimey, TjP |
|           32 |     1447 | 2024-08-27 | Vantage            | W   | 0.911      | -            | -                | -                | 0 (0.000) |     6.12 | asap, chelleos, dangeR, sliimey, TjP |
|           31 |     1621 | 2024-08-22 | The Art of War     | W   | 0.879      | 0.143        | -                | 0.369 (0.046)    | 0 (0.000) |    11.52 | asap, chelleos, dangeR, sliimey, TjP |
|           30 |     1637 | 2024-08-22 | Mindfreak          | W   | 0.878      | 0.143        | 0.002 (0.000)    | -                | 0 (0.000) |    12.87 | asap, chelleos, dangeR, sliimey, TjP |
|           29 |     1687 | 2024-08-21 | Housebets          | W   | 0.872      | 0.143        | 0.001 (0.000)    | -                | 0 (0.000) |    11.61 | asap, chelleos, dangeR, sliimey, TjP |
|           28 |     1714 | 2024-08-21 | Mindfreak          | L   | 0.871      | -            | -                | -                | -         |   -13.79 | asap, chelleos, dangeR, sliimey, TjP |
|           27 |     1931 | 2024-08-13 | Arcade             | W   | 0.818      | 0.333        | 0.001 (0.000)    | 0.204 (0.056)    | -         |    10.01 | asap, chelleos, dangeR, sliimey, TjP |
|           26 |     1934 | 2024-08-13 | Arcade             | L   | 0.818      | -            | -                | -                | -         |   -16.14 | asap, chelleos, dangeR, sliimey, TjP |
|           25 |     2121 | 2024-08-07 | Vantage            | W   | 0.778      | -            | -                | -                | -         |     6.13 | asap, chelleos, dangeR, sliimey, TjP |
|           24 |     2129 | 2024-08-07 | Vantage            | L   | 0.778      | -            | -                | -                | -         |   -18.85 | asap, chelleos, dangeR, sliimey, TjP |
|           23 |     2648 | 2024-07-23 | The Art of War     | L   | 0.679      | -            | -                | -                | -         |   -13.23 | asap, chelleos, dangeR, Hatz, TjP    |
|           22 |     2654 | 2024-07-23 | The Art of War     | L   | 0.678      | -            | -                | -                | -         |   -13.98 | asap, chelleos, dangeR, Hatz, TjP    |
|           21 |     2835 | 2024-07-18 | DXA                | W   | 0.645      | 0.333        | -                | 0.231 (0.050)    | -         |     6.82 | asap, chelleos, dangeR, Hatz, TjP    |
|           20 |     2840 | 2024-07-18 | DXA                | L   | 0.645      | -            | -                | -                | -         |   -13.86 | asap, chelleos, dangeR, Hatz, TjP    |
|           19 |     2955 | 2024-07-16 | Mindfreak          | W   | 0.632      | 0.333        | 0.002 (0.000)    | 0.252 (0.053)    | -         |     6.96 | asap, chelleos, dangeR, Hatz, TjP    |
|           18 |     2958 | 2024-07-16 | Mindfreak          | W   | 0.631      | 0.333        | 0.002 (0.000)    | 0.252 (0.053)    | -         |     7.33 | asap, chelleos, dangeR, Hatz, TjP    |
|           17 |     3466 | 2024-06-09 | FlyQuest           | L   | 0.385      | -            | -                | -                | -         |    -0.75 | asap, chelleos, dangeR, nettik, TjP  |
|           16 |     3574 | 2024-06-07 | FlyQuest           | W   | 0.372      | 0.333        | 0.239 (0.030)    | 0.453 (0.056)    | -         |    11.05 | asap, chelleos, dangeR, nettik, TjP  |
|           15 |     3648 | 2024-06-06 | Housebets          | W   | 0.365      | 0.333        | 0.001 (0.000)    | -                | -         |     4.26 | asap, chelleos, dangeR, nettik, TjP  |
|           14 |     4054 | 2024-05-22 | Vantage            | W   | 0.265      | -            | -                | -                | -         |     1.71 | asap, chelleos, dangeR, nettik, TjP  |
|           13 |     4058 | 2024-05-22 | Vantage            | W   | 0.265      | -            | -                | -                | -         |     1.74 | asap, chelleos, dangeR, nettik, TjP  |
|           12 |     4314 | 2024-05-15 | Canon Event        | W   | 0.218      | -            | -                | -                | -         |     1.33 | asap, chelleos, dangeR, nettik, TjP  |
|           11 |     4317 | 2024-05-15 | Canon Event        | W   | 0.218      | -            | -                | -                | -         |     1.34 | asap, chelleos, dangeR, nettik, TjP  |
|           10 |     4504 | 2024-05-08 | KZG                | W   | 0.172      | -            | -                | -                | -         |     2.04 | asap, chelleos, dangeR, nettik, TjP  |
|            9 |     4506 | 2024-05-08 | KZG                | W   | 0.171      | -            | -                | -                | -         |     2.06 | asap, chelleos, dangeR, nettik, TjP  |
|            8 |     4737 | 2024-04-27 | MIBR               | L   | 0.097      | -            | -                | -                | -         |    -0.07 | asap, chelleos, dangeR, nettik, TjP  |
|            7 |     4758 | 2024-04-26 | KZG                | W   | 0.092      | -            | -                | -                | 1 (0.092) |     1.11 | asap, chelleos, dangeR, nettik, TjP  |
|            6 |     4761 | 2024-04-25 | Rebels             | L   | 0.090      | -            | -                | -                | -         |    -0.73 | asap, chelleos, dangeR, nettik, TjP  |
|            5 |     4892 | 2024-04-20 | Bad News Kangaroos | L   | 0.051      | -            | -                | -                | -         |    -1.10 | asap, chelleos, dangeR, nettik, TjP  |
|            4 |     4934 | 2024-04-19 | FlyQuest           | L   | 0.046      | -            | -                | -                | -         |    -0.07 | asap, chelleos, dangeR, nettik, TjP  |
|            3 |     4940 | 2024-04-19 | Bad News Kangaroos | W   | 0.045      | -            | -                | -                | -         |     0.45 | asap, chelleos, dangeR, nettik, TjP  |
|            2 |     5015 | 2024-04-17 | Arcade             | W   | 0.032      | -            | -                | -                | -         |     0.44 | asap, chelleos, dangeR, nettik, TjP  |
|            1 |     5030 | 2024-04-17 | Canon Event        | W   | 0.032      | -            | -                | -                | -         |     0.20 | asap, chelleos, dangeR, nettik, TjP  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,584.90)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-06 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-09-22 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-06-09 |      0.385 | $2,000.00      | $769.45         |
| 2024-04-28 |      0.105 | $3,000.00      | $315.45         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
