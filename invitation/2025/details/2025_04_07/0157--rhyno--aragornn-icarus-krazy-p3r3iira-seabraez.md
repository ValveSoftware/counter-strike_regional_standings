### Roster Details<br />
Team Name: Rhyno<br />
Roster: aragornN, Icarus, krazy, P3R3IIRA, seabraez<br />
Global Rank: [157](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [98]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  650.4<br />
<br />
Final Rank Value (650.4) = Starting Rank Value (704.5) + Head To Head Adjustments (-54.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.323[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.086[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 704.5
- 400 + ( ( 0.165 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 704.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      464 | 2025-03-15 | Leça             | L   | 1.000      | -            | -                | -                | -         |   -14.17 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|           13 |      957 | 2025-02-27 | BC.Game          | L   | 0.939      | -            | -                | -                | -         |    -3.08 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|           12 |      975 | 2025-02-26 | Alliance         | L   | 0.932      | -            | -                | -                | -         |   -10.37 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|           11 |     1114 | 2025-02-20 | Apogee           | L   | 0.892      | -            | -                | -                | -         |    -7.76 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|           10 |     1121 | 2025-02-19 | PARIVISION       | L   | 0.886      | -            | -                | -                | -         |    -5.51 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            9 |     1148 | 2025-02-17 | Mercenaires      | L   | 0.873      | -            | -                | -                | -         |   -20.78 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            8 |     1672 | 2025-01-09 | Insilio          | L   | 0.613      | -            | -                | -                | -         |   -12.96 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            7 |     1681 | 2025-01-06 | FLuffy Gangsters | W   | 0.594      | 0.143        | 0.003 (0.000)    | 0.211 (0.018)    | 0 (0.000) |     7.29 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            6 |     1692 | 2025-01-04 | CS2News          | W   | 0.579      | 0.143        | 0.000 (0.000)    | 0.061 (0.005)    | 0 (0.000) |     4.45 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            5 |     1694 | 2025-01-03 | kONO             | L   | 0.574      | -            | -                | -                | -         |   -13.37 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            4 |     1707 | 2024-12-28 | BRUTE            | W   | 0.532      | 0.143        | 0.002 (0.000)    | 0.047 (0.004)    | 0 (0.000) |     6.17 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            3 |     2289 | 2024-11-22 | GTZ              | W   | 0.294      | 0.262        | 0.051 (0.004)    | 0.430 (0.033)    | 1 (0.294) |     7.45 | aragornN, Icarus, P3R3IIRA, seabraez, Shr   |
|            2 |     2379 | 2024-11-17 | Iberian Soul     | W   | 0.260      | 0.336        | 0.021 (0.002)    | 0.852 (0.075)    | 1 (0.260) |     6.30 | aragornN, Icarus, P3R3IIRA, seabraez, Shr   |
|            1 |     2415 | 2024-11-16 | Agency           | W   | 0.252      | 0.336        | 0.003 (0.000)    | 0.000 (0.000)    | 1 (0.252) |     2.15 | aragornN, Icarus, P3R3IIRA, seabraez, Shr   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,223.75)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-16 |      1.000 | $542.00        | $542.00         |
| 2024-11-22 |      0.294 | $1,000.00      | $293.55         |
| 2024-11-17 |      0.260 | $5,329.00      | $1,388.20       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
