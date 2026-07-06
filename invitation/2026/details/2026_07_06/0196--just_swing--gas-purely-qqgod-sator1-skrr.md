### Roster Details<br />
Team Name: Just Swing<br />
Roster: gas, Purely, qqGOD, sATOR1, skrr<br />
Global Rank: [196](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_07_06.md)<br />
Regional Rank: [24]( ../../standings_asia_2026_07_06.md)<br />
<br />
Final Rank Value:  749.1<br />
<br />
Final Rank Value (749.1) = Starting Rank Value (745.5) + Head To Head Adjustments (3.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.249[<sup>1</sup>](#table2)
- Bounty Collected: 0.239[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.218[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 745.5
- 400 + ( ( 0.183 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 745.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |     1602 | 2026-05-02 | Last Bullet       | L   | 0.766      | -            | -                | -                | -         |   -10.04 | gas, Purely, qqGOD, sATOR1, skrr |
|           27 |     1620 | 2026-05-02 | ZEVS              | W   | 0.764      | 0.471        | 0.000 (0.000)    | 0.028 (0.010)    | 1 (0.764) |     8.26 | gas, Purely, qqGOD, sATOR1, skrr |
|           26 |     1656 | 2026-05-01 | Chaos             | W   | 0.760      | 0.471        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.760) |     4.85 | gas, Purely, qqGOD, sATOR1, skrr |
|           25 |     1701 | 2026-04-30 | The Huns          | L   | 0.753      | -            | -                | -                | -         |    -3.35 | gas, Purely, qqGOD, sATOR1, skrr |
|           24 |     1702 | 2026-04-30 | Alter Ego         | L   | 0.753      | -            | -                | -                | -         |    -8.60 | gas, Purely, qqGOD, sATOR1, skrr |
|           23 |     1747 | 2026-04-29 | Last Bullet       | W   | 0.747      | 0.333        | 0.002 (0.001)    | 0.206 (0.051)    | 0 (0.000) |    13.86 | gas, Purely, qqGOD, sATOR1, skrr |
|           22 |     1790 | 2026-04-28 | BORING PLAYERS    | W   | 0.740      | 0.333        | 0.001 (0.000)    | 0.168 (0.041)    | 0 (0.000) |    10.74 | gas, Purely, qqGOD, sATOR1, skrr |
|           21 |     1830 | 2026-04-27 | Chinggis Warriors | L   | 0.733      | -            | -                | -                | -         |    -4.33 | gas, Purely, qqGOD, sATOR1, skrr |
|           20 |     1887 | 2026-04-26 | Rare Atom         | W   | 0.727      | 0.333        | 0.006 (0.001)    | 0.249 (0.060)    | 0 (0.000) |    17.40 | gas, Purely, qqGOD, sATOR1, skrr |
|           19 |     2483 | 2026-04-05 | The QUBE          | L   | 0.587      | -            | -                | -                | -         |    -8.04 | gas, Purely, qqGOD, sATOR1, skrr |
|           18 |     2570 | 2026-04-04 | Arise             | W   | 0.579      | 0.333        | 0.000 (0.000)    | 0.046 (0.009)    | 0 (0.000) |     6.01 | gas, Purely, qqGOD, sATOR1, skrr |
|           17 |     2656 | 2026-04-03 | Eruption          | W   | 0.572      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     2.54 | gas, Purely, qqGOD, sATOR1, skrr |
|           16 |     2749 | 2026-04-02 | FengDa            | L   | 0.566      | -            | -                | -                | -         |    -8.66 | gas, Purely, qqGOD, sATOR1, skrr |
|           15 |     2753 | 2026-04-02 | Rare Atom         | L   | 0.566      | -            | -                | -                | -         |    -4.23 | gas, Purely, qqGOD, sATOR1, skrr |
|           14 |     2842 | 2026-04-01 | BORING PLAYERS    | W   | 0.559      | 0.352        | 0.001 (0.000)    | 0.168 (0.033)    | 1 (0.559) |     8.74 | gas, Purely, qqGOD, sATOR1, skrr |
|           13 |     2963 | 2026-03-31 | TYLOO             | L   | 0.551      | -            | -                | -                | -         |    -0.28 | gas, Purely, qqGOD, sATOR1, skrr |
|           12 |     3107 | 2026-03-29 | XDM               | L   | 0.538      | -            | -                | -                | -         |   -13.43 | gas, Purely, qqGOD, sATOR1, skrr |
|           11 |     3186 | 2026-03-28 | SemperFi          | L   | 0.532      | -            | -                | -                | -         |    -3.50 | gas, Purely, qqGOD, sATOR1, skrr |
|           10 |     3190 | 2026-03-27 | Unitronics        | W   | 0.531      | 0.320        | -                | 0.028 (0.005)    | 0 (0.000) |     3.71 | gas, Purely, qqGOD, sATOR1, skrr |
|            9 |     3332 | 2026-03-24 | Last Bullet       | L   | 0.510      | -            | -                | -                | -         |    -5.78 | gas, Purely, qqGOD, sATOR1, skrr |
|            8 |     3360 | 2026-03-24 | Alter Ego         | L   | 0.507      | -            | -                | -                | -         |    -5.55 | gas, Purely, qqGOD, sATOR1, skrr |
|            7 |     3387 | 2026-03-23 | Kaleido           | L   | 0.504      | -            | -                | -                | -         |    -5.40 | gas, Purely, qqGOD, sATOR1, skrr |
|            6 |     3441 | 2026-03-23 | BMZ               | L   | 0.500      | -            | -                | -                | -         |    -5.43 | gas, Purely, qqGOD, sATOR1, skrr |
|            5 |     3548 | 2026-03-21 | 5star             | W   | 0.487      | 0.333        | 0.019 (0.003)    | 0.324 (0.053)    | 0 (0.000) |    13.18 | gas, Purely, qqGOD, sATOR1, skrr |
|            4 |     3612 | 2026-03-20 | Haunted House     | W   | 0.480      | 0.333        | 0.005 (0.001)    | 0.120 (0.019)    | -         |     7.95 | gas, Purely, qqGOD, sATOR1, skrr |
|            3 |     5041 | 2026-02-19 | Legion            | L   | 0.287      | -            | -                | -                | -         |    -5.81 | Daniel, gas, qqGOD, sATOR1, skrr |
|            2 |     5166 | 2026-02-17 | 5star             | L   | 0.273      | -            | -                | -                | -         |    -1.07 | Daniel, gas, qqGOD, sATOR1, skrr |
|            1 |     6188 | 2026-01-18 | JiJieHao          | L   | 0.072      | -            | -                | -                | -         |    -0.13 | gas, Purely, qqGOD, sATOR1, skrr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($537.69)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-05 |      0.586 | $719.00        | $421.24         |
| 2026-03-25 |      0.518 | $225.00        | $116.45         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
