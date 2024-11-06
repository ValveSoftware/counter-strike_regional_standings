### Roster Details<br />
Team Name: WOPA<br />
Roster: Gnøffe, leakz, PR1mE, sL1m3, Vster<br />
Global Rank: [185](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_06.md)<br />
Regional Rank: [117]( ../../standings_europe_2024_11_06.md)<br />
<br />
Final Rank Value:  626.7<br />
<br />
Final Rank Value (626.7) = Starting Rank Value (624.2) + Head To Head Adjustments (2.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.209[<sup>1</sup>](#table2)
- Bounty Collected: 0.237[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.114<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 624.2
- 400 + ( ( 0.114 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 624.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |      265 | 2024-10-24 | L&G              | L   | 1.000      | -            | -                | -                | -         |    -9.79 | Gnøffe, leakz, PR1mE, sL1m3, Vster  |
|           16 |      273 | 2024-10-23 | NAVI Junior      | L   | 1.000      | -            | -                | -                | -         |    -4.03 | Gnøffe, leakz, PR1mE, sL1m3, Vster  |
|           15 |      316 | 2024-10-20 | Verdant          | W   | 1.000      | 0.333        | 0.014 (0.005)    | 0.264 (0.088)    | 0 (0.000) |    21.93 | Gnøffe, leakz, PR1mE, sL1m3, Vster  |
|           14 |     2279 | 2024-08-20 | Grannys Knockers | L   | 0.678      | -            | -                | -                | -         |   -10.01 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|           13 |     2314 | 2024-08-19 | ALTERNATE aTTaX  | L   | 0.672      | -            | -                | -                | -         |    -4.43 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|           12 |     3237 | 2024-07-21 | Sampi            | L   | 0.481      | -            | -                | -                | -         |    -2.22 | Gnøffe, leakz, sL1m3, Topa, zEden   |
|           11 |     3323 | 2024-07-19 | VP.Prodigy       | W   | 0.465      | 0.435        | 0.004 (0.001)    | 0.049 (0.010)    | 0 (0.000) |     8.91 | Gnøffe, leakz, sL1m3, Topa, zEden   |
|           10 |     3450 | 2024-07-17 | GUN5             | L   | 0.452      | -            | -                | -                | -         |    -2.02 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            9 |     3549 | 2024-07-15 | Passion UA       | L   | 0.438      | -            | -                | -                | -         |    -1.45 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            8 |     3754 | 2024-06-16 | FLuffy Gangsters | W   | 0.247      | 0.143        | 0.008 (0.000)    | 0.321 (0.011)    | 0 (0.000) |     5.02 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            7 |     3881 | 2024-06-12 | The Prodigies    | W   | 0.221      | 0.143        | 0.005 (0.000)    | 0.018 (0.001)    | 0 (0.000) |     3.81 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            6 |     3893 | 2024-06-12 | CPH Wolves       | L   | 0.220      | -            | -                | -                | -         |    -2.09 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            5 |     3902 | 2024-06-11 | ADEPTS           | W   | 0.215      | 0.143        | 0.000 (0.000)    | 0.032 (0.001)    | 0 (0.000) |     2.86 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            4 |     4366 | 2024-06-01 | Illuminar        | L   | 0.145      | -            | -                | -                | -         |    -3.23 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            3 |     4760 | 2024-05-17 | LEON             | L   | 0.047      | -            | -                | -                | -         |    -0.71 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            2 |     4910 | 2024-05-14 | Secret           | W   | 0.026      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.18 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            1 |     4925 | 2024-05-13 | VP.Prodigy       | L   | 0.021      | -            | -                | -                | -         |    -0.26 | brzer, Gnøffe, leakz, LUMSEN, Vster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($79.46)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
