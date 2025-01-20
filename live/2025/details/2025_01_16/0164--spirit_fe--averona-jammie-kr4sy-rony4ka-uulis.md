### Roster Details<br />
Team Name: Spirit fe<br />
Roster: AverOna, Jammie, kr4sy, Rony4ka, uulis<br />
Global Rank: [164](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [109]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  685.5<br />
<br />
Final Rank Value (685.5) = Starting Rank Value (672.2) + Head To Head Adjustments (13.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.320[<sup>1</sup>](#table2)
- Bounty Collected: 0.227[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.137<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 672.2
- 400 + ( ( 0.137 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 672.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1234 | 2024-10-27 | OneDay fe     | W   | 0.659      | 0.250        | 0.002 (0.000)    | 0.012 (0.002)    | 0 (0.000) |     8.67 | AverOna, Jammie, kr4sy, Rony4ka, uulis   |
|           13 |     1408 | 2024-10-18 | ENCE Athena   | W   | 0.599      | 0.328        | 0.003 (0.001)    | 0.007 (0.001)    | 0 (0.000) |     5.83 | AverOna, Jammie, kr4sy, Rony4ka, uulis   |
|           12 |     1816 | 2024-10-02 | NAVI Javelins | L   | 0.492      | -            | -                | -                | -         |    -0.59 | AverOna, Jammie, kr4sy, Rony4ka, uulis   |
|           11 |     2090 | 2024-09-25 | NIP Impact    | L   | 0.446      | -            | -                | -                | -         |    -4.52 | AverOna, Jammie, kr4sy, Rony4ka, uulis   |
|           10 |     2404 | 2024-09-15 | Let Her Cook  | W   | 0.378      | 0.250        | 0.005 (0.000)    | 0.069 (0.007)    | 0 (0.000) |     6.01 | AverOna, Jammie, kr4sy, Rony4ka, uulis   |
|            9 |     2450 | 2024-09-14 | NAVI Javelins | L   | 0.370      | -            | -                | -                | -         |    -0.46 | AverOna, Jammie, kr4sy, Rony4ka, uulis   |
|            8 |     2534 | 2024-09-11 | Let Her Cook  | L   | 0.352      | -            | -                | -                | -         |    -5.62 | AverOna, Jammie, kr4sy, Rony4ka, uulis   |
|            7 |     2739 | 2024-09-04 | Denmark fe    | W   | 0.306      | 0.328        | 0.020 (0.002)    | 0.112 (0.011)    | 0 (0.000) |     6.15 | AverOna, Jammie, kr4sy, Rony4ka, uulis   |
|            6 |     3368 | 2024-08-18 | K27 fe        | L   | 0.191      | -            | -                | -                | -         |    -2.45 | AverOna, Jammie, kr4sy, Rony4ka, uulis   |
|            5 |     3802 | 2024-08-04 | NIP Impact    | L   | 0.098      | -            | -                | -                | -         |    -1.03 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            4 |     3850 | 2024-08-03 | Denmark fe    | W   | 0.090      | 0.273        | 0.020 (0.000)    | 0.112 (0.003)    | 0 (0.000) |     1.82 | irbitka, Jammie, Rony4ka, tenweri, uulis |
|            3 |     3869 | 2024-08-02 | NIP Impact    | L   | 0.085      | -            | -                | -                | -         |    -0.90 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            2 |     4072 | 2024-07-28 | K10 Ashes     | W   | 0.051      | 0.250        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.43 | AverOna, Jammie, Rony4ka, tenweri, uulis |
|            1 |     4291 | 2024-07-21 | K27 fe        | L   | 0.004      | -            | -                | -                | -         |    -0.05 | AverOna, Jammie, Rony4ka, tenweri, uulis |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,721.01)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.659 | $750.00        | $494.28         |
| 2024-10-20 |      0.612 | $1,400.00      | $856.90         |
| 2024-09-15 |      0.378 | $750.00        | $283.68         |
| 2024-08-18 |      0.191 | $250.00        | $47.78          |
| 2024-07-28 |      0.051 | $750.00        | $38.37          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
