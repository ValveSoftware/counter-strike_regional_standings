### Roster Details<br />
Team Name: Cloud9<br />
Roster: Ax1Le, Boombl4, HeavyGod, ICY, interz<br />
Global Rank: [92](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [58]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  768.2<br />
<br />
Final Rank Value (768.2) = Starting Rank Value (741.4) + Head To Head Adjustments (26.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.348[<sup>1</sup>](#table2)
- Bounty Collected: 0.257[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.121[<sup>2</sup>](#table1)

The average of these factors is 0.185<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 741.4
- 400 + ( ( 0.185 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 741.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     2101 | 2024-12-02 | Complexity  | L   | 0.358      | -            | -                | -                | -         |    -2.19 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           12 |     2121 | 2024-11-30 | paiN        | L   | 0.350      | -            | -                | -                | -         |    -0.18 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           11 |     2150 | 2024-11-30 | fnatic      | W   | 0.345      | 0.143        | 0.068 (0.003)    | 0.964 (0.047)    | 1 (0.345) |     8.79 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           10 |     2155 | 2024-11-29 | Liquid      | L   | 0.344      | -            | -                | -                | -         |    -0.14 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            9 |     2355 | 2024-11-19 | FaZe        | L   | 0.273      | -            | -                | -                | -         |    -0.04 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            8 |     2361 | 2024-11-18 | SINNERS     | W   | 0.270      | 0.143        | 0.027 (0.001)    | 0.665 (0.026)    | 1 (0.270) |     6.87 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            7 |     2374 | 2024-11-17 | HEROIC      | W   | 0.263      | 0.143        | 0.106 (0.004)    | 0.593 (0.022)    | 1 (0.263) |     6.33 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            6 |     2385 | 2024-11-17 | Nemiga      | W   | 0.259      | 0.143        | 0.121 (0.004)    | 0.902 (0.033)    | 1 (0.259) |     6.82 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            5 |     2398 | 2024-11-16 | FaZe        | L   | 0.257      | -            | -                | -                | -         |    -0.04 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            4 |     2928 | 2024-10-25 | fnatic      | L   | 0.106      | -            | -                | -                | -         |    -0.58 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            3 |     2956 | 2024-10-22 | 9z          | W   | 0.087      | 0.477        | 0.003 (0.000)    | 0.554 (0.023)    | 0 (0.000) |     1.24 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            2 |     2962 | 2024-10-22 | The MongolZ | L   | 0.085      | -            | -                | -                | -         |    -0.00 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            1 |     3181 | 2024-10-11 | Passion UA  | L   | 0.012      | -            | -                | -                | -         |    -0.10 | Ax1Le, Boombl4, HeavyGod, ICY, interz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,653.63)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.365 | $10,000.00     | $3,653.63       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
