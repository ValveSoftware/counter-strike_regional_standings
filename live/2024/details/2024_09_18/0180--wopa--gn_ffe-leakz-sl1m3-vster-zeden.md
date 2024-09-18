### Roster Details<br />
Team Name: WOPA<br />
Roster: Gnøffe, leakz, sL1m3, Vster, zEden<br />
Global Rank: [180](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_18.md)<br />
Regional Rank: [114]( ../../standings_europe_2024_09_18.md)<br />
<br />
Final Rank Value:  637.3<br />
<br />
Final Rank Value (637.3) = Starting Rank Value (641.8) + Head To Head Adjustments (-4.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.241[<sup>1</sup>](#table2)
- Bounty Collected: 0.241[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 641.8
- 400 + ( ( 0.123 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 641.8


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
|           14 |      990 | 2024-08-20 | Grannys Knockers | L   | 1.000      | -            | -                | -                | -         |   -12.62 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|           13 |     1025 | 2024-08-19 | ALTERNATE aTTaX  | L   | 0.999      | -            | -                | -                | -         |    -7.17 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|           12 |     1948 | 2024-07-21 | Sampi            | L   | 0.808      | -            | -                | -                | -         |    -5.15 | Gnøffe, leakz, sL1m3, Topa, zEden   |
|           11 |     2034 | 2024-07-19 | VP.Prodigy       | W   | 0.792      | 0.435        | 0.019 (0.007)    | 0.208 (0.072)    | 0 (0.000) |    18.13 | Gnøffe, leakz, sL1m3, Topa, zEden   |
|           10 |     2161 | 2024-07-17 | GUN5             | L   | 0.779      | -            | -                | -                | -         |    -3.24 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            9 |     2260 | 2024-07-15 | Passion UA       | L   | 0.765      | -            | -                | -                | -         |    -2.52 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            8 |     2465 | 2024-06-16 | FLuffy Gangsters | W   | 0.574      | 0.143        | 0.005 (0.000)    | 0.414 (0.034)    | 0 (0.000) |    11.83 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            7 |     2592 | 2024-06-12 | The Prodigies    | W   | 0.548      | 0.143        | 0.000 (0.000)    | 0.056 (0.004)    | 0 (0.000) |     6.66 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            6 |     2604 | 2024-06-12 | CPH Wolves       | L   | 0.547      | -            | -                | -                | -         |    -3.94 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            5 |     2613 | 2024-06-11 | ADEPTS           | W   | 0.542      | 0.143        | 0.001 (0.000)    | 0.052 (0.004)    | 0 (0.000) |     8.44 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            4 |     3077 | 2024-06-01 | Illuminar        | L   | 0.472      | -            | -                | -                | -         |    -9.85 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            3 |     3471 | 2024-05-17 | LEON             | L   | 0.374      | -            | -                | -                | -         |    -5.58 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            2 |     3621 | 2024-05-14 | Secret           | W   | 0.353      | 0.143        | 0.000 (0.000)    | 0.016 (0.001)    | 0 (0.000) |     3.55 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            1 |     3636 | 2024-05-13 | VP.Prodigy       | L   | 0.348      | -            | -                | -                | -         |    -2.98 | brzer, Gnøffe, leakz, LUMSEN, Vster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($197.16)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
