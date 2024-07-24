### Roster Details<br />
Team Name: Natus Vincere<br />
Roster: Aleksib, b1t, iM, jL, w0nderful<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [1](../standings_global.md)<br />
Regional Rank: [1]( ../standings_europe.md)<br />
Final Rank Value:  1980.4<br />
<br />
Final Rank Value (1980.4) = Starting Rank Value (2000.0) + Head To Head Adjustments (-19.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.805[<sup>2</sup>](#table1)
- Opponent Network: 0.356[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.790<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 2000.0
- 400 + ( ( 0.790 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 2000.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |       87 | 2024-07-21 | G2           | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.515 (0.515)    | 1 (1.000) |    15.04 | Aleksib, b1t, iM, jL, w0nderful |
|           31 |      119 | 2024-07-20 | MOUZ         | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.435 (0.435)    | 1 (1.000) |    14.75 | Aleksib, b1t, iM, jL, w0nderful |
|           30 |      149 | 2024-07-19 | FaZe         | W   | 1.000      | 1.000        | 0.854 (0.854)    | 0.433 (0.433)    | 1 (1.000) |     9.19 | Aleksib, b1t, iM, jL, w0nderful |
|           29 |      287 | 2024-07-17 | FURIA        | W   | 1.000      | 1.000        | 0.355 (0.355)    | 0.563 (0.563)    | 1 (1.000) |     4.59 | Aleksib, b1t, iM, jL, w0nderful |
|           28 |      606 | 2024-06-16 | Spirit       | L   | 0.946      | -            | -                | -                | -         |   -14.82 | Aleksib, b1t, iM, jL, w0nderful |
|           27 |      630 | 2024-06-15 | Virtus.pro   | W   | 0.941      | 0.729        | 0.595 (0.408)    | 0.374 (0.256)    | 1 (0.941) |     6.77 | Aleksib, b1t, iM, jL, w0nderful |
|           26 |      720 | 2024-06-13 | FaZe         | W   | 0.926      | 0.729        | 0.854 (0.577)    | 0.433 (0.292)    | 1 (0.926) |     9.39 | Aleksib, b1t, iM, jL, w0nderful |
|           25 |      749 | 2024-06-12 | Astralis     | W   | 0.919      | 0.729        | -                | 0.398 (0.267)    | 1 (0.919) |     6.67 | Aleksib, b1t, iM, jL, w0nderful |
|           24 |     1291 | 2024-05-29 | HEROIC       | L   | 0.827      | -            | -                | -                | -         |   -22.59 | Aleksib, b1t, iM, jL, w0nderful |
|           23 |     1312 | 2024-05-28 | Spirit       | L   | 0.820      | -            | -                | -                | -         |   -14.48 | Aleksib, b1t, iM, jL, w0nderful |
|           22 |     1330 | 2024-05-27 | BIG          | W   | 0.814      | -            | -                | -                | 1 (0.814) |     0.55 | Aleksib, b1t, iM, jL, w0nderful |
|           21 |     1896 | 2024-05-08 | FaZe         | L   | 0.687      | -            | -                | -                | -         |   -15.33 | Aleksib, b1t, iM, jL, w0nderful |
|           20 |     1946 | 2024-05-05 | Complexity   | L   | 0.667      | -            | -                | -                | -         |   -17.73 | Aleksib, b1t, iM, jL, w0nderful |
|           19 |     2018 | 2024-05-02 | BIG          | W   | 0.645      | -            | -                | -                | 1 (0.645) |     0.34 | Aleksib, b1t, iM, jL, w0nderful |
|           18 |     2045 | 2024-05-01 | FlyQuest     | W   | 0.638      | -            | -                | -                | 1 (0.638) |     0.31 | Aleksib, b1t, iM, jL, w0nderful |
|           17 |     2873 | 2024-03-31 | FaZe         | W   | 0.434      | 1.000        | 0.854 (0.371)    | -                | -         |     3.38 | Aleksib, b1t, iM, jL, w0nderful |
|           16 |     2878 | 2024-03-30 | G2           | W   | 0.428      | 1.000        | 1.000 (0.428)    | 0.515 (0.220)    | -         |     6.62 | Aleksib, b1t, iM, jL, w0nderful |
|           15 |     2888 | 2024-03-29 | Eternal Fire | W   | 0.420      | -            | -                | -                | -         |     2.06 | Aleksib, b1t, iM, jL, w0nderful |
|           14 |     2981 | 2024-03-24 | paiN         | W   | 0.387      | 1.000        | -                | 0.825 (0.319)    | -         |     0.73 | Aleksib, b1t, iM, jL, w0nderful |
|           13 |     2989 | 2024-03-23 | Cloud9       | L   | 0.381      | -            | -                | -                | -         |   -11.89 | Aleksib, b1t, iM, jL, w0nderful |
|           12 |     3005 | 2024-03-22 | Spirit       | L   | 0.374      | -            | -                | -                | -         |    -7.28 | Aleksib, b1t, iM, jL, w0nderful |
|           11 |     3023 | 2024-03-21 | G2           | W   | 0.367      | 1.000        | 1.000 (0.367)    | -                | -         |     5.66 | Aleksib, b1t, iM, jL, w0nderful |
|           10 |     3040 | 2024-03-21 | The MongolZ  | W   | 0.365      | 1.000        | 1.000 (0.365)    | 0.725 (0.265)    | -         |     4.19 | Aleksib, b1t, iM, jL, w0nderful |
|            9 |     3812 | 2024-02-16 | BetBoom      | W   | 0.140      | -            | -                | -                | -         |     0.27 | Aleksib, b1t, iM, jL, w0nderful |
|            8 |     3847 | 2024-02-15 | Virtus.pro   | L   | 0.133      | -            | -                | -                | -         |    -3.18 | Aleksib, b1t, iM, jL, w0nderful |
|            7 |     3877 | 2024-02-14 | Enterprise   | W   | 0.127      | -            | -                | -                | -         |     0.01 | Aleksib, b1t, iM, jL, w0nderful |
|            6 |     3894 | 2024-02-14 | KOI          | W   | 0.125      | -            | -                | -                | -         |     0.03 | Aleksib, b1t, iM, jL, w0nderful |
|            5 |     3991 | 2024-02-06 | Falcons      | L   | 0.073      | -            | -                | -                | -         |    -2.20 | Aleksib, b1t, iM, jL, w0nderful |
|            4 |     3999 | 2024-02-05 | Eternal Fire | W   | 0.068      | -            | -                | -                | -         |     0.27 | Aleksib, b1t, iM, jL, w0nderful |
|            3 |     4016 | 2024-02-04 | Apeks        | W   | 0.060      | -            | -                | -                | -         |     0.01 | Aleksib, b1t, iM, jL, w0nderful |
|            2 |     4042 | 2024-02-03 | Spirit       | L   | 0.053      | -            | -                | -                | -         |    -1.05 | Aleksib, b1t, iM, jL, w0nderful |
|            1 |     4185 | 2024-01-27 | G2           | W   | 0.006      | -            | -                | -                | -         |     0.09 | Aleksib, b1t, iM, jL, w0nderful |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($721,237.07)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $400,000.00    | $400,000.00     |
| 2024-06-16 |      0.946 | $85,000.00     | $80,444.33      |
| 2024-06-02 |      0.854 | $5,000.00      | $4,270.84       |
| 2024-05-12 |      0.713 | $23,500.00     | $16,755.97      |
| 2024-03-31 |      0.434 | $500,000.00    | $216,901.54     |
| 2024-02-11 |      0.107 | $24,000.00     | $2,561.05       |
| 2024-01-28 |      0.013 | $22,500.00     | $303.34         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
