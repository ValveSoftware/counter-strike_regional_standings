### Roster Details<br />
Team Name: BetBoom<br />
Roster: KaiR0N-, Magnojez, nafany, s1ren, zorte<br />
Global Rank: [24](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_09.md)<br />
Regional Rank: [17]( ../../standings_europe_2024_10_09.md)<br />
<br />
Final Rank Value:  1243.0<br />
<br />
Final Rank Value (1243.0) = Starting Rank Value (1188.3) + Head To Head Adjustments (54.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.594[<sup>1</sup>](#table2)
- Bounty Collected: 0.501[<sup>2</sup>](#table1)
- Opponent Network: 0.252[<sup>2</sup>](#table1)
- LAN Wins: 0.284[<sup>2</sup>](#table1)

The average of these factors is 0.408<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1188.3
- 400 + ( ( 0.408 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1188.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           55 |      107 | 2024-10-05 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -7.89 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           54 |      119 | 2024-10-05 | Rooster           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.10 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           53 |      159 | 2024-10-04 | FlyQuest          | L   | 1.000      | -            | -                | -                | -         |   -15.51 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           52 |      361 | 2024-09-28 | GamerLegion       | W   | 1.000      | 0.435        | 0.264 (0.115)    | 0.621 (0.270)    | 0 (0.000) |    10.05 | KaiR0N-, Magnojez, s1ren, SELLTER, zorte |
|           51 |      371 | 2024-09-28 | 3DMAX             | W   | 1.000      | 0.435        | 0.454 (0.197)    | 0.768 (0.334)    | 0 (0.000) |    22.42 | KaiR0N-, Magnojez, s1ren, SELLTER, zorte |
|           50 |      401 | 2024-09-27 | Sangal            | W   | 1.000      | 0.435        | 0.218 (0.095)    | 0.577 (0.251)    | -         |    20.67 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           49 |      455 | 2024-09-26 | Monte Gen         | W   | 1.000      | 0.435        | -                | 0.512 (0.223)    | -         |     7.66 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           48 |     1081 | 2024-09-06 | Cloud9            | L   | 0.980      | -            | -                | -                | -         |   -20.26 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           47 |     1092 | 2024-09-06 | CYBERSHOKE        | L   | 0.979      | -            | -                | -                | -         |   -23.87 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           46 |     1123 | 2024-09-05 | Gaimin Gladiators | W   | 0.973      | 0.384        | -                | 0.500 (0.187)    | -         |     5.53 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           45 |     1214 | 2024-09-02 | Monte             | W   | 0.953      | 0.384        | -                | 0.834 (0.306)    | -         |     7.31 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           44 |     1486 | 2024-08-26 | LEON              | W   | 0.907      | -            | -                | -                | -         |     0.92 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           43 |     1548 | 2024-08-25 | Falcons           | L   | 0.898      | -            | -                | -                | -         |    -6.93 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           42 |     1562 | 2024-08-24 | paiN              | L   | 0.893      | -            | -                | -                | -         |    -4.74 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           41 |     1776 | 2024-08-18 | SINNERS           | W   | 0.854      | 0.435        | 0.156 (0.058)    | 1.000 (0.371)    | -         |     8.83 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           40 |     1780 | 2024-08-18 | Endpoint          | W   | 0.853      | 0.435        | -                | 0.578 (0.214)    | -         |     5.18 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           39 |     1794 | 2024-08-17 | Young Ninjas      | W   | 0.848      | -            | -                | -                | -         |     3.11 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           38 |     1825 | 2024-08-16 | DMS               | W   | 0.840      | 0.435        | -                | 0.541 (0.197)    | -         |     2.80 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           37 |     3557 | 2024-06-07 | Astralis          | L   | 0.373      | -            | -                | -                | -         |    -2.94 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           36 |     3624 | 2024-06-06 | Eternal Fire      | W   | 0.367      | 0.715        | 1.000 (0.262)    | 0.625 (0.164)    | 1 (0.367) |    11.26 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           35 |     3636 | 2024-06-06 | Complexity        | W   | 0.366      | 0.715        | 0.324 (0.085)    | -                | 1 (0.366) |    10.56 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           34 |     3672 | 2024-06-05 | BIG               | W   | 0.361      | 0.715        | 0.213 (0.055)    | -                | 1 (0.361) |     9.45 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           33 |     3682 | 2024-06-05 | FURIA             | L   | 0.360      | -            | -                | -                | -         |    -0.96 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           32 |     3694 | 2024-06-05 | fnatic            | W   | 0.359      | 0.715        | 0.236 (0.061)    | -                | 1 (0.359) |     5.87 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           31 |     3970 | 2024-05-25 | B8                | L   | 0.287      | -            | -                | -                | -         |    -5.89 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           30 |     3996 | 2024-05-24 | DMS               | W   | 0.278      | -            | -                | -                | -         |     1.11 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           29 |     4085 | 2024-05-21 | Eternal Fire      | L   | 0.260      | -            | -                | -                | -         |    -0.16 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           28 |     4111 | 2024-05-20 | MIBR              | W   | 0.255      | 0.769        | 0.222 (0.043)    | -                | -         |     6.17 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           27 |     4120 | 2024-05-20 | Astralis          | L   | 0.254      | -            | -                | -                | -         |    -1.73 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           26 |     4133 | 2024-05-20 | MIBR              | W   | 0.252      | 0.769        | 0.222 (0.043)    | -                | -         |     6.14 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           25 |     4290 | 2024-05-15 | Falcons           | L   | 0.221      | -            | -                | -                | -         |    -1.56 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           24 |     4361 | 2024-05-14 | MOUZ              | L   | 0.213      | -            | -                | -                | -         |    -0.16 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           23 |     4400 | 2024-05-12 | B8                | L   | 0.201      | -            | -                | -                | -         |    -4.28 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           22 |     4407 | 2024-05-12 | 9 Pandas          | W   | 0.200      | -            | -                | -                | -         |     1.62 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           21 |     4439 | 2024-05-11 | Metizport         | W   | 0.193      | -            | -                | -                | -         |     0.94 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           20 |     4457 | 2024-05-10 | Enterprise        | W   | 0.186      | -            | -                | -                | -         |     0.35 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           19 |     4517 | 2024-05-07 | FlyQuest          | L   | 0.167      | -            | -                | -                | -         |    -2.04 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           18 |     4569 | 2024-05-04 | AMKAL             | L   | 0.147      | -            | -                | -                | -         |    -3.27 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           17 |     4574 | 2024-05-04 | 9 Pandas          | W   | 0.146      | -            | -                | -                | -         |     1.16 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           16 |     4597 | 2024-05-03 | Insilio           | W   | 0.138      | -            | -                | -                | -         |     0.87 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           15 |     4637 | 2024-05-01 | EYEBALLERS        | W   | 0.127      | -            | -                | -                | -         |     0.29 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           14 |     4667 | 2024-04-30 | 3DMAX             | L   | 0.119      | -            | -                | -                | -         |    -0.41 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           13 |     4740 | 2024-04-26 | M80               | W   | 0.095      | -            | -                | -                | 1 (0.095) |     2.10 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           12 |     4754 | 2024-04-26 | Falcons           | W   | 0.093      | -            | -                | -                | 1 (0.093) |     2.27 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           11 |     4778 | 2024-04-25 | Vitality          | L   | 0.087      | -            | -                | -                | -         |    -0.05 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           10 |     4809 | 2024-04-23 | M80               | W   | 0.074      | -            | -                | -                | 1 (0.074) |     1.65 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            9 |     4913 | 2024-04-19 | Cloud9            | L   | 0.048      | -            | -                | -                | -         |    -1.47 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            8 |     4928 | 2024-04-19 | Eternal Fire      | L   | 0.047      | -            | -                | -                | -         |    -0.03 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            7 |     4955 | 2024-04-18 | Apeks             | W   | 0.041      | -            | -                | -                | -         |     0.07 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            6 |     4960 | 2024-04-18 | Apogee            | W   | 0.040      | -            | -                | -                | -         |     0.16 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            5 |     4965 | 2024-04-18 | Partizan          | W   | 0.040      | -            | -                | -                | -         |     0.17 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            4 |     5082 | 2024-04-14 | 3DMAX             | W   | 0.013      | -            | -                | -                | -         |     0.37 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            3 |     5089 | 2024-04-13 | OG                | L   | 0.008      | -            | -                | -                | -         |    -0.21 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            2 |     5094 | 2024-04-13 | Aurora            | L   | 0.007      | -            | -                | -                | -         |    -0.10 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            1 |     5101 | 2024-04-13 | Sampi             | W   | 0.006      | -            | -                | -                | -         |     0.05 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($63,249.23)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-06 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-09-28 |      1.000 | $22,000.00     | $22,000.00      |
| 2024-08-18 |      0.854 | $22,000.00     | $18,785.20      |
| 2024-06-09 |      0.387 | $20,000.00     | $7,741.74       |
| 2024-05-26 |      0.294 | $2,000.00      | $587.47         |
| 2024-05-23 |      0.274 | $12,500.00     | $3,423.41       |
| 2024-05-12 |      0.201 | $10,000.00     | $2,008.00       |
| 2024-05-12 |      0.200 | $17,500.00     | $3,506.31       |
| 2024-05-04 |      0.147 | $10,000.00     | $1,470.69       |
| 2024-04-14 |      0.014 | $52,500.00     | $726.40         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
