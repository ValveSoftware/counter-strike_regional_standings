### Roster Details<br />
Team Name: Bad News Chickens<br />
Roster: desh, fREQ, Leomonster, short, zede<br />
Global Rank: [147](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_17.md)<br />
Regional Rank: [36]( ../../standings_americas_2025_01_17.md)<br />
<br />
Final Rank Value:  724.9<br />
<br />
Final Rank Value (724.9) = Starting Rank Value (689.6) + Head To Head Adjustments (35.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 689.6
- 400 + ( ( 0.146 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 689.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |       22 | 2025-01-10 | BESTIA          | L   | 1.000      | -            | -                | -                | -         |    -2.93 | desh, fREQ, Leomonster, short, zede   |
|           14 |       34 | 2025-01-09 | 9z Academy      | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.264 (0.102)    | 0 (0.000) |     8.85 | desh, fREQ, Leomonster, short, zede   |
|           13 |      142 | 2024-12-18 | LaChampionsLiga | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.124 (0.018)    | 0 (0.000) |    11.39 | Alisson, desh, Leomonster, short, skr |
|           12 |      162 | 2024-12-16 | ex-Vikings      | W   | 0.987      | 0.143        | 0.015 (0.002)    | 0.330 (0.047)    | 0 (0.000) |    16.75 | Alisson, desh, Leomonster, short, skr |
|           11 |      234 | 2024-12-13 | GameHunters     | W   | 0.965      | 0.143        | 0.002 (0.000)    | 0.332 (0.046)    | 0 (0.000) |    16.51 | Alisson, desh, Leomonster, short, skr |
|           10 |      555 | 2024-11-27 | Tropa do Taco   | L   | 0.859      | -            | -                | -                | -         |    -8.95 | Alisson, desh, Leomonster, short, skr |
|            9 |      730 | 2024-11-17 | Tropa do Taco   | L   | 0.794      | -            | -                | -                | -         |    -9.78 | Alisson, desh, Leomonster, short, skr |
|            8 |     1017 | 2024-11-06 | GameHunters     | L   | 0.720      | -            | -                | -                | -         |   -11.03 | Alisson, desh, Leomonster, short, skr |
|            7 |     1644 | 2024-10-06 | MIBR Academy    | W   | 0.513      | 0.270        | 0.003 (0.000)    | 0.194 (0.027)    | 0 (0.000) |     7.31 | Alisson, desh, Leomonster, short, skr |
|            6 |     1959 | 2024-09-27 | Case            | L   | 0.454      | -            | -                | -                | -         |    -5.98 | Alisson, desh, Leomonster, short, skr |
|            5 |     1962 | 2024-09-27 | GameHunters     | W   | 0.453      | 0.143        | 0.002 (0.000)    | 0.332 (0.021)    | 0 (0.000) |     6.81 | Alisson, desh, Leomonster, short, skr |
|            4 |     2617 | 2024-09-07 | MIBR Academy    | W   | 0.319      | 0.270        | 0.003 (0.000)    | 0.194 (0.017)    | 0 (0.000) |     4.72 | Alisson, desh, Leomonster, short, skr |
|            3 |     2638 | 2024-09-06 | Yawara          | W   | 0.313      | 0.270        | 0.005 (0.000)    | 0.266 (0.022)    | 0 (0.000) |     4.79 | Alisson, desh, Leomonster, short, skr |
|            2 |     2780 | 2024-09-02 | Solid           | L   | 0.285      | -            | -                | -                | -         |    -2.19 | Alisson, desh, Leomonster, short, skr |
|            1 |     3874 | 2024-08-01 | Case            | L   | 0.074      | -            | -                | -                | -         |    -0.99 | Alisson, desh, Leomonster, short, skr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,747.09)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-17 |      0.794 | $523.00        | $415.37         |
| 2024-10-06 |      0.513 | $1,600.00      | $821.51         |
| 2024-09-07 |      0.319 | $1,600.00      | $510.21         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
