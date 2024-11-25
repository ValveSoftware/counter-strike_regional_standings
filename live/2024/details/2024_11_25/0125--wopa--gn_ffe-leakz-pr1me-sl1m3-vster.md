### Roster Details<br />
Team Name: WOPA<br />
Roster: Gnøffe, leakz, PR1mE, sL1m3, Vster<br />
Global Rank: [125](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_25.md)<br />
Regional Rank: [90]( ../../standings_europe_2024_11_25.md)<br />
<br />
Final Rank Value:  805.3<br />
<br />
Final Rank Value (805.3) = Starting Rank Value (783.0) + Head To Head Adjustments (22.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.380[<sup>1</sup>](#table2)
- Bounty Collected: 0.244[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.110[<sup>2</sup>](#table1)

The average of these factors is 0.191<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 783.0
- 400 + ( ( 0.191 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 783.0


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
|           19 |       33 | 2024-11-23 | Astralis Talent  | W   | 1.000      | 0.340        | 0.004 (0.001)    | 0.348 (0.118)    | 1 (1.000) |    12.94 | Gnøffe, leakz, PR1mE, sL1m3, Vster  |
|           18 |      220 | 2024-11-15 | HOTU             | L   | 1.000      | -            | -                | -                | -         |   -13.15 | Gnøffe, leakz, PR1mE, sL1m3, Vster  |
|           17 |      230 | 2024-11-14 | Astralis Talent  | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.348 (0.050)    | 0 (0.000) |    13.47 | Gnøffe, leakz, PR1mE, sL1m3, Vster  |
|           16 |      242 | 2024-11-14 | Denial           | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.036 (0.005)    | 0 (0.000) |     5.99 | Gnøffe, leakz, PR1mE, sL1m3, Vster  |
|           15 |      290 | 2024-11-13 | HOTU             | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.506 (0.072)    | 0 (0.000) |    19.00 | Gnøffe, leakz, PR1mE, sL1m3, Vster  |
|           14 |      703 | 2024-10-24 | L&G              | L   | 0.986      | -            | -                | -                | -         |   -13.11 | Gnøffe, leakz, PR1mE, sL1m3, Vster  |
|           13 |      711 | 2024-10-23 | NAVI Junior      | L   | 0.981      | -            | -                | -                | -         |    -5.79 | Gnøffe, leakz, PR1mE, sL1m3, Vster  |
|           12 |      754 | 2024-10-20 | Verdant          | W   | 0.960      | 0.333        | 0.015 (0.005)    | 0.205 (0.066)    | 0 (0.000) |    17.69 | Gnøffe, leakz, PR1mE, sL1m3, Vster  |
|           11 |     2717 | 2024-08-20 | Grannys Knockers | L   | 0.553      | -            | -                | -                | -         |   -11.82 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|           10 |     2752 | 2024-08-19 | ALTERNATE aTTaX  | L   | 0.546      | -            | -                | -                | -         |    -1.94 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            9 |     3675 | 2024-07-21 | Sampi            | L   | 0.355      | -            | -                | -                | -         |    -1.71 | Gnøffe, leakz, sL1m3, Topa, zEden   |
|            8 |     3761 | 2024-07-19 | VP.Prodigy       | W   | 0.339      | 0.435        | 0.002 (0.000)    | 0.007 (0.001)    | 0 (0.000) |     3.45 | Gnøffe, leakz, sL1m3, Topa, zEden   |
|            7 |     3888 | 2024-07-17 | GUN5             | L   | 0.326      | -            | -                | -                | -         |    -2.72 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            6 |     3987 | 2024-07-15 | Passion UA       | L   | 0.312      | -            | -                | -                | -         |    -1.06 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            5 |     4192 | 2024-06-16 | FLuffy Gangsters | W   | 0.121      | 0.143        | 0.009 (0.000)    | 0.365 (0.006)    | 0 (0.000) |     1.63 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            4 |     4319 | 2024-06-12 | The Prodigies    | W   | 0.095      | 0.143        | 0.005 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.93 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            3 |     4331 | 2024-06-12 | CPH Wolves       | L   | 0.094      | -            | -                | -                | -         |    -1.27 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            2 |     4340 | 2024-06-11 | ADEPTS           | W   | 0.089      | 0.143        | 0.000 (0.000)    | 0.025 (0.000)    | 0 (0.000) |     0.29 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            1 |     4804 | 2024-06-01 | Illuminar        | L   | 0.019      | -            | -                | -                | -         |    -0.51 | brzer, Gnøffe, leakz, LUMSEN, Vster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,317.12)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-23 |      1.000 | $9,283.00      | $9,283.00       |
| 2024-06-12 |      0.095 | $360.00        | $34.12          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
