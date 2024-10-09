### Roster Details<br />
Team Name: WOPA<br />
Roster: Gnøffe, leakz, sL1m3, Vster, zEden<br />
Global Rank: [183](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_09.md)<br />
Regional Rank: [117]( ../../standings_europe_2024_10_09.md)<br />
<br />
Final Rank Value:  626.1<br />
<br />
Final Rank Value (626.1) = Starting Rank Value (625.5) + Head To Head Adjustments (0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.232[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.117<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 625.5
- 400 + ( ( 0.117 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 625.5


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
|           14 |     1733 | 2024-08-20 | Grannys Knockers | L   | 0.865      | -            | -                | -                | -         |   -11.75 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|           13 |     1768 | 2024-08-19 | ALTERNATE aTTaX  | L   | 0.858      | -            | -                | -                | -         |    -5.81 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|           12 |     2691 | 2024-07-21 | Sampi            | L   | 0.667      | -            | -                | -                | -         |    -3.27 | Gnøffe, leakz, sL1m3, Topa, zEden   |
|           11 |     2777 | 2024-07-19 | VP.Prodigy       | W   | 0.652      | 0.435        | 0.013 (0.004)    | 0.123 (0.035)    | 0 (0.000) |    14.08 | Gnøffe, leakz, sL1m3, Topa, zEden   |
|           10 |     2904 | 2024-07-17 | GUN5             | L   | 0.638      | -            | -                | -                | -         |    -2.73 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            9 |     3003 | 2024-07-15 | Passion UA       | L   | 0.625      | -            | -                | -                | -         |    -1.80 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            8 |     3208 | 2024-06-16 | FLuffy Gangsters | W   | 0.434      | 0.143        | 0.004 (0.000)    | 0.331 (0.021)    | 0 (0.000) |     8.79 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            7 |     3335 | 2024-06-12 | The Prodigies    | W   | 0.408      | 0.143        | 0.007 (0.000)    | 0.035 (0.002)    | 0 (0.000) |     7.47 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            6 |     3347 | 2024-06-12 | CPH Wolves       | L   | 0.407      | -            | -                | -                | -         |    -2.42 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            5 |     3356 | 2024-06-11 | ADEPTS           | W   | 0.401      | 0.143        | 0.001 (0.000)    | 0.041 (0.002)    | 0 (0.000) |     6.05 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            4 |     3820 | 2024-06-01 | Illuminar        | L   | 0.332      | -            | -                | -                | -         |    -4.38 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            3 |     4214 | 2024-05-17 | LEON             | L   | 0.233      | -            | -                | -                | -         |    -3.52 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            2 |     4364 | 2024-05-14 | Secret           | W   | 0.213      | 0.143        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     1.91 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            1 |     4379 | 2024-05-13 | VP.Prodigy       | L   | 0.207      | -            | -                | -                | -         |    -2.01 | brzer, Gnøffe, leakz, LUMSEN, Vster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($146.63)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
