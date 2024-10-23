### Roster Details<br />
Team Name: WOPA<br />
Roster: Gnøffe, leakz, PR1mE, sL1m3, Vster<br />
Global Rank: [184](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_23.md)<br />
Regional Rank: [115]( ../../standings_europe_2024_10_23.md)<br />
<br />
Final Rank Value:  649.1<br />
<br />
Final Rank Value (649.1) = Starting Rank Value (637.3) + Head To Head Adjustments (11.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.228[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.121<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 637.3
- 400 + ( ( 0.121 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 637.3


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
|           16 |        2 | 2024-10-23 | NAVI Junior      | L   | 1.000      | -            | -                | -                | -         |    -4.05 | Gnøffe, leakz, PR1mE, sL1m3, Vster  |
|           15 |       45 | 2024-10-20 | Verdant          | W   | 1.000      | 0.333        | 0.014 (0.005)    | 0.262 (0.087)    | 0 (0.000) |    19.91 | Gnøffe, leakz, PR1mE, sL1m3, Vster  |
|           14 |     2008 | 2024-08-20 | Grannys Knockers | L   | 0.771      | -            | -                | -                | -         |   -10.47 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|           13 |     2043 | 2024-08-19 | ALTERNATE aTTaX  | L   | 0.764      | -            | -                | -                | -         |    -4.96 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|           12 |     2966 | 2024-07-21 | Sampi            | L   | 0.573      | -            | -                | -                | -         |    -2.65 | Gnøffe, leakz, sL1m3, Topa, zEden   |
|           11 |     3052 | 2024-07-19 | VP.Prodigy       | W   | 0.558      | 0.435        | 0.011 (0.003)    | 0.086 (0.021)    | 0 (0.000) |    11.55 | Gnøffe, leakz, sL1m3, Topa, zEden   |
|           10 |     3179 | 2024-07-17 | GUN5             | L   | 0.544      | -            | -                | -                | -         |    -2.20 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            9 |     3278 | 2024-07-15 | Passion UA       | L   | 0.531      | -            | -                | -                | -         |    -1.39 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            8 |     3483 | 2024-06-16 | FLuffy Gangsters | W   | 0.339      | 0.143        | 0.005 (0.000)    | 0.310 (0.015)    | 0 (0.000) |     6.82 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            7 |     3610 | 2024-06-12 | The Prodigies    | W   | 0.314      | 0.143        | 0.008 (0.000)    | 0.027 (0.001)    | 0 (0.000) |     5.56 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            6 |     3622 | 2024-06-12 | CPH Wolves       | L   | 0.312      | -            | -                | -                | -         |    -2.68 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            5 |     3631 | 2024-06-11 | ADEPTS           | W   | 0.307      | 0.143        | 0.001 (0.000)    | 0.037 (0.002)    | 0 (0.000) |     4.35 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            4 |     4095 | 2024-06-01 | Illuminar        | L   | 0.237      | -            | -                | -                | -         |    -5.32 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            3 |     4489 | 2024-05-17 | LEON             | L   | 0.139      | -            | -                | -                | -         |    -2.18 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            2 |     4639 | 2024-05-14 | Secret           | W   | 0.118      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.78 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            1 |     4654 | 2024-05-13 | VP.Prodigy       | L   | 0.113      | -            | -                | -                | -         |    -1.22 | brzer, Gnøffe, leakz, LUMSEN, Vster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($112.66)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
