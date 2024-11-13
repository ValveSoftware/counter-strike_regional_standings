### Roster Details<br />
Team Name: WOPA<br />
Roster: Gnøffe, leakz, PR1mE, sL1m3, Vster<br />
Global Rank: [171](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_13.md)<br />
Regional Rank: [110]( ../../standings_europe_2024_11_13.md)<br />
<br />
Final Rank Value:  656.6<br />
<br />
Final Rank Value (656.6) = Starting Rank Value (629.6) + Head To Head Adjustments (27.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.206[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.115<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 629.6
- 400 + ( ( 0.115 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 629.6


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
|           15 |       21 | 2024-11-13 | HOTU             | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.489 (0.070)    | 0 (0.000) |    22.92 | Gnøffe, leakz, PR1mE, sL1m3, Vster  |
|           14 |      434 | 2024-10-24 | L&G              | L   | 1.000      | -            | -                | -                | -         |    -9.91 | Gnøffe, leakz, PR1mE, sL1m3, Vster  |
|           13 |      442 | 2024-10-23 | NAVI Junior      | L   | 1.000      | -            | -                | -                | -         |    -3.54 | Gnøffe, leakz, PR1mE, sL1m3, Vster  |
|           12 |      485 | 2024-10-20 | Verdant          | W   | 1.000      | 0.333        | 0.015 (0.005)    | 0.238 (0.079)    | 0 (0.000) |    22.54 | Gnøffe, leakz, PR1mE, sL1m3, Vster  |
|           11 |     2448 | 2024-08-20 | Grannys Knockers | L   | 0.631      | -            | -                | -                | -         |    -9.14 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|           10 |     2483 | 2024-08-19 | ALTERNATE aTTaX  | L   | 0.624      | -            | -                | -                | -         |    -4.03 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            9 |     3406 | 2024-07-21 | Sampi            | L   | 0.433      | -            | -                | -                | -         |    -1.86 | Gnøffe, leakz, sL1m3, Topa, zEden   |
|            8 |     3492 | 2024-07-19 | VP.Prodigy       | W   | 0.418      | 0.435        | 0.003 (0.001)    | 0.029 (0.005)    | 0 (0.000) |     7.63 | Gnøffe, leakz, sL1m3, Topa, zEden   |
|            7 |     3619 | 2024-07-17 | GUN5             | L   | 0.404      | -            | -                | -                | -         |    -1.74 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            6 |     3718 | 2024-07-15 | Passion UA       | L   | 0.391      | -            | -                | -                | -         |    -1.36 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            5 |     3923 | 2024-06-16 | FLuffy Gangsters | W   | 0.200      | 0.143        | 0.009 (0.000)    | 0.320 (0.009)    | 0 (0.000) |     4.01 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            4 |     4050 | 2024-06-12 | The Prodigies    | W   | 0.174      | 0.143        | 0.005 (0.000)    | 0.012 (0.000)    | 0 (0.000) |     2.93 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            3 |     4062 | 2024-06-12 | CPH Wolves       | L   | 0.173      | -            | -                | -                | -         |    -1.29 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            2 |     4071 | 2024-06-11 | ADEPTS           | W   | 0.167      | 0.143        | 0.000 (0.000)    | 0.027 (0.001)    | 0 (0.000) |     2.03 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            1 |     4535 | 2024-06-01 | Illuminar        | L   | 0.098      | -            | -                | -                | -         |    -2.20 | brzer, Gnøffe, leakz, LUMSEN, Vster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($62.43)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
