### Roster Details<br />
Team Name: Rhyno<br />
Roster: aragornN, Icarus, krazy, P3R3IIRA, seabraez<br />
Global Rank: [101](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [73]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  769.5<br />
<br />
Final Rank Value (769.5) = Starting Rank Value (820.8) + Head To Head Adjustments (-51.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.347[<sup>1</sup>](#table2)
- Bounty Collected: 0.264[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.247[<sup>2</sup>](#table1)

The average of these factors is 0.221<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 820.8
- 400 + ( ( 0.221 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 820.8


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
|           13 |       91 | 2025-02-20 | Apogee           | L   | 1.000      | -            | -                | -                | -         |   -11.65 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|           12 |       98 | 2025-02-19 | PARIVISION       | L   | 1.000      | -            | -                | -                | -         |   -17.98 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|           11 |      125 | 2025-02-17 | Mercenaires      | L   | 1.000      | -            | -                | -                | -         |   -26.50 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|           10 |      649 | 2025-01-09 | Insilio          | L   | 0.892      | -            | -                | -                | -         |   -19.73 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            9 |      658 | 2025-01-06 | FLuffy Gangsters | W   | 0.873      | 0.143        | 0.006 (0.001)    | 0.452 (0.056)    | 0 (0.000) |     8.06 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            8 |      669 | 2025-01-04 | CS2News          | W   | 0.857      | 0.143        | 0.000 (0.000)    | 0.101 (0.012)    | 0 (0.000) |     4.22 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            7 |      671 | 2025-01-03 | kONO             | L   | 0.852      | -            | -                | -                | -         |   -22.38 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            6 |      684 | 2024-12-28 | BRUTE            | W   | 0.810      | 0.143        | 0.003 (0.000)    | 0.085 (0.010)    | 0 (0.000) |     6.56 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            5 |     1266 | 2024-11-22 | GTZ              | W   | 0.572      | 0.262        | 0.077 (0.011)    | 0.411 (0.062)    | 1 (0.572) |    13.72 | aragornN, Icarus, P3R3IIRA, seabraez, Shr   |
|            4 |     1356 | 2024-11-17 | Iberian Soul     | W   | 0.539      | 0.336        | 0.015 (0.003)    | 0.597 (0.108)    | 1 (0.539) |     7.79 | aragornN, Icarus, P3R3IIRA, seabraez, Shr   |
|            3 |     1392 | 2024-11-16 | Agency           | W   | 0.531      | 0.336        | 0.003 (0.001)    | 0.000 (0.000)    | 1 (0.531) |     2.76 | aragornN, Icarus, P3R3IIRA, seabraez, Shr   |
|            2 |     2303 | 2024-10-06 | Rhyno            | W   | 0.259      | 0.339        | 0.002 (0.000)    | 0.088 (0.008)    | 1 (0.259) |     2.61 | aragornN, Icarus, P3R3IIRA, seabraez, Shr   |
|            1 |     2335 | 2024-10-05 | NeverPlay        | W   | 0.252      | 0.339        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.252) |     1.22 | aragornN, Icarus, P3R3IIRA, seabraez, Shr   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,888.05)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-22 |      0.572 | $1,000.00      | $571.91         |
| 2024-11-17 |      0.539 | $5,329.00      | $2,871.56       |
| 2024-10-06 |      0.259 | $5,588.00      | $1,444.58       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
