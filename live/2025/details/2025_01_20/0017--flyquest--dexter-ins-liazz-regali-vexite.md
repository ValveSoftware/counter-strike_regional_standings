### Roster Details<br />
Team Name: FlyQuest<br />
Roster: dexter, INS, Liazz, regali, Vexite<br />
Global Rank: [17](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_01_20.md)<br />
Regional Rank: [3]( ../../standings_asia_2025_01_20.md)<br />
<br />
Final Rank Value:  1337.1<br />
<br />
Final Rank Value (1337.1) = Starting Rank Value (1306.6) + Head To Head Adjustments (30.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.570[<sup>1</sup>](#table2)
- Bounty Collected: 0.400[<sup>2</sup>](#table1)
- Opponent Network: 0.082[<sup>2</sup>](#table1)
- LAN Wins: 0.774[<sup>2</sup>](#table1)

The average of these factors is 0.456<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1306.6
- 400 + ( ( 0.456 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 1306.6


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
|           39 |        5 | 2025-01-18 | Spirit         | L   | 1.000      | -            | -                | -                | -         |    -1.03 | dexter, INS, Liazz, regali, Vexite   |
|           38 |       23 | 2025-01-14 | MIBR           | W   | 1.000      | 0.143        | 0.210 (0.030)    | 0.610 (0.087)    | -         |    19.71 | dexter, INS, Liazz, regali, Vexite   |
|           37 |      448 | 2024-12-02 | MIBR           | L   | 0.883      | -            | -                | -                | -         |   -10.99 | aliStair, dexter, INS, Liazz, Vexite |
|           36 |      467 | 2024-12-02 | paiN           | L   | 0.876      | -            | -                | -                | -         |    -9.73 | aliStair, dexter, INS, Liazz, Vexite |
|           35 |      486 | 2024-11-30 | Liquid         | L   | 0.869      | -            | -                | -                | -         |    -4.96 | aliStair, dexter, INS, Liazz, Vexite |
|           34 |      516 | 2024-11-30 | BIG            | W   | 0.863      | 0.143        | 0.299 (0.037)    | 0.493 (0.061)    | 1 (0.863) |    14.96 | aliStair, dexter, INS, Liazz, Vexite |
|           33 |      523 | 2024-11-29 | Complexity     | W   | 0.862      | 0.143        | 0.119 (0.015)    | 0.290 (0.036)    | 1 (0.862) |    14.70 | aliStair, dexter, INS, Liazz, Vexite |
|           32 |      878 | 2024-11-13 | Lynn Vision    | W   | 0.751      | 0.143        | 0.032 (0.003)    | -                | 1 (0.751) |     2.66 | aliStair, dexter, INS, Liazz, Vexite |
|           31 |      888 | 2024-11-12 | DRILLAS        | W   | 0.749      | -            | -                | -                | 1 (0.749) |     1.86 | aliStair, dexter, INS, Liazz, Vexite |
|           30 |      924 | 2024-11-11 | ex-GR          | W   | 0.742      | 0.143        | 0.028 (0.003)    | -                | 1 (0.742) |     1.22 | aliStair, dexter, INS, Liazz, Vexite |
|           29 |      943 | 2024-11-11 | TALON          | L   | 0.738      | -            | -                | -                | -         |   -22.80 | aliStair, dexter, INS, Liazz, Vexite |
|           28 |     1353 | 2024-10-20 | Mindfreak      | W   | 0.589      | 0.333        | -                | 0.157 (0.031)    | -         |     0.59 | aliStair, dexter, INS, Liazz, Vexite |
|           27 |     1407 | 2024-10-18 | Mindfreak      | W   | 0.576      | 0.333        | -                | 0.157 (0.030)    | -         |     0.56 | aliStair, dexter, INS, Liazz, Vexite |
|           26 |     1650 | 2024-10-06 | BIG            | W   | 0.501      | 0.500        | 0.299 (0.075)    | 0.493 (0.123)    | 1 (0.501) |     9.03 | aliStair, dexter, INS, Liazz, Vexite |
|           25 |     1662 | 2024-10-06 | Wildcard       | W   | 0.498      | 0.500        | 0.232 (0.058)    | 0.638 (0.159)    | 1 (0.498) |     8.12 | aliStair, dexter, INS, Liazz, Vexite |
|           24 |     1723 | 2024-10-04 | SAW            | W   | 0.486      | 0.500        | 0.253 (0.061)    | 0.433 (0.105)    | 1 (0.486) |     8.46 | aliStair, dexter, INS, Liazz, Vexite |
|           23 |     1735 | 2024-10-04 | BetBoom        | W   | 0.485      | 0.500        | 0.110 (0.027)    | 0.524 (0.127)    | 1 (0.485) |     4.24 | aliStair, dexter, INS, Liazz, Vexite |
|           22 |     1889 | 2024-09-30 | Rooster        | W   | 0.457      | -            | -                | -                | -         |     0.48 | aliStair, dexter, INS, Liazz, Vexite |
|           21 |     1892 | 2024-09-30 | Rooster        | W   | 0.456      | -            | -                | -                | -         |     0.48 | aliStair, dexter, INS, Liazz, Vexite |
|           20 |     2000 | 2024-09-27 | The Art of War | W   | 0.437      | -            | -                | -                | -         |     0.37 | aliStair, dexter, INS, Liazz, Vexite |
|           19 |     2003 | 2024-09-27 | The Art of War | W   | 0.436      | -            | -                | -                | -         |     0.38 | aliStair, dexter, INS, Liazz, Vexite |
|           18 |     2046 | 2024-09-26 | Housebets      | W   | 0.430      | -            | -                | -                | -         |     0.32 | aliStair, dexter, INS, Liazz, Vexite |
|           17 |     2050 | 2024-09-26 | Housebets      | W   | 0.430      | -            | -                | -                | -         |     0.33 | aliStair, dexter, INS, Liazz, Vexite |
|           16 |     2102 | 2024-09-25 | Arcade         | W   | 0.423      | -            | -                | -                | -         |     0.29 | aliStair, dexter, INS, Liazz, Vexite |
|           15 |     2106 | 2024-09-25 | Arcade         | W   | 0.423      | -            | -                | -                | -         |     0.29 | aliStair, dexter, INS, Liazz, Vexite |
|           14 |     2637 | 2024-09-07 | HEROIC         | L   | 0.304      | -            | -                | -                | -         |    -6.05 | aliStair, dexter, INS, Liazz, Vexite |
|           13 |     2655 | 2024-09-06 | Lynn Vision    | W   | 0.299      | 0.889        | 0.032 (0.009)    | 0.217 (0.058)    | 1 (0.299) |     1.21 | aliStair, dexter, INS, Liazz, Vexite |
|           12 |     2730 | 2024-09-04 | FaZe           | L   | 0.285      | -            | -                | -                | -         |    -0.30 | aliStair, dexter, INS, Liazz, Vexite |
|           11 |     2772 | 2024-09-03 | Eternal Fire   | L   | 0.277      | -            | -                | -                | -         |    -3.59 | aliStair, dexter, INS, Liazz, Vexite |
|           10 |     2857 | 2024-08-30 | Vantage        | W   | 0.250      | -            | -                | -                | -         |     0.09 | aliStair, dexter, INS, Liazz, Vexite |
|            9 |     2859 | 2024-08-30 | Vantage        | W   | 0.250      | -            | -                | -                | -         |     0.09 | aliStair, dexter, INS, Liazz, Vexite |
|            8 |     3088 | 2024-08-26 | MANTRA         | W   | 0.223      | -            | -                | -                | -         |     0.15 | aliStair, dexter, INS, Liazz, Vexite |
|            7 |     3098 | 2024-08-26 | MANTRA         | W   | 0.223      | -            | -                | -                | -         |     0.15 | aliStair, dexter, INS, Liazz, Vexite |
|            6 |     3281 | 2024-08-21 | KZG            | W   | 0.190      | -            | -                | -                | -         |     0.15 | aliStair, dexter, INS, Liazz, Vexite |
|            5 |     3288 | 2024-08-21 | KZG            | W   | 0.190      | -            | -                | -                | -         |     0.15 | aliStair, dexter, INS, Liazz, Vexite |
|            4 |     3504 | 2024-08-13 | DXA            | W   | 0.137      | -            | -                | -                | -         |     0.10 | aliStair, dexter, INS, Liazz, Vexite |
|            3 |     3512 | 2024-08-13 | DXA            | W   | 0.136      | -            | -                | -                | -         |     0.10 | aliStair, dexter, INS, Liazz, Vexite |
|            2 |     3647 | 2024-08-08 | The MongolZ    | L   | 0.104      | -            | -                | -                | -         |    -0.13 | aliStair, dexter, INS, Liazz, Vexite |
|            1 |     3695 | 2024-08-07 | BIG            | L   | 0.097      | -            | -                | -                | -         |    -1.10 | aliStair, dexter, INS, Liazz, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($38,902.18)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.884 | $10,000.00     | $8,836.40       |
| 2024-10-20 |      0.589 | $3,250.00      | $1,914.88       |
| 2024-10-06 |      0.501 | $50,000.00     | $25,025.36      |
| 2024-09-22 |      0.406 | $7,000.00      | $2,843.12       |
| 2024-08-09 |      0.113 | $2,500.00      | $282.42         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
