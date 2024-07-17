### Roster Details<br />
Team Name: Portugal<br />
Roster: Ag1l, aragornN, Icarus, NOPEEJ, rafaxF<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [154](../standings_global.md)<br />
Regional Rank: [101]( ../standings_europe.md)<br />
Final Rank Value:  715.1<br />
<br />
Final Rank Value (715.1) = Starting Rank Value (745.0) + Head To Head Adjustments (-29.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.307[<sup>1</sup>](#table2)
- Bounty Collected: 0.259[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.067[<sup>2</sup>](#table1)

The average of these factors is 0.161<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 745.0
- 400 + ( ( 0.161 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 745.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |      126 | 2024-07-14 | Sampi            | L   | 1.000      | -            | -                | -                | -         |    -7.29 | Ag1l, aragornN, Icarus, NOPEEJ, rafaxF |
|           19 |      135 | 2024-07-13 | Kosovo           | L   | 1.000      | -            | -                | -                | -         |    -8.95 | Ag1l, aragornN, Icarus, NOPEEJ, rafaxF |
|           18 |      227 | 2024-07-08 | Norway           | W   | 1.000      | 0.143        | 0.010 (0.001)    | 0.122 (0.017)    | 0 (0.000) |    15.94 | Ag1l, aragornN, NOPEEJ, pr, rafaxF     |
|           17 |      906 | 2024-06-01 | FLuffy Gangsters | L   | 0.895      | -            | -                | -                | -         |   -19.37 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF   |
|           16 |      972 | 2024-05-30 | RUBY             | L   | 0.881      | -            | -                | -                | -         |    -5.07 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF   |
|           15 |     1007 | 2024-05-29 | TNL              | W   | 0.874      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.58 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF   |
|           14 |     1544 | 2024-05-11 | AL QATRAO        | L   | 0.754      | -            | -                | -                | -         |   -12.02 | Ag1l, aragornN, fox, pr, rafaxF        |
|           13 |     1988 | 2024-04-20 | 1WIN             | L   | 0.614      | -            | -                | -                | -         |    -4.18 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF   |
|           12 |     2022 | 2024-04-19 | Secret           | W   | 0.608      | 0.143        | 0.000 (0.000)    | 0.085 (0.007)    | 0 (0.000) |     5.50 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF   |
|           11 |     2065 | 2024-04-18 | Illuminar        | L   | 0.601      | -            | -                | -                | -         |   -14.61 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF   |
|           10 |     2122 | 2024-04-17 | 500              | W   | 0.593      | 0.143        | 0.001 (0.000)    | 0.169 (0.014)    | 0 (0.000) |    10.68 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF   |
|            9 |     3176 | 2024-03-03 | Rhyno            | W   | 0.294      | 0.314        | 0.108 (0.010)    | 0.401 (0.037)    | 1 (0.294) |     7.80 | Ag1l, aragornN, NOPEEJ, pr, rafaxF     |
|            8 |     3210 | 2024-03-02 | OVERFRAG         | W   | 0.286      | 0.314        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.286) |     2.13 | Ag1l, aragornN, NOPEEJ, pr, rafaxF     |
|            7 |     3343 | 2024-02-24 | 500              | L   | 0.240      | -            | -                | -                | -         |    -3.83 | Ag1l, aragornN, NOPEEJ, pr, rafaxF     |
|            6 |     3481 | 2024-02-18 | Alliance         | L   | 0.200      | -            | -                | -                | -         |    -1.80 | Ag1l, aragornN, NOPEEJ, pr, rafaxF     |
|            5 |     3649 | 2024-02-11 | Young Ninjas     | L   | 0.154      | -            | -                | -                | -         |    -1.98 | Ag1l, aragornN, NOPEEJ, pr, rafaxF     |
|            4 |     3739 | 2024-02-04 | ARCRED           | W   | 0.106      | 0.358        | 0.057 (0.002)    | 0.354 (0.013)    | 0 (0.000) |     2.40 | Ag1l, aragornN, NOPEEJ, pr, rafaxF     |
|            3 |     3756 | 2024-02-03 | Rhyno            | L   | 0.101      | -            | -                | -                | -         |    -0.51 | Ag1l, aragornN, NOPEEJ, pr, rafaxF     |
|            2 |     3822 | 2024-02-01 | AL QATRAO        | W   | 0.087      | 0.143        | 0.006 (0.000)    | 0.035 (0.000)    | 0 (0.000) |     1.33 | Ag1l, aragornN, NOPEEJ, pr, rafaxF     |
|            1 |     3827 | 2024-02-01 | Agency           | W   | 0.086      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.34 | Ag1l, aragornN, NOPEEJ, pr, rafaxF     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,365.26)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      0.760 | $539.00        | $409.60         |
| 2024-03-03 |      0.294 | $3,251.00      | $955.67         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
