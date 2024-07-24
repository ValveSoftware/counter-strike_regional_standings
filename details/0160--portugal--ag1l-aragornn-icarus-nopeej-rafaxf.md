### Roster Details<br />
Team Name: Portugal<br />
Roster: Ag1l, aragornN, Icarus, NOPEEJ, rafaxF<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [160](../standings_global.md)<br />
Regional Rank: [102]( ../standings_europe.md)<br />
Final Rank Value:  684.2<br />
<br />
Final Rank Value (684.2) = Starting Rank Value (709.4) + Head To Head Adjustments (-25.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.297[<sup>1</sup>](#table2)
- Bounty Collected: 0.248[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.057[<sup>2</sup>](#table1)

The average of these factors is 0.153<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 709.4
- 400 + ( ( 0.153 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 709.4


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
|           20 |      414 | 2024-07-14 | Sampi            | L   | 1.000      | -            | -                | -                | -         |    -7.24 | Ag1l, aragornN, Icarus, NOPEEJ, rafaxF |
|           19 |      423 | 2024-07-13 | Kosovo           | L   | 1.000      | -            | -                | -                | -         |    -9.23 | Ag1l, aragornN, Icarus, NOPEEJ, rafaxF |
|           18 |      515 | 2024-07-08 | Norway           | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.116 (0.017)    | 0 (0.000) |    15.98 | Ag1l, aragornN, NOPEEJ, pr, rafaxF     |
|           17 |     1194 | 2024-06-01 | FLuffy Gangsters | L   | 0.848      | -            | -                | -                | -         |   -17.70 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF   |
|           16 |     1260 | 2024-05-30 | RUBY             | L   | 0.834      | -            | -                | -                | -         |    -5.04 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF   |
|           15 |     1295 | 2024-05-29 | TNL              | W   | 0.826      | 0.372        | 0.000 (0.000)    | 0.041 (0.013)    | 0 (0.000) |     6.39 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF   |
|           14 |     1832 | 2024-05-11 | AL QATRAO        | L   | 0.707      | -            | -                | -                | -         |   -11.21 | Ag1l, aragornN, fox, pr, rafaxF        |
|           13 |     2276 | 2024-04-20 | 1WIN             | L   | 0.567      | -            | -                | -                | -         |    -4.09 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF   |
|           12 |     2310 | 2024-04-19 | Secret           | W   | 0.560      | 0.143        | 0.000 (0.000)    | 0.074 (0.006)    | 0 (0.000) |     5.38 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF   |
|           11 |     2353 | 2024-04-18 | Illuminar        | L   | 0.554      | -            | -                | -                | -         |   -12.90 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF   |
|           10 |     2410 | 2024-04-17 | 500              | W   | 0.546      | 0.143        | 0.001 (0.000)    | 0.140 (0.011)    | 0 (0.000) |     9.95 | Ag1l, aragornN, P3R3IIRA, pr, rafaxF   |
|            9 |     3464 | 2024-03-03 | Rhyno            | W   | 0.247      | 0.314        | 0.091 (0.007)    | 0.453 (0.035)    | 1 (0.247) |     6.51 | Ag1l, aragornN, NOPEEJ, pr, rafaxF     |
|            8 |     3498 | 2024-03-02 | OVERFRAG         | W   | 0.239      | 0.314        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.239) |     1.97 | Ag1l, aragornN, NOPEEJ, pr, rafaxF     |
|            7 |     3631 | 2024-02-24 | 500              | L   | 0.193      | -            | -                | -                | -         |    -2.99 | Ag1l, aragornN, NOPEEJ, pr, rafaxF     |
|            6 |     3769 | 2024-02-18 | Alliance         | L   | 0.152      | -            | -                | -                | -         |    -1.42 | Ag1l, aragornN, NOPEEJ, pr, rafaxF     |
|            5 |     3937 | 2024-02-11 | Young Ninjas     | L   | 0.106      | -            | -                | -                | -         |    -1.40 | Ag1l, aragornN, NOPEEJ, pr, rafaxF     |
|            4 |     4027 | 2024-02-04 | ARCRED           | W   | 0.059      | 0.358        | 0.048 (0.001)    | 0.329 (0.007)    | 0 (0.000) |     1.30 | Ag1l, aragornN, NOPEEJ, pr, rafaxF     |
|            3 |     4044 | 2024-02-03 | Rhyno            | L   | 0.053      | -            | -                | -                | -         |    -0.28 | Ag1l, aragornN, NOPEEJ, pr, rafaxF     |
|            2 |     4110 | 2024-02-01 | AL QATRAO        | W   | 0.039      | 0.143        | 0.005 (0.000)    | 0.030 (0.000)    | 0 (0.000) |     0.61 | Ag1l, aragornN, NOPEEJ, pr, rafaxF     |
|            1 |     4115 | 2024-02-01 | Agency           | W   | 0.039      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.18 | Ag1l, aragornN, NOPEEJ, pr, rafaxF     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,186.28)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      0.713 | $539.00        | $384.14         |
| 2024-03-03 |      0.247 | $3,251.00      | $802.14         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
