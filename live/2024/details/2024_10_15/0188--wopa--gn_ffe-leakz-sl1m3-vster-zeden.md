### Roster Details<br />
Team Name: WOPA<br />
Roster: Gnøffe, leakz, sL1m3, Vster, zEden<br />
Global Rank: [188](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [118]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  620.3<br />
<br />
Final Rank Value (620.3) = Starting Rank Value (623.0) + Head To Head Adjustments (-2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.229[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.115<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 623.0
- 400 + ( ( 0.115 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 623.0


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
|           14 |     1830 | 2024-08-20 | Grannys Knockers | L   | 0.825      | -            | -                | -                | -         |   -11.28 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|           13 |     1865 | 2024-08-19 | ALTERNATE aTTaX  | L   | 0.819      | -            | -                | -                | -         |    -5.45 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|           12 |     2788 | 2024-07-21 | Sampi            | L   | 0.628      | -            | -                | -                | -         |    -3.00 | Gnøffe, leakz, sL1m3, Topa, zEden   |
|           11 |     2874 | 2024-07-19 | VP.Prodigy       | W   | 0.612      | 0.435        | 0.011 (0.003)    | 0.107 (0.028)    | 0 (0.000) |    13.19 | Gnøffe, leakz, sL1m3, Topa, zEden   |
|           10 |     3001 | 2024-07-17 | GUN5             | L   | 0.599      | -            | -                | -                | -         |    -2.34 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            9 |     3100 | 2024-07-15 | Passion UA       | L   | 0.585      | -            | -                | -                | -         |    -1.63 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            8 |     3305 | 2024-06-16 | FLuffy Gangsters | W   | 0.394      | 0.143        | 0.004 (0.000)    | 0.322 (0.018)    | 0 (0.000) |     8.12 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            7 |     3432 | 2024-06-12 | The Prodigies    | W   | 0.368      | 0.143        | 0.007 (0.000)    | 0.032 (0.002)    | 0 (0.000) |     6.78 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            6 |     3444 | 2024-06-12 | CPH Wolves       | L   | 0.367      | -            | -                | -                | -         |    -2.96 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            5 |     3453 | 2024-06-11 | ADEPTS           | W   | 0.362      | 0.143        | 0.001 (0.000)    | 0.040 (0.002)    | 0 (0.000) |     5.45 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            4 |     3917 | 2024-06-01 | Illuminar        | L   | 0.292      | -            | -                | -                | -         |    -6.28 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            3 |     4311 | 2024-05-17 | LEON             | L   | 0.194      | -            | -                | -                | -         |    -2.93 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            2 |     4461 | 2024-05-14 | Secret           | W   | 0.173      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.22 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            1 |     4476 | 2024-05-13 | VP.Prodigy       | L   | 0.168      | -            | -                | -                | -         |    -1.67 | brzer, Gnøffe, leakz, LUMSEN, Vster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($132.37)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
