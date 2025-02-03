### Roster Details<br />
Team Name: Vantage<br />
Roster: alecc, Drox, Jynx, N1ghtraid, nauh<br />
Global Rank: [210](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_03.md)<br />
Regional Rank: [26]( ../../standings_asia_2025_02_03.md)<br />
<br />
Final Rank Value:  481.2<br />
<br />
Final Rank Value (481.2) = Starting Rank Value (482.4) + Head To Head Adjustments (-1.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.169[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.042<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 482.4
- 400 + ( ( 0.042 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 482.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     2861 | 2024-09-11 | The Art of War | L   | 0.231      | -            | -                | -                | -         |    -2.08 | alecc, Drox, Jynx, N1ghtraid, nauh      |
|           14 |     2864 | 2024-09-11 | The Art of War | L   | 0.231      | -            | -                | -                | -         |    -2.12 | Drox, Jynx, mindtr6cks, N1ghtraid, nauh |
|           13 |     3178 | 2024-08-30 | FlyQuest       | L   | 0.151      | -            | -                | -                | -         |    -0.07 | alecc, Drox, Jynx, N1ghtraid, nauh      |
|           12 |     3180 | 2024-08-30 | FlyQuest       | L   | 0.151      | -            | -                | -                | -         |    -0.07 | alecc, Drox, Jynx, N1ghtraid, nauh      |
|           11 |     3325 | 2024-08-27 | KZG            | W   | 0.132      | 0.143        | 0.002 (0.000)    | 0.127 (0.002)    | 0 (0.000) |     2.95 | alecc, Drox, Jynx, N1ghtraid, nauh      |
|           10 |     3344 | 2024-08-27 | Rooster        | L   | 0.130      | -            | -                | -                | -         |    -0.96 | alecc, Drox, Jynx, N1ghtraid, nauh      |
|            9 |     3467 | 2024-08-24 | TALON          | L   | 0.111      | -            | -                | -                | -         |    -1.31 | alecc, Drox, Jynx, N1ghtraid, nauh      |
|            8 |     3470 | 2024-08-24 | Arcade         | L   | 0.111      | -            | -                | -                | -         |    -1.20 | alecc, Drox, Jynx, N1ghtraid, nauh      |
|            7 |     3472 | 2024-08-24 | MANTRA         | W   | 0.110      | 0.143        | 0.001 (0.000)    | 0.112 (0.002)    | 0 (0.000) |     2.44 | alecc, Drox, Jynx, N1ghtraid, nauh      |
|            6 |     3597 | 2024-08-21 | DXA            | W   | 0.091      | 0.333        | 0.001 (0.000)    | 0.073 (0.002)    | 0 (0.000) |     1.96 | alecc, Drox, Jynx, N1ghtraid, nauh      |
|            5 |     3607 | 2024-08-21 | DXA            | L   | 0.091      | -            | -                | -                | -         |    -0.92 | alecc, Drox, Jynx, N1ghtraid, nauh      |
|            4 |     3766 | 2024-08-15 | KZG            | L   | 0.051      | -            | -                | -                | -         |    -0.47 | alecc, Drox, Jynx, N1ghtraid, nauh      |
|            3 |     3769 | 2024-08-15 | KZG            | W   | 0.051      | 0.333        | 0.002 (0.000)    | 0.127 (0.002)    | 0 (0.000) |     1.15 | alecc, Drox, Jynx, N1ghtraid, nauh      |
|            2 |     3824 | 2024-08-13 | Mindfreak      | L   | 0.038      | -            | -                | -                | -         |    -0.26 | alecc, Drox, Jynx, N1ghtraid, nauh      |
|            1 |     3830 | 2024-08-13 | Mindfreak      | L   | 0.038      | -            | -                | -                | -         |    -0.26 | alecc, Drox, Jynx, N1ghtraid, nauh      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
