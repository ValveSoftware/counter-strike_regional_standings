### Roster Details<br />
Team Name: Portugal<br />
Roster: Ag1l, aragornN, NOPEEJ, pr, rafaxF<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [144](../standings_global.md)<br />
Regional Rank: [92]( ../standings_europe.md)<br />
Final Rank Value:  735.4<br />
<br />
Final Rank Value (735.4) = Starting Rank Value (747.6) + Head To Head Adjustments (-12.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.309[<sup>1</sup>](#table2)
- Bounty Collected: 0.263[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.076[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 747.6
- 400 + ( ( 0.165 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 747.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |       63 | 2024-07-08 | Norway            | W   | 1.000      | 0.143        | 0.010 (0.001)    | 0.124 (0.018)    | 0 (0.000) |    15.64 | Ag1l, aragornN, NOPEEJ, pr, rafaxF   |
|           21 |      742 | 2024-06-01 | FLuffy Gangsters  | L   | 0.934      | -            | -                | -                | -         |   -20.91 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF |
|           20 |      808 | 2024-05-30 | RUBY              | L   | 0.921      | -            | -                | -                | -         |    -5.67 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF |
|           19 |      843 | 2024-05-29 | TNL               | W   | 0.913      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.62 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF |
|           18 |     1380 | 2024-05-11 | AL QATRAO         | L   | 0.793      | -            | -                | -                | -         |   -12.85 | Ag1l, aragornN, fox, pr, rafaxF      |
|           17 |     1824 | 2024-04-20 | 1WIN              | L   | 0.653      | -            | -                | -                | -         |    -4.37 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF |
|           16 |     1858 | 2024-04-19 | Secret            | W   | 0.647      | 0.143        | 0.000 (0.000)    | 0.092 (0.009)    | 0 (0.000) |     5.86 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF |
|           15 |     1901 | 2024-04-18 | Illuminar         | L   | 0.641      | -            | -                | -                | -         |   -11.86 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF |
|           14 |     1958 | 2024-04-17 | 500               | W   | 0.633      | 0.143        | 0.001 (0.000)    | 0.191 (0.017)    | 0 (0.000) |    11.51 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF |
|           13 |     3012 | 2024-03-03 | Rhyno             | W   | 0.334      | 0.314        | 0.107 (0.011)    | 0.377 (0.040)    | 1 (0.334) |     8.82 | Ag1l, aragornN, NOPEEJ, pr, rafaxF   |
|           12 |     3046 | 2024-03-02 | OVERFRAG          | W   | 0.326      | 0.314        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.326) |     2.38 | Ag1l, aragornN, NOPEEJ, pr, rafaxF   |
|           11 |     3179 | 2024-02-24 | 500               | L   | 0.280      | -            | -                | -                | -         |    -4.47 | Ag1l, aragornN, NOPEEJ, pr, rafaxF   |
|           10 |     3317 | 2024-02-18 | Alliance          | L   | 0.239      | -            | -                | -                | -         |    -2.22 | Ag1l, aragornN, NOPEEJ, pr, rafaxF   |
|            9 |     3485 | 2024-02-11 | Young Ninjas      | L   | 0.193      | -            | -                | -                | -         |    -2.57 | Ag1l, aragornN, NOPEEJ, pr, rafaxF   |
|            8 |     3575 | 2024-02-04 | ARCRED            | W   | 0.146      | 0.358        | 0.055 (0.003)    | 0.365 (0.019)    | 0 (0.000) |     3.24 | Ag1l, aragornN, NOPEEJ, pr, rafaxF   |
|            7 |     3592 | 2024-02-03 | Rhyno             | L   | 0.140      | -            | -                | -                | -         |    -0.72 | Ag1l, aragornN, NOPEEJ, pr, rafaxF   |
|            6 |     3658 | 2024-02-01 | AL QATRAO         | W   | 0.126      | 0.143        | 0.006 (0.000)    | 0.037 (0.001)    | 0 (0.000) |     1.94 | Ag1l, aragornN, NOPEEJ, pr, rafaxF   |
|            5 |     3663 | 2024-02-01 | Agency            | W   | 0.126      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.49 | Ag1l, aragornN, NOPEEJ, pr, rafaxF   |
|            4 |     4052 | 2024-01-17 | Insilio           | L   | 0.028      | -            | -                | -                | -         |    -0.22 | Ag1l, aragornN, NOPEEJ, pr, rafaxF   |
|            3 |     4062 | 2024-01-17 | NAVI Junior       | W   | 0.028      | 0.143        | 0.006 (0.000)    | 0.057 (0.000)    | 0 (0.000) |     0.39 | Ag1l, aragornN, NOPEEJ, pr, rafaxF   |
|            2 |     4112 | 2024-01-16 | Aurora Young Blud | L   | 0.021      | -            | -                | -                | -         |    -0.32 | Ag1l, aragornN, NOPEEJ, pr, rafaxF   |
|            1 |     4131 | 2024-01-16 | m1xx              | W   | 0.020      | -            | -                | -                | -         |     0.08 | Ag1l, aragornN, NOPEEJ, pr, rafaxF   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,515.38)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      0.800 | $539.00        | $430.95         |
| 2024-03-03 |      0.334 | $3,251.00      | $1,084.44       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
